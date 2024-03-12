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

const BANNER = document.getElementById('banner')
const ARROW_LEFT = BANNER.querySelector('.arrow_left')
const ARROW_RIGHT = BANNER.querySelector('.arrow_right')
const DOTS = BANNER.querySelectorAll('.dots .dot')

let index = 0

const SLIDER = (index) => {
	const BANNER_IMG = BANNER.querySelector('.banner-img')
	const BANNER_TEXT = BANNER.querySelector('p')
	const DOTS = BANNER.querySelectorAll('.dots .dot')

	BANNER_IMG.src = `./assets/images/slideshow/${slides[index].image}`
	BANNER_TEXT.innerHTML = slides[index].tagLine

	DOTS.forEach((dot, indexDot) => {
		indexDot === index
			? dot.classList.add('dot_selected')
			: dot.classList.remove('dot_selected')
	})
}

ARROW_LEFT.addEventListener('click', () => {
	index--
	index < 0
		? index = slides.length - 1
		: index
	SLIDER(index)
	// console.log(index)
})

ARROW_RIGHT.addEventListener('click', () => {
	index++
	index > slides.length - 1
		? index = 0
		: index
	SLIDER(index)
	// console.log(index)
})

DOTS.forEach((dot, indexDot) => {
	dot.addEventListener('click', () => {
		index = indexDot
		SLIDER(index)
		// console.log(index, indexDot);
	})
})