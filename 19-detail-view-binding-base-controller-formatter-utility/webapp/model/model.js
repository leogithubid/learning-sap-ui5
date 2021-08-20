sap.ui.define([
"sap/ui/model/resource/ResourceModel", //load resource model
"sap/ui/model/json/JSONModel"          //load JSON Model
], function(ResourceModel,JSONModel) {
    //this function will return functions
    //which in turn returns the objects of the models
    return {
        //this method returns Resource Model
        createResourceModel:function(filePath){
            var oResourceModel = new sap.ui.model.resource.ResourceModel({
                bundleUrl : filePath
            });
            return oResourceModel;
        },
        //this method returns JSON Model
        createJSONModel:function(filePath){
            var oJSONModel = new sap.ui.model.json.JSONModel();
            oJSONModel.loadData(filePath);
            return oJSONModel;
        }
    }
    
});