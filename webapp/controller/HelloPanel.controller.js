sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], (Controller, MessageToast) => {
    "use strict";

    return Controller.extend("kadyrgulov.walkthrough.controller.HelloPanel", {
        onShowHello() {
            // read msg from i18n model
            const oBundle = this.getView().getModel("i18n").getResourceBundle();
            const sRecipient = this.getView().getModel().getProperty("/recipient/name");
            const sMsg = oBundle.getText("helloMsg", [sRecipient]);

            MessageToast.show(sMsg);
        },

        onOpenDialog() {
            // create dialog lazily
            // if pDialog eq null or undefined then pDialog will eq expression after ??=
            this.pDialog ??= this.loadFragment({
                name: "kadyrgulov.walkthrough.view.HelloDialog"
            });

            this.pDialog.then((oDialog) =>  oDialog.open());
        },

        onCloseDialog() {
            // note: We don't need to chain to the pDialog promise, since this event handler
            // is only called from within the loaded dialog itself.
            this.byId("helloDialogId").close();
        }
    })
})