sap.ui.define([
    'sap/m/MessageBox',
    'sap/m/Button',
    'sap/m/Dialog',
    'sap/m/Label',
    'sap/m/MessageToast',
    'sap/m/Text',
    'sap/m/TextArea',
    'sap/m/Input',
    'sap/ui/layout/HorizontalLayout',
    'sap/ui/layout/VerticalLayout',
    'sap/m/ButtonType',
    'sap/ui/core/mvc/Controller',
    'sap/ui/core/BusyIndicator',
    'sap/ui/model/json/JSONModel'

], function(MessageBox, Button, Dialog, Label, MessageToast, Text, TextArea, Input, HorizontalLayout, VerticalLayout, ButtonType, Controller, BusyIndicator, JSONModel) {
    "use strict";
    let jsonData;
    let jsonModel;
    let dialogsObj = {};
    let sampleappController = Controller.extend("sap.m.sample.sampleapp4.controller.View1", {
        handleLinkPress: function(evt) {},

        onInit: function() {

            var oModel;
            jsonData = [{
                noteId: "note-1",
                status: "done",
				title:"note 1",
				note:"to get you started"
            }, {
                noteId: "note-2",
                status: "in-progress",
				title:"note 2",
				note:"to add more work to your life"
            }, {
				noteId: "note-3",
                status: "in-progress",
				title:"note 3",
				note:"to see if you can tackle more"
            }];
            jsonModel = new JSONModel(jsonData);

            this.getView().setModel(jsonModel);

        },
        onBack: function() {

			this.getOwnerComponent().getRouter().navTo('main');

        },

        getIcon: function(status) {

            switch (status) {
                case "done":
                    return 'sap-icon://accept';
                case "in-progress":
                    return 'sap-icon://accelerated';
                default:
                    return 'sap-icon://action';
            }
        },

        filterItems: function(status) {
            if (status == "") {
                jsonModel = new JSONModel(jsonData);
                this.getView().setModel(jsonModel);
                return;
            }
            const jsonDataFiltered = jsonData.filter(function(item) {
                if (item.status == status) return true
            });
            jsonModel = new JSONModel(jsonDataFiltered);
            this.getView().setModel(jsonModel);
        },
        showDone: function() {
            this.filterItems("done");
        },
        showInProg: function() {
            this.filterItems("in-progress");
        },
        showAll: function() {
            this.filterItems("");
        },
        addNote: function() {
			this.showAll();
			const noteId = "note-" + (jsonModel.oData.length+1);
            jsonModel.oData.push({
                noteId: noteId,
                status: "in-progress",
				title:"",
				note:""
            });
            jsonModel.refresh();
			this.onSubmitDialog(null,noteId)
        },

        press: function(oEvent) {
            var oItem = oEvent.getSource();
            var oCtx = oItem.getBindingContext();
            var path = oCtx.getPath();
            MessageBox.information("Information", {
                title: "you clicked on",
                id: "messageBoxId1",
                details: jsonData[path.substr(1)]["noteId"],
                contentWidth: "100px"
            });
        },

        onSubmitDialog: function(oe,noteId) {
			var name;
			if(noteId=="" || noteId == undefined){
            var oItem = oe.getSource();
            var oCtx = oItem.getBindingContext();
            var path = oCtx.getPath();
            name = jsonData[path.substr(1)]["noteId"];
            var dialog = {};
			console.log(name);
			}else{
			name = noteId;
			}
            if (dialogsObj[name] != undefined) {
                dialog = dialogsObj[name];
            } else {
                dialog = this.createDialog(name);
                dialogsObj[name];
            }
            dialog.open();
        },

        updateStatus: function(index, status) {
            jsonModel.oData[index]["status"] = status;
            jsonModel.refresh();
        },

        createDialog: function(name) {
            const that = this;
            var dynamicId = name + "-textArea";
            const index = jsonData.findIndex(element => element.noteId == name);
			const noteBinding = "{/" + index.toString() + "/note}";
			const titleBinding = "{/" + index.toString() + "/title}";
            var dialog = new Dialog({
                id: name,
                title: 'Confirm',
                type: 'Message',
                content: [
                    new Label({
                        text: 'Are you sure you want to submit your comments?',
                        labelFor: dynamicId
                    }),
					
					new Input({
                        value: titleBinding,
                    }),
					
                    new TextArea(dynamicId, {
                        liveChange: function(oEvent) {
                            const sText = oEvent.getParameter('value');
                            const parent = oEvent.getSource().getParent();
                            //parent.getBeginButton().setEnabled(sText.length > 0);
                        },
						value:noteBinding,
						valueLiveUpdate:true,
                        width: '100%',
                        placeholder: 'Add note: ' + name
                    }, ),
                    new Button("doneId", {
                        text: "done",
                        press: function() {
                            that.updateStatus(index, "done");
                            dialog.close();
                        }
                    }),
                    new Button("inprogId", {
                        text: "in-progress",
                        press: function() {
                            that.updateStatus(index, "in-progress");
                            dialog.close();
                        }
                    })
                ],
/*                 beginButton: new Button({
                    type: ButtonType.Emphasized,
                    text: 'Submit',
                    enabled: false,
                    press: function() {
                        var sText = sap.ui.getCore().byId(dynamicId).getValue();
                        MessageToast.show('Note is: ' + sText);
                        dialog.close();
                    }
                }), */
                endButton: new Button({
                    text: 'Save/Close',
                    press: function() {
                        dialog.close();
                    }
                }),
                afterClose: function() {
                    dialog.destroy();
                }
            }).setModel(jsonModel);
            return dialog;
        }


    });

    return sampleappController;

});