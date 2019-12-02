sap.ui.define(['sap/ui/core/UIComponent', 'sap/ui/core/BusyIndicator' ],
	function(UIComponent,BusyIndicator) {
	"use strict";
	console.log("Component:" + Date.now());
	BusyIndicator.show();
	var Component = UIComponent.extend("sap.m.sample.sampleapp4.controller.Component", {
		
		metadata : {
			manifest: "json"
		}
	});

	return Component;

});
