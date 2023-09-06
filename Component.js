sap.ui.define(['sap/ui/core/UIComponent', 'sap/ui/core/BusyIndicator' ],
	function(UIComponent,BusyIndicator) {
	"use strict";
	console.log("Component:" + Date.now());
	BusyIndicator.show();
	var Component = UIComponent.extend("sap.m.sample.sampleapp4.controller.Component", {
		
		metadata : {
			manifest: "json"
		},
		
		init : function () {
			UIComponent.prototype.init.apply(this, arguments);
			// Parse the current url and display the targets of the route that matches the hash
			console.log(this.getRouter()?.initialize());
		}
	});

	return Component;

});
