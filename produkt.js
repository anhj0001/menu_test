//https://kea-alt-del.dk/t7/api/products/1525

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

fetch("https://kea-alt-del.dk/t7/api/products/" + id)
  .then((response) => response.json())
  .then((data) => showProduct(data));

function showProduct(product) {
  console.log(product);

  document.querySelector(".brand").textContent = product.brandname;
  document.querySelector(".subkat").textContent = product.subcategory;
  document.querySelector(".produkt_navn").textContent = product.productdisplayname;
  document.querySelector(".price .dkk").textContent = product.price;
  document.querySelector(".info .productdisplayname").textContent = product.productdisplayname;
  document.querySelector(".info .id").textContent = product.id;
  document.querySelector(".info .subcategory").textContent = product.subcategory;
  document.querySelector(".info .brand").textContent = product.brand;
  document.querySelector(".info .brandbio").textContent = product.brandbio;
  document.querySelector(".info .gender").textContent = product.gender;
  document.querySelector(".info .season").textContent = product.season;
  document.querySelector(".produkt_billede img").src = `https://kea-alt-del.dk/t7/images/webp/1000/${product.id}.webp`;

  if (!product.soldout) {
    document.querySelector(".sold_out").remove();
  }

  if (!product.discount) {
    document.querySelector(".discount2").remove();
  }
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
