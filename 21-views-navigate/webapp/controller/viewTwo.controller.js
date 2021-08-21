sap.ui.define(
    ["sap/ui/core/mvc/Controller"],
    function(Controller){
        return Controller.extend("sap.ui.demo.viewTwo",{
            goBack:function(){
                console.log(this.getView());//this will get us view two
                console.log(this.getView().getParent());//this will go one level above to app id
                this.getView().getParent().to("viewOne");//from app view navigate to view one
            }
        });
});