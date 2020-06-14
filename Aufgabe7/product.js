"use strict";
var Aufgabe7;
(function (Aufgabe7) {
    async function getProductsJson(_url) {
        let response = await fetch(_url);
        // console.log("Response", response);
        Aufgabe7.products = await response.json();
        console.log("json geladen" + Aufgabe7.products);
        Aufgabe7.initialization();
        warenkorbInitialization();
    }
    Aufgabe7.getProductsJson = getProductsJson;
    function warenkorbInitialization() {
        if (localStorage.length > 0) {
            for (let i = 0; i < localStorage.length; i++) {
                let key = localStorage.key(i);
                console.log(key);
                if (!key.match("randid") && !key.match("Warenkorb")) {
                    // let value: string = <string>localStorage.getItem(key);
                    // console.log("Key: " + key + " Value: " + value);
                    Aufgabe7.generateShopingcartElement(parseInt(key));
                }
            }
        }
    }
})(Aufgabe7 || (Aufgabe7 = {}));
//# sourceMappingURL=product.js.map