const getRedButton = document.querySelector(".red-background");
const getOrangeButton = document.querySelector(".orange-background");
const getPurpleButton = document.querySelector(".purple-background");
const getGreenButton = document.querySelector(".green-background");
const getBody = document.querySelector("body");
const getMenu = document.querySelector("aside");
const getButton = document.querySelector(".btn-toggle-nav");

const showMenu = () =>{
    getMenu.classList.remove("hidden");
    getMenu.classList.add("visible");
} 
getButton.addEventListener("click", showMenu);

const makeBackgroundRed = () =>{
    getBody.classList.add("red-background");
    getBody.classList.remove("orange-background");
    getBody.classList.remove("purple-background");
    getBody.classList.remove("green-background");
    getMenu.classList.remove("visible");
    getMenu.classList.add("hidden");
    alert("Achtergrondkleur wordt rood!")
}
getRedButton.addEventListener("click", makeBackgroundRed);

const makeBackgroundOrange = () =>{
    getBody.classList.add("orange-background");
    getBody.classList.remove("red-background");
    getBody.classList.remove("purple-background");
    getBody.classList.remove("green-background");
    getMenu.classList.remove("visible");
    getMenu.classList.add("hidden");
    alert("Achtergrondkleur wordt oranje!")
}
getOrangeButton.addEventListener("click", makeBackgroundOrange);

const makeBackgroundPurple = () =>{
    getBody.classList.add("purple-background");
    getBody.classList.remove("orange-background");
    getBody.classList.remove("red-background");
    getBody.classList.remove("green-background");
    getMenu.classList.remove("visible");
    getMenu.classList.add("hidden");
    alert("Achtergrondkleur wordt paars!")
}
getPurpleButton.addEventListener("click", makeBackgroundPurple);

const makeBackgroundGreen = () =>{
    getBody.classList.add("green-background");
    getBody.classList.remove("orange-background");
    getBody.classList.remove("purple-background");
    getBody.classList.remove("red-background");
    getMenu.classList.remove("visible");
    getMenu.classList.add("hidden");
    alert("Achtergrondkleur wordt groen!")
}
getGreenButton.addEventListener("click", makeBackgroundGreen);

