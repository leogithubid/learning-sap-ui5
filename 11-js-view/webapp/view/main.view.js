//scaffolding template
sap.ui.jsview("home.view.main",{ //view path
//get controller name
getControllerName:function(){
    return "home.controller.main";//return address of controller
},
//create content
createContent:function(oController){ //using the controller build content
    var oButton = new sap.m.Button("buttonClickMe",{
        press:function(){
            alert("Hello I am JS View");
        },
        text : "Click Me"
    });
    return oButton;//never forget to return the view or the content of view
}
})