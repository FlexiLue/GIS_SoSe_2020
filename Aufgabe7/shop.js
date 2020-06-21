"use strict";
var Aufgabe7;
(function (Aufgabe7) {
    renderShop();
    async function renderShop() {
        await Aufgabe7.getProductsJson("https://flexilue.github.io/GIS_SoSe_2020/Aufgabe7/products.json");
        addProducts("sweet");
        addProducts("salty");
    }
    Aufgabe7.renderShop = renderShop;
    //Produkte werden generiert
    function initializeProducts(container, productIndex) {
        // Prdocutcontainer erstellen
        let productcontainer = Aufgabe7.initializeElement("div", "class", "productcontainer");
        productcontainer.id = Aufgabe7.products[productIndex].index.toString();
        //<productcontainer angefügt
        container?.appendChild(productcontainer);
        //<h2>productname<h2> erstellt 
        let h2 = Aufgabe7.initializeElement("h2", undefined, undefined, Aufgabe7.products[productIndex].name);
        //hinzugefügt
        productcontainer.appendChild(h2);
        //<img src="jalsölfasf">
        let img = Aufgabe7.initializeElement("img", "src", Aufgabe7.products[productIndex].image);
        img.setAttribute("alt", Aufgabe7.products[productIndex].name);
        //hinzugefügt
        productcontainer.appendChild(img);
        //<p>description</p>
        let description = Aufgabe7.initializeElement("p", undefined, undefined, Aufgabe7.products[productIndex].description);
        productcontainer.appendChild(description);
        //<p>price</p>
        let price = document.createElement("p");
        price.innerHTML = Aufgabe7.products[productIndex].price + " €";
        productcontainer.appendChild(price);
        //  <button type="button">In den Einkaufswagen</button>
        let button = Aufgabe7.initializeElement("button", "type", "button", "In den Einkaufswagen");
        productcontainer.appendChild(button);
        button.addEventListener("click", Aufgabe7.handleBuy);
    }
    Aufgabe7.initializeProducts = initializeProducts;
    function addProducts(selectedCategorie) {
        if (selectedCategorie.match("sweet")) {
            Aufgabe7.products.forEach(element => {
                if (element.categorie.match(selectedCategorie)) {
                    initializeProducts(document.getElementById("sweetsDiv"), element.index);
                }
            });
        }
        if (selectedCategorie.match("salty")) {
            Aufgabe7.products.forEach(element => {
                if (element.categorie.match(selectedCategorie)) {
                    initializeProducts(document.getElementById("saltyDiv"), element.index);
                }
            });
        }
    }
    Aufgabe7.addProducts = addProducts;
})(Aufgabe7 || (Aufgabe7 = {}));
//# sourceMappingURL=shop.js.map