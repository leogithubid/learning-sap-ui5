sap.ui.jsview("home.view.main",{ //view location
    getControllerName:function(){ //standard methods 
        return "home.controller.main" //controller location
    },
    createContent:function(oController){//the above returns a controller object
        var oButton = new sap.m.Button("buttonClickMe",{//create a button
            text : "Click Me", 
            press : oController.welcome //this method is defined in the controller
        });
        var oInput = new sap.m.Input("inputName",{//create input field
            placeholder : "Please enter name here",
            width : "500px"
        })
        return [oInput,oButton];//returning the UI controllers
    }
});