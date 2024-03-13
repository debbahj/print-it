const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const banner = document.getElementById('banner')
const bannerImg = banner.querySelector('.banner-img')
const bannerText = banner.querySelector('p')
const arrowLeft = banner.querySelector('.arrow_left')
const arrowRight = banner.querySelector('.arrow_right')
const dots = banner.querySelectorAll('.dots .dot')

let indexSlides = 0

const updateSlide = index => {
	indexSlides = index < 0 
		? index + slides.length 
		: (index >= slides.length 
			? index - slides.length 
			: index)
	bannerImg.src = `./assets/images/slideshow/${slides[indexSlides].image}`
	bannerText.innerHTML = slides[indexSlides].tagLine

	dots.forEach((dot, indexDot) => {
		indexDot === indexSlides
			? dot.classList.add('dot_selected')
			: dot.classList.remove('dot_selected')
	})
}

arrowLeft.addEventListener('click', () => {
	updateSlide(indexSlides - 1)
})

arrowRight.addEventListener('click', () => {
	updateSlide(indexSlides + 1)
})

dots.forEach((dot, indexDot) => {
	dot.addEventListener('click', () => {
		updateSlide(indexDot)
	})
})