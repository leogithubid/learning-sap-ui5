sap.ui.define(
    ["sap/ui/core/UIComponent"],function(UIComponent){
        return UIComponent.extend("sap.ui.demo.Component",{
            //here we give the manifest json file
            metadata:{
                manifest : "json"
            },
            //this is pretty much standard code
            onInit:function(){
                UIComponent.prototype.init.apply(this);
            },
            //instantiate views
            createContent:function(){
                //app view
                var appView = new sap.ui.core.mvc.XMLView("appView",{
                    viewName : "sap.ui.demo.view.App",
                    type : "XML"
                });
                //fruits view
                var fruitsView = new sap.ui.core.mvc.XMLView("fruitsView",{
                    viewName : "sap.ui.demo.view.fruits",
                    type : "XML"
                });
                //get the App container and then add the Page
                appView.byId("content").addPage(fruitsView);
                return appView;
            },
            //search Event Handler in view controller
        });
});
