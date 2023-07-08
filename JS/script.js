function Product(name, imagePath) {
  this.name = name;
  this.imagePath = imagePath;
  this.timesShown = 0;
  this.timesClicked = 0;
}

const products = [
let = new product ('bag', 'img/bag.jpg');
let  = new product('banana', 'img/banana.jpg');
let = new product('bathroom', 'img/bathroom.jpg');
let  = new product('boots', 'img/boots.jpg');
let  = new product('breakfast', 'img/breakfast.jpg');
let = new product('bubblegum', 'img/bubblegum.jpg');
let  = new product('chair', 'img/chair.jpg');
let = new product ('cthulhu','img/cthulhu.jpg');
let = new product ('dog-duck.jpg','img/dog-duck.jpg');
let = new product('dragon.jpg','img/dragon.jpg');
let = new product('pen.jpg','img/pen.jpg');
let = new product('pet-sweep.jpg','img/pet-sweep.jpg');
let = new product('scrissors.jpg','img/scrissors.jpg');
let = new product('shark.jpg','img/shark.jpg');
let = new product('sweep.png','img/sweep.png');
let = new product('tauntaun.jpg','img/tauntaun.jpg');
let = new product('unicorn.jpg','img/unicorn.jpg');
let = new product('water-can.jpg','img/water-can.jpg');
let = new product('wine-glass.jpg','img/water-can.jpg');
state.oddproductsArray.push();
  // Add more products as needed
];

const productContainer = document.getElementById("product-container");
const viewResultsBtn = document.getElementById("view-results-btn");
const maxRounds = 25;

let roundCount = 0;

function getRandomProducts() {
  const uniqueProducts = [];
  while (uniqueProducts.length < 3) {
    const randomIndex = Math.floor(Math.random() * products.length);
    const product = products[randomIndex];
    if (!uniqueProducts.includes(product)) {
      uniqueProducts.push(product);
    }
  }
  return uniqueProducts;
}

function displayProductImages() {
  roundCount++;

  if (roundCount > maxRounds) {
    productContainer.innerHTML = "<p>Voting session has ended.</p>";
    productContainer.removeEventListener("click", handleProductClick);
    viewResultsBtn.style.display = "inline";
    return;
  }

  const uniqueProducts = getRandomProducts();
  productContainer.innerHTML = "";

  uniqueProducts.forEach(product => {
    product.timesShown++;

    const img = document.createElement("img");
    img.src = product.imagePath;
    img.alt = product.name;
    img.className = "product-image";
    img.addEventListener("click", () => {
      product.timesClicked++;
      displayProductImages();
    });

    productContainer.appendChild(img);
  });
}

function viewResults() {
  productContainer.innerHTML = "<h2>Results</h2>";

  products.forEach(product => {
    const result = document.createElement("p");
    result.textContent = `${product.name} had ${product.timesClicked} votes and was seen ${product.timesShown} times.`;
    productContainer.appendChild(result);
  });

  viewResultsBtn.style.display = "none";
}

viewResultsBtn.addEventListener("click", viewResults);

displayProductImages();
