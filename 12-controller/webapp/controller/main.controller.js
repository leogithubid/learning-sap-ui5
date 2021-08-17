//scaffolding template
sap.ui.define([
    "sap/ui/core/mvc/Controller" //load the controller
], function(oController) {
    return oController.extend("home.controller.main",{ //controller path
        //this is a new function 
        //this function will be attached to the press event of the button
        //go to view and see how that's done
        welcome:function(){
            var oCore = sap.ui.getCore();//get the core
            var oInput = oCore.byId("inputName").getValue();//get the input
            //alert(oInput);//raise in alrert
            alert(sap.ui.getCore().byId("inputName").getValue());//chaining
        }
    });
});