sap.ui.define([
		'sap/m/MessageBox',
		'sap/ui/core/mvc/Controller'
	], function(MessageBox, Controller) {
	"use strict";

	var sampleappController = Controller.extend("sap.m.sample.sampleapp.App", {

		handleLinkPress: function (evt) {
			MessageBox.alert("Link was clicked!");
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
			
		}
		

	});

	return sampleappController ;

});
