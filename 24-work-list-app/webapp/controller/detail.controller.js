sap.ui.define([
"sap/ui/core/mvc/Controller"//controller
], function(oController) {  //use the controller object
    
    return oController.extend("sap.ui.demo.controller.detail",{ //give the address
        //initialisation
        onInit:function(){
            console.log("detail view controller - init");
        },
        //this will be linked to go back icon of the Object List
        goBack:function(oEvent){  
            console.log("go back");
            //log the event for fun
            console.log("Go Back Event : ", oEvent);
            console.log("Go Back Event Parameters : ", oEvent.getParameters());
            //get view - this will get us detail view
            console.log("Get current view", this.getView());
            //get its parent - this will get us App view
            console.log("Get views parent",this.getView().getParent());
            //then navigate to first view ie, master view
            console.log("Navigate from Detail View's parent ie, App view to Master View");
            this.getView().getParent().to("masterView");
        }
    });
});