/***************************************************
==================== JS INDEX ======================
****************************************************
01. tp-portfolio-slider
02. tp-brands-slide
03. tp-testimonial-slide
04. tp-testimonial-slide-family
05. tp-hero-slider
06. tp-testimonial-busi-slide
07. tp-testimonial-health-slide
08. tp-video-brand-slider
09. tp-testimonial-health-slide
10. tp-testimonial-care-slider
11. tp-hero-slider-2
12. tp-testimonial-health-slide
13. tp-team-slider-active
14. tp-brand-mrg-slider
15. tp-brand-mrg-slider-2
16. postbox-thumb-slider-active
 ****************************************************/

(function ($) {
	"use strict";

	////////////////////////////////////////////////////
	// 01. tp-portfolio-slider
	var slider = new Swiper('.tp-portfolio-slider', {
		spaceBetween: 30,
		loop: true,
		speed:1500,
		autoplay: {
			delay: 4000,
		  },
		breakpoints: {
			'1600': {
				slidesPerView: 4,
			},
			'1400': {
				slidesPerView: 3,
			},
			'1200': {
				slidesPerView: 3,
			},
			'768': {
				slidesPerView: 2,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
		},
		navigation: {
			nextEl: ".tp-portfolio-agen-next",
			prevEl: ".tp-portfolio-agen-prev",
		},
		  scrollbar: {
			el: ".tp-portfolio-pagination",
			clickable: true,
		},
	});

	////////////////////////////////////////////////////
	// 02. tp-brands-slide
	var slider = new Swiper('.tp-brand-slider', {
		slidesPerView: 1,
		spaceBetween: 30,
		speed:1500,
		loop: true,
		centeredSlides: true,
		freeMode: true,
		autoplay: {
			delay: 4000,
		  },
		breakpoints: {
			'1200': {
				slidesPerView: 5,
			},
			'992': {
				slidesPerView: 4,
			},
			'768': {
				slidesPerView: 3,
			},
			'576': {
				slidesPerView: 2,
			},
			'400': {
				slidesPerView: 1,
			},
		},
	});



	////////////////////////////////////////////////////
	// 03. tp-testimonial-slide
	var slider = new Swiper('.tp-testimonial-slide', {
		slidesPerView: 1,
		speed:1500,
		spaceBetween: 30,
		loop: true,
		freeMode: true,
		autoplay: {
			delay: 4000,
		  },
		breakpoints: {
			'1600': {
				slidesPerView: 4,
			},
			'1200': {
				slidesPerView: 3,
			},
			'768': {
				slidesPerView: 2,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
		},
	});


	
	////////////////////////////////////////////////////
	// 04. tp-testimonial-slide-family
	var slider = new Swiper('.tp-testimonial-slide-family', {
		slidesPerView: 1,
		speed:1500,
		spaceBetween: 30,
		loop: true,
		navigation: {
			nextEl: ".tp-testimonial-family-next",
			prevEl: ".tp-testimonial-family-prev",
		},
		autoplay: {
			delay: 4000,
		  },
		breakpoints: {
			'1600': {
				slidesPerView: 2,
			},
			'1200': {
				slidesPerView: 2,
			},
			'991': {
				slidesPerView: 2,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
		},
	});

	////////////////////////////////////////////////////
	// 05. tp-hero-slider
	var slider = new Swiper('.tp-slider-zoom', {
		slidesPerView: 1,
		speed:1500,
		spaceBetween: 0,
		loop: true,
		effect: "fade",
		autoplay: {
			delay: 6000,
		  },
		pagination: {
			el: ".tp-slider-pagenation",
			clickable: true,
		  },
	});

	////////////////////////////////////////////////////
	// 06. tp-testimonial-busi-slide
	var slider = new Swiper('.tp-testimonial-busi-slide', {
		slidesPerView: 1,
		speed:1500,
		spaceBetween: 30,
		loop: true,
		autoplay: {
			delay: 4000,
		  },
		breakpoints: {
			'1200': {
				slidesPerView: 3,
			},
			'768': {
				slidesPerView: 2,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
		},
	});


	////////////////////////////////////////////////////
	// 07. tp-testimonial-health-slide
	var slider = new Swiper('.tp-testimonial-2-active', {
		speed:1500,
		loop: true,
		slidesPerView: 3,
		autoplay: true,
		spaceBetween: 25,
		autoplay: {
			delay: 4000,
		},
		breakpoints: {
			'1600': {
				slidesPerView:3,
			},
			'1400': {
				slidesPerView:3,
			},
			'1200': {
				slidesPerView:3,
			},
			'992': {
				slidesPerView: 3,
			},
			'768': {
				slidesPerView: 2,
			},
			'576': {
				slidesPerView: 2,
			},
			'0': {
				slidesPerView: 1,
			},
			a11y: false,
		},
	});

	////////////////////////////////////////////////////
	// 08. tp-video-brand-slider
	var slider = new Swiper('.tp-video-brand-slider', {
		speed:1500,
		loop: true,
		slidesPerView: 3,
		autoplay: true,
		spaceBetween: 25,
		autoplay: {
			delay: 4000,
		},
		breakpoints: {
			'1600': {
				slidesPerView:4,
			},
			'1400': {
				slidesPerView:4,
			},
			'1200': {
				slidesPerView:4,
			},
			'992': {
				slidesPerView: 3,
			},
			'768': {
				slidesPerView: 2,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
			a11y: false,
		},
	});



	////////////////////////////////////////////////////
	// 09. tp-testimonial-health-slide
	var slider = new Swiper('.tp-testimonial-health-slide', {
		slidesPerView: 1,
		speed:1500,
		spaceBetween: 30,
		loop: true,
		navigation: {
			nextEl: ".tp-testimonial-health-pagenation-prev",
			prevEl: ".tp-testimonial-health-pagenation-next",
		},
		autoplay: {
			delay: 4000,
		  },
		breakpoints: {
			'1200': {
				slidesPerView: 2,
			},
			'768': {
				slidesPerView: 2,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
		},
	});


	////////////////////////////////////////////////////
	// 10. tp-testimonial-care-slider
	var slider = new Swiper('.tp-testimonial-care-slider', {
		loop: true,
		slidesPerView: 1,
		autoplay: true,
		spaceBetween: 40,
		autoplay: {
			delay: 4000,
		},
		navigation: {
			nextEl: ".tp-testimonial-health-pagenation-prev",
			prevEl: ".tp-testimonial-health-pagenation-next",
		},
		breakpoints: {
			'1200': {
				slidesPerView:1,
			},
			'768': {
				slidesPerView: 1,
			},
			'576': {
				slidesPerView: 1,
			},
		},
	});

	////////////////////////////////////////////////////
	// 11. tp-hero-slider-2
	var slider = new Swiper('.tp-slider-zoom-2', {
		slidesPerView: 1,
		speed:1300,
		spaceBetween: 0,
		loop: true,
		autoplay: {
			delay: 3500,
		},
		// If we need pagination
		pagination: {
			el: ".main-slider-dot, .tp-slider-dot-8",
			clickable: true,
			renderBullet: function (index, className) {
			return '<span class="' + className + '">' + '<button>'+ '0' +(  index + 1)+'</button>' + "</span>";
			},
		},
		navigation: {
			prevEl: ".tp-slider-navigation-prev",
			nextEl: ".tp-slider-navigation-next",
		},
	});



	////////////////////////////////////////////////////
	// 12. tp-testimonial-health-slide
	var slider = new Swiper('.tp-service-travel-slider', {
		speed:1500,
		loop: true,
		autoplay: true,
		spaceBetween: 20,
		slidesPerView: 2,
		autoplay: {
			delay: 4000,
		},
		breakpoints: {
			'1600': {
				slidesPerView: 3,
			},
			'1400': {
				slidesPerView:3,
			},
			'1200': {
				slidesPerView:3,
			},
			'992': {
				slidesPerView: 2,
			},
			'768': {
				slidesPerView: 1,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
			a11y: false,
		},
	});


	////////////////////////////////////////////////////
	// 13. tp-team-alider-active
	var slider = new Swiper('.tp-team-mrg-slider-active', {
		speed:1500,
		loop: true,
		autoplay: true,
		spaceBetween: 20,
		centeredSlides: true,
		slidesPerView: 2,
		autoplay: {
			delay: 4000,
		},
		pagination: {
			el: ".tp-team-mrg-pagenation",
			clickable: true,
		},
		breakpoints: {
			'1600': {
				slidesPerView: 3,
			},
			'1400': {
				slidesPerView:3,
			},
			'1200': {
				slidesPerView:3,
			},
			'992': {
				slidesPerView: 2,
			},
			'768': {
				slidesPerView: 2,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
			a11y: false,
		},
	});

	var tp_feature_slide = new Swiper(".tp-feature-slide-top", {
		loop: true,
		freemode: true,
		slidesPerView: 'auto',
		spaceBetween: 25,
		centeredSlides: true,
		allowTouchMove: false,
		speed: 4000,
		autoplay: {
		  delay: 1,
		  disableOnInteraction: true,
		},
	  });

	////////////////////////////////////////////////////
	// 14. tp-brand-mrg-slider
	var slider = new Swiper('.tp-brand-mrg-slider', {
		loop: true,
		freemode: true,
		slidesPerView: 'auto',
		spaceBetween: 25,
		centeredSlides: true,
		allowTouchMove: false,
		speed: 4000,
		autoplay: {
		  delay: 1,
		  disableOnInteraction: true,
		},
		breakpoints: {
			'1200': {
				slidesPerView: 4,
			},
			'992': {
				slidesPerView: 3,
			},
			'768': {
				slidesPerView: 2,
			},
			'576': {
				slidesPerView: 2,
			},
			'0': {
				slidesPerView: 1,
			},
			a11y: false,
		},
	});

	////////////////////////////////////////////////////
	// 15. tp-brand-mrg-slider-2
	var slider = new Swiper('.tp-brand-mrg-slider2', {
		loop: true,
		freemode: true,
		slidesPerView: 'auto',
		spaceBetween: 25,
		centeredSlides: true,
		allowTouchMove: false,
		speed: 4000,
		autoplay: {
		  delay: 1,
		  disableOnInteraction: true,
		},
		breakpoints: {
			'1200': {
				slidesPerView: 4,
			},
			'992': {
				slidesPerView: 3,
			},
			'768': {
				slidesPerView: 2,
			},
			'576': {
				slidesPerView: 2,
			},
			'0': {
				slidesPerView: 1,
			},
			a11y: false,
		},
	});

	////////////////////////////////////////////////////
	// 16. postbox-thumb-slider-active
	var postbox = new Swiper('.postbox-thumb-slider-active', {
		slidesPerView: 1,
		loop: true,
		autoplay: true,
		effect: 'fade',
		breakpoints: {
			'1400': {
				slidesPerView: 1,
			},
			'1200': {
				slidesPerView: 1,
			},
			'992': {
				slidesPerView: 1,
			},
			'768': {
				slidesPerView: 1,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
		},
		// Navigation arrows
		navigation: {
			nextEl: '.tp-postbox-arrow-next',
			prevEl: '.tp-postbox-arrow-prev',
		},
		a11y: false,
	});
})(jQuery);