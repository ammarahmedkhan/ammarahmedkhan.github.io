     var jsonData = [{
         a: "1",
	b:"ammar"
     }, {
         a: "2",
	b:"ali"
     }, {
         a: "3",
	b:"omer"
     }, {
         a: "4",
	b:"saad"
     }, {
         a: "5",
	b:"waqar"
     }, {
         a: "6",
	b:"babar"
     }];
	
	
	
     var items = [];
     //items.push('a');items.push('a');items.push('a');
     var jsonModel = new sap.ui.model.json.JSONModel(jsonData);
     var oList = new sap.m.List({
                                  headerText  : "People Details",
                                  //mode        : "SingleSelect",
//mode        : "MultiSelect",
                                  showUnread : true,
                                  includeItemInSelection : true,
                                  delete      : function (){alert("item deleted")},
                                  select : function (e){
                                  items.push('a');
                                  //sap.m.MessageToast.show(e.getParameter("listItem"))}
                                  //sap.m.MessageToast.show(items)
                                  }
                                });
     oList.bindItems("/",new sap.m.ObjectListItem({title: "{b}"}));
     var iconBar = new sap.m.IconTabBar({
		items: 
[
new sap.m.IconTabFilter({text : "First tab",content: oList}),
new sap.m.IconTabFilter({text : "second tab"}),
new sap.m.IconTabFilter({text : "third tab"}),
new sap.m.IconTabFilter({text : "fourth tab"})
]
});


oList.setModel(jsonModel);     
//     oList.placeAt("content");
iconBar.placeAt("content");
