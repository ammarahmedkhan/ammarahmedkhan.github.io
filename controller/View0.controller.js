sap.ui.define([
		'sap/m/MessageBox',
		'sap/m/MessageToast',
		'sap/ui/core/mvc/Controller',
		'sap/ui/core/BusyIndicator',
		'sap/ui/model/json/JSONModel'
	], function(MessageBox,MessageToast, Controller,BusyIndicator,JSONModel) {
	"use strict";
		
		sap.ui.core.BusyIndicator.hide();
		let visibilitySwitch = new JSONModel({ 
		"todo":false,
		"qr":false,
		"expensemgmt":false,
		"masterdetail":false,
		"pdf":false,
		"cardlayout":false,
		"table":false
		});
		
	var sampleappController = Controller.extend("sap.m.sample.sampleapp4.controller.View0", {

		openTarget: function(controllerObj,route){
		//MessageToast.show(route);
		var app = sap.ui.getCore().byId("myApp");
		visibilitySwitch.oData[route]=false;
		visibilitySwitch.refresh();
		controllerObj.getOwnerComponent().getRouter().navTo(route);
		},

		press : function(evt) {
			
			let route = evt.mParameters.id.split("-").slice(-1).toString();
			if (route == 'pdf'){
			MessageToast.show("PDF may not appear on mobile phones");
			}
		visibilitySwitch.oData[route]=true;
		visibilitySwitch.refresh();
		
		
		setTimeout(this.openTarget, 50,this,route);
		},
		
		handleListPress : function(){
		
		},
		
	_getDialog: function () {
	// create dialog lazily
	if (!this._oDialog) {
		// create dialog via fragment factory
		this._oDialog = sap.ui.xmlfragment("sap.m.sample.sampleapp4.view.Dialog", this);
		// connect dialog to view (models, lifecycle)
		this.getView().addDependent(this._oDialog);
	}
	return this._oDialog;
},

onOpenDialog: function () {
	this._getDialog().open();
},

onCloseDialog: function () {
	this._getDialog().close();
},


submitFeedback: function () {
	
	var rating = sap.ui.getCore().byId("rating").getValue();
	var text_rating = sap.ui.getCore().byId("text").getValue();
	this.rateit(rating,text_rating);
	this._getDialog().close();
},


rateit: function(rating,text_rating){
	//results to be written to a datastore 
},
		onInit: function (){
			this.getView().setModel(visibilitySwitch);
		}
	});
	return sampleappController ;

});
