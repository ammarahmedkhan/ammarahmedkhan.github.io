sap.ui.define([
		'sap/m/MessageBox',
		'sap/m/MessageToast',
		'sap/ui/core/mvc/Controller',
		'sap/ui/core/BusyIndicator'
	], function(MessageBox,MessageToast, Controller,BusyIndicator) {
	"use strict";
		
/* 		var list_popup = sap.ui.view({id:"list-popup", viewName:"sap.m.sample.sampleapp4.view.View1", type:sap.ui.core.mvc.ViewType.XML});
		var table = sap.ui.view({id:"table", viewName:"sap.m.sample.sampleapp4.view.View2", type:sap.ui.core.mvc.ViewType.XML});
		var card_layout = sap.ui.view({id:"card-layout", viewName:"sap.m.sample.sampleapp4.view.View3", type:sap.ui.core.mvc.ViewType.XML});
		var master_detail = sap.ui.view({id:"master-detail", viewName:"sap.m.sample.sampleapp4.view.View4", type:sap.ui.core.mvc.ViewType.XML});
		var pdf = sap.ui.view({id:"pdf", viewName:"sap.m.sample.sampleapp4.view.View5", type:sap.ui.core.mvc.ViewType.XML}); */
		var route ;
		var routes = {
			'list-popup':["sap.m.sample.sampleapp4.view.View1"],
			'table':["sap.m.sample.sampleapp4.view.View2"],
			'card-layout':["sap.m.sample.sampleapp4.view.View3"],
			'master-detail':["sap.m.sample.sampleapp4.view.View4"],
			'pdf':["sap.m.sample.sampleapp4.view.View5"],
			'qr':["sap.m.sample.sampleapp4.view.View6"],
			'expensemgmt':["sap.m.sample.sampleapp4.view.View7"]
		};
	
	var sampleappController = Controller.extend("sap.m.sample.sampleapp4.controller.View0", {

		openTarget: function(){
		//MessageToast.show(route);
		var app = sap.ui.getCore().byId("myApp");
		sap.ui.getCore().byId("tile--li-"+route).setVisible(false);
		var page = sap.ui.getCore().byId(route);
		if (page == null){
		app.addPage( 
		sap.ui.view({id:route, viewName:routes[route][0], type:sap.ui.core.mvc.ViewType.XML})		
		);
		
		}
		
		sap.ui.getCore().byId("myApp").to(route);
		},

		press : function(evt) {
			
			route = evt.mParameters.id.split("--")[1];
			
			if (route == 'pdf'){
			MessageToast.show("PDF may not appear on mobile phones");
			}
		this.getView().byId("li-"+route).setVisible(true);
		
		var obj=this;
		
		setTimeout(this.openTarget, 50);
		},
		
		handleListPress : function(){
		
		},
		
	_getDialog: function () {
	// create dialog lazily
	if (!this._oDialog) {
		// create dialog via fragment factory
		this._oDialog = sap.ui.xmlfragment("sap.m.sample.sampleapp4.view.Dialog", this);
		// connect dialog to view (models, lifecycle)
		this.getView().addDependent(this._oDialog);
	}
	return this._oDialog;
},

onOpenDialog: function () {
	this._getDialog().open();
},

onCloseDialog: function () {
	this._getDialog().close();
},


submitFeedback: function () {
	
	var rating = sap.ui.getCore().byId("rating").getValue();
	var text_rating = sap.ui.getCore().byId("text").getValue();
	this.rateit(rating,text_rating);
	this._getDialog().close();
},


rateit: function(rating,text_rating){
	//will put a real datastore here soon
},


		
		onInit: function (){
			//var loadingindicator = sap.ui.getCore().byId("tile--loading-indicator").setVisible(false);
			this.getView().byId("tile--li-list-popup").setVisible(false);
			this.getView().byId("tile--li-table").setVisible(false);
			this.getView().byId("tile--li-card-layout").setVisible(false);
			this.getView().byId("tile--li-master-detail").setVisible(false);
			this.getView().byId("tile--li-pdf").setVisible(false);
			this.getView().byId("tile--li-qr").setVisible(false);
			this.getView().byId("tile--li-expensemgmt").setVisible(false);
		}
		

	});
	return sampleappController ;

});
