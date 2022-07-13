({        
    fetchAccounts : function(component, event, helper) {
        component.set('v.mycolumn', [
            {label: 'Account Name', fieldName: 'Name',editable:'true',sortable:true, type: 'text'},
            {label: 'Website', fieldName: 'Website',editable:'true', type: 'Text'},
            {label: 'Account Owner', fieldName: 'OwnerId',editable:'true',sortable:true, type: 'text'},
            {label: 'Phone', fieldName: 'Phone',editable:'true', type: 'Text'},
            {label: 'Annual Revenue', fieldName: 'AnnualRevenue',editable:'true', type: 'text'}            
        ]);
        var action = component.get("c.GetAccount");
        action.setCallback(this, function(response){
            component.set("v.AccountList", response.getReturnValue());
        });
        $A.enqueueAction(action);
    },
    onSave : function (component, event, helper) {
       helper.saveDataTable(component, event, helper);
   },
  
   handleSort: function(component,event,helper){
       var sortBy = event.getParam("fieldName");
  
       var sortDirection = event.getParam("sortDirection");
  
       component.set("v.sortBy",sortBy);
       component.set("v.sortDirection",sortDirection);
        
       helper.sortData(component,sortBy,sortDirection);
       
   },
     doSearch:function(component, event, helper){
        var actionFilter= component.find("fName").get("v.value");
      helper.getData(component, actionFilter);
   }
   
})