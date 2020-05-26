interface Product {
    name: string;
    image: string;
    description: string;
    price: string;
}

let sweetProducts: Array<Product> = [    
    {
        name: "Hershey's Premier White Chips 340g",
        image: "https://www.americancandy.de/pub/media/catalog/product/cache/e960f294cf534815b24fe57fbd9f1a95/2/7/2742_0340_a_hershey_s_premier_white_chip_-wm.jpg",
        description: "1 großer Beutel gefüllt mit kleinen weißen Schokoladen-Chips von Hershey.",
        price: "6,90€"
    },
    {
        name: "Mike & Like 'Red Rageous' 141g",
        image: "https://www.americancandy.de/pub/media/catalog/product/cache/e960f294cf534815b24fe57fbd9f1a95/1/8/1867_0141_a_mike_and_ike_red_rageous_-wm.jpg",
        description: "US-Gelee-Bonbons in der Großpackung mit dem Geschmack von 5 verschiedenen roten Früchten: Strawberry, Raspberry, Watermelon, Fruit Punch und Cherry.(Fettfreies Produkt)",
        price: "3,49€"
    },
    {
        name: "General Mills Reese's Puffs & Whole Grain",
        image: "https://www.americancandy.de/pub/media/catalog/product/cache/e960f294cf534815b24fe57fbd9f1a95/2/7/2753_0368_a_reese_s_puffs_-wm.jpg",
        description: "Peanut Butter Cornflakes & Corn Puffs geschmacklich glänzend kombiniert bei diesem typischen US-Frühstück.",
        price: "9,99€"
    },
    {
        name: "Reese's Milk Chocolate filled with Peanut Butter GIANT 192g",
        image: "https://www.americancandy.de/pub/media/catalog/product/cache/e960f294cf534815b24fe57fbd9f1a95/2/4/2497_0192_a_reese_s_milk_chocolate_filled_with_reese_s_peanut_butter_giant_-wm.jpg",
        description: "King Size Milchschokoladentafel gefüllt mit Reese's Peanut Butter.",
        price: "5,90€"
    },
    {
        name: "Pocky Cookies & Cream",
        image: "https://www.americancandy.de/pub/media/catalog/product/cache/e960f294cf534815b24fe57fbd9f1a95/1/7/1785_0045_a_glica_pocky_cookies_and_cream_-wm.jpg",
        description: "Pocky Cookies & Creme sind dünne, knusprige Keksstäbchen mit einer leckeren Cookies & Cream Glasur",
        price: "2,99€"
    },
    {
        name: "Peanut Butter Cookie Dough Bites Theater Box",
        image: "https://www.americancandy.de/pub/media/catalog/product/cache/e960f294cf534815b24fe57fbd9f1a95/1/8/181009_39_wm.jpg",
        description: "1 großer Beutel gefüllt mit kleinen weißen Schokoladen-Chips von Hershey.",
        price: "6,90€"
    }
];

let saltyProducts: Array<Product> = [    
    {
        name: "Hombre Nachos Classic 125g",
        image: "https://www.americancandy.de/pub/media/catalog/product/cache/e960f294cf534815b24fe57fbd9f1a95/2/1/2110021_hombrenachosclassic_-wm.jpg",
        description: "1 Packung geröstete Mais-Chips in der klassischen Geschmacksvariante, perfekter Snack für Zwischendurch, ein Muß für jedes Mexican Diner.",
        price: "1,49€"
    },
    {
        name: "Smiths Bugles Corn Sweet Chilli 100g",
        image: "https://www.americancandy.de/pub/media/catalog/product/cache/e960f294cf534815b24fe57fbd9f1a95/b/u/buggles.jpg",
        description: "Smiths Bugles sind leckere Mais-Snacks hier in der geschmacklichen Variante Süßer Chili-Geschmack.",
        price: "2,49€"
    },
    {
        name: "Khao Shong Nuts Mexican Spicy Peanuts<",
        image: "https://www.americancandy.de/pub/media/catalog/product/cache/e960f294cf534815b24fe57fbd9f1a95/k/h/khao_shongnutsmexican_spicy_peanuts-wm.jpeg",
        description: "1 Dose mit gerösteten Erdnüssen, die mit einem Mantel mexikanischer Gewürze umhüllt sind, eine tolle Geschmackskomposition von Khao Shong Thailand.",
        price: "3,49€"
    },
    {
        name: "Chaokoh Roasted Coconut Chips",
        image: "https://www.americancandy.de/pub/media/catalog/product/cache/e960f294cf534815b24fe57fbd9f1a95/c/h/chaokoh_coconut_chips-Kopie.jpg",
        description: "1 Dose mit gerösteten Erdnüssen, die mit einem Mantel mexikanischer Gewürze umhüllt sind, eine tolle Geschmackskomposition von Khao Shong Thailand.",
        price: "3,40€"
    },
    {
        name: "Old Fashioned Foods Cheese Zip 227g",
        image: "https://www.americancandy.de/pub/media/catalog/product/cache/e960f294cf534815b24fe57fbd9f1a95/1/9/1997_0227_a_old_fashioned_food_cheese_zip_american_-wm.jpg",
        description: "Cheddar-Schmelz-Käse zum Sprühen aus der Dose für Burgers, Fischbrötchen, Hot Dogs und Käse-Brötchen perfekt geeignet.",
        price: "4,79€"
    },
    {
        name: "Snyder's Pretzel Pieces Jalapeno",
        image: "https://www.americancandy.de/pub/media/catalog/product/cache/e960f294cf534815b24fe57fbd9f1a95/s/n/snyders_jalapeno.jpeg",
        description: "Kleine Bretzel-Stückchen mit einem grandios pikant, scharfem Jalapeno-Geschmack.",
        price: "2,49€"
    }
];



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
    let container: any = document.getElementById(id);
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
        let button: HTMLElement = initializeElement("button", "type", "button", "In den Einkaufswagen")
        productcontainer.appendChild(button);
    });
}

add("sweets", sweetProducts);
add("saltys", saltyProducts);