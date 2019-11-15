sap.ui.define([
		'sap/m/MessageBox',
		'sap/ui/core/mvc/Controller'
	], function(MessageBox, Controller) {
	"use strict";
	var jsonData;
	var sampleappController = Controller.extend("sap.m.sample.sampleapp.View1", {

		handleLinkPress: function (evt) {
			MessageBox.alert("Link was clicked!");
		},
		
		onInit: function (){
			//MessageBox.alert("This done got initialized ma ni*&^r!");
			var oModel, oView;
			     jsonData = [ {
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
		},
		press : function(oEvent){
			//MessageToast.show("te");
			var oItem = oEvent.getSource();
			console.log(oItem.properties);
			var oCtx = oItem.getBindingContext();
			var path = oCtx.getPath();
			console.log(jsonData[path.substr(1)]);
			MessageBox.information("Information", {
				title: "you clicked on",
				id: "messageBoxId1",
				details: jsonData[path.substr(1)]["b"],
				contentWidth: "100px"
			});
			//this.getView().byId("textarea").bindElement(path);
		}
		

	});

	return sampleappController ;

});
