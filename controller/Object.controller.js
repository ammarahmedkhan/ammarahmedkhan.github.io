/*global location*/
sap.ui.define([
		'sap/ui/core/mvc/Controller',
		"sap/ui/model/json/JSONModel",
		"sap/ui/core/routing/History",
		"sap/m/sample/sampleapp4/utils/formatter"
	], function (
		Controller,
		JSONModel,
		History,
		formatter
	) {
		"use strict";
		let oModel;
		return Controller.extend("sap.m.sample.sampleapp4.controller.Object", {

			formatter: formatter,
			
			/* =========================================================== */
			/* lifecycle methods                                           */
			/* =========================================================== */

			/**
			 * Called when the worklist controller is instantiated.
			 * @public
			 */
			onInit : function () {
				// Model used to manipulate control states. The chosen values make sure,
				// detail page is busy indication immediately so there is no break in
				// between the busy indication for loading the view's meta data
				var iOriginalBusyDelay,
					oViewModel = new JSONModel({
						busy : false,
						delay : 0
					});
				oModel = this.getOwnerComponent().getModel("mymodel");
				this.getOwnerComponent().getRouter().getRoute("object").attachPatternMatched(this._onObjectMatched, this);

				// Store original busy indicator delay, so it can be restored later on
				iOriginalBusyDelay = this.getView().getBusyIndicatorDelay();
				this.getView().setModel(oViewModel, "objectView");
				
			},

			/* =========================================================== */
			/* event handlers                                              */
			/* =========================================================== */

			/**
			 * Event handler when the share in JAM button has been clicked
			 * @public
			 */
			onShareInJamPress : function () {
				var oViewModel = this.getView().getModel("objectView"),
					oShareDialog = sap.ui.getCore().createComponent({
						name: "sap.collaboration.components.fiori.sharing.dialog",
						settings: {
							object:{
								id: location.href,
								share: oViewModel.getProperty("/shareOnJamTitle")
							}
						}
					});
				oShareDialog.open();
			},


			/* =========================================================== */
			/* internal methods                                            */
			/* =========================================================== */

			/**
			 * Binds the view to the object path.
			 * @function
			 * @param {sap.ui.base.Event} oEvent pattern match event in route 'object'
			 * @private
			 */
			_onObjectMatched : function (oEvent) {
				debugger;
				var sObjectId =  oEvent.getParameter("arguments").objectId;
				const obj = oModel.getProperty("/Orders("+sObjectId+")");
				this.getView().setModel(new JSONModel(obj));
			},

			/**
			 * Binds the view to the object path.
			 * @function
			 * @param {string} sObjectPath path to the object to be bound
			 * @private
			 */
			_bindView : function (sObjectPath) {
				//var oViewModel = this.getModel("objectView"),
					var oDataModel = oModel;

				this.getView().bindElement({
					path: sObjectPath,
					events: {
						change: this._onBindingChange.bind(this),
						dataRequested: function () {
							oDataModel.metadataLoaded().then(function () {
								// Busy indicator on view should only be set if metadata is loaded,
								// otherwise there may be two busy indications next to each other on the
								// screen. This happens because route matched handler already calls '_bindView'
								// while metadata is loaded.
								//oViewModel.setProperty("/busy", true);
							});
						},
						dataReceived: function () {
							//oViewModel.setProperty("/busy", false);
							
						}
					}
				});
			},

			computeTotal:function(){
				const orderItems = this.getView().byId("orderDetailsTable").getItems();
				let totalOrderValue=0
				orderItems.forEach( (obj)=> {	
					totalOrderValue = totalOrderValue +  
(					( obj.getCells()[1].mProperties['title'] - obj.getCells()[3].mProperties['number'] )  *  obj.getCells()[2].mProperties['title'] )				   

} );
//the AUD is added because there isn't any currency field in the data				
this.getView().byId("totalValue").setText(totalOrderValue + ' AUD');
				
			},

			_onBindingChange : function () {
				var oView = this.getView(),
					//oViewModel = this.getModel("objectView"),
					oElementBinding = oView.getElementBinding();

				// No data for the binding
				if (!oElementBinding.getBoundContext()) {
					this.getRouter().getTargets().display("objectNotFound");
					return;
				}

				var oResourceBundle = this.getResourceBundle(),
					oObject = oView.getBindingContext().getObject(),
					sObjectId = oObject.OrderID,
					sObjectName = oObject.CustomerID;

				// Everything went fine.
				//oViewModel.setProperty("/busy", false);
				//oViewModel.setProperty("/saveAsTileTitle", oResourceBundle.getText("saveAsTileTitle", [sObjectName]));
				//oViewModel.setProperty("/shareOnJamTitle", sObjectName);
				//oViewModel.setProperty("/shareSendEmailSubject",
				//oResourceBundle.getText("shareSendEmailObjectSubject", [sObjectId]));
				//oViewModel.setProperty("/shareSendEmailMessage",
				//oResourceBundle.getText("shareSendEmailObjectMessage", [sObjectName, sObjectId, location.href]));
			
				this.computeTotal();
			}

		});

	}
);