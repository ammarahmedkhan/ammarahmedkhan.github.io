sap.ui.define([], function () {
	"use strict";
	return {
		// put your data functions here
		
		formatDate: function(date){
			let month = (date.getMonth()+1).toString();
			let day = (date.getDate()).toString();
			let year = (date.getFullYear()).toString();
			return `${day}/${month}/${year}`;

		}
	};
});