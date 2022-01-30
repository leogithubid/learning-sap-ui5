//scaffolding template
sap.ui.define(
    ["sap/ui/core/mvc/Controller"],//load dependencies
    function(oController){//the dependencies pass the objects to this
        return oController.extend("home.controller.main",{
            onInit:function(){
                console.log("init");
                //create model object
                var oModel = new sap.ui.model.json.JSONModel();
                //load data
                oModel.loadData("model/employeeData.json");
                console.log(oModel);
                //set it to the core
                sap.ui.getCore().setModel(oModel);
                //bind salary and currency here
                console.log("view",this.getView());
                this.getView().byId("inputSalary").bindValue('/employeeStructure/salary');
                this.getView().byId("inputCurrency").bindProperty("value","/employeeStructure/currency");
            },
            onBeforeRendering:function(){
                console.log("before");
            },
            onAfterRendering:function(){
                console.log("After");
            },
            onExit:function(){
                console.log("Exit");
            },
            //here write whatever you want - all the functionalities
            welcomeBack : function(oEvent){
/*                 console.log(oEvent);
                console.log(oEvent.getParameters());
                console.log(oEvent.getSource());
                console.log(oEvent.getId());
                console.log(oEvent.getParameter("id"));
                console.log(oEvent.getParameter("text"));
                //how to get the name? 
                //everything is in the core - so read from the core
                //var oCore = sap.ui.getCore();
                //var oInput = oCore.byId("idInput").getValue();
                //after you change it to XML View, you have to read it from the view
                console.log(sap.ui.getCore());
                var oInput = this.getView().byId("idInput").getValue();
                alert(` Hello ${oInput}, Welcome back to UI5 from JS View !`); */
            }
        });//extend controller
    });