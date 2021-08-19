sap.ui.define([
"sap/ui/core/mvc/Controller"
], function(oController) {
    return oController.extend("home.controller.main",{
        onInit:function(){
            //create model object
            var oModel = new sap.ui.model.json.JSONModel();
            //load data
            oModel.loadData("model/employeeData.json");
            //set model
            sap.ui.getCore().setModel(oModel);
            //bind
        }
    });    
});