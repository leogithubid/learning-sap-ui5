sap .ui.define([
"sap/ui/model/json/JSONModel" //load the JSON Model
], function(JSONModel) { //this will have the JSON Model
    'use strict';
    console.log("model");
    //return a list of functions that creaes models when this file is referenced
    return{
        //this funciton will return a JSON Model
        //it will load data from the file in the filePath
        createJSONModel:function(filePath){
            console.log("JSONModel");
            var JSONModel = new JSONModel();
            JSONModel.loadData(filePath);
            return JSONModel;
        }
    }
});