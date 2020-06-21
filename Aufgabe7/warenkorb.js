"use strict";
var Aufgabe7;
(function (Aufgabe7) {
    renderShopingcart();
    async function renderShopingcart() {
        await Aufgabe7.getProductsJson("http://127.0.0.1:5500/Aufgabe7/products.json");
        warenkorbInitialization();
        updatePrice();
    }
    Aufgabe7.renderShopingcart = renderShopingcart;
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
        Aufgabe7.updateBuyCircle();
        updatePrice();
    }
    Aufgabe7.deleteItem = deleteItem;
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
        pricePTag.innerHTML = "Gesamt: " + price.toFixed(2);
        console.log("Price wurde geupdatete");
    }
    Aufgabe7.updatePrice = updatePrice;
    function warenkorbInitialization() {
        if (localStorage.length > 0) {
            for (let i = 0; i < localStorage.length; i++) {
                let key = localStorage.key(i);
                console.log(key);
                if (!key.match("randid") && !key.match("Warenkorb")) {
                    // let value: string = <string>localStorage.getItem(key);
                    // console.log("Key: " + key + " Value: " + value);
                    generateShopingcartElement(parseInt(key));
                }
            }
        }
    }
})(Aufgabe7 || (Aufgabe7 = {}));
//# sourceMappingURL=warenkorb.js.map