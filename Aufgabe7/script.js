"use strict";
var Aufgabe7;
(function (Aufgabe7) {
    // let counter: number = 0;
    // let gesamtPreis: number = 0;
    Aufgabe7.products = [];
    //getting the json
    // getProductsJson("http://127.0.0.1:5500/Aufgabe7/products.json");
    //product inizilatzation
    function initialization() {
        addProducts("sweet");
        addProducts("salty");
    }
    Aufgabe7.initialization = initialization;
    window.addEventListener("load", function () {
        Aufgabe7.getProductsJson("https://flexilue.github.io/GIS_SoSe_2020/Aufgabe7/products.json");
        buildBuyCircle();
        updatePrice();
    });
    //Artikel Button Event Listener
    document.getElementById("sweetCategorie")?.addEventListener("click", function () {
        filter("sweet");
    });
    document.getElementById("saltyCategorie")?.addEventListener("click", function () {
        filter("salty");
    });
    //Produkte werden generiert
    function initializeProducts(container, productIndex) {
        // Prdocutcontainer erstellen
        let productcontainer = initializeElement("div", "class", "productcontainer");
        productcontainer.id = Aufgabe7.products[productIndex].index.toString();
        //<productcontainer angefügt
        container?.appendChild(productcontainer);
        //<h2>productname<h2> erstellt 
        let h2 = initializeElement("h2", undefined, undefined, Aufgabe7.products[productIndex].name);
        //hinzugefügt
        productcontainer.appendChild(h2);
        //<img src="jalsölfasf">
        let img = initializeElement("img", "src", Aufgabe7.products[productIndex].image);
        img.setAttribute("alt", Aufgabe7.products[productIndex].name);
        //hinzugefügt
        productcontainer.appendChild(img);
        //<p>description</p>
        let description = initializeElement("p", undefined, undefined, Aufgabe7.products[productIndex].description);
        productcontainer.appendChild(description);
        //<p>price</p>
        let price = document.createElement("p");
        price.innerHTML = Aufgabe7.products[productIndex].price + " €";
        productcontainer.appendChild(price);
        //  <button type="button">In den Einkaufswagen</button>
        let button = initializeElement("button", "type", "button", "In den Einkaufswagen");
        productcontainer.appendChild(button);
        button.addEventListener("click", handleBuy);
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
    //Fliter Funktion
    function filter(categorie) {
        let sweetsDiv = document.getElementById("sweetsDiv");
        let saltyDiv = document.getElementById("saltyDiv");
        let sweetHeading = document.getElementById("sweetHeading");
        let saltyHeading = document.getElementById("saltyHeading");
        if (categorie.match("sweet")) {
            sweetsDiv.style.display = "flex";
            sweetHeading.style.display = "block";
            saltyDiv.style.display = "none";
            saltyHeading.style.display = "none";
        }
        if (categorie.match("salty")) {
            sweetsDiv.style.display = "none";
            sweetHeading.style.display = "none";
            saltyDiv.style.display = "flex";
            saltyHeading.style.display = "block";
        }
        if (categorie.match("all")) {
            sweetsDiv.style.display = "flex";
            saltyDiv.style.display = "flex";
        }
    }
    //Kauf Button Funktion 
    function handleBuy(_event) {
        let button = _event.target;
        let index = button.parentElement?.id;
        addWarenkorb(index);
        updateBuyCircle();
    }
    //sonderFunktion für weniger Code
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
    Aufgabe7.initializeElement = initializeElement;
    function generateShopingcartElement(index) {
        let shopingcartContainer = document.getElementById("warenkorbElemente");
        //containerDiv
        let containerDiv = document.createElement("div");
        containerDiv.className = "gridContainer";
        containerDiv.id = String(index);
        shopingcartContainer.appendChild(containerDiv);
        //img div
        let div = document.createElement("div");
        containerDiv.appendChild(div);
        //img
        let productImage = document.createElement("img");
        productImage.setAttribute("src", Aufgabe7.products[index].image);
        productImage.setAttribute("alt", Aufgabe7.products[index].name);
        div.appendChild(productImage);
        //middleDiv
        let middleDiv = document.createElement("div");
        middleDiv.className = "middleGrid";
        containerDiv.appendChild(middleDiv);
        //Name in middle Div
        let name = document.createElement("h3");
        name.innerHTML = Aufgabe7.products[index].name;
        middleDiv.appendChild(name);
        //Description in MiddleDiv 
        let description = document.createElement("p");
        description.innerHTML = Aufgabe7.products[index].description;
        middleDiv.appendChild(description);
        //price Caption in MiddleDiv
        let priceCaption = document.createElement("h3");
        priceCaption.className = "paddingTop";
        priceCaption.innerHTML = "Price";
        middleDiv.appendChild(priceCaption);
        //price in MiddleDiv
        let price = document.createElement("p");
        price.innerHTML = Aufgabe7.products[index].price + " €";
        middleDiv.appendChild(price);
        //third Div for Container
        let thirdDiv = document.createElement("div");
        containerDiv.appendChild(thirdDiv);
        //Quantity Caption
        let quantityCaption = document.createElement("h3");
        quantityCaption.innerHTML = "Quantity";
        thirdDiv.appendChild(quantityCaption);
        //selection
        let selection = document.createElement("select");
        thirdDiv.appendChild(selection);
        for (let i = 1; i < 11; i++) {
            let option = document.createElement("option");
            option.innerHTML = String(i);
            option.value = String(i);
            selection.appendChild(option);
        }
        //Img trashcan
        let trashcanImage = document.createElement("img");
        trashcanImage.src = "../Material/Icons/trash.png";
        trashcanImage.alt = "trashcan";
        trashcanImage.className = "icon";
        trashcanImage.addEventListener("click", function (e) {
            deleteItem(e.currentTarget);
        });
        thirdDiv.appendChild(trashcanImage);
    }
    Aufgabe7.generateShopingcartElement = generateShopingcartElement;
    function deleteItem(target) {
        let firstParent = target.parentElement;
        let secondParent = firstParent.parentNode;
        let index = secondParent.id;
        localStorage.removeItem(index);
        secondParent.setAttribute("style", "display: none");
        updateBuyCircle();
        updatePrice();
    }
    Aufgabe7.deleteItem = deleteItem;
    /* Funktionen für den Kreis über dem Einkaufswagen*/
    function buildBuyCircle() {
        let headerColumn2 = document.getElementById("headerColumn2");
        let cartCountDiv = initializeElement("div", "id", "cartCountDiv");
        headerColumn2.appendChild(cartCountDiv);
        let cartCountP = initializeElement("p", "id", "cartCount");
        cartCountDiv.appendChild(cartCountP);
        if (localStorage.getItem("Warenkorb") != null) {
            cartCountP.innerHTML = localStorage.getItem("Warenkorb");
        }
        else {
            localStorage.setItem("Warenkorb", "0");
            cartCountP.innerHTML = localStorage.getItem("Warenkorb");
        }
    }
    //Wert des BuyCircle wird auf Anzahl der Warenkorb Liste gesetzt
    function updateBuyCircle() {
        let anzahl = 0;
        for (let i = 0; i < localStorage.length; i++) {
            let key = localStorage.key(i);
            if (!key.match("randid") && !key.match("Warenkorb")) {
                anzahl = anzahl + 1;
                localStorage.setItem("Warenkorb", String(anzahl));
            }
        }
        let cartCount = document.getElementById("cartCount");
        cartCount.innerHTML = localStorage.getItem("Warenkorb");
    }
    Aufgabe7.updateBuyCircle = updateBuyCircle;
    /* Dem Warenkorb werden die Items hinzugefügt */
    function addWarenkorb(index) {
        if (localStorage.getItem(String(index)) != null) {
            let anzahl = parseInt(localStorage.getItem(String(index)));
            anzahl = anzahl + 1;
            localStorage.setItem(String(index), String(anzahl));
        }
        else {
            localStorage.setItem(String(index), "1");
        }
    }
    Aufgabe7.addWarenkorb = addWarenkorb;
    function updatePrice() {
        let price = 0;
        if (localStorage.length > 0) {
            for (let i = 0; i < localStorage.length; i++) {
                let key = localStorage.key(i);
                if (!key.match("randid") && !key.match("Warenkorb")) {
                    price = price + (Aufgabe7.products[parseInt(key)].price * parseInt(localStorage.getItem(key)));
                }
            }
        }
        console.log("Kurz vor dem Laden");
        let pricePTag = document.getElementById("price");
        pricePTag.innerHTML = "Gesamt: " + price;
        console.log("Price wurde geupdatete");
    }
})(Aufgabe7 || (Aufgabe7 = {}));
//# sourceMappingURL=script.js.map