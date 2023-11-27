sap.ui.define([
		'sap/ui/core/mvc/Controller',
		"sap/ui/model/json/JSONModel",
		"sap/ui/core/routing/History",
		"sap/m/sample/sampleapp4/utils/formatter",
		"sap/ui/model/Filter",
		"sap/ui/model/FilterOperator",
		"sap/ui/core/Fragment"
	], function (Controller, JSONModel, History, formatter, Filter, FilterOperator,Fragment) {
		"use strict";
		let oModel;
		return Controller.extend("sap.m.sample.sampleapp4.controller.View8", {

			formatter: formatter,

			/* =========================================================== */
			/* lifecycle methods                                           */
			/* =========================================================== */

			/**
			 * Called when the worklist controller is instantiated.
			 * @public
			 */
			onInit : function () {
				var oViewModel,
					oTable = this.byId("table");
				this._aTableSearchState = [];
				oModel = this.getOwnerComponent().getModel("mymodel");
				this.getView().setModel(oModel);
			},
			showQuickView:function(e){			
				var path = e.getSource().getBindingContext().getPath();
				var obj = oModel.getProperty(path + "/Employee");
				this.openQuickView(e, obj);		  
			},

			openQuickView: function (oEvent, oModel) {

			var oButton = oEvent.getSource(),
			oView = this.getView();

			if (!this._pQuickView) {
				this._pQuickView = Fragment.load({
					id: oView.getId(),
					name: "sap.m.sample.sampleapp4.view.QuickView",
					controller: this
				}).then(function (oQuickView) {
					oView.addDependent(oQuickView);
					return oQuickView;
				});
			}
			this._pQuickView.then(function (oQuickView){
				oQuickView.setModel(new JSONModel(oModel));
				oQuickView.openBy(oButton);
			});



			},
			/**
			 * Event handler when a table item gets pressed
			 * @param {sap.ui.base.Event} oEvent the table selectionChange event
			 * @public
			 */
			onPress : function (oEvent) {
				// The source is the list item that got pressed
				this._showObject(oEvent.getSource());
			},
			/**
			 * Event handler when the share in JAM button has been clicked
			 * @public
			 */
			onShareInJamPress : function () {
				var oViewModel = this.getModel("worklistView"),
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
			onSearch : function (oEvent) {
				if (oEvent.getParameters().refreshButtonPressed) {
					// Search field's 'refresh' button has been pressed.
					// This is visible if you select any master list item.
					// In this case no new search is triggered, we only
					// refresh the list binding.
					this.onRefresh();
				} else {
					var aTableSearchState = [];
					var sQuery = oEvent.getParameter("query");

					if (sQuery && sQuery.length > 0) {
						aTableSearchState = new Filter([
							new Filter("Employee/FirstName", FilterOperator.Contains, sQuery),
							new Filter("Customer/ContactName", FilterOperator.Contains, sQuery)
					],false);

					}
					this._applySearch(aTableSearchState);
				}

			},
			/**
			 * Event handler for refresh event. Keeps filter, sort
			 * and group settings and refreshes the list binding.
			 * @public
			 */
			onRefresh : function () {
				var oTable = this.byId("table");
				oTable.getBinding("items").refresh();
			},

			/* =========================================================== */
			/* internal methods                                            */
			/* =========================================================== */

			/**
			 * Shows the selected item on the object page
			 * On phones a additional history entry is created
			 * @param {sap.m.ObjectListItem} oItem selected Item
			 * @private
			 */
			_showObject : function (oItem) {
				this.getOwnerComponent().getRouter().navTo("object",{
					objectId : oItem.getBindingContext().getProperty("OrderID")
				});
				
			},

			/**
			 * Internal helper method to apply both filter and search state together on the list binding
			 * @param {sap.ui.model.Filter[]} aTableSearchState An array of filters for the search
			 * @private
			 */
			_applySearch: function(aTableSearchState) {
				var oTable = this.byId("table"),
					oViewModel = this.getModel("worklistView");
				oTable.getBinding("items").filter(aTableSearchState, "Application");
				// changes the noDataText of the list in case there are no filter results
				if (aTableSearchState.length !== 0) {
					oViewModel.setProperty("/tableNoDataText", this.getResourceBundle().getText("worklistNoDataWithSearchText"));
				}
			}

		});
	}
);