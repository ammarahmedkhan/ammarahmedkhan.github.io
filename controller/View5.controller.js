sap.ui.define([
		'sap/ui/core/mvc/Controller',
		'sap/m/MessageToast',
		'sap/ui/core/BusyIndicator'
	], function(Controller,MessageToast,BusyIndicator) {
	"use strict";
	var sampleappController = Controller.extend("sap.m.sample.sampleapp4.controller.View5", {
		
		onInit: function (){
			var json = (function() {
			var json = null;
				jQuery.ajax({
					'async': false,
					'global': false,
					'url': "data.json",
					'dataType': "json",
					'responseType': 'blob',
					'success': function (data) {
						json = data;
					}
				});
				return json;
				})();
			var convString=json.d;
			//var convString = hexToBase64(data);
			var contentType = 'application/pdf';
			var b64Data = convString;
			var blob = this.b64toBlob(b64Data, contentType);
			var blobUrl = URL.createObjectURL(blob);
			//auto download of file.
			/* const fileURL = blobUrl;
            const link = document.createElement('a');
            link.href = fileURL;
            link.download = "FileName" + new Date() + ".pdf";
            link.click(); */
			jQuery.sap.addUrlWhitelist("blob");
			/* console.log(blobUrl);
			this.getView().setModel(new sap.ui.model.json.JSONModel({
							data: blobUrl
						}), "oDataUrl"); */
			var content = this.getView().byId("id1");
			var oInput1 = new sap.m.Text('input1');
			oInput1.setText("Some Text ");
			oInput1.setTooltip("This is a tooltip ");
			var container = new sap.ui.core.HTML({
			preferDOM: true,
			content: "<iframe src=" +blobUrl+ " style='width:100%;height:100%'></iframe>"
						});
			
			
			var oLink1 = new sap.ui.core.HTML({
			content: "<a href=" + blobUrl + " " +  "download=" + "file.pdf" + ">if pdf not loaded, try this link</a>"
			});
			content.addContent(oLink1);
			content.addContent(container);

		},
		
				onBack:function(){

			sap.ui.getCore().byId("myApp").back();

		},
		
		hexToBase64: function(str) {
							var bString = "";
							for (var i = 0; i < str.length; i += 2) {
								bString += String.fromCharCode(parseInt(str.substr(i, 2), 16));
							}
							return btoa(bString);
						},
		b64toBlob: function(b64Data, contentType, sliceSize) {
			contentType = contentType || '';
			sliceSize = sliceSize || 512;
			var byteCharacters = atob(b64Data);
			var byteArrays = [];
			for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
				var slice = byteCharacters.slice(offset, offset + sliceSize);
				var byteNumbers = new Array(slice.length);
				for (var i = 0; i < slice.length; i++) {
					byteNumbers[i] = slice.charCodeAt(i);
				}
				var byteArray = new Uint8Array(byteNumbers);
				byteArrays.push(byteArray);
			}
			var blob = new Blob(byteArrays, {
				type: contentType
			});
			return blob;
		}
		
		
	});

	return sampleappController ;

});