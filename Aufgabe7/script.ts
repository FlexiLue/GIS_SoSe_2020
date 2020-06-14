namespace Aufgabe7 {
// let counter: number = 0;
// let gesamtPreis: number = 0;
export let products: Product[] = [];

//getting the json
getProductsJson("http://127.0.0.1:5500/Aufgabe7/products.json");

//product inizilatzation
export function initialization(): void {
    addProducts("sweet");
    addProducts("salty");
}

window.addEventListener("load", function() {
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
export function initializeProducts(container: HTMLDivElement, productIndex: number): void {
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
//Fliter Funktion
function filter(categorie: String): void {
    let sweetsDiv: HTMLDivElement = <HTMLDivElement>document.getElementById("sweetsDiv");
    let saltyDiv: HTMLDivElement = <HTMLDivElement>document.getElementById("saltyDiv");
    let sweetHeading: HTMLHeadingElement = <HTMLHeadingElement>document.getElementById("sweetHeading");
    let saltyHeading: HTMLHeadingElement = <HTMLHeadingElement>document.getElementById("saltyHeading");

    
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
function handleBuy (_event: Event): void {
    let button: HTMLButtonElement = <HTMLButtonElement>_event.target;
    let index: string = <string>button.parentElement?.id;
    addWarenkorb(index);
    updateBuyCircle();
}

//sonderFunktion für weniger Code
export function initializeElement(tag: string, attribute?: string, attributeName?: string, node?: string): HTMLElement {
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

export function generateShopingcartElement (index: number): void {
    let shopingcartContainer: HTMLDivElement = <HTMLDivElement>document.getElementById("warenkorbElemente");
    
    //containerDiv
    let containerDiv: HTMLDivElement = <HTMLDivElement> document.createElement("div");
    containerDiv.className = "gridContainer";
    containerDiv.id = String(index);
    shopingcartContainer.appendChild(containerDiv);


    //img div
    let div: HTMLDivElement = <HTMLDivElement>document.createElement("div");
    containerDiv.appendChild(div);

    //img
    let productImage: HTMLImageElement = <HTMLImageElement>document.createElement("img");
    productImage.setAttribute("src", products[index].image);
    productImage.setAttribute("alt", products[index].name);
    div.appendChild(productImage);

    //middleDiv
    let middleDiv: HTMLDivElement = <HTMLDivElement>document.createElement("div");
    middleDiv.className = "middleGrid";
    containerDiv.appendChild(middleDiv);

    //Name in middle Div
    let name: HTMLHeadingElement = <HTMLHeadingElement>document.createElement("h3");
    name.innerHTML = products[index].name;
    middleDiv.appendChild(name);

    //Description in MiddleDiv 
    let description: HTMLParagraphElement = <HTMLParagraphElement>document.createElement("p");
    description.innerHTML = products[index].description;
    middleDiv.appendChild(description);

    //price Caption in MiddleDiv
    let priceCaption: HTMLHeadingElement = <HTMLHeadingElement>document.createElement("h3");
    priceCaption.className = "paddingTop";
    priceCaption.innerHTML = "Price";
    middleDiv.appendChild(priceCaption);

    //price in MiddleDiv
    let price: HTMLParagraphElement = <HTMLParagraphElement> document.createElement("p");
    price.innerHTML = products[index].price + " €";
    middleDiv.appendChild(price);

    //third Div for Container
    let thirdDiv: HTMLDivElement = <HTMLDivElement> document.createElement("div");
    containerDiv.appendChild(thirdDiv);

    //Quantity Caption
    let quantityCaption: HTMLHeadingElement = <HTMLHeadingElement> document.createElement("h3");
    quantityCaption.innerHTML = "Quantity";
    thirdDiv.appendChild(quantityCaption);

    //selection
    let selection: HTMLSelectElement = <HTMLSelectElement>document.createElement("select");
    thirdDiv.appendChild(selection);

    for (let i: number = 1; i < 11; i++) {
        let option: HTMLOptionElement = <HTMLOptionElement> document.createElement("option");
        option.innerHTML = String(i);
        option.value = String(i);
        selection.appendChild(option);
    }
    //Img trashcan
    let trashcanImage: HTMLImageElement = <HTMLImageElement> document.createElement("img");
    trashcanImage.src = "../Material/Icons/trash.png";
    trashcanImage.alt = "trashcan";
    trashcanImage.className = "icon";
    trashcanImage.addEventListener("click", function(e: Event): void{
        deleteItem(<HTMLElement> e.currentTarget);
    });
    thirdDiv.appendChild(trashcanImage);    
}

export function deleteItem(target: HTMLElement): void {
    let firstParent: HTMLElement = <HTMLElement> target.parentElement;
    let secondParent: HTMLElement = <HTMLElement> firstParent.parentNode;
    let index: string = secondParent.id;
    localStorage.removeItem(index);
    secondParent.setAttribute("style", "display: none");
    updateBuyCircle();
    updatePrice();
}


/* Funktionen für den Kreis über dem Einkaufswagen*/
function buildBuyCircle(): void {
    let headerColumn2: HTMLDivElement = <HTMLDivElement>document.getElementById("headerColumn2");
    let cartCountDiv: HTMLDivElement = <HTMLDivElement>initializeElement("div", "id", "cartCountDiv");
    headerColumn2.appendChild(cartCountDiv);
    let cartCountP: HTMLParagraphElement = <HTMLParagraphElement>initializeElement("p", "id", "cartCount");
    cartCountDiv.appendChild(cartCountP);
    if (localStorage.getItem("Warenkorb") != null) {
        cartCountP.innerHTML = <string>localStorage.getItem("Warenkorb");
    } else {
        localStorage.setItem("Warenkorb", "0");
        cartCountP.innerHTML = <string>localStorage.getItem("Warenkorb");
    }
}

//Wert des BuyCircle wird auf Anzahl der Warenkorb Liste gesetzt
export function updateBuyCircle(): void {
    let anzahl: number = 0;
    for (let i: number = 0; i < localStorage.length; i++) {
        let key: string = <string>localStorage.key(i);
        if (!key.match("randid") && !key.match("Warenkorb")){
            anzahl = anzahl + 1;
            localStorage.setItem("Warenkorb", String(anzahl));
        }
    }
    let cartCount: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById("cartCount");
    cartCount.innerHTML = <string>localStorage.getItem("Warenkorb");
}


/* Dem Warenkorb werden die Items hinzugefügt */
export function addWarenkorb (index: string): void {
    if (localStorage.getItem(String(index)) != null) {
        let anzahl: number = parseInt(<string>localStorage.getItem(String(index)));
        anzahl = anzahl + 1;
        localStorage.setItem(String(index), String(anzahl));
    } else {
        localStorage.setItem(String(index), "1");
    }
}

function updatePrice(): void{
    let price: number = 0;
    if (localStorage.length > 0) {
        for (let i: number = 0; i < localStorage.length; i++) {
            let key: string = <string>localStorage.key(i);
            if (!key.match("randid") && !key.match("Warenkorb")) {
                price = price +  (products[parseInt(key)].price * parseInt(<string>localStorage.getItem(key)));
            }
        }
    }
    console.log("Kurz vor dem Laden");
    let pricePTag: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById("price");
    pricePTag.innerHTML = "Gesamt: " + price;
    console.log("Price wurde geupdatete");
}
}