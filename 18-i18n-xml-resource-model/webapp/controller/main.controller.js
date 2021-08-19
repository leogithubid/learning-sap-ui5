sap.ui.define([
"sap/ui/core/mvc/Controller",//default for all controllers in SAP UI5
"home/model/model"           //loading the JS file that will create models
], function(oController,modelJS) { //look at the second argument - that points to model.JS fiel
    return oController.extend("home.controller.main",{
        //in the initialisaiton of the controller create JSON model
        onInit:function(){
            console.log("controller");
            //use the create JSON Model method in the model.JS and load data
            //step 1 and 2 are inside this model.JS file function
            var modelJSON = modelJS.createJSONModel("model/mockData/mockData.json");
            //set the model
            sap.ui.getCore().setModel(modelJSON);
        }
    });    
});