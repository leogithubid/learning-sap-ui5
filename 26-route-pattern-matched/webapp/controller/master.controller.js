sap.ui.define(
    ["sap/ui/core/mvc/Controller"],function(oController){
        oController.extend("sap.ui.demo.controller.master",{
            onInit:function(){

            },
            onPress:function(oEvent){
                console.log("onPress");
                //we have to get the Router - how to get it? 
                //Router is defined in Component.JS so first we have to that
                console.log(this.getOwnerComponent());
                //from this get the router
                console.log(this.getOwnerComponent().getRouter());
                //using the router navigate to another target
                //we are changing the target details pattern to fruit/{fruitId}
                //and fruit id we will read from the Event's binding context
                //this.getOwnerComponent().getRouter().navTo("detail");

              console.log(oEvent.getParameters());
              console.log(oEvent.getParameter("listItem"));
              console.log(oEvent.getParameter("listItem").getBindingContextPath());

              //from the binding path, let's get the fruit number by splitting
              console.log(oEvent.getParameter("listItem").getBindingContextPath().split("/"));
              //the above statement creates an array of which 3rd item is the number
              console.log(oEvent.getParameter("listItem").getBindingContextPath().split("/")[2]);

            //navigate to fruit/{fruitId}
            this.getOwnerComponent().getRouter().navTo("detail",{
                fruitId : oEvent.getParameter("listItem").getBindingContextPath().split("/")[2]
            });
            //thus we can call the even RoutePatternMatched


              //this.onNext(oEvent.getParameter("listItem").getBindingContextPath());
            },
            //how do we know selected Path is the argument here?
            //because we created it and we are calling that from onPress
            //why only direct binding to elements in detail view without /fruits?
            //because we are binding the path here
            onNext:function(selectedPath){
/*                 console.log(selectedPath);
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
                oView2.getContent()[0].getContent()[0].bindElement(selectedPath); */
            }
        })
    }
);