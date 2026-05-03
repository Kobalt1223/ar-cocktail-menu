const menuScreen = document.getElementById("menuScreen");
const viewerScreen = document.getElementById("viewerScreen");
const ingredientsScreen = document.getElementById("ingredientsScreen");
const viewer = document.getElementById("cocktailViewer");
const title = document.getElementById("cocktailTitle");
const cornerImage = document.getElementById("cornerImage");
const backButton = document.getElementById("backButton");
const ingredientsButton = document.getElementById("ingredientsButton");
const backToModelButton = document.getElementById("backToModelButton");
const ingredientsTitle = document.getElementById("ingredientsTitle");
const ingredientsText = document.getElementById("ingredientsText");
const cocktailCards = document.querySelectorAll(".cocktail-card");
let currentCocktailName = "";
let currentIngredients = "";
cocktailCards.forEach((card) => {
 card.addEventListener("click", () => {
 const name = card.dataset.name;
 const model = card.dataset.model;
 const ios = card.dataset.ios;
 const poster = card.dataset.poster;
 const ingredients = card.dataset.ingredients;
 currentCocktailName = name;
 currentIngredients = ingredients;
 title.textContent = name;
 viewer.src = model;
 viewer.setAttribute("ios-src", ios);
 viewer.poster = poster;
 cornerImage.src = poster;
 cornerImage.alt = name;
 menuScreen.classList.remove("active");
 ingredientsScreen.classList.remove("active");
 viewerScreen.classList.add("active");
 });
});
backButton.addEventListener("click", () => {
 viewerScreen.classList.remove("active");
 ingredientsScreen.classList.remove("active");
 menuScreen.classList.add("active");
 viewer.pause();
});
ingredientsButton.addEventListener("click", () => {
 ingredientsTitle.textContent = currentCocktailName + " Ingredients";
 ingredientsText.textContent = currentIngredients;
 viewerScreen.classList.remove("active");
 ingredientsScreen.classList.add("active");
});
backToModelButton.addEventListener("click", () => {
 ingredientsScreen.classList.remove("active");
 viewerScreen.classList.add("active");
});