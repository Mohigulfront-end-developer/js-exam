const productsList = document.querySelector(".products");

const url = "../json/products.json";
const fetchData = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};
fetchData(url).then((products) => {
  products.slice(0, 4).forEach((product) => {
    const card = document.createElement("div");
    const cardImg = document.createElement("img");
    const cardPrice = document.createElement("span");
    const cardTitle = document.createElement("h3");
    const cardRate = document.createElement("span");

    card.classList.add("card");

    cardImg.src = product.image;
    cardTitle.textContent = product.title;
    cardPrice.textContent = product.price;
    cardRate.textContent = product.rating.rate;

    card.appendChild(cardImg);
    card.appendChild(cardTitle);
    card.appendChild(cardPrice);
    card.appendChild(cardRate);

    productsList.appendChild(card);
  });
});

fetchData();
const newProductsList = document.querySelector(".new__products");

// const fetchData = () => {
//    fetch("./json/products.json")
//    .then(response => response.json())
//    .then(products => {
//       products.slice(4, 8).forEach(product => {
//          const newCard = document.createElement("div");
//          const newCardImg = document.createElement("img");
//          const newCardPrice = document.createElement("span");
//          const newCardTitle = document.createElement("h3");
//          const newCardRate = document.createElement("span");

//          newCard.classList.add("new__card");

//          newCardImg.src = product.image;
//          newCardTitle.textContent = product.title;
//          newCardPrice.textContent = product.price;
//          newCardRate.textContent = product.rating.rate;

//          newCard.appendChild(newCardImg);
//          newCard.appendChild(newCardTitle);
//          newCard.appendChild(newCardPrice);
//          newCard.appendChild(newCardRate);

//          newProductsList.appendChild(newCard);
//       });
//    })
// }

fetchData(url).then((products) => {
  products.slice(4, 8).forEach((product) => {
    const newCard = document.createElement("div");
    const newCardImg = document.createElement("img");
    const newCardPrice = document.createElement("span");
    const newCardTitle = document.createElement("h3");
    const newCardRate = document.createElement("span");

    newCard.classList.add("new__card");

    newCardImg.src = product.image;
    newCardTitle.textContent = product.title;
    newCardPrice.textContent = product.price;
    newCardRate.textContent = product.rating.rate;

    newCard.appendChild(newCardImg);
    newCard.appendChild(newCardTitle);
    newCard.appendChild(newCardPrice);
    newCard.appendChild(newCardRate);

    newProductsList.appendChild(newCard);
  });
});
