sap.ui.define([
    "sap/ui/core/mvc/Controller"
    ], function(oController) {
        
        return oController.extend("sap.ui.demo.controller.detail",{
            onInit:function(){
                console.log("init");
            },
            goBack:function(oEvent){  
                console.log(oEvent);
                console.log("go back");
                this.getView().getParent().to("masterView");
            }
        });
    });