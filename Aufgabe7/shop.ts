namespace Aufgabe7 {

    renderShop();

    export async function renderShop(): Promise<void> {
        await getProductsJson("http://127.0.0.1:5500/Aufgabe7/products.json");
        addProducts("sweet");
        addProducts("salty");
    }   
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

    
    export function addProducts (selectedCategorie: string): void {
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

}