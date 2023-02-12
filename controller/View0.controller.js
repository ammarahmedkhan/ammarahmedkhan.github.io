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
			'pdf':["sap.m.sample.sampleapp4.view.View5"]
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
		//var loadingindicator = sap.ui.getCore().byId("tile--loading-indicator").setVisible(true);
		//var app = new sap.m.App("myApp",{initialPage:"tile"});
		//var app = this.getView().getParent().getParent();
		//var app = sap.ui.getCore().byId("myApp");
		
		//console.log(this.oView.oParent.getApp());
		//var tile = sap.ui.view({id:"tile", viewName:"sap.m.sample.sampleapp4.view.View0", type:sap.ui.core.mvc.ViewType.XML});
		/* var list_popup = sap.ui.view({id:"list-popup", viewName:"sap.m.sample.sampleapp4.view.View1", type:sap.ui.core.mvc.ViewType.XML});
		var table = sap.ui.view({id:"table", viewName:"sap.m.sample.sampleapp4.view.View2", type:sap.ui.core.mvc.ViewType.XML});
		var card_layout = sap.ui.view({id:"card-layout", viewName:"sap.m.sample.sampleapp4.view.View3", type:sap.ui.core.mvc.ViewType.XML});
		var master_detail = sap.ui.view({id:"master-detail", viewName:"sap.m.sample.sampleapp4.view.View4", type:sap.ui.core.mvc.ViewType.XML});
		var pdf = sap.ui.view({id:"pdf", viewName:"sap.m.sample.sampleapp4.view.View5", type:sap.ui.core.mvc.ViewType.XML}); */
		
/* 		app.addPage(tile);
		
		app.addPage(list_popup);
		
		app.addPage(table);
		
		app.addPage(card_layout);
		
		app.addPage(master_detail);
		
		app.addPage(pdf); */

		// check if the page is already added or not.
		//BusyIndicator.show();
		
		
//set time out		
		var obj=this;
		//$.sap.intervalCall(500, this.delayed, this);
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
			//MessageBox.alert("This done got initialized ma ni*&^r!");
			console.log("tile:" + Date.now());
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

