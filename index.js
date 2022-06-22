const note = 4.5;

//  Nombre total d'étoile
const starsTotal = 5;

function getRating() {
  // Je convertie ma note en pourcentage
  const starPercentage = (note / starsTotal) * 100;

  // J'arrondie ma note à la dizaine la plus proche
  const starPercentageRound = `${Math.round(starPercentage / 10) * 10}%`;

  // Je définie la largeur de mes étoiles intérieur en pourcentage
  document.querySelector(`.stars-inner`).style.width = starPercentageRound;

// J'ajoute ma note 
document.querySelector(`.number-rating`).innerHTML = note
}
getRating();
