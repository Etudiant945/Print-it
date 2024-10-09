const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// Sélectionner les flèches
const leftArrow = document.querySelector('.arrow_left');
const rightArrow = document.querySelector('.arrow_right');

// Ajouter des event listeners sur chaque flèche
leftArrow.addEventListener('click', function() {
    console.log('Clic sur la flèche gauche');
    // Vous pouvez aussi utiliser alert('Clic sur la flèche gauche');
});

rightArrow.addEventListener('click', function() {
    console.log('Clic sur la flèche droite');
    // Vous pouvez aussi utiliser alert('Clic sur la flèche droite');
});