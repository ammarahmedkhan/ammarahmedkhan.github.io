sap.ui.define([
	'jquery.sap.global',
	'sap/ui/core/mvc/Controller',
	'sap/m/MessageToast',
	'sap/ui/core/BusyIndicator'
], function (jQuery, Controller, MessageToast,BusyIndicator) {
	'use strict';

	var CController = Controller.extend('sap.m.sample.sampleapp4.controller.View4', {
		
		
		
		onInit : function() {
			console.log("master-detail:" + Date.now());
			// create a Model with this data and attach it to the view
			var model = new sap.ui.model.json.JSONModel("https://services.odata.org/v4/northwind/northwind.svc/Employees");
            this.getView().setModel(model);
			
		},
		press : function(oEvent){
			//MessageToast.show("te");
			var oItem = oEvent.getSource();
			console.log(oItem.properties);
			var oCtx = oItem.getBindingContext();
			var path = oCtx.getPath();
			//this.getView().byId("textarea").bindElement(path);
			this.getView().bindElement(path);
		},
			onAfterRendering: function() {
			var oSplitCont = this.getSplitContObj(),
				ref = oSplitCont.getDomRef() && oSplitCont.getDomRef().parentNode;
			// set all parent elements to 100% height, this should be done by app developer, but just in case
			if (ref && !ref._sapUI5HeightFixed) {
				ref._sapUI5HeightFixed = true;
				while (ref && ref !== document.documentElement) {
					var $ref = jQuery(ref);
					if ($ref.attr("data-sap-ui-root-content")) { // Shell as parent does this already
						break;
					}
					if (!ref.style.height) {
						ref.style.height = "100%";
					}
					ref = ref.parentNode;
				}
			}
		},
		onPressNavToDetail : function() {
			this.getSplitContObj().to(this.createId("detailDetail"));
		},
		
		onPressDetailBack : function() {
			this.getSplitContObj().backDetail();
		},

		onPressMasterBack : function() {
			this.getSplitContObj().backMaster();
		},

		onPressGoToMaster : function() {
			this.getSplitContObj().toMaster(this.createId("list"));
		},

		onListItemPress : function(oEvent) {
			
			//var sToPageId = oEvent.getParameter("listItem").getCustomData()[0].getValue();
			var sToPageId="detail"
			var oItem = oEvent.getSource();
			//console.log(oItem.properties);
			var oCtx = oItem.getBindingContext();
			var path = oCtx.getPath();
			//this.getView().byId("textarea").bindElement(path);
			this.getView().bindElement(path);
			
			
			this.getSplitContObj().toDetail(this.createId(sToPageId));

			//MessageToast.show("path");
		},
		
		onBack:function(){

			sap.ui.getCore().byId("myApp").back();

		},
		
		navButtonPress : function(){
			//MessageToast.show("back button");
			//console.log("dddd");
			this.getSplitContObj().toMaster(this.createId("master"));
			
		},
		onPressModeBtn : function(oEvent) {
			var sSplitAppMode = oEvent.getSource().getSelectedButton().getCustomData()[0].getValue();

			this.getSplitContObj().setMode(sSplitAppMode);
			//MessageToast.show("Split Container mode is changed to: " + sSplitAppMode, {duration: 5000});
		},

		getSplitContObj : function() {
			var result = this.byId("id1");
			if (!result) {
				//console.log("SplitApp object can't be found");
			}
			return result;
		}
		
		
		//https://answers.sap.com/questions/10340181/how-do-you-bind-a-json-array-list-to-sapmlist-cont.html
	});

	return CController;

});
