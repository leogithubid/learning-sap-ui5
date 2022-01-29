//scaffolding template
sap.ui.jsview("home.view.main",{ //view path
    //get controller name
    getControllerName:function(){
        return "home.controller.main";//return address of controller
    },
    //create content
    createContent:function(oController){ //using the controller build content
        var oInput = new sap.m.Input("idInputField",{
            width : "500px",
            placeholder: "Please enter your name here"
        });
        //oInput.placeAt("inputField");
        var oButton = new sap.m.Button("idButton",{
            text : "Click Me",
            icon : "sap-icon://hello-world",
            press : oController.welcomeBack
        });
        //oButton.placeAt("button");
        return [oInput,oButton];//never forget to return the view or the content of view
    }
    })