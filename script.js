const translations = {
    it: {
        "product-title-1": "Airpods Pro 2 <em>Edizione Limitata</em>",
        "price-1": "€ 49.99",
        "price-1-hcoin": "0.0049 HarshCoin",
        "description-1": "<em>Un pezzo di tecnologia di qualità costruito per durare, realizzato presso la sede di HarshBuy.</em>",
        "stock-1": "Disponibile in magazzino: 10",
        "buy-now-1": "Acquista ora",

        "product-title-2": "Cintura HB x LV <em>Edizione Limitata</em>",
        "price-2": "€ 89.99",
        "price-2-hcoin": "0.0089 HarshCoin",
        "description-2": "<em>Una cintura di lusso realizzata in pelle di alligatore con un dolce aroma di curry.</em>",
        "stock-2": "Disponibile in magazzino: 37",
        "buy-now-2": "Acquista ora",

        "product-title-3": "Portafoglio HB x LV <em>Edizione Limitata</em>",
        "price-3": "€ 29.99",
        "price-3-hcoin": "0.0029 HarshCoin",
        "description-3": "<em>Più di un semplice portafoglio, HarshBuy è un marchio, un'icona.</em>",
        "stock-3": "Disponibile in magazzino: 14",
        "buy-now-3": "Acquista ora",

        "product-title-4": "Airforce x HB <em>Edizione Limitata</em>",
        "price-4": "€ 179.99",
        "price-4-hcoin": "0.0179 HarshCoin",
        "description-4": "<em>Silhouette iconica di Air Force, ridefinita con l'esclusività di HarshBuy.</em>",
        "stock-4": "Disponibile in magazzino: 5",
        "buy-now-4": "Acquista ora",

        "product-title-5": "Carta Legacy HarshBuy",
        "price-5": "€ 249.99",
        "price-5-hcoin": "0.0249 HarshCoin",
        "description-5": "<em>Se possiedi questa carta di credito, guadagni punti Aura infiniti.</em>",
        "stock-5": "Disponibile solo su ordine",
        "buy-now-5": "Acquista ora"
    },
    en: {
        "product-title-1": "Airpods Pro 2 <em>HB Limited Edition</em>",
        "price-1": "$ 49.99",
        "price-1-hcoin": "0.0049 HarshCoin",
        "description-1": "<em>A quality piece of technology built to last, fabricated at HarshBuy Headquarters.</em>",
        "stock-1": "Available In Stock: 10",
        "buy-now-1": "Buy Now",

        "product-title-2": "HB x LV belt <em>Limited Edition</em>",
        "price-2": "$ 89.99",
        "price-2-hcoin": "0.0089 HarshCoin",
        "description-2": "<em>A very luxurious belt made from alligator leather with a sweet curry aroma.</em>",
        "stock-2": "Available In Stock: 37",
        "buy-now-2": "Buy Now",

        "product-title-3": "HB x LV Wallet <em>Limited Edition</em>",
        "price-3": "$ 29.99",
        "price-3-hcoin": "0.0029 HarshCoin",
        "description-3": "<em>More than just a wallet, HarshBuy is a brand, an icon.</em>",
        "stock-3": "Available In Stock: 14",
        "buy-now-3": "Buy Now",

        "product-title-4": "Airforce x HB <em>Limited Edition</em>",
        "price-4": "$ 179.99",
        "price-4-hcoin": "0.0179 HarshCoin",
        "description-4": "<em>Air Force x HB, iconic silhouette, redefined with HarshBuy’s exclusivity.</em>",
        "stock-4": "Available In Stock: 5",
        "buy-now-4": "Buy Now",

        "product-title-5": "HarshBuy Legacy Card",
        "price-5": "$ 249.99",
        "price-5-hcoin": "0.0249 HarshCoin",
        "description-5": "<em>If you have this credit card, you gain infinite Aura Points.</em>",
        "stock-5": "Available only on order",
        "buy-now-5": "Buy Now"
    }
};

function switchLanguage(language) {
    for (const key in translations[language]) {
        const element = document.getElementById(key);
        if (element) {
            element.innerHTML = translations[language][key];
        }
    }
}

switchLanguage('it');

document.getElementById("switch-to-italian").addEventListener("click", () => switchLanguage('it'));
document.getElementById("switch-to-english").addEventListener("click", () => switchLanguage('en'));
