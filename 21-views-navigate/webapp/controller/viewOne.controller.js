sap.ui.define(
    ["sap/ui/core/mvc/Controller"],
    function(Controller){
        return Controller.extend("sap.ui.demo.viewOne",{
            goNext:function(){
                console.log(this.getView());//this will give us view one
                console.log(this.getView().getParent());//this will go one level above to  app view
                this.getView().getParent().to("viewTwo");//from app view navigate to view to
            }
        });
});