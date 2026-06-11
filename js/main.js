let iznos = 0;

const PRODUCT1_NAME = "Jeans";
const PRODUCT1_PRICE = 59.46;
const PRODUCT1_QTY = 3;

const PRODUCT2_NAME = "Shorts";
const PRODUCT2_PRICE = 15.42;
const PRODUCT2_QTY = 5;

const VAT_RATE = 0.2;
const CURRENCY = "EUR";
const USD_PER_EUR = 1.16;
const VALID_COUPONS = ["SAVE10", "SAVE15", "FREESHIP"];
let lowStock = [];

console.log(typeof PRODUCT1_NAME);
console.log(typeof PRODUCT2_NAME);
console.log(typeof PRODUCT1_PRICE);


// Funkcija za normalizovanje unosa kupona

function  normalizeCoupon(code) {
    code = code.trim();
    code = code.toUpperCase();
    return code;
}

// Funkcija provjerava da li je unijeti kupon validan i ispisuje poruku ako jeste.

function validateAndNotify() {
    let promo = document.getElementById("promo").value;

    promo = normalizeCoupon(promo);

    if (isValidCoupon(promo)){
        
     if (promo === "SAVE10") {
        alert("Vas kupon donosi 10% popusta");
     }else if(promo === "SAVE15") {
        alert("Vas kupon donosi 15% popusta");
     }else if(promo === "FREESHIP") {
        alert("Vas kupon donosi besplatnu dostavu");
     }

    }else {
        alert("Kupon nije vazeci");
    }
}

// Funkcija za provjeru korisnickog unosa

function login() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    email = email.trim();
    password = password.trim();


    if (email === "admin" && password === "admin") {
        alert("Unos je ispravan");
        return true;
    } else {
        alert("Pogresan unos");
        return false;
    }

}

// Funkcija dodaje cenu proizvoda na ukupan iznos

function dodajNaIznos(cena) {
    iznos = iznos + cena;
    console.log("Trenutni iznos:", iznos, "$");
}

dodajNaIznos(62);
dodajNaIznos(72);
dodajNaIznos(95);
dodajNaIznos(123);

// Funkcija za prikazivanje iznosa

function cartAlert() {
    alert("Ukupan iznos: $" + iznos);
}

// Funkcija proverava da li niz sadrzi unjeti kupon

function isValidCoupon(code) {
    code = VALID_COUPONS.includes(code);
    return code;
}

const allProducts = [

    {name: "Jeans", price: 72, qty: 3},
    {name: "Blazer", price: 95, qty: 2},
    {name: "Shorts", price: 72, qty: 20},
    {name: "Sweater", price: 40, qty: 30},
    {name: "T-shirt", price: 44, qty: 12},
    {name: "Jacket", price: 120, qty: 4},
    {name: "Socks", price: 25, qty: 10},
    {name: "Hat", price: 15, qty: 5},
    {name : "Sneakers", price: 200, qty: 20},
    {name: "Football boots", price: 150, qty: 8}
];

// Funkcija za izracunavanje ukupne vrednosti lagera

function calculateTotal(allProducts) {

   let totalValue = 0;

   for (let product of allProducts) {
    totalValue += product.price * product.qty;
   }

   console.log("Ukupna vrednost lagera: " + totalValue + " USD");

}

calculateTotal(allProducts);

// Funkcija za izpis proizvoda cija je kolicina manja od 10

function lowStockProducts(allProducts) {
    
    for (let i = 0; i < allProducts.length; i++) {
        
        if (allProducts[i].qty < 10) {
           lowStock.push(allProducts[i]); 
        }
    }

}

lowStockProducts(allProducts);
console.log(lowStock);

// Funkcija pronalazi proizvod po imenu

function findProductByName(list, searchName) {

    for (let i = 0; i < list.length; i++) {

        if (list[i].name.toLowerCase().trim() === searchName.toLowerCase().trim()) {
            return list[i];
        }
    }

    return null;
}

console.log(findProductByName(allProducts, "Jeans"));








