const menuScreen = document.getElementById("menuScreen");
const viewerScreen = document.getElementById("viewerScreen");
const viewer = document.getElementById("cocktailViewer");
const title = document.getElementById("cocktailTitle");
const backButton = document.getElementById("backButton");
const cocktailCards = document.querySelectorAll(".cocktail-card");
cocktailCards.forEach((card) => {
 card.addEventListener("click", () => {
 const name = card.dataset.name;
 const model = card.dataset.model;
 const ios = card.dataset.ios;
 const poster = card.dataset.poster;
 title.textContent = name;
 viewer.src = model;
 viewer.poster = poster;
 // If a USDZ file exists, use it for iPhone Quick Look.
 // If not, remove ios-src and let model-viewer handle fallback behavior.
 if (ios && ios.trim() !== "") {
 viewer.setAttribute("ios-src", ios);
 } else {
 viewer.removeAttribute("ios-src");
 }
 menuScreen.classList.remove("active");
 viewerScreen.classList.add("active");
 });
});
backButton.addEventListener("click", () => {
 viewerScreen.classList.remove("active");
 menuScreen.classList.add("active");
 viewer.pause();
});
