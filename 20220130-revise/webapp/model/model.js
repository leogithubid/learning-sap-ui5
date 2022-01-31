sap.ui.define([
"sap/ui/model/json/JSONModel",
"sap/ui/model/resource/ResourceModel",
"sap/ui/model/xml/XMLModel"
], function(JSONModel,ResourceModel,XMLModel) {
    
    return {
        createModel:function(filePath){
            //create model
            var oModel = new JSONModel();
            //load data
            oModel.loadData(filePath);
            //return model
            return oModel;
        },
           //create i18n
           createResourceModel:function(filePath){
            var oModel = new ResourceModel({
                bundleUrl : filePath
            });
            return oModel;
           },
        createXMLModel:function(filePath){
            var oModel = new XMLModel();
            oModel.loadData(filePath);
            return oModel;
        }
    }
    
});