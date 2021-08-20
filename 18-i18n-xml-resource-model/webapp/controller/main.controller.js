sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "home/model/model"
    ], function(oController,modelJS) {
        return oController.extend("home.controller.main",{
    /* We have outsourced model creation logic to MODEL.JS file
    Thus we can reuse the file and create multiple models just by passing the JSON file path
    Do check out model.JS file !!
    Here, then we load the file as a dependency, this gives us modelJS to play with
    Then we use it to call the function createModel and load it with data
    And then set it to the core  */
            onInit:function(){
                console.log("controller");
                oModelOne = modelJS.createJSONModel("model/mockData/mockData.json");
                sap.ui.getCore().setModel(oModelOne);
                oResourceModel = modelJS.createResourceModel("i18n/i18n.properties");
                sap.ui.getCore().setModel(oResourceModel,"i18n");
            },
            flipModel:function(){
               var oModel = modelJS.createXMLModel("model/mockData/mockData3.xml");
               sap.ui.getCore().setModel(oModel);
                
            }
        });
        
    });
    
    