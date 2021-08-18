sap.ui.define([
"sap/ui/core/mvc/Controller"
], function(oController) {
    return oController.extend("home.main.controller",{
        onInit:function(){
            console.log("Step1 - Create model object");
            var oModel = new sap.ui.model.json.JSONModel();
            console.log(oModel);
            console.log("Step2 - Load Data");
            oModel.loadData("model/employeeData.json");
            console.log(oModel);
            console.log("Step3 - Set Model to the core");
            sap.ui.getCore().setModel(oModel);//What if there are multiple models?
           //this.getView().setModel(oModel);
           //this.getView().byId("")
            console.log(sap.ui.getCore());
            console.log("Step4-Bind the data in view or controller");
            //There are 4 syntaxes for this - 2 at controller level, 2 at view level - so please check out
            //view syntax too, now let's do it !
            this.getView().byId("inputSalary").bindValue('/employeeStructure/salary');
            this.getView().byId("inputCurrency").bindProperty("value","/employeeStructure/currency");
        }
    })   
});