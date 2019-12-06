sap.ui.define([
		'sap/m/MessageBox',
		'sap/m/MessageToast',
		'sap/ui/core/mvc/Controller'
	], function(MessageBox,MessageToast, Controller) {
	"use strict";
	
	var sampleappController = Controller.extend("sap.m.sample.sampleapp4.controller.View0", {

		press : function(evt) {
			//console.log(evt.mParameters.id.split("--")[1]);
			var route = evt.mParameters.id.split("--")[1];
			/* var oItem = evt.getSource();
			var oCtx = oItem.getBindingContext();
			var path = oCtx.getPath(); */
			//MessageToast.show(route);
			if (route == 'pdf'){
			MessageToast.show("PDF may not appear on mobile phones");
			}
			
			sap.ui.getCore().byId("myApp").to(route);
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
var response=null;
$.ajax({
					'async': false,
					'global': false,
					'url': "https://api.jsonbin.io/b/5de77eba00099304060d858d",
					'dataType': "json",
					'headers': {"secret-key":"$2b$10$AE8cLIBRPv2TOxebjKo6z.qLOV6CgeqOYanWANa6TF1PjHqmGzS/K"},
					'success': function (data) {
						response = data;
					}
				});
var rating={rating: rating, text: text_rating};
response.push(rating);
// put
$.ajax({
					'async': false,
					'global': false,
					"method": "PUT",
					'url': "https://api.jsonbin.io/b/5de77eba00099304060d858d",
					'dataType': "application/json",
					'headers': 
					{"secret-key":"$2b$10$AE8cLIBRPv2TOxebjKo6z.qLOV6CgeqOYanWANa6TF1PjHqmGzS/K",
					"Content-Type":"application/json",
					"versioning":"false"},
					'data' : JSON.stringify(response),
					'success': function (data) {
						console.log(data);
					}
				});

},


		
		onInit: function (){
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