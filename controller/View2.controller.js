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
			console.log("table:" + Date.now());
			
			//MessageToast.show("eee");
			// set explored app's demo model on this sample
			//var oModel = new JSONModel("http://dummy.restapiexample.com/api/v1/employees");
			var oModel = new JSONModel("https://reqres.in/api/users");
			//var oModel=new JSONModel();
			var data= {"d" : [{"id":"1","employee_name":"Umair3","employee_salary":"0","employee_age":"0","profile_image":""},
			{"id":"96665","employee_name":"Kamila","employee_salary":"500","employee_age":"23","profile_image":""},
			{"id":"96676","employee_name":"ggg","employee_salary":"12","employee_age":"12","profile_image":""}]};
			//var oModel = new JSONModel();
			//oModel.setData(data);
			//console.log(oModel);
			this.getView().setModel(oModel);
		},
				onBack:function(){

			sap.ui.getCore().byId("myApp").back();

		}
		
		
		//MessageToast.show("it done got pressed!!!!");
		//https://answers.sap.com/questions/10340181/how-do-you-bind-a-json-array-list-to-sapmlist-cont.html
	});

	return CController;

});
