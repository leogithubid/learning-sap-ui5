sap.ui.define([
"sap/ui/core/mvc/Controller"
], function(oController) {
    oController.extend("home.controller.main",{
        welcome:function(){
            //from now on we should use this.getView()
            alert(this.getView().byId("inputName").getValue());
        }
    });
});