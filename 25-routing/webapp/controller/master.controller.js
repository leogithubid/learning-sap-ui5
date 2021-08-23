sap.ui.define(
    ["sap/ui/core/mvc/Controller"],function(oController){
        oController.extend("sap.ui.demo.controller.master",{
            onInit:function(){

            },
            onPress:function(oEvent){
                console.log(oEvent.getParameters());
                console.log(oEvent.getParameter("listItem"));
                console.log(oEvent.getParameter("listItem").getBindingContextPath());
                this.onNext(oEvent.getParameter("listItem").getBindingContextPath());
            },
            //how do we know selected Path is the argument here?
            //because we created it and we are calling that from onPress
            //why only direct binding to elements in detail view without /fruits?
            //because we are binding the path here
            onNext:function(selectedPath){
                console.log(selectedPath);
                //get App view
                console.log(this.getView());
                console.log(this.getView().getParent());
                console.log(this.getView().getParent().getParent());
                console.log(this.getView().getParent().getParent().getMasterPages());
                console.log(this.getView().getParent().getParent().getDetailPages());
                var oView2 = this.getView().getParent().getParent().getDetailPages()[0];
                console.log(oView2);
                //get contents of page two
                console.log(oView2.getContent());
                console.log(oView2.getContent()[0].getContent());
                oView2.getContent()[0].getContent()[0].bindElement(selectedPath);
            }
        })
    }
);