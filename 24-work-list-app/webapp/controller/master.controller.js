sap.ui.define(
    ["sap/ui/core/mvc/Controller"],//load controller
    function(oController){         //it returns controller object
        oController.extend("sap.ui.demo.controller.master",{//master controller
            onInit:function(){  
                console.log("master page controller");
            },
            onPress:function(oEvent){
                //first try to read the parameters of the event
                console.log("Event",oEvent.getParameters());
                //then we will see a parameter called listitem, so read that
                console.log("Event Parameter : list item", oEvent.getParameter("listItem"));
                //from it read the item number clicked by reading binding context path
                console.log("Binding Context Path :  ", oEvent.getParameter("listItem").getBindingContextPath());
                //pass it to the next method
                this.onNext(oEvent.getParameter("listItem").getBindingContextPath());
            },
            //how do we know selected Path is the argument here?
            //because we created it and we are calling that from onPress
            //why only direct binding to elements in detail view without /fruits?
            //because we are binding the path here
            onNext:function(selectedPath){
                console.log("Import Parameter : " , selectedPath);
                //get the view - this will give us master view
                console.log("Get current view : " , this.getView());
                //get its parent - this will give us App view
                console.log("Get its parent : " , this.getView().getParent());
                var oApp = this.getView().getParent();
                //point App view to page two
                console.log("Navigate to detail view : Appview.to->detailView");
                oApp.to("detailView");//this is the id created in Component.JS
                //check oApp.getPages() - it gives master View and detail View
                //get Pages
                console.log("Get pages of App view: " , oApp.getPages());
                //get the first page ie, master page
                console.log("Get first page : " , oApp.getPages()[0]);
                //get the second page ie, detail page
                console.log("Get seond page",oApp.getPages()[1]);
                //master page
                var oView1 = oApp.getPages()[0];
                //detail page
                var oView2 = oApp.getPages()[1];
                //get contents of page two - this will give us the Page
                console.log("Get first level content of detail view : " , oView2.getContent());
                //get the pages contents - this will give us Object Header
                console.log("Go one level inside: " , oView2.getContent()[0].getContent());
                //bind the path ie, the item selected to Object Header
                console.log("Object Header.bindElement->path");
                oView2.getContent()[0].getContent()[0].bindElement(selectedPath);
            }
        })
    }
);