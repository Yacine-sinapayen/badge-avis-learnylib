// J'initialise ma note
const note = 4.5;

// Nombre d'avis
const reviews = 530;

//  Nombre total d'étoile
const starsTotal = 5;

function getRating() {
  // Je convertie ma note en pourcentage
  const starPercentage = (note / starsTotal) * 100;

  // J'arrondie ma note à la dizaine la plus proche
  const starPercentageRound = `${Math.round(starPercentage / 10) * 10}%`;

  // Je définie la largeur de mes étoiles intérieur en pourcentage
  var x = document.getElementsByClassName("stars-inner");
  for (var i = 0; i < x.length; i++) {
    x[i].style.width = starPercentageRound;
  }

  // J'ajoute ma note
  var y = document.getElementsByClassName("number-rating");
  for (var i = 0; i < y.length; i++) {
    y[i].innerHTML = `${note}/5`;
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
