sap.ui.define(
    ["sap/ui/core/UIComponent"],//load UI component
    function(UIComponent){
        return UIComponent.extend("sap.ui.demo.Component",{ //return
            //4 - sections
            //1 - metadata
            //2 - init
            init:function(){
                UIComponent.prototype.init.apply(this);
            },
            //3 - create content
            createContent:function(){
                //create app view
                var appView = new sap.ui.core.mvc.XMLView("appView",{
                    viewName : "sap.ui.demo.view.app",
                    type : "XML"
                });
                //create view one
                var viewOne = new sap.ui.core.mvc.XMLView("viewOne",{
                    viewName : "sap.ui.demo.view.viewOne",
                    type : "XML"
                });
                //create view two
                var viewTwo = new sap.ui.core.mvc.XMLView("viewTwo",{
                    viewName : "sap.ui.demo.view.viewTwo",
                    type : "XML"
                });
                //add view one and view two
                appView.byId("idApp").addPage(viewOne).addPage(viewTwo);
                return appView;
            },
            //destroy
            destroy:function(){

            }
        });
});