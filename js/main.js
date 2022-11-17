// Variables
const prodContProd = document.querySelector("#products");
const prodContIndex = document.querySelector("#prod-index");

const prod1 = {
  imgSrc: "img/nayris-aquino-Lidm0GHUL-0-unsplash.jpg",
  name: "Nikon D3200",
  price: 599,
};
const prod2 = {
  imgSrc: "img/mikedelta-zUnc4-eHw6E-unsplash.jpg",
  name: "Pentax MZ-50",
  price: 299,
};
const prod3 = {
  imgSrc: "img/rohit-jawalkar-bZvX1kozeRg-unsplash.jpg",
  name: "Canon E0S",
  price: 699,
};

const arr = [
  prod1,
  prod2,
  prod3,
  prod1,
  prod2,
  prod3,
  prod1,
  prod2,
  prod3,
  prod1,
  prod2,
  prod3,
];

// Function to display products on products.html
const displayProducts = () => {
  for (let i = 0; i < arr.length; i++) {
    // Get values
    let imgSrc = arr[i].imgSrc;
    let name = arr[i].name;
    let price = arr[i].price;
    const check = "prod";
    createProd(imgSrc, name, price, check);
  }
};

// Function to display products on index.html
const displayProdIndex = () => {
  for (let i = 0; i < 3; i++) {
    // Get values
    let imgSrc = arr[i].imgSrc;
    let name = arr[i].name;
    let price = arr[i].price;
    const check = "index";
    createProd(imgSrc, name, price, check);
  }
};

// Function to create elements
const createProd = (imgSrc, name, price, check) => {
  let divProd = document.createElement("div");
  let imgProd = document.createElement("img");
  let nameProd = document.createElement("h4");
  let priceProd = document.createElement("p");
  let buttonProd = document.createElement("button");
  let divOverlay = document.createElement("div");
  let prodDesc = document.createElement("p");
  let buttonMore = document.createElement("button");

  // Set values on elements
  imgProd.src = imgSrc;
  nameProd.innerText = name;
  priceProd.innerText = "$" + price;
  buttonProd.innerText = "Add to cart";
  prodDesc.innerText =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis sunt quam alias soluta ad, labore quas velit rem dolorum eius cum laboriosam magni provident similique!";
  buttonMore.innerText = "More info";

  // Add classes on elements
  priceProd.className = "price";
  buttonProd.className = "atc-btn";
  buttonMore.className = "rm-btn";
  divOverlay.className = "overlay";
  prodDesc.className = "description";
  divProd.className = "img-products";

  // Add elements to div
  divOverlay.appendChild(prodDesc);
  divOverlay.appendChild(buttonMore);
  divOverlay.appendChild(buttonProd);
  divProd.appendChild(imgProd);
  divProd.appendChild(nameProd);
  divProd.appendChild(priceProd);
  divProd.appendChild(divOverlay);
  if (check === "prod") {
    prodContProd.appendChild(divProd);
  } else if (check === "index") {
    prodContIndex.appendChild(divProd);
  }
};

// Function for mobile menu
const hamburgerMenu = () => {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
};
