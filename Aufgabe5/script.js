"use strict";
var script;
(function (script) {
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
    function add(id, products) {
        let container = document.getElementById(id);
        products.forEach(element => {
            // Prdocutcontainer erstellen
            let productcontainer = initializeElement("div", "class", "productcontainer");
            //<productcontainer angefügt
            container?.appendChild(productcontainer);
            //<h2>productname<h2> erstellt 
            let h2 = initializeElement("h2", undefined, undefined, element.name);
            //hinzugefügt
            productcontainer.appendChild(h2);
            //<img src="jalsölfasf">
            let img = initializeElement("img", "src", element.image);
            img.setAttribute("alt", element.name);
            //hinzugefügt
            productcontainer.appendChild(img);
            //<p>description</p>
            let description = initializeElement("p", undefined, undefined, element.description);
            productcontainer.appendChild(description);
            //<p>price</p>
            let price = initializeElement("p", undefined, undefined, element.price);
            productcontainer.appendChild(price);
            //  <button type="button">In den Einkaufswagen</button>
            let button = initializeElement("button", "type", "button", "In den Einkaufswagen");
            productcontainer.appendChild(button);
        });
    }
    add("sweets", script.sweetProducts);
    add("saltys", script.saltyProducts);
})(script || (script = {}));
//# sourceMappingURL=script.js.map