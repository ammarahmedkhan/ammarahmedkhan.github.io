sap.ui.jsview("sap.m.sample.sampleapp4.view.App", {

/** Specifies the Controller belonging to this View.

* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.

* @memberOf sapui5_navigation_xml.AppView

*/

getControllerName : function() {

return "sap.m.sample.sampleapp4.controller.App";

},

/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed.

* Since the Controller is given to this method, its event handlers can be attached right away.

* @memberOf sapui5_navigation_xml.AppView

*/

createContent : function(oController) {
		console.log("App:" + Date.now());
		var app = new sap.m.App("myApp",{initialPage:"tile"});
		var tile = sap.ui.view({id:"tile", viewName:"sap.m.sample.sampleapp4.view.View0", type:sap.ui.core.mvc.ViewType.XML});
		app.addPage(tile);
		/* var list_popup = sap.ui.view({id:"list-popup", viewName:"sap.m.sample.sampleapp4.view.View1", type:sap.ui.core.mvc.ViewType.XML});
		var table = sap.ui.view({id:"table", viewName:"sap.m.sample.sampleapp4.view.View2", type:sap.ui.core.mvc.ViewType.XML});
		var card_layout = sap.ui.view({id:"card-layout", viewName:"sap.m.sample.sampleapp4.view.View3", type:sap.ui.core.mvc.ViewType.XML});
		var master_detail = sap.ui.view({id:"master-detail", viewName:"sap.m.sample.sampleapp4.view.View4", type:sap.ui.core.mvc.ViewType.XML});
		var pdf = sap.ui.view({id:"pdf", viewName:"sap.m.sample.sampleapp4.view.View5", type:sap.ui.core.mvc.ViewType.XML});
		
		app.addPage(list_popup);
		
		app.addPage(table);
		
		app.addPage(card_layout);
		
		app.addPage(master_detail);
		
		app.addPage(pdf); */
		sap.ui.core.BusyIndicator.hide();
		return app;

}

});





/* sap.ui.define([
		'sap/m/MessageBox',
		'sap/m/MessageToast',
		'sap/ui/core/mvc/Controller',
		'sap/ui/core/mvc/JSView'
	], function(JSView) {
	"use strict";

		var sampleappController = JSView.extend("sap.m.sample.sampleapp4.view.App", {

		getControllerName : function() {

			return "sap.m.sample.sampleapp4.controller.App";

		},
		
		createContent : function(oController) {

		var app = new sap.m.App("myApp",{initialPage:"tile"});
		var tile = sap.ui.view({id:"tile", viewName:"sap.m.sample.sampleapp4.view.View0", type:sap.ui.core.mvc.ViewType.XML});
		var list_popup = sap.ui.view({id:"list-popup", viewName:"sap.m.sample.sampleapp4.view.View1", type:sap.ui.core.mvc.ViewType.XML});
		var table = sap.ui.view({id:"table", viewName:"sap.m.sample.sampleapp4.view.View2", type:sap.ui.core.mvc.ViewType.XML});
		var card_layout = sap.ui.view({id:"card-layout", viewName:"sap.m.sample.sampleapp4.view.View3", type:sap.ui.core.mvc.ViewType.XML});
		var master_detail = sap.ui.view({id:"master-detail", viewName:"sap.m.sample.sampleapp4.view.View4", type:sap.ui.core.mvc.ViewType.XML});
		
		app.addPage(tile);
		app.addPage(list_popup);
		app.addPage(table);
		app.addPage(card_layout);
		app.addPage(master_detail);
		return app;

		}
		

	});
//https://sapui5.hana.ondemand.com/1.34.9/docs/guide/df8c9c3d79b54c928855162bafcd88ee.html
	return sampleappController ;

});


//https://api.myjson.com/bins/16u9mq */