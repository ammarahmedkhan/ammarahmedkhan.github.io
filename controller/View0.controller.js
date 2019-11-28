sap.ui.define([
		'sap/m/MessageBox',
		'sap/m/MessageToast',
		'sap/ui/core/mvc/Controller'
	], function(MessageBox,MessageToast, Controller) {
	"use strict";

	var sampleappController = Controller.extend("sap.m.sample.sampleapp4.controller.View0", {

		press : function(evt) {
			//console.log(evt.mParameters.id.split("--")[1]);
			var route = evt.mParameters.id.split("--")[1];
			/* var oItem = evt.getSource();
			var oCtx = oItem.getBindingContext();
			var path = oCtx.getPath(); */
			MessageToast.show(route);
			sap.ui.getCore().byId("myApp").to(route);
		},
		
		onInit: function (){
			//MessageBox.alert("This done got initialized ma ni*&^r!");
			var oModel, oView;
			     var jsonData = [ {
							 a: 1,
						b:"ammar"
						 }, {
							 a: 2,
						b:"ali"
						 }, {
							 a: 3,
						b:"omer"
						 }, {
							 a: 4,
						b:"saad"
						 }, {
							 a:  5,
						b:"waqar"
						 }, {
							 a: 6,
						b:"babar"
				 }];
			var jsonModel = new sap.ui.model.json.JSONModel(jsonData);
			oView = this.getView();
			oView.setModel(jsonModel);
			var oView = this.getView();
		}
		

	});
//https://sapui5.hana.ondemand.com/1.34.9/docs/guide/df8c9c3d79b54c928855162bafcd88ee.html
	return sampleappController ;

});


//https://api.myjson.com/bins/16u9mq