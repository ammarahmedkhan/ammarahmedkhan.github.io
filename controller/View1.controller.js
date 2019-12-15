sap.ui.define([
		'sap/m/MessageBox',
		'sap/m/Button',
		'sap/m/Dialog',
		'sap/m/Label',
		'sap/m/MessageToast',
		'sap/m/Text',
		'sap/m/TextArea',
		'sap/ui/layout/HorizontalLayout',
		'sap/ui/layout/VerticalLayout',
		'sap/m/ButtonType',
		'sap/ui/core/mvc/Controller',
		'sap/ui/core/BusyIndicator'
		
	], function(MessageBox, Button, Dialog, Label, MessageToast, Text, TextArea, HorizontalLayout, VerticalLayout, ButtonType, Controller,BusyIndicator) {
	"use strict";
	var jsonData;
	var sampleappController = Controller.extend("sap.m.sample.sampleapp4.controller.View1", {

		handleLinkPress: function (evt) {
			//MessageBox.alert("Link was clicked!");
		},
		
		onInit: function (){
			//MessageBox.alert("This done got initialized ma ni*&^r!");
			console.log("list:" + Date.now());
			
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
				onBack:function(){

			sap.ui.getCore().byId("myApp").back();

		},
		
		press : function(oEvent){
			//MessageToast.show("te");
			var oItem = oEvent.getSource();
			//console.log(oItem.properties);
			var oCtx = oItem.getBindingContext();
			var path = oCtx.getPath();
			//console.log(jsonData[path.substr(1)]);
			MessageBox.information("Information", {
				title: "you clicked on",
				id: "messageBoxId1",
				details: jsonData[path.substr(1)]["b"],
				contentWidth: "100px"
			});
			//this.getView().byId("textarea").bindElement(path);
		},
		
		onSubmitDialog: function (oe) {
			
			
			var oItem = oe.getSource();
			var oCtx = oItem.getBindingContext();
			var path = oCtx.getPath();
			var dialog = new Dialog({
				title: 'Confirm',
				type: 'Message',
				content: [
					new Label({ text: 'Are you sure you want to submit your comments?', labelFor: 'submitDialogTextarea'}),
					new TextArea('submitDialogTextarea', {
						liveChange: function(oEvent) {
							var sText = oEvent.getParameter('value');
							var parent = oEvent.getSource().getParent();
							parent.getBeginButton().setEnabled(sText.length > 0);
						},
						width: '100%',
						placeholder: 'Add note for : ' + jsonData[path.substr(1)]["b"]
					})
				],
				beginButton: new Button({
					type: ButtonType.Emphasized,
					text: 'Submit',
					enabled: false,
					press: function () {
						var sText = sap.ui.getCore().byId('submitDialogTextarea').getValue();
						MessageToast.show('Note is: ' + sText);
						dialog.close();
					}
				}),
				endButton: new Button({
					text: 'Cancel',
					press: function () {
						dialog.close();
					}
				}),
				afterClose: function() {
					dialog.destroy();
				}
			});

			dialog.open();
		}

	});

	return sampleappController ;

});
