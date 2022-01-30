sap.ui.define([
"sap/ui/model/json/JSONModel"
], function(JSONModel) {
    
    return {
        createModel:function(filePath){
            //create model
            var oModel = new JSONModel();
            //load data
            oModel.loadData(filePath);
            //return model
            return oModel;
        }
    }
    
});