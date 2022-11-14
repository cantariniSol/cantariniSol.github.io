// 1. Change color of car and addToCart button color when a color is selected
// - Selecting Elements
const redColor = document.querySelector(".red");
const grayColor = document.getElementsByClassName("gray");
const blueColor = document.querySelector(".blue");
const cartButton = document.getElementById("button");
const itemTag = document.getElementsByTagName("h3")[0];
const imageCard = document.querySelector(".product-image");
const feedBackBtn = document.querySelector(".feedback");

//2.Modifying Elements
// - Add Event Listeners
// - Red Color
redColor.addEventListener("click", ()=>{
    cartButton.style.backgroundColor = "red";
    itemTag.style.backgroundColor = "red";
    imageCard.style.backgroundImage = 'url("./img/red-benz.jpg")'
})
// - Gray Color
grayColor[0].addEventListener("click", ()=>{
    cartButton.style.backgroundColor = "gray";
    itemTag.style.backgroundColor = "gray";
    imageCard.style.backgroundImage = 'url("./img/gray-benz.jpg")'
})

// - Blue Color
blueColor.addEventListener("click", ()=>{
    cartButton.style.backgroundColor = "blue";
    itemTag.style.backgroundColor = "blue";
    imageCard.style.backgroundImage = 'url("./img/blue-benz.jpg")';
})

//Buton Click Implementations
// -Cart Button
const cart = ()=>{
    cartButton.style.display = "none";
    feedBackBtn.style.display = "block";
};

cartButton.addEventListener('click', cart);

const feedBack = ()=>{
    cartButton.style.display ="block";
    feedBackBtn.style.display ="none";
};
feedBackBtn.addEventListener("click", feedBack);
