sap.ui.define([
"sap/ui/core/mvc/Controller" //load controller from sap libraries
], function(oController) {   //call back function
    return oController.extend("home.controller.main",{ //return controller address
        //this method is attached to press event of button
        checkLogin:function(oEvent){

            //this is usual way of getting the values entered, Let's try oEvent
/*             var userName = this.getView().byId("inputUserName").getValue();
            var password = this.getView().byId("inputPassword").getValue();
            if (userName == "admin" && password =="password"){
                alert("welcome to UI5");
            }
            else{
                alert("Incorrect user name or password, please try again");
            } */
            console.log(oEvent);
            console.log(oEvent.getParameters());
            console.log(oEvent.getSource());
            console.log(oEvent.getId());
            console.log(oEvent.getParameter("id"));
            console.log(oEvent.getParameter("text"));
        },
        //These are HOOK methods or events
        // Similar to PBO,PAI
        //Initialisation, At Selection Screent etc
        onInit:function(){
            console.log("Initializing");
        },
        onExit:function(){
            console.log("Exiting");
        },
        onBeforeRendering:function(){
            console.log("Before Rendering");
        },
        onAfterRendering:function(){
            console.log("After Rendering");
        }
        
    });
});