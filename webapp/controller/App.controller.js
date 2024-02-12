sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
 ], (Controller, MessageToast) => {
    "use strict";
 
    return Controller.extend("kadyrgulov.walkthrough.controller.App", {
        onShowHello() {
            MessageToast.show("Hello World");
        }
    });

 });