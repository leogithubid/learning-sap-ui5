sap .ui.define([
"sap/ui/core/UIComponent" //the component we are loading is UIComponent
], function(UIComponent) {
    return UIComponent.extend("sap.ui.demo.Component",{
        //four sections of UIComponent
        //1-metadata
        metadata:{},
        //2-initialisation
        init:function(){
            UIComponent.prototype.init.apply(this);
        },
        //3-create content
        createContent:function(){
            //create app View
            var appView = new sap.ui.core.mvc.XMLView("appView",{
                viewName : "sap.ui.demo.view.App",
                type     : "XMLView"
            });
            //return view
            //return appView;
            //create login page View
            var loginPageView = new sap.ui.core.mvc.XMLView("loginPageView",{
                viewName : "sap.ui.demo.view.loginPage",
                type     : "XMLView"
            });
            // Add login page to App view's - <App>
            appView.byId("idApp").addPage(loginPageView);
            //return  App View
            return appView;
        },
        //4-destroy
        destroy:{}
    });
});