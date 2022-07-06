// TODO
// pop me renvoie le dernière élement du tableau spérarer par split('#')
const code = window.location.href.split('#').pop();
const decode = atob(code);
console.log(code)

// J'initialise les params de l'url que je veux récupérer
const urlParams = new URLSearchParams(decode);
// Url de test : http://127.0.0.1:5500/?rating=4.5&reviews=540&type=blackRect

// P3JhdGluZz00LjUmcmV2aWV3cz01NDAmdHlwZT13cg==

const rating = urlParams.get("rating");

const reviews = urlParams.get("reviews");

const type = urlParams.get("type");
const elem = {
  wrnd: "<div class='badge round-badge'><span class='number-rating'></span><div class='star-container'><div class='stars-outer'><div class='stars-inner'></div></div></div><p class='number-reviews'></p><div class='container-logo-reviewlib'><img class='img-logo-reviewlib'src='./Assets/logo_reviewlib.svg'alt='Logo-reviewlib'/><p class='p-reviewlib'>REVIEW<strong>LIB</strong></p></div></div>",

  wrct: "<div class='badge rectangle-badge'><div class='rectangle-badge-main'><div class='rectangle-badge-left'><div class='star-container rectangle-badge-star-container'><div class='stars-outer'><div class='stars-inner'></div></div></div><p class='number-reviews rectangle-badge-number-reviews'></p><div class='container-logo-reviewlib'> <imgclass='img-logo-reviewlib'src='./Assets/logo_reviewlib.svg'alt='Logo-reviewlib'/><p class='p-reviewlib'>REVIEW<strong>LIB</strong></p></div></div><span class='number-rating rectangle-badge-number-rating'></span></div></div>",

  brnd: "<div class='badge round-badge badge-border-white'><span class='number-rating color-white'></span> <div class='star-container'> <div class='stars-outer'> <div class='stars-inner'></div></div> </div> <p class='number-reviews color-white'></p> <div class='container-logo-reviewlib'> <img class='img-logo-reviewlib' src='./Assets/logo_reviewlib.svg' alt='Logo-reviewlib' /> <p class='p-reviewlib color-white'>REVIEW<strong>LIB</strong></p></div></div>",

  brct: "<div class='badge rectangle-badge badge-border-white'> <div class='rectangle-badge-main'> <div class='rectangle-badge-left'> <div class='star-container rectangle-badge-star-container'><div class='stars-outer'><div class='stars-inner'></div></div></div> <p class='number-reviews rectangle-badge-number-reviews color-white'></p><div class='container-logo-reviewlib'><img class='img-logo-reviewlib' src='./Assets/logo_reviewlib.svg'alt='Logo-reviewlib'/><p class='p-reviewlib color-white'>REVIEW<strong>LIB</strong></p></div></div><span class='number-rating rectangle-badge-number-rating color-white'></span></div></div>",
};

// J'insère mon badge en fonction du params saisi et gestion de l'erreur
document.getElementById("container-white").innerHTML = elem[type] || elem.wrnd;

// Encoder mes reviews et rating en base64

// Nombre total d'étoile
const starsTotal = 5;

function getRating() {
  // Je convertie ma rating en pourcentage
  const starPercentage = (rating / starsTotal) * 100;

  // J'arrondie ma rating à la dizaine la plus proche
  const starPercentageRound = `${Math.round(starPercentage / 10) * 10}%`;

  // Je définie la largeur de mes étoiles intérieur en pourcentage
  var x = document.getElementsByClassName("stars-inner");
  for (var i = 0; i < x.length; i++) {
    x[i].style.width = starPercentageRound;
  }

  // J'ajoute ma rating
  var y = document.getElementsByClassName("number-rating");
  for (var i = 0; i < y.length; i++) {
    y[i].innerHTML = `${rating}/5`;
  }
}
getRating();

function getReviews() {
  var r = document.getElementsByClassName("number-reviews");
  for (var i = 0; i < r.length; i++) {
    r[i].innerHTML = `${reviews} Avis reçus`;
  }
}
getReviews();
