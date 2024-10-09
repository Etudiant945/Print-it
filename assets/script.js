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

// Sélectionner les éléments dans le DOM
const leftArrow = document.querySelector('.arrow_left');
const rightArrow = document.querySelector('.arrow_right');
const bannerImage = document.querySelector('.banner-img');
const bannerTagline = document.querySelector('#banner p');
const dotsContainer = document.querySelector('.dots');

let currentSlide = 0;

// Fonction pour mettre à jour le slider
function updateSlider(index) {
    bannerImage.src = `./assets/images/slideshow/${slides[index].image}`;
    bannerTagline.innerHTML = slides[index].tagLine;
    updateDots(index);
}

// Générer dynamiquement les bullet points
slides.forEach((_, index) => {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if (index === 0) {
        dot.classList.add('dot_selected');
    }
    
    // Ajouter un event listener pour les points
    dot.addEventListener('click', () => {
        currentSlide = index;
        updateSlider(currentSlide);
    });

    dotsContainer.appendChild(dot);
});

// Mettre à jour la classe 'dot_selected'
function updateDots(index) {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, idx) => {
        dot.classList.toggle('dot_selected', idx === index);
    });
}

// Ajouter un event listener pour la flèche gauche
leftArrow.addEventListener('click', function() {
    alert('Vous avez cliqué sur la flèche gauche !');
    console.log('Flèche gauche cliquée');
    currentSlide = (currentSlide > 0) ? currentSlide - 1 : slides.length - 1;
    updateSlider(currentSlide);
});

// Ajouter un event listener pour la flèche droite
rightArrow.addEventListener('click', function() {
    alert('Vous avez cliqué sur la flèche droite !');
    console.log('Flèche droite cliquée');
    currentSlide = (currentSlide < slides.length - 1) ? currentSlide + 1 : 0;
    updateSlider(currentSlide);
});
