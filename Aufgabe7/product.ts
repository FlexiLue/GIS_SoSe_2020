namespace Aufgabe7 {

export interface Product {
    index: number;
    categorie: string;
    name: string;
    image: string;
    description: string;
    price: number;
}

export async function getProductsJson(_url: RequestInfo): Promise<void> {
    let response: Response = await fetch(_url);
    // console.log("Response", response);
    products = await response.json();
    console.log("json geladen" + products);
    initialization();
    warenkorbInitialization();
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