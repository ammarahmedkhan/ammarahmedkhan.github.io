sap.ui.define([
	'jquery.sap.global',
	'sap/ui/core/mvc/Controller',
	'sap/ui/model/json/JSONModel',
	'sap/m/MessageToast',
	'sap/ui/core/BusyIndicator'
], function (jQuery, Controller, JSONModel,BusyIndicator) {
	'use strict';

	var CController = Controller.extend('sap.m.sample.sampleapp4.controller.View2', {
		
		onInit : function() {
			var oModel = new JSONModel("https://reqres.in/api/users");
			this.getView().setModel(oModel);
		},
				onBack:function(){

			sap.ui.getCore().byId("myApp").back();

		}
	});

	return CController;

});
