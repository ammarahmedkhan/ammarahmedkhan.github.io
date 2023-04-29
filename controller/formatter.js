sap.ui.define([], function () {
	"use strict";
	return {
		statusText: function (sStatus) {
			debugger;
			switch (sStatus) {
				case "done":
					return 'sap-icon://accept';
				case "in-progress":
					return 'sap-icon://accelerated';
				default:
					return 'sap-icon://action';
			}
		}
	};
});