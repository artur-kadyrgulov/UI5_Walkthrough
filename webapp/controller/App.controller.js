sap.ui.define([
    "sap/ui/core/mvc/Controller"
 ], (Controller) => {
    "use strict";
 
    return Controller.extend("kadyrgulov.walkthrough.controller.App", {
        onShowHello() {
            alert("Hello World");
        }
    });

 });