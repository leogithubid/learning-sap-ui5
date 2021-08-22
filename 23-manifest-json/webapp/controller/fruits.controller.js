sap.ui.define(
    ["sap/ui/core/mvc/Controller"],function(oController){
        return oController.extend("sap.ui.demo.controller.viewOne",{
            onSearch : function(oEvent){
                //get user input
                console.log(oEvent);
                console.log(oEvent.getParameters());
                var userInput = oEvent.getParameter("query");
                console.log(userInput);
                //get list object
                var fruitsList = this.getView().byId("fruitsList");
                console.log(this.getView());
                console.log(fruitsList);
                //get binding
                var itemsBinding = fruitsList.getBinding("items");
                console.log(itemsBinding);
                //create filter
                var filter = new sap.ui.model.Filter("name",sap.ui.model.FilterOperator.EQ,userInput);
                console.log(filter);
                //attach filter to binding
                itemsBinding.filter([filter]);
            }
        });
    }
);