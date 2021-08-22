sap.ui.define(
    ["sap/ui/core/UIComponent"],//load UI component
    function(UIComponent){      //the above will return an object of UIComponent
        return UIComponent.extend("sap.ui.demo.Component",{
            metadata:{
                manifest : "json" //here we are saying our app descriptor is there - manifest.json
            },
        //two main things in the component container
        //1 - init
        //here its standard - just instantiate base class of UIComponent
        init:function(){
            UIComponent.prototype.init.apply(this);
        },
        //2 - create content 
        //here we instantiate the views and return the final view object
        createContent:function(){
            //first create app View
            var appView = new sap.ui.core.mvc.XMLView("appView",{ //id
                viewName : "sap.ui.demo.view.App", //location of the view
                type : "XML"                       //type
            });
            //second create master view
            var masterView = new sap.ui.core.mvc.XMLView("masterView",{
                viewName : "sap.ui.demo.view.master",
                type : "XML"
            });
            //third create detail view
            var detailView = new sap.ui.core.mvc.XMLView("detailView",{
                viewName : "sap.ui.demo.view.detail",
                type     : "XML"
            });
            //app View has an App controller - it has id appContainer
            //so get the the App controller
            //then add pages one by one
            appView.byId("appContainer").addPage(masterView).addPage(detailView);
            return appView;
        }
    });
});