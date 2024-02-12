sap.ui.define([
    "sap.ui.core/mvc/XMLView"
], (XMLView) => {
	"use strict";

    XMLView.create({
        viewName: "kadyrgulov.walkthrough.view.App"
    }).then((oView) => oView.placeAt("content"));
});