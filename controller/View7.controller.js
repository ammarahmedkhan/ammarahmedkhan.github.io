sap.ui.define([
    "sap/m/MessageToast",
    "sap/m/MenuItem",
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
	'sap/ui/core/Fragment',
    "../utils/utilFn"

], function(MessageToast,MenuItem, Controller, JSONModel, Fragment,utilFn) {

    "use strict";
    const todaysDate = new Date();
	let graphCalcsTotalFigures = new JSONModel({
		toReceive:0,
		toPay:0,
		pending:0,
		completed:0
	});
    const oTable = new JSONModel({
        rows: [{
            description: 'pay up/ take back',
            amount: 3,
            date: utilFn.formatDate(todaysDate),
            paid_or_received: true,
            pay_or_receive: false,
            amtValueState: sap.ui.core.ValueState.None,
            descValueState: sap.ui.core.ValueState.None
        }]
    });
	
	const filterSwitch = new JSONModel({showPendingSwitch : false, showPendingItems : false,
	showToPayItems: false});
	let aFilters = [];
    return Controller.extend("sap.m.sample.sampleapp4.controller.View7", {

        onInit: function() {
            this.getView().setModel(oTable, 'table');
            this.getView().setModel(filterSwitch, 'switch');
			this._mDialogs = {};
			
        },
        addExp: function() {
            oTable.oData.rows.push({
                description: 'pay up/take back',
                amount: 3,
                date: utilFn.formatDate(todaysDate),
				amtValueState: sap.ui.core.ValueState.None,
				descValueState: sap.ui.core.ValueState.None,
				paid_or_received: false,
				pay_or_receive: false
            });
            oTable.refresh();
        },

        delRows: function() {
			if(this.getView().byId('tbl').getSelectedIndices().length == 0){
				MessageToast.show("Select a row first");
				return;
			}
			
            this.getView().byId('tbl').getSelectedIndices().toReversed().forEach((idx) => {
                oTable.oData.rows.splice(idx, 1);
            });
            oTable.refresh();
        },
        changeHandler: function(object) {
			let valueState = (object.getParameters().newValue == "" ? sap.ui.core.ValueState.Error : sap.ui.core.ValueState.None);
			if(object.mParameters.id.includes("amt")){
				oTable.oData.rows[object.getSource().getParent().getIndex()]["amtValueState"]=parseInt(valueState);	
			}else{
				oTable.oData.rows[object.getSource().getParent().getIndex()]["descValueState"]=valueState;			
			}
        },
		onFilterSelect : function(object){
			if(object.getParameters().key == "charts"){
				this.performCalc();
			}
		},
		resetFilters : function(oEvent){
			this.filterItems("");
			aFilters = [];
		},
		doCalc: function(attrToFilter,booleanVal,attrToUpdate){
			graphCalcsTotalFigures.oData[attrToUpdate]=0;
			switch(oTable.oData.rows.filter((object) => {
						return object[attrToFilter] == booleanVal
					}).length){
				case 0:
					return;
				case 1:
					graphCalcsTotalFigures.oData[attrToUpdate] = oTable.oData.rows.filter((object) => {
						return object[attrToFilter] == booleanVal
					})[0].amount;
				return;
				default:
			    oTable.oData.rows.filter((object) => {
						return object[attrToFilter] == booleanVal
					}).forEach(function(iterObj) {
						graphCalcsTotalFigures.oData[attrToUpdate] += parseInt(iterObj.amount)
					});
			}
			graphCalcsTotalFigures.refresh();
		},
		
		performCalc:function() {
		this.doCalc('pay_or_receive',true,'toPay');
		this.doCalc('pay_or_receive',false,'toReceive');
		this.doCalc('paid_or_received',false,'pending');
		this.doCalc('paid_or_received',true,'completed');		
		graphCalcsTotalFigures.refresh();
		this.getView().setModel(graphCalcsTotalFigures, 'graphCalcsTotalFigures');		
        },
		
		
		// special thanks to 
		// https://sapui5.hana.ondemand.com/#/entity/sap.m.ViewSettingsDialog/sample/sap.m.sample.ViewSettingsDialog/code
		// View Setting Dialog opener
		_openDialog : function () {
			var oView = this.getView();
			// creates requested dialog if not yet created
			const sName = "Dialog";
			if (!this._mDialogs[sName]) {
				this._mDialogs[sName] = Fragment.load({
					id: oView.getId(),
					name: "sap.m.sample.sampleapp4.view.FilterViewDialog",
					controller: this
				}).then(function(oDialog){
					oView.addDependent(oDialog);
					return oDialog;
				});
			}
			this._mDialogs[sName].then(function(oDialog){
				// opens the requested dialog
				oDialog.open();
			});
		},

		// Opens View Settings Dialog
		handleOpenDialog: function () {
			this._openDialog();
		},
			
		handleConfirm: function (oEvent) {
			if (oEvent.getParameters().filterString) {
				oEvent.getParameters().filterItems.map(object =>{
					//console.log(object.mProperties.key);
					this.filterItems(object.mProperties.key);
				});
			}
		},
	
		filterItems : function(filterOption){
		//https://answers.sap.com/questions/12625140/clear-filters-and-sorts-in-sapuitabletable.html
		const oBinding = this.getView().byId('tbl').getBinding();
		if(filterOption == "")
		{
		//oBinding.aFilters = null;
		const oEmptyFilter = new sap.ui.model.Filter();
		oBinding.filter(oEmptyFilter);
		return;
		}
		else{
		let filterQuery = filterOption.split(" ");
		//const oFilter = new sap.ui.model.Filter("paid_or_received", "EQ", true);
		const oFilter = new sap.ui.model.Filter(filterQuery[0], filterQuery[1], filterQuery[2] == "true");
		aFilters.push(oFilter);
		}
		oBinding.filter(aFilters);
		},

        onBack: function() {
            sap.ui.getCore().byId("myApp").back();
        }
    });
});
