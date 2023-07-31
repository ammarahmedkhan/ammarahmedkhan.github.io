sap.ui.define([
    "sap/m/MessageToast",
    "sap/m/MenuItem",
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "../utils/utilFn"

], function(MessageToast,MenuItem, Controller, JSONModel, utilFn) {

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
    return Controller.extend("sap.m.sample.sampleapp4.controller.View7", {

        onInit: function() {
            this.getView().setModel(oTable, 'table');
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
		
		onMenuAction: function(oEvent) {
				var oItem = oEvent.getParameter("item"),
					sItemPath = "";

				while (oItem instanceof MenuItem) {
					sItemPath = oItem.getText() + " > " + sItemPath;
					oItem = oItem.getParent();
				}
				sItemPath = sItemPath.substr(0, sItemPath.lastIndexOf(" > "));

				MessageToast.show("Action triggered on item: " + sItemPath);
				switch(sItemPath){
				case 'Show Paid/Recieved':
					this.filterItems('paid_or_recieved');
				case 'Show All':
					this.filterItems('all');				
				case 'Show Pending':
					this.filterItems('pending');								
				}
				
			},
		filterItems : function(filterOption){
        /*     if (filterOption == "all") {
                jsonModel = new JSONModel(jsonData);
                this.getView().setModel(jsonModel);
                return;
            }
            const jsonDataFiltered = jsonData.filter(function(item) {
                if (item.status == status) return true
            });
            jsonModel = new JSONModel(jsonDataFiltered);
            this.getView().setModel(jsonModel); */
		},

        onBack: function() {
            sap.ui.getCore().byId("myApp").back();
        }
    });
});
