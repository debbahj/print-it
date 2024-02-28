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

let myBanner = document.getElementById('banner');
let myBannerArrowLeft = document.querySelector('.arrow_left');
let myBannerArrowRight = document.querySelector('.arrow_right');

myBannerArrowLeft.addEventListener("click", (event)=>{
	if (event.button !== 0) return
	console.log(event)
});

console.log(myBanner);
console.log(myBannerArrowLeft);
console.log(myBannerArrowRight);
