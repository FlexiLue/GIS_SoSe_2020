namespace script {

function initializeElement(tag: string, attribute?: string, attributeName?: string, node?: string): HTMLElement {
    let element: HTMLElement = document.createElement(tag);
    if (attribute != undefined && attributeName != undefined) {
        element.setAttribute(attribute,  attributeName);
    }
    if (node != undefined) {
        let elementText: Node = document.createTextNode(node);
        element.appendChild(elementText);
    }
    return element;
}


function add(id: string, products: Array<Product>): void {
    let container: HTMLDivElement = <HTMLDivElement>document.getElementById(id);
    products.forEach(element => {

        // Prdocutcontainer erstellen
        let productcontainer: HTMLElement = initializeElement("div", "class", "productcontainer");
        //<productcontainer angefügt
        container?.appendChild(productcontainer);


        //<h2>productname<h2> erstellt 
        let h2: HTMLElement  = initializeElement("h2", undefined, undefined, element.name);
        //hinzugefügt
        productcontainer.appendChild(h2);

        //<img src="jalsölfasf">
        let img: HTMLElement = initializeElement("img", "src", element.image);
        img.setAttribute("alt", element.name);
        //hinzugefügt
        productcontainer.appendChild(img);

        //<p>description</p>
        let description: HTMLElement = initializeElement("p", undefined, undefined, element.description);
        productcontainer.appendChild(description);

        //<p>price</p>
        let price: HTMLElement = initializeElement("p", undefined, undefined, element.price);
        productcontainer.appendChild(price);

        //  <button type="button">In den Einkaufswagen</button>
        let button: HTMLElement = initializeElement("button", "type", "button", "In den Einkaufswagen");
        productcontainer.appendChild(button);
    });
}

add("sweets", script.sweetProducts);
add("saltys", script.saltyProducts);
}