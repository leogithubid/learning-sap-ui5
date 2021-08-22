//scaffolding template
//UIComponent
sap.ui.define(["sap/ui/core/UIComponent"],function(UIComponent){
    //return UIComponent.exted
    return UIComponent.extend("sap.ui.demo.Component",{
        //4 hook methods
        init:function(){
            //this I have to learn because the standard
            UIComponent.prototype.init.apply(this);
        },
        createContent:function(){
            //instantiate appView
            var appView = new sap.ui.core.mvc.XMLView("appView",{
                viewName : "sap.ui.demo.view.App",
                type : "XML"
            });
             //instantiate viewOne
            var viewOne = new sap.ui.core.mvc.XMLView("viewOne",{
                viewName : "sap.ui.demo.view.viewOne",
                type : "XML"
            });
            //instantiate viewTwo
            var viewTwo = new sap.ui.core.mvc.XMLView("viewTwo",{
                viewName : "sap.ui.demo.view.viewTwo",
                type : "XML"
            });
            //addPage view one and view two
            //appView.byId("appContainer").addPage(viewOne).addPage(viewTwo);
            //debugger;
            var appContainer = appView.byId("appContainer");
            appContainer.addPage(viewOne).addPage(viewTwo);
            //return app view
            return appView;
        },
        //forgot?
        destroy:function(){

        }
    });
});