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
                var oApp = this.getView().getParent();
                //point App view to page two
                oApp.to("detailView");//this is the id created in Component.JS
                //check oApp.getPages() - it gives master View and detail View
                //get Pages
                console.log(oApp.getPages());
                console.log(oApp.getPages()[0]);
                console.log(oApp.getPages()[1]);
                var oView1 = oApp.getPages()[0];
                //console.log(oView1);
                var oView2 = oApp.getPages()[1];
                //console.log(oView2);
                //get contents of page two
                console.log(oView2.getContent());
                console.log(oView2.getContent()[0].getContent());
                oView2.getContent()[0].getContent()[0].bindElement(selectedPath);
            }
        })
    }
);