sap.ui.define([
	'jquery.sap.global',
	'sap/ui/core/mvc/Controller',
	'sap/m/MessageToast'
], function (jQuery, Controller, MessageToast) {
	'use strict';

	var CController = Controller.extend('sap.m.sample.sampleapp4.controller.View4', {
		
		
		
		onInit : function() {
			
			var data1 = {
				"products": [
              {
                  "prodName": "Apple",
                  "prodCountry": "Netherlands",
                  "price": "normal"
              },
              {
                  "prodName": "Orange",
                  "prodCountry": "Spain",
                  "price": "extra"
              },
              {
                  "prodName": "Strawberry",
                  "prodCountry": "Poland",
                  "price": "normal"
              }
          ]
        };
		var data = 
		{"@odata.context":"https://services.odata.org/TripPinRESTierService/(S(5t5ctu0thhcitofatwhkru45))/$metadata#People","value":[{"UserName":"russellwhyte","FirstName":"Russell","LastName":"Whyte","MiddleName":null,"Gender":"Male","Age":null,"Emails":["Russell@example.com","Russell@contoso.com"],"FavoriteFeature":"Feature1","Features":["Feature1","Feature2"],"AddressInfo":[{"Address":"187 Suffolk Ln.","City":{"Name":"Boise","CountryRegion":"United States","Region":"ID"}}],"HomeAddress":null},{"UserName":"scottketchum","FirstName":"Scott","LastName":"Ketchum","MiddleName":null,"Gender":"Male","Age":null,"Emails":["Scott@example.com"],"FavoriteFeature":"Feature1","Features":[],"AddressInfo":[{"Address":"2817 Milton Dr.","City":{"Name":"Albuquerque","CountryRegion":"United States","Region":"NM"}}],"HomeAddress":null},{"UserName":"ronaldmundy","FirstName":"Ronald","LastName":"Mundy","MiddleName":null,"Gender":"Male","Age":null,"Emails":["Ronald@example.com","Ronald@contoso.com"],"FavoriteFeature":"Feature1","Features":[],"AddressInfo":[{"Address":"187 Suffolk Ln.","City":{"Name":"Boise","CountryRegion":"United States","Region":"ID"}}],"HomeAddress":null},{"UserName":"javieralfred","FirstName":"Javier","LastName":"Alfred","MiddleName":null,"Gender":"Male","Age":null,"Emails":["Javier@example.com","Javier@contoso.com"],"FavoriteFeature":"Feature1","Features":[],"AddressInfo":[{"Address":"89 Jefferson Way Suite 2","City":{"Name":"Portland","CountryRegion":"United States","Region":"WA"}}],"HomeAddress":null},{"UserName":"willieashmore","FirstName":"Willie","LastName":"Ashmore","MiddleName":null,"Gender":"Male","Age":null,"Emails":[],"FavoriteFeature":"Feature1","Features":[],"AddressInfo":[],"HomeAddress":null},{"UserName":"vincentcalabrese","FirstName":"Vincent","LastName":"Calabrese","MiddleName":null,"Gender":"Male","Age":null,"Emails":["Vincent@example.com","Vincent@contoso.com"],"FavoriteFeature":"Feature1","Features":[],"AddressInfo":[{"Address":"55 Grizzly Peak Rd.","City":{"Name":"Butte","CountryRegion":"United States","Region":"MT"}}],"HomeAddress":null},{"UserName":"clydeguess","FirstName":"Clyde","LastName":"Guess","MiddleName":null,"Gender":"Male","Age":null,"Emails":[],"FavoriteFeature":"Feature1","Features":[],"AddressInfo":[],"HomeAddress":{"Address":null,"City":null}},{"UserName":"keithpinckney","FirstName":"Keith","LastName":"Pinckney","MiddleName":null,"Gender":"Male","Age":null,"Emails":["Keith@example.com","Keith@contoso.com"],"FavoriteFeature":"Feature1","Features":[],"AddressInfo":[{"Address":"55 Grizzly Peak Rd.","City":{"Name":"Butte","CountryRegion":"United States","Region":"MT"}}],"HomeAddress":null},{"UserName":"marshallgaray","FirstName":"Marshall","LastName":"Garay","MiddleName":null,"Gender":"Male","Age":null,"Emails":["Marshall@example.com","Marshall@contoso.com"],"FavoriteFeature":"Feature1","Features":[],"AddressInfo":[{"Address":"55 Grizzly Peak Rd.","City":{"Name":"Butte","CountryRegion":"United States","Region":"MT"}}],"HomeAddress":null},{"UserName":"ryantheriault","FirstName":"Ryan","LastName":"Theriault","MiddleName":null,"Gender":"Male","Age":null,"Emails":["Ryan@example.com","Ryan@contoso.com"],"FavoriteFeature":"Feature1","Features":[],"AddressInfo":[{"Address":"55 Grizzly Peak Rd.","City":{"Name":"Butte","CountryRegion":"United States","Region":"MT"}}],"HomeAddress":null},{"UserName":"elainestewart","FirstName":"Elaine","LastName":"Stewart","MiddleName":null,"Gender":"Female","Age":null,"Emails":["Elaine@example.com","Elaine@contoso.com"],"FavoriteFeature":"Feature1","Features":[],"AddressInfo":[{"Address":"55 Grizzly Peak Rd.","City":{"Name":"Butte","CountryRegion":"United States","Region":"MT"}}],"HomeAddress":null},{"UserName":"salliesampson","FirstName":"Sallie","LastName":"Sampson","MiddleName":null,"Gender":"Female","Age":null,"Emails":["Sallie@example.com","Sallie@contoso.com"],"FavoriteFeature":"Feature1","Features":[],"AddressInfo":[{"Address":"87 Polk St. Suite 5","City":{"Name":"San Francisco","CountryRegion":"United States","Region":"CA"}},{"Address":"89 Chiaroscuro Rd.","City":{"Name":"Portland","CountryRegion":"United States","Region":"OR"}}],"HomeAddress":null},{"UserName":"jonirosales","FirstName":"Joni","LastName":"Rosales","MiddleName":null,"Gender":"Female","Age":null,"Emails":["Joni@example.com","Joni@contoso.com"],"FavoriteFeature":"Feature1","Features":[],"AddressInfo":[{"Address":"55 Grizzly Peak Rd.","City":{"Name":"Butte","CountryRegion":"United States","Region":"MT"}}],"HomeAddress":null},{"UserName":"georginabarlow","FirstName":"Georgina","LastName":"Barlow","MiddleName":null,"Gender":"Female","Age":null,"Emails":["Georgina@example.com","Georgina@contoso.com"],"FavoriteFeature":"Feature1","Features":[],"AddressInfo":[{"Address":"55 Grizzly Peak Rd.","City":{"Name":"Butte","CountryRegion":"United States","Region":"MT"}}],"HomeAddress":null},{"UserName":"angelhuffman","FirstName":"Angel","LastName":"Huffman","MiddleName":null,"Gender":"Female","Age":null,"Emails":["Angel@example.com"],"FavoriteFeature":"Feature1","Features":[],"AddressInfo":[{"Address":"55 Grizzly Peak Rd.","City":{"Name":"Butte","CountryRegion":"United States","Region":"MT"}}],"HomeAddress":null},{"UserName":"laurelosborn","FirstName":"Laurel","LastName":"Osborn","MiddleName":null,"Gender":"Female","Age":null,"Emails":["Laurel@example.com","Laurel@contoso.com"],"FavoriteFeature":"Feature1","Features":[],"AddressInfo":[{"Address":"87 Polk St. Suite 5","City":{"Name":"San Francisco","CountryRegion":"United States","Region":"CA"}}],"HomeAddress":null},{"UserName":"sandyosborn","FirstName":"Sandy","LastName":"Osborn","MiddleName":null,"Gender":"Female","Age":null,"Emails":["Sandy@example.com","Sandy@contoso.com"],"FavoriteFeature":"Feature1","Features":[],"AddressInfo":[{"Address":"87 Polk St. Suite 5","City":{"Name":"San Francisco","CountryRegion":"United States","Region":"CA"}}],"HomeAddress":null},{"UserName":"ursulabright","FirstName":"Ursula","LastName":"Bright","MiddleName":null,"Gender":"Female","Age":null,"Emails":["Ursula@example.com","Ursula@contoso.com"],"FavoriteFeature":"Feature1","Features":[],"AddressInfo":[{"Address":"87 Polk St. Suite 5","City":{"Name":"San Francisco","CountryRegion":"United States","Region":"CA"}}],"HomeAddress":null},{"@odata.type":"#Microsoft.OData.Service.Sample.TrippinInMemory.Models.Manager","UserName":"genevievereeves","FirstName":"Genevieve","LastName":"Reeves","MiddleName":null,"Gender":"Female","Age":null,"Emails":["Genevieve@example.com","Genevieve@contoso.com"],"FavoriteFeature":"Feature1","Features":[],"Budget":0,"AddressInfo":[{"Address":"87 Polk St. Suite 5","City":{"Name":"San Francisco","CountryRegion":"United States","Region":"CA"}}],"HomeAddress":null,"BossOffice":null},{"@odata.type":"#Microsoft.OData.Service.Sample.TrippinInMemory.Models.Employee","UserName":"kristakemp","FirstName":"Krista","LastName":"Kemp","MiddleName":null,"Gender":"Female","Age":null,"Emails":["Krista@example.com"],"FavoriteFeature":"Feature1","Features":[],"Cost":0,"AddressInfo":[{"Address":"87 Polk St. Suite 5","City":{"Name":"San Francisco","CountryRegion":"United States","Region":"CA"}}],"HomeAddress":null}]}
		
			// create a Model with this data and attach it to the view
			var model = new sap.ui.model.json.JSONModel("https://services.odata.org/TripPinRESTierService/People");
			/* var model = new sap.ui.model.json.JSONModel();
			model.setData(data) */
/* 			items = "{/products}"
			title = "{prodName}"
            description =  "{prodCountry}" */
//			console.log(model);
            this.getView().setModel(model);
			
		},
		press : function(oEvent){
			//MessageToast.show("te");
			var oItem = oEvent.getSource();
			console.log(oItem.properties);
			var oCtx = oItem.getBindingContext();
			var path = oCtx.getPath();
			//this.getView().byId("textarea").bindElement(path);
			this.getView().bindElement(path);
		},
			onAfterRendering: function() {
			var oSplitCont = this.getSplitContObj(),
				ref = oSplitCont.getDomRef() && oSplitCont.getDomRef().parentNode;
			// set all parent elements to 100% height, this should be done by app developer, but just in case
			if (ref && !ref._sapUI5HeightFixed) {
				ref._sapUI5HeightFixed = true;
				while (ref && ref !== document.documentElement) {
					var $ref = jQuery(ref);
					if ($ref.attr("data-sap-ui-root-content")) { // Shell as parent does this already
						break;
					}
					if (!ref.style.height) {
						ref.style.height = "100%";
					}
					ref = ref.parentNode;
				}
			}
		},
		onPressNavToDetail : function() {
			this.getSplitContObj().to(this.createId("detailDetail"));
		},
		
		onPressDetailBack : function() {
			this.getSplitContObj().backDetail();
		},

		onPressMasterBack : function() {
			this.getSplitContObj().backMaster();
		},

		onPressGoToMaster : function() {
			this.getSplitContObj().toMaster(this.createId("list"));
		},

		onListItemPress : function(oEvent) {
			
			//var sToPageId = oEvent.getParameter("listItem").getCustomData()[0].getValue();
			var sToPageId="detail"
			var oItem = oEvent.getSource();
			//console.log(oItem.properties);
			var oCtx = oItem.getBindingContext();
			var path = oCtx.getPath();
			//this.getView().byId("textarea").bindElement(path);
			this.getView().bindElement(path);
			
			
			this.getSplitContObj().toDetail(this.createId(sToPageId));

			//MessageToast.show("path");
		},
		
		onBack:function(){

			sap.ui.getCore().byId("myApp").back();

		},
		
		navButtonPress : function(){
			//MessageToast.show("back button");
			//console.log("dddd");
			this.getSplitContObj().toMaster(this.createId("master"));
			
		},
		onPressModeBtn : function(oEvent) {
			var sSplitAppMode = oEvent.getSource().getSelectedButton().getCustomData()[0].getValue();

			this.getSplitContObj().setMode(sSplitAppMode);
			//MessageToast.show("Split Container mode is changed to: " + sSplitAppMode, {duration: 5000});
		},

		getSplitContObj : function() {
			var result = this.byId("id1");
			if (!result) {
				//console.log("SplitApp object can't be found");
			}
			return result;
		}
		
		
		//MessageToast.show("it done got pressed!!!!");
		//https://answers.sap.com/questions/10340181/how-do-you-bind-a-json-array-list-to-sapmlist-cont.html
	});

	return CController;

});
sap.ui.define([
	'jquery.sap.global',
	'sap/ui/core/mvc/Controller',
	'sap/m/MessageToast'
], function (jQuery, Controller, MessageToast) {
	'use strict';

	var CController = Controller.extend('sap.m.sample.sampleapp.View4', {
		
		
		
		onInit : function() {
			
			var data1 = {
				"products": [
              {
                  "prodName": "Apple",
                  "prodCountry": "Netherlands",
                  "price": "normal"
              },
              {
                  "prodName": "Orange",
                  "prodCountry": "Spain",
                  "price": "extra"
              },
              {
                  "prodName": "Strawberry",
                  "prodCountry": "Poland",
                  "price": "normal"
              }
          ]
        };
		
		var data = 
		{"@odata.context":"https://services.odata.org/TripPinRESTierService/(S(5t5ctu0thhcitofatwhkru45))/$metadata#People","value":[{"UserName":"russellwhyte","FirstName":"Russell","LastName":"Whyte","MiddleName":null,"Gender":"Male","Age":null,"Emails":["Russell@example.com","Russell@contoso.com"],"FavoriteFeature":"Feature1","Features":["Feature1","Feature2"],"AddressInfo":[{"Address":"187 Suffolk Ln.","City":{"Name":"Boise","CountryRegion":"United States","Region":"ID"}}],"HomeAddress":null},{"UserName":"scottketchum","FirstName":"Scott","LastName":"Ketchum","MiddleName":null,"Gender":"Male","Age":null,"Emails":["Scott@example.com"],"FavoriteFeature":"Feature1","Features":[],"AddressInfo":[{"Address":"2817 Milton Dr.","City":{"Name":"Albuquerque","CountryRegion":"United States","Region":"NM"}}],"HomeAddress":null},{"UserName":"ronaldmundy","FirstName":"Ronald","LastName":"Mundy","MiddleName":null,"Gender":"Male","Age":null,"Emails":["Ronald@example.com","Ronald@contoso.com"],"FavoriteFeature":"Feature1","Features":[],"AddressInfo":[{"Address":"187 Suffolk Ln.","City":{"Name":"Boise","CountryRegion":"United States","Region":"ID"}}],"HomeAddress":null},{"UserName":"javieralfred","FirstName":"Javier","LastName":"Alfred","MiddleName":null,"Gender":"Male","Age":null,"Emails":["Javier@example.com","Javier@contoso.com"],"FavoriteFeature":"Feature1","Features":[],"AddressInfo":[{"Address":"89 Jefferson Way Suite 2","City":{"Name":"Portland","CountryRegion":"United States","Region":"WA"}}],"HomeAddress":null},{"UserName":"willieashmore","FirstName":"Willie","LastName":"Ashmore","MiddleName":null,"Gender":"Male","Age":null,"Emails":[],"FavoriteFeature":"Feature1","Features":[],"AddressInfo":[],"HomeAddress":null},{"UserName":"vincentcalabrese","FirstName":"Vincent","LastName":"Calabrese","MiddleName":null,"Gender":"Male","Age":null,"Emails":["Vincent@example.com","Vincent@contoso.com"],"FavoriteFeature":"Feature1","Features":[],"AddressInfo":[{"Address":"55 Grizzly Peak Rd.","City":{"Name":"Butte","CountryRegion":"United States","Region":"MT"}}],"HomeAddress":null},{"UserName":"clydeguess","FirstName":"Clyde","LastName":"Guess","MiddleName":null,"Gender":"Male","Age":null,"Emails":[],"FavoriteFeature":"Feature1","Features":[],"AddressInfo":[],"HomeAddress":{"Address":null,"City":null}},{"UserName":"keithpinckney","FirstName":"Keith","LastName":"Pinckney","MiddleName":null,"Gender":"Male","Age":null,"Emails":["Keith@example.com","Keith@contoso.com"],"FavoriteFeature":"Feature1","Features":[],"AddressInfo":[{"Address":"55 Grizzly Peak Rd.","City":{"Name":"Butte","CountryRegion":"United States","Region":"MT"}}],"HomeAddress":null},{"UserName":"marshallgaray","FirstName":"Marshall","LastName":"Garay","MiddleName":null,"Gender":"Male","Age":null,"Emails":["Marshall@example.com","Marshall@contoso.com"],"FavoriteFeature":"Feature1","Features":[],"AddressInfo":[{"Address":"55 Grizzly Peak Rd.","City":{"Name":"Butte","CountryRegion":"United States","Region":"MT"}}],"HomeAddress":null},{"UserName":"ryantheriault","FirstName":"Ryan","LastName":"Theriault","MiddleName":null,"Gender":"Male","Age":null,"Emails":["Ryan@example.com","Ryan@contoso.com"],"FavoriteFeature":"Feature1","Features":[],"AddressInfo":[{"Address":"55 Grizzly Peak Rd.","City":{"Name":"Butte","CountryRegion":"United States","Region":"MT"}}],"HomeAddress":null},{"UserName":"elainestewart","FirstName":"Elaine","LastName":"Stewart","MiddleName":null,"Gender":"Female","Age":null,"Emails":["Elaine@example.com","Elaine@contoso.com"],"FavoriteFeature":"Feature1","Features":[],"AddressInfo":[{"Address":"55 Grizzly Peak Rd.","City":{"Name":"Butte","CountryRegion":"United States","Region":"MT"}}],"HomeAddress":null},{"UserName":"salliesampson","FirstName":"Sallie","LastName":"Sampson","MiddleName":null,"Gender":"Female","Age":null,"Emails":["Sallie@example.com","Sallie@contoso.com"],"FavoriteFeature":"Feature1","Features":[],"AddressInfo":[{"Address":"87 Polk St. Suite 5","City":{"Name":"San Francisco","CountryRegion":"United States","Region":"CA"}},{"Address":"89 Chiaroscuro Rd.","City":{"Name":"Portland","CountryRegion":"United States","Region":"OR"}}],"HomeAddress":null},{"UserName":"jonirosales","FirstName":"Joni","LastName":"Rosales","MiddleName":null,"Gender":"Female","Age":null,"Emails":["Joni@example.com","Joni@contoso.com"],"FavoriteFeature":"Feature1","Features":[],"AddressInfo":[{"Address":"55 Grizzly Peak Rd.","City":{"Name":"Butte","CountryRegion":"United States","Region":"MT"}}],"HomeAddress":null},{"UserName":"georginabarlow","FirstName":"Georgina","LastName":"Barlow","MiddleName":null,"Gender":"Female","Age":null,"Emails":["Georgina@example.com","Georgina@contoso.com"],"FavoriteFeature":"Feature1","Features":[],"AddressInfo":[{"Address":"55 Grizzly Peak Rd.","City":{"Name":"Butte","CountryRegion":"United States","Region":"MT"}}],"HomeAddress":null},{"UserName":"angelhuffman","FirstName":"Angel","LastName":"Huffman","MiddleName":null,"Gender":"Female","Age":null,"Emails":["Angel@example.com"],"FavoriteFeature":"Feature1","Features":[],"AddressInfo":[{"Address":"55 Grizzly Peak Rd.","City":{"Name":"Butte","CountryRegion":"United States","Region":"MT"}}],"HomeAddress":null},{"UserName":"laurelosborn","FirstName":"Laurel","LastName":"Osborn","MiddleName":null,"Gender":"Female","Age":null,"Emails":["Laurel@example.com","Laurel@contoso.com"],"FavoriteFeature":"Feature1","Features":[],"AddressInfo":[{"Address":"87 Polk St. Suite 5","City":{"Name":"San Francisco","CountryRegion":"United States","Region":"CA"}}],"HomeAddress":null},{"UserName":"sandyosborn","FirstName":"Sandy","LastName":"Osborn","MiddleName":null,"Gender":"Female","Age":null,"Emails":["Sandy@example.com","Sandy@contoso.com"],"FavoriteFeature":"Feature1","Features":[],"AddressInfo":[{"Address":"87 Polk St. Suite 5","City":{"Name":"San Francisco","CountryRegion":"United States","Region":"CA"}}],"HomeAddress":null},{"UserName":"ursulabright","FirstName":"Ursula","LastName":"Bright","MiddleName":null,"Gender":"Female","Age":null,"Emails":["Ursula@example.com","Ursula@contoso.com"],"FavoriteFeature":"Feature1","Features":[],"AddressInfo":[{"Address":"87 Polk St. Suite 5","City":{"Name":"San Francisco","CountryRegion":"United States","Region":"CA"}}],"HomeAddress":null},{"@odata.type":"#Microsoft.OData.Service.Sample.TrippinInMemory.Models.Manager","UserName":"genevievereeves","FirstName":"Genevieve","LastName":"Reeves","MiddleName":null,"Gender":"Female","Age":null,"Emails":["Genevieve@example.com","Genevieve@contoso.com"],"FavoriteFeature":"Feature1","Features":[],"Budget":0,"AddressInfo":[{"Address":"87 Polk St. Suite 5","City":{"Name":"San Francisco","CountryRegion":"United States","Region":"CA"}}],"HomeAddress":null,"BossOffice":null},{"@odata.type":"#Microsoft.OData.Service.Sample.TrippinInMemory.Models.Employee","UserName":"kristakemp","FirstName":"Krista","LastName":"Kemp","MiddleName":null,"Gender":"Female","Age":null,"Emails":["Krista@example.com"],"FavoriteFeature":"Feature1","Features":[],"Cost":0,"AddressInfo":[{"Address":"87 Polk St. Suite 5","City":{"Name":"San Francisco","CountryRegion":"United States","Region":"CA"}}],"HomeAddress":null}]}
		
		
		
		
			// create a Model with this data and attach it to the view
			var model = new sap.ui.model.json.JSONModel("https://services.odata.org/TripPinRESTierService/People");
			/* var model = new sap.ui.model.json.JSONModel();
			model.setData(data) */
/* 			items = "{/products}"
			title = "{prodName}"
            description =  "{prodCountry}" */
			//console.log(model);
            this.getView().setModel(model);
			
		},
		press : function(oEvent){
			//MessageToast.show("te");
			var oItem = oEvent.getSource();
			console.log(oItem.properties);
			var oCtx = oItem.getBindingContext();
			var path = oCtx.getPath();
			//this.getView().byId("textarea").bindElement(path);
			this.getView().bindElement(path);
			
			
		}
		
		
		//MessageToast.show("it done got pressed!!!!");
		//https://answers.sap.com/questions/10340181/how-do-you-bind-a-json-array-list-to-sapmlist-cont.html
	});

	return CController;

});
