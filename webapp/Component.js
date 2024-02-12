sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel"
], (UIComponent, JSONModel, ResourceModel) => {
    "use strict";

    return UIComponent.extend("kadyrgulov.walkthrough.Component", {

        // The metadata section defines a reference to the root view
        // the component now manages the display of the app view
        metadata : {
            "interfaces": ["sap.ui.core.IAsyncContentCreation"],
            "rootView": {
                "viewName": "kadyrgulov.walkthrough.view.App",
                "type": "XML",
                "id": "app"
            }
        },


        init() {
            // call the init function of the parent
            UIComponent.prototype.init.apply(this, arguments);

            // set data model
            const oData = {
                recipient : {
                    name : "World"
                }
            };

            const oModel = new JSONModel(oData);
            this.setModel(oModel);

            // set i18n model
            const i18nModel = new ResourceModel({
                bundleName : "kadyrgulov.walkthrough.i18n.i18n"
            });
            this.setModel(i18nModel, "i18n");

        }
    })
})