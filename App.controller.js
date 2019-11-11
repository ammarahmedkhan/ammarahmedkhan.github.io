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
			MessageBox.alert("This done got initialized ma ni*&^r!");
		}
		

	});

	return sampleappController ;

});
