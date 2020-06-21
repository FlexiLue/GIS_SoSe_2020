namespace Aufgabe7 {
// let counter: number = 0;
// let gesamtPreis: number = 0;
buildBuyCircle();

//product inizilatzation
export function initialization(): void {
    addProducts("sweet");
    addProducts("salty");
}


//Artikel Button Event Listener
document.getElementById("sweetCategorie")?.addEventListener("click", function (): void {
    filter("sweet");
});
document.getElementById("saltyCategorie")?.addEventListener("click", function (): void {
    filter("salty");
});

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
export function handleBuy (_event: Event): void {
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
        if (!key.match("randid") && !key.match("Warenkorb")) {
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

}