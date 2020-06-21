namespace Aufgabe7 {

    renderShopingcart();

    export async function renderShopingcart(): Promise<void> {
        await getProductsJson("https://flexilue.github.io/GIS_SoSe_2020/Aufgabe7/products.json");
        warenkorbInitialization();
        updatePrice();
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
        trashcanImage.addEventListener("click", function(e: Event): void {
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

    export function updatePrice(): void {
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
        pricePTag.innerHTML = "Gesamt: " + price.toFixed(2);
        console.log("Price wurde geupdatete");
    }

    function warenkorbInitialization(): void {
        if (localStorage.length > 0) {
            for (let i: number = 0; i < localStorage.length; i++) {
                let key: string = <string>localStorage.key(i);
                console.log(key);
                if (!key.match("randid") && !key.match("Warenkorb")) {
                    // let value: string = <string>localStorage.getItem(key);
                    // console.log("Key: " + key + " Value: " + value);
                    generateShopingcartElement(parseInt(key));
                }
            }
        }
    }
}