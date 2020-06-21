"use strict";
var Aufgabe7;
(function (Aufgabe7) {
    Aufgabe7.products = [];
    async function getProductsJson(_url) {
        let response = await fetch(_url);
        // console.log("Response", response);
        Aufgabe7.products = await response.json();
        console.log("json geladen" + Aufgabe7.products);
        // initialization();
        // warenkorbInitialization();
        // updatePrice();
    }
    Aufgabe7.getProductsJson = getProductsJson;
})(Aufgabe7 || (Aufgabe7 = {}));
//# sourceMappingURL=product.js.map