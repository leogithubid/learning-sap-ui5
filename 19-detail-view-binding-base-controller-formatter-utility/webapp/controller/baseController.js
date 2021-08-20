//create a base Controller
//the main controller will inherit from this
//so instead of loading sap/ui/core/mvc/Controller, the main controller will load this JS
sap.ui.define([
"sap/ui/core/mvc/Controller",
"home/util/utility" //load utility class for formatting the values
], function(oController,utilityJS) {
 
    return oController.extend("home.controller.baseController",{ //note the return address here
        formatter:utilityJS , //formatter is a property - that links to utility JS now
        //this is for the get detail view
        //this we will attach to the press event on selection
        getDetails:function(oEvent){
            //to get the Event parameters - look at the SDK 
            console.log(oEvent.getParameter("rowContext").getPath());
            //get the form
            console.log(this.getView().byId("empForm"));
            //so bind the path to the form
            this.getView().byId("empForm").bindElement(oEvent.getParameter("rowContext").getPath());
        }
    })
    
});