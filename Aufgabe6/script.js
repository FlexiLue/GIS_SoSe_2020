"use strict";
var script2;
(function (script2) {
    let counter = 0;
    let gesamtPreis = 0;
    let saltyIsShown = true;
    let sweetIsShown = true;
    addProducts("sweet");
    addProducts("salty");
    document.getElementById("sweetCategorie")?.addEventListener("click", filterSweet);
    document.getElementById("saltyCategorie")?.addEventListener("click", filterSalty);
    function initializeElement(tag, attribute, attributeName, node) {
        let element = document.createElement(tag);
        if (attribute != undefined && attributeName != undefined) {
            element.setAttribute(attribute, attributeName);
        }
        if (node != undefined) {
            let elementText = document.createTextNode(node);
            element.appendChild(elementText);
        }
        return element;
    }
    function initializeProducts(container, productIndex) {
        // Prdocutcontainer erstellen
        let productcontainer = initializeElement("div", "class", "productcontainer");
        productcontainer.id = script2.products[productIndex].index.toString();
        //<productcontainer angefügt
        console.log(container);
        container?.appendChild(productcontainer);
        //<h2>productname<h2> erstellt 
        let h2 = initializeElement("h2", undefined, undefined, script2.products[productIndex].name);
        //hinzugefügt
        productcontainer.appendChild(h2);
        //<img src="jalsölfasf">
        let img = initializeElement("img", "src", script2.products[productIndex].image);
        img.setAttribute("alt", script2.products[productIndex].name);
        //hinzugefügt
        productcontainer.appendChild(img);
        //<p>description</p>
        let description = initializeElement("p", undefined, undefined, script2.products[productIndex].description);
        productcontainer.appendChild(description);
        //<p>price</p>
        let price = document.createElement("p");
        price.innerHTML = script2.products[productIndex].price + " €";
        productcontainer.appendChild(price);
        //  <button type="button">In den Einkaufswagen</button>
        let button = initializeElement("button", "type", "button", "In den Einkaufswagen");
        productcontainer.appendChild(button);
        button.addEventListener("click", handleBuy);
    }
    function handleBuy(_event) {
        if (counter < 1) {
            let headerColumn2 = document.getElementById("headerColumn2");
            let cartCountDiv = initializeElement("div", "id", "cartCountDiv");
            headerColumn2.appendChild(cartCountDiv);
            let cartCountP = initializeElement("p", "id", "cartCount");
            cartCountDiv.appendChild(cartCountP);
            cartCountP.innerHTML = "0";
        }
        let button = _event.target;
        let index = parseInt(button.parentElement?.id);
        gesamtPreis = gesamtPreis + script2.products[index].price;
        console.log(gesamtPreis);
        counter++;
        let cartCount = document.getElementById("cartCount");
        cartCount.innerHTML = counter.toString();
    }
    function addProducts(selectedCategorie) {
        if (selectedCategorie.match("sweet")) {
            script2.products.forEach(element => {
                if (element.categorie.match(selectedCategorie)) {
                    initializeProducts(document.getElementById("sweetsDiv"), element.index);
                }
            });
        }
        if (selectedCategorie.match("salty")) {
            script2.products.forEach(element => {
                if (element.categorie.match(selectedCategorie)) {
                    initializeProducts(document.getElementById("saltyDiv"), element.index);
                }
            });
        }
    }
    function removeProducts(categorie) {
        switch (categorie) {
            case "sweet": {
                let container = document.getElementById("sweetsDiv");
                container.remove();
            }
            case "salty": {
                let container = document.getElementById("saltyDiv");
                container.remove();
            }
        }
    }
    function filterSweet() {
        if (saltyIsShown && sweetIsShown) {
            removeProducts("salty");
        }
        if (saltyIsShown && !sweetIsShown) {
            removeProducts("salty");
            addProducts("sweet");
        }
        else {
            console.log("Sweet wird bereits angezeigt");
        }
        saltyIsShown = false;
        sweetIsShown = true;
        console.log(sweetIsShown + " " + saltyIsShown);
    }
    function filterSalty() {
        if (saltyIsShown && sweetIsShown) {
            removeProducts("sweet");
        }
        if (!saltyIsShown && sweetIsShown) {
            removeProducts("sweet");
            addProducts("salty");
        }
        else {
            console.log("Salty wird bereits angezeigt");
        }
        sweetIsShown = false;
        saltyIsShown = true;
    }
    removeProducts("salty");
})(script2 || (script2 = {}));
//# sourceMappingURL=script.js.map