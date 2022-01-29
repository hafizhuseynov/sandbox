import Swiper from 'https://unpkg.com/swiper@7/swiper-bundle.esm.browser.min.js';

const swiper = new Swiper('.swiper', {
	slidesPerView: 1,
	spaceBetween: 20,
	breakpoints:{
		1024: {
			slidesPerView: 3,
		}
	},
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});