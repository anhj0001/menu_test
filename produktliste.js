const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get("category");

const url = "https://kea-alt-del.dk/t7/api/products?category=" + category;

fetch(url)
  .then((response) => response.json())
  .then(dataReceived);

function dataReceived(data) {
  console.log(data);
  data.forEach(listProducts);
}

function listProducts(product) {
  console.log("listProducts");
  const productlist = document.querySelector("template").content;

  const myClone = productlist.cloneNode(true);

  if (!product.soldout) {
    myClone.querySelector(".sold_out").remove();
  }
  myClone.querySelector(".produktliste_tekst").textContent = product.productdisplayname;

  myClone.querySelector(".category").textContent = product.season;

  myClone.querySelector(".price .dkk").textContent = product.price;

  if (!product.discount) {
    myClone.querySelector(".discount ").remove();
  }

  myClone.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/1000/${product.id}.webp`;

  myClone.querySelector(".link").setAttribute("href", "produkt.html?id=" + product.id);

  document.querySelector(".grid_container").appendChild(myClone);
}

/*
{
  "id": 1525,
  "gender": "Unisex",
  "category": "Accessories",
  "subcategory": "Bags",
  "articletype": "Backpacks",
  "basecolour": "Navy Blue",
  "season": "Fall",
  "productionyear": 2010,
  "usagetype": "Casual",
  "productdisplayname": "Deck Navy Blue Backpack",
  "parsed": 1,
  "soldout": 0,
  "relid": 1525,
  "price": 1299,
  "discount": 55,
  "variantname": "Deck Backpack",
  "brandname": "Puma",
  "brandbio": "PUMA is the World's Fastest Sports Brand",
  "brandimage": "http://assets.myntassets.com/assets/images/2015/11/17/11447736932686-113016-3ff8sf.jpg",
  "agegroup": "Adults-Unisex",
  "colour1": "NA",
  "colour2": "NA",
  "fashiontype": "Fashion",
  "materialcaredesc": null,
  "sizefitdesc": null,
  "description": "<p>asfafaf<br> kasjhdkashd</p>",
  "styledesc": null
}
*/
