namespace script2 {

let counter: number = 0;
let gesamtPreis: number = 0;


addProducts("sweet");
addProducts("salty");

document.getElementById("sweetCategorie")?.addEventListener("click", function () {
    filter("sweet");
});
document.getElementById("saltyCategorie")?.addEventListener("click", function () {
    filter("salty");
});

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


function initializeProducts(container: HTMLDivElement, productIndex: number): void {
    // Prdocutcontainer erstellen
    let productcontainer: HTMLElement = initializeElement("div", "class", "productcontainer");
    productcontainer.id = products[productIndex].index.toString();
    //<productcontainer angefügt
    container?.appendChild(productcontainer);


    //<h2>productname<h2> erstellt 
    let h2: HTMLElement  = initializeElement("h2", undefined, undefined, products[productIndex].name);
    //hinzugefügt
    productcontainer.appendChild(h2);

    //<img src="jalsölfasf">
    let img: HTMLElement = initializeElement("img", "src", products[productIndex].image);
    img.setAttribute("alt", products[productIndex].name);
    //hinzugefügt
    productcontainer.appendChild(img);

    //<p>description</p>
    let description: HTMLElement = initializeElement("p", undefined, undefined, products[productIndex].description);
    productcontainer.appendChild(description);

    //<p>price</p>
    let price: HTMLElement = document.createElement("p");
    price.innerHTML = products[productIndex].price + " €";
    productcontainer.appendChild(price);

    //  <button type="button">In den Einkaufswagen</button>
    let button: HTMLElement = initializeElement("button", "type", "button", "In den Einkaufswagen");
    productcontainer.appendChild(button);
    button.addEventListener("click", handleBuy);
}

function handleBuy (_event: Event): void {
    if (counter < 1) {
        let headerColumn2: HTMLDivElement = <HTMLDivElement>document.getElementById("headerColumn2");
        let cartCountDiv: HTMLDivElement = <HTMLDivElement>initializeElement("div", "id", "cartCountDiv");
        headerColumn2.appendChild(cartCountDiv);
        let cartCountP: HTMLParagraphElement = <HTMLParagraphElement>initializeElement("p", "id", "cartCount");
        cartCountDiv.appendChild(cartCountP);
        cartCountP.innerHTML = "0";
    }
    let button: HTMLButtonElement = <HTMLButtonElement>_event.target;
    let index: number = parseInt(<string>button.parentElement?.id);
    gesamtPreis = gesamtPreis + products[index].price;
    console.log(gesamtPreis);
    
    counter++;
    let cartCount: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById("cartCount");
    cartCount.innerHTML = counter.toString();
}

function addProducts (selectedCategorie: string): void {
    if (selectedCategorie.match("sweet")) {
        products.forEach(element => {
            if (element.categorie.match(selectedCategorie)) {
                initializeProducts(<HTMLDivElement>document.getElementById("sweetsDiv"), element.index);
            }
        });
    }
    if (selectedCategorie.match("salty")) {
        products.forEach(element => {
            if (element.categorie.match(selectedCategorie)) {
                initializeProducts(<HTMLDivElement>document.getElementById("saltyDiv"), element.index);
            }
        });
    }
}

function filter(categorie: String): void {
    let sweetsDiv: HTMLDivElement = <HTMLDivElement>document.getElementById("sweetsDiv");
    let saltyDiv: HTMLDivElement = <HTMLDivElement>document.getElementById("saltyDiv");
    let sweetHeading: HTMLHeadingElement = <HTMLHeadingElement>document.getElementById("sweetHeading");
    let saltyHeading: HTMLHeadingElement = <HTMLHeadingElement>document.getElementById("saltyHeading");
    let sweetParagraph: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById("sweetParagraph");
    let saltyParagraph: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById("saltyParagraph");
    
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
}