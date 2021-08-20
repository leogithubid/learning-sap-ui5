sap.ui.define([
"home/controller/baseController", //loading base controller JS instead of Controller from UI5
"home/model/model"                //loading Model JS
], function(baseController,modelJS) {

    return baseController.extend("home.controller.main",{//return controller address

        onInit:function(){
        //create JSON Model
            var oJSONModel = modelJS.createJSONModel("model/mockData/mockData.json");
            sap.ui.getCore().setModel(oJSONModel);
        //create Resource Model
            var oResourceModel = modelJS.createResourceModel("i18n/i18n.properties");
            sap.ui.getCore().setModel(oResourceModel,"i18n");
        }
    });
    
});