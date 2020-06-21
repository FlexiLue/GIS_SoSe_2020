namespace Aufgabe7 {

export let products: Product[] = [];

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
    // initialization();
    // warenkorbInitialization();
    // updatePrice();
}



}