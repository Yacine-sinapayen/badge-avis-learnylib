// pop me renvoie le dernière élement du tableau spérarer par split('#')
const code = window.location.href.split("#").pop();
const data = atob(code).split(";");

const rating = data[0];

const reviews = data[1];

const type = data[2];

const elem = {
  wrnd: "<div class='badge round-badge'><span class='number-rating'></span><div class='star-container'><div class='stars-outer fa-1x'><div class='stars-inner fa-1x'></div></div></div><p class='number-reviews'></p><div class='container-logo-reviewlib'><p class='p-reviewlib'>REVIEW<strong>LIB</strong></p></div></div>",

  wrct: "<div class='badge rectangle-badge'><div class='rectangle-badge-main'><div class='rectangle-badge-left'><div class='star-container rectangle-badge-star-container'><div class='stars-outer'><div class='stars-inner'></div></div></div><p class='number-reviews rectangle-badge-number-reviews'></p><div class='container-logo-reviewlib'> <imgclass='img-logo-reviewlib'src='./Assets/logo_reviewlib.svg'alt='Logo-reviewlib'/><p class='p-reviewlib'>REVIEW<strong>LIB</strong></p></div></div><span class='number-rating rectangle-badge-number-rating'></span></div></div>",

  brnd: "<div class='badge round-badge badge-border-white'><span class='number-rating color-white'></span> <div class='star-container'> <div class='stars-outer'> <div class='stars-inner'></div></div> </div> <p class='number-reviews color-white'></p> <div class='container-logo-reviewlib'> <img class='img-logo-reviewlib' src='./Assets/logo_reviewlib.svg' alt='Logo-reviewlib' /> <p class='p-reviewlib color-white'>REVIEW<strong>LIB</strong></p></div></div>",

  brct: "<div class='badge rectangle-badge badge-border-white'> <div class='rectangle-badge-main'> <div class='rectangle-badge-left'> <div class='star-container rectangle-badge-star-container'><div class='stars-outer'><div class='stars-inner'></div></div></div> <p class='number-reviews rectangle-badge-number-reviews color-white'></p><div class='container-logo-reviewlib'><img class='img-logo-reviewlib' src='./Assets/logo_reviewlib.svg'alt='Logo-reviewlib'/><p class='p-reviewlib color-white'>REVIEW<strong>LIB</strong></p></div></div><span class='number-rating rectangle-badge-number-rating color-white'></span></div></div>",
};

// J'insère mon badge en fonction du params saisi et gestion de l'erreur
// document.getElementById("container-white").innerHTML = elem[type] || elem.wrnd;
document.getElementById("container").innerHTML = elem.brct;

// Nombre total d'étoile
const starsTotal = 5;

function getRating() {
  // Je convertie ma note en pourcentage
  const starPercentage = (rating / starsTotal) * 100;

  // J'arrondie ma note à la dizaine la plus proche
  const starPercentageRound = `${Math.round(starPercentage / 10) * 10}%`;

  // Je définie la largeur de mes étoiles intérieur en pourcentage
  document.getElementsByClassName("stars-inner")[0].style.width =
    starPercentageRound;

  // J'insère ma note
  document.getElementsByClassName("number-rating")[0].innerHTML = `${rating}/5`;
}
getRating();

// J'insère le nombre d'avis reçus
document.getElementsByClassName("number-reviews")[0].innerHTML = `${reviews} Avis reçus`;
