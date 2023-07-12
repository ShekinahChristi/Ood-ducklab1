'use strict'

let goatContainer = document.querySelector('section');
let resultButton = document.querySelector('section + div');
let image1 = document.querySelector('section img:first-child');
let image2 = document.querySelector('section img:nth-child(2)');
let image3 = document.querySelector('section img:nth-child(3)');


let clicks = 0;
let maxClicksAllowed = 9;

const products = {
  oddproductsArray:[]
};

function Product(name, imagePath) {
  this.name = name;
  this.imagePath = imagePath;
  this.timesShown = 0;
  this.timesClicked = 0;
}
 function getRandomNumber() {
  return Math.floor(Math.random(

  ) *products.oddproductsArray.length);
 }



function renderproducts() {
  let product1 = getRandomNumber(); 
  let product2 = getRandomNumber();
  let product3 = getRandomNumber();
  while (product1 === product2 || product3 === product1 || product2 === product3) {
    if (product1 === product2 || product2 === product3) {
      product2 = getRandomNumber();

    } else if (product1 === product3){
      product3 = getRandomNumber();
    }
  }


  image1.src =products.oddproductsArray[product1].imagePath;
  image2.src = products.oddproductsArray[product2].imagePath;
  image3.src = products.oddproductsArray[product3].imagePath;
  image1.alt = products.oddproductsArray[product1].name;
  image2.alt = products.oddproductsArray[product2].name;
  image3.alt = products.oddproductsArray[product3].name;
  products.oddproductsArray[product1].timesShown++;
  products.oddproductsArray[product2].timesShown++;
  products.oddproductsArray[product3].timesShown++;
}

function handleGoatClick(event) {
  if (event.target === goatContainer) {
    alert('Please click on an image');
  }
  clicks++;

  console.log(clicks);
  let clickGoat = event.target.alt;
  for (let i = 0; i < products.oddproductsArray.length; i++) {
    if (clickGoat === products.oddproductsArray[i].name) {
      products.oddproductsArray[i].timesClicked++;
      break;
    }
  }
  if (clicks === maxClicksAllowed) {
    goatContainer.removeEventListener('click', handleGoatClick);
    // add event Listener to the results button
    resultButton.addEventListener('click', renderResults);
    resultButton.className = 'clicks-allowed';
    goatContainer.className = 'no-voting';
  } else {
    renderproducts();
  }
}
function renderResults() {
  let ul = document.querySelector('ul');
  for (let i = 0; i < products.oddproductsArray.length; i++) {
    let li = document.createElement('li');
    li.textContent = `${products.oddproductsArray[i].name} had ${products.oddproductsArray[i].timesShown} views and was clicked ${products.oddproductsArray[i].timesClicked} times.`;
    ul.appendChild(li);
    console.log('test')
  }
}


let bag = new Product ('bag','img/bag.jpg');
console.log('bag')
let banana = new Product('banana', 'img/banana.jpg');
let bathroom = new Product('bathroom', 'img/bathroom.jpg');
let boots = new Product('boots', 'img/boots.jpg');
let breakfast= new Product('breakfast', 'img/breakfast.jpg');
let bubblegum = new Product('bubblegum', 'img/bubblegum.jpg');
let chair  = new Product('chair', 'img/chair.jpg');
let cthulhu = new Product ('cthulhu','img/cthulhu.jpg');
let dogduck = new Product('dog-duck.jpg','img/dog-duck.jpg');
let dragon = new Product('dragon.jpg','img/dragon.jpg');
let pen = new Product('pen.jpg','img/pen.jpg');
let petsweep = new Product ('pet-sweep.jpg','img/pet-sweep.jpg');
let scissors = new Product('scissors.jpg','img/scissors.jpg');
let shark = new Product('shark.jpg','img/shark.jpg');
let sweep = new Product('sweep.png','img/sweep.png');
let tauntaun = new Product('tauntaun.jpg','img/tauntaun.jpg');
let unicorn= new Product('unicorn.jpg','img/unicorn.jpg');
let watercan = new Product('water-can.jpg','img/water-can.jpg');
let wineglass = new Product('wine-glass.jpg','img/water-can.jpg');
products.oddproductsArray.push(bag,banana,bathroom,boots,breakfast,bubblegum,chair,cthulhu,dogduck,dragon,pen,petsweep,scissors,shark,sweep,tauntaun,unicorn,watercan,wineglass);

renderproducts();
goatContainer.addEventListener('click',handleGoatClick);