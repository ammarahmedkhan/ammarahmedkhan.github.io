sap.ui.define([
	"sap/m/MessageToast",
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
    "../controller/html5qrcode"

], function (MessageToast, Controller, JSONModel
,HTML5QRCode
) {

	"use strict";
	        var _scannerIsRunning = false;
            var html5QrcodeScanner;
        


	return Controller.extend("sap.m.sample.sampleapp4.controller.View6", {



		onInit: function () {

        var _oPanel = this.byId("idPnl");
        var f = this.onScanSuccess
        var oHtml = new sap.ui.core.HTML("reader", {
          // the static content as a long string literal
          content:"<div>Pure HTML from SAPUI5</div>",
          preferDOM : false,
          afterRendering : function(e) {
            sap.m.MessageToast.show("Message after HTML rendered!!");

html5QrcodeScanner = new Html5QrcodeScanner(
    "reader", { fps: 10, qrbox: 250 });


      html5QrcodeScanner.render(f);
          }
        });
      _oPanel.addContent(oHtml);


	
		},

		formatFloat: function(param){
return parseFloat(param);
},


onBack:function(){
			sap.ui.getCore().byId("myApp").back();
		},

onScanSuccess: function(decodedText, decodedResult) {
    // Handle on success condition with the decoded text or result.
    sap.m.MessageToast.show(`Scan result: ${decodedText}`, decodedResult);
    // ...
    html5QrcodeScanner.clear();
    // ^ this will stop the scanner (video feed) and clear the scan area.
}

	});
});