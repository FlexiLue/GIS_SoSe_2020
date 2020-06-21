"use strict";
var Aufgabe7;
(function (Aufgabe7) {
    // let counter: number = 0;
    // let gesamtPreis: number = 0;
    buildBuyCircle();
    //product inizilatzation
    function initialization() {
        Aufgabe7.addProducts("sweet");
        Aufgabe7.addProducts("salty");
    }
    Aufgabe7.initialization = initialization;
    document.getElementById("sweetCategorie")?.addEventListener("click", function () {
        filter("sweet");
    });
    document.getElementById("saltyCategorie")?.addEventListener("click", function () {
        filter("salty");
    });
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
    Aufgabe7.handleBuy = handleBuy;
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
})(Aufgabe7 || (Aufgabe7 = {}));
//# sourceMappingURL=script.js.map