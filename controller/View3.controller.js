sap.ui.define([
	'jquery.sap.global',
	'sap/ui/core/mvc/Controller',
	'sap/m/MessageToast',
	'sap/ui/core/BusyIndicator'
], function (jQuery, Controller, MessageToast,BusyIndicator) {
	'use strict';

	var CController = Controller.extend('sap.m.sample.sampleapp4.controller.View3', {
		
		onInit : function(){
		},
		
		onListItemPress: function (oEvent) {
			MessageToast.show('Item Pressed: ' + oEvent.getSource().getTitle());
		},

		onRejectPress: function () {
			MessageToast.show('Reject Button Pressed');
		},

		onAcceptPress: function () {
			MessageToast.show('Accept Button Pressed');
		},

		onErrorPress: function (event) {
			var messageStrip = new sap.m.MessageStrip({
				type: 'Error',
				showIcon: true,
				showCloseButton: true,
				text: 'Error: Something went wrong.',
				link: new sap.m.Link({
					text: 'SAP CE',
					href: 'http://www.sap.com/',
					target: '_blank'
				})
			});

			var notification = event.getSource().getParent().getParent();
			notification.setProcessingMessage(messageStrip);

		},
		onBack:function(){

			this.getOwnerComponent().getRouter().navTo('main');

		},
		
		

		onItemClose: function (oEvent) {
			var oItem = oEvent.getSource(),
				oList = oItem.getParent();

			oList.removeItem(oItem);

			MessageToast.show('Item Closed: ' + oEvent.getSource().getTitle());
		}
	});

	return CController;

});
