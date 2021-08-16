let app;

module.exports = {
    panels: {
        svelte: {
            show() {
                if (!app && document.querySelector("#appWrapper") == null) {
                    try {
                        const create = require("./index").default;
                        console.log("Create: ", document.body, create);
                        app = create(document.body);
                    } catch (error) {
                        console.log("Error setting up app: ", error);
                    }
                }
            },
            update() {

            }
        }
    }
};