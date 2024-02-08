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

  myClone.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/1000/${product.id}.webp`;

  myClone.querySelector(".link").setAttribute("href", "produkt.html?id=" + product.id);

  document.querySelector(".grid_container").appendChild(myClone);
}
