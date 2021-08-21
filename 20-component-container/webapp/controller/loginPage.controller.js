sap.ui.define(
    ["sap/ui/core/mvc/Controller"],function(Controller){
        return Controller.extend("sap.ui.demo.controller.main",{
            clickLogin:function(){
                alert("Welcome to UI5");
            }
        });
});