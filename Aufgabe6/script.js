"use strict";
var script2;
(function (script2) {
    let counter = 0;
    let gesamtPreis = 0;
    addProducts("sweet");
    addProducts("salty");
    document.getElementById("sweetCategorie")?.addEventListener("click", function () {
        filter("sweet");
    });
    document.getElementById("saltyCategorie")?.addEventListener("click", function () {
        filter("salty");
    });
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
    function filter(categorie) {
        let sweetsDiv = document.getElementById("sweetsDiv");
        let saltyDiv = document.getElementById("saltyDiv");
        let sweetHeading = document.getElementById("sweetHeading");
        let saltyHeading = document.getElementById("saltyHeading");
        let sweetParagraph = document.getElementById("sweetParagraph");
        let saltyParagraph = document.getElementById("saltyParagraph");
        if (categorie.match("sweet")) {
            sweetsDiv.style.display = "flex";
            sweetHeading.style.display = "block";
            sweetParagraph.style.display = "block";
            saltyDiv.style.display = "none";
            saltyHeading.style.display = "none";
            saltyParagraph.style.display = "none";
        }
        if (categorie.match("salty")) {
            sweetsDiv.style.display = "none";
            sweetHeading.style.display = "none";
            sweetParagraph.style.display = "none";
            saltyDiv.style.display = "flex";
            saltyHeading.style.display = "block";
            saltyParagraph.style.display = "block";
        }
        if (categorie.match("all")) {
            sweetsDiv.style.display = "flex";
            saltyDiv.style.display = "flex";
        }
    }
})(script2 || (script2 = {}));
//# sourceMappingURL=script.js.map