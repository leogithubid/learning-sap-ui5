//scaffolding template
sap.ui.define(
    ["sap/ui/core/mvc/Controller"],//load dependencies
    function(oController){//the dependencies pass the objects to this
        return oController.extend("home.controller.main",{
            //here write whatever you want - all the functionalities
            welcomeBack : function(){
                //how to get the name? 
                //everything is in the core - so read from the core
                var oCore = sap.ui.getCore();
                var oInput = oCore.byId("idInputField").getValue();
                alert(` Hello ${oInput}, Welcome back to UI5 from JS View !`);
            }
        });//extend controller
    });