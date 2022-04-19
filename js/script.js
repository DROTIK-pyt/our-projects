document.addEventListener('DOMContentLoaded', (e) => {
	document.querySelectorAll('.container-mixer').length ? mixitup('.container-mixer') : ""

	let feedbackSwiper = new Swiper(".feedback__slider", {
		pagination: {
			el: ".feedback__pagination",
			clickable: true,
		},
		slidesPerView: 1,
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		},
		spaceBetween: 30,
		breakpoints: {
			992: {
				slidesPerView: 2,
			}
		}
	});

	new Swiper('.popular__slider1',{
	  pagination: {
	    el: '.popular__pagination1',
	    clickable: true
	  },
	  slidesPerView: 1,
	  loop: false,
	  centeredSlides: true,
	  spaceBetween: 30,
	  breakpoints: {
	      992: {
	        slidesPerView: 3,
	        loop: true,
	        centeredSlides: false,
	      },
	      768: {
	      	slidesPerView: 2,
	      	loop: true,
	      	centeredSlides: false,
	      }
	    },
	});
	new Swiper('.popular__slider',{
	  pagination: {
	    el: '.popular__pagination',
	    clickable: true
	  },
	  slidesPerView: 1,
	  loop: false,
	  centeredSlides: true,
	  spaceBetween: 30,
	  breakpoints: {
	      992: {
	        slidesPerView: 3,
	        loop: true,
	        centeredSlides: false,
	      },
	      768: {
	      	slidesPerView: 2,
	      	loop: true,
	      	centeredSlides: false,
	      }
	    },
	});
	new Swiper('.popular__slider2',{
	  pagination: {
	    el: '.popular__pagination2',
	    clickable: true
	  },
	  slidesPerView: 1,
	  loop: false,
	  centeredSlides: true,
	  spaceBetween: 30,
	  breakpoints: {
	      992: {
	        slidesPerView: 3,
	        loop: true,
	        centeredSlides: false,
	      },
	      768: {
	      	slidesPerView: 2,
	      	loop: true,
	        centeredSlides: false,
	      }
	    },
	});

	let openMenu = document.querySelector('.btn-mobile-menu-open')

	openMenu?.addEventListener('click', (e) => {
		document.querySelector('header').classList.add('mobile-menu-opened')
		document.querySelector('body').style.overflow = 'hidden'
	})

	document.querySelector('#overlay')?.addEventListener('click', (e) => {
		document.querySelector('header').classList.remove('mobile-menu-opened')
		document.querySelector('body').style.overflow = 'auto'
	})
})