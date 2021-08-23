sap.ui.define(["sap/ui/core/UIComponent"],function(UIComponent){
    return UIComponent.extend("sap.ui.demo.Component",{
        metadata:{
            manifest : "json"
        },
        init:function(){
            UIComponent.prototype.init.apply(this);
        },
        createContent:function(){
            var appView = new sap.ui.core.mvc.XMLView("appView",{
                viewName : "sap.ui.demo.view.App",
                type : "XML"
            });
            var masterView = new sap.ui.core.mvc.XMLView("masterView",{
                viewName : "sap.ui.demo.view.master",
                type : "XML"
            });
            var detailView = new sap.ui.core.mvc.XMLView("detailView",{
                viewName : "sap.ui.demo.view.detail",
                type     : "XML"
            });
            appView.byId("splitApp").addMasterPage(masterView).addDetailPage(detailView);
            return appView;
        }
    });
});