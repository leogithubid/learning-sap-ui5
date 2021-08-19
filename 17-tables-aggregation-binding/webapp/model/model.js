sap.ui.define([
"sap/ui/model/json/JSONModel"
], function(JSONModel) {
   return {
       /* We have moved Model creation logic into this JS file
       All JS file in SAP UI5 has to follow the scaffolding - sap.ui.define
       so we load the dependency sap-ui-model-json-JSON model first
       This gives us a JSONModel to play with 
       Then we create a function that accepts a file path
       It first creates a JSONModel object and loads it will data from the file Path
       Then it returns that object 
       This function will be called from the controller */
       createModel:function(filePath){
           var oModel = new JSONModel();
           oModel.loadData(filePath);
           return oModel;
       }
   };
    
});