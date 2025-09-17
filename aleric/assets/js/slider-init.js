/***************************************************
==================== JS INDEX ======================
****************************************************
01. tp-brand-slide-active
02. tp-text-slider-active
03. tp-testimonial-slider-active
04. tp-team-slider-active
05. tp-testimonial-2-slider-active
06. tp-service-sa-slider
07. tp-testimonial-sa-slider
08. tp-portfolio-showcase-slide-active
09. tp-postbox-thumb-slider-active
10. tp-service-cst-slider
11. tp-text-cst-slide-active
12. tp-testimonial-cst-slider
13. tp-text-it-slider-active
14. tp-service-it-slider
15. tp-testimonial-it-slider
16. tp-testimonial-pb-slider
17. tp-skill-slider-active
18. tp-text-ai-slider-active
19. tp-testimonial-ai-slide-active
20. tp-text-md-slider-active
21. tp-testimonial-md-slide-active
22. tp-portfolio-slicer-active
23. tp-portfolio-horizontal-active
24. tp-portfolio-mix-slider
25. tp-portfolio-creative-slider-active
26. coverflow-slider
27. tp-pd-2-active
****************************************************/


(function ($) {
	"use strict";

	// 01. tp-brand-slide-active
	var tp_brand_slider= new Swiper(".tp-brand-slide-active", {
		loop: true,
		freemode: true,
		slidesPerView: 'auto',
		centeredSlides: true,
		allowTouchMove: false,
		speed: 8000,
		autoplay: {
		  delay: 1,
		  disableOnInteraction: true,
		},
	});

    ////////////////////////////////////////////////////
	// 02. tp-text-slider-active
    var tp_brand_slide = new Swiper(".tp-text-slider-active", {
        loop: true,
        freemode: true,
        slidesPerView: 'auto',
        spaceBetween: 0,
        centeredSlides: true,
        allowTouchMove: false,
        speed: 8000,
        autoplay: {
            delay: 1,
            disableOnInteraction: true,
        },
    });


	////////////////////////////////////////////////////
	// 03. tp-testimonial-slider-active
	  var gallery = new Swiper('.tp-testimonial-slider-active', {
		  slidesPerView: 1,
		  loop: true,
		  autoplay: true,
		  arrow: false,
		  spaceBetween: 0,
		  speed: 1000,
		  pagination: {
			  el: '#paginations',
			  type: 'custom',
			  renderCustom: function (swiper, current, total) {
				  let zero = total > 9 ? '' : '0';
				  let index = zero + current
				  let all = zero + total
				  let html = `<div class="shop-slider-pagination">
								  <span>${index}</span>
								  <span>${all}</span>
							  </div>`;
				  return html;
			  }
		  }
  
	  });
  
	////////////////////////////////////////////////////
	// 04. tp-team-slider-active
	var portfolio = new Swiper('.tp-portfolio-2-slider-active', {
		slidesPerView: 6,
		loop: true,
		autoplay: false,
		arrow: false,
		spaceBetween: 24,
		breakpoints: {
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
		},
		a11y: false,
	});

	////////////////////////////////////////////////////
	// 05. tp-testimonial-2-slider-active
	const progressBar = $(".shop-slider-progress-bar span");

	var gallery = new Swiper('.tp-testimonial-2-slider-active', {
		slidesPerView: 1,
		loop: true,
		autoplay: true,
		arrow: false,
		spaceBetween: 0,
		speed: 1000,
		a11y: false,

		navigation: {
			prevEl: '.tp-shop-prev',
			nextEl: '.tp-shop-next',
		},
		pagination: {
			el: '#paginations',
			type: 'custom',
			renderCustom: function (swiper, current, total) {
				let zero = total > 9 ? '' : '0';
				let index = zero + current
				let all = zero + total
				let html = `<div class="shop-slider-pagination">
								<span>${index}</span>
								<span>${all}</span>
							</div>`;
				return html;
			}
		},

		autoplay: {
			delay: 2500,
			disableOnInteraction: false
		},
		on: {
			autoplayTimeLeft(s, time, progress) {
				progressBar.css({
					"transform": `scaleX(calc(1 - ${progress}))`
				})
			}
		}

	});

	////////////////////////////////////////////////////
	// 06. tp-service-sa-slider
	var slider = new Swiper('.tp-service-sa-slider', {
		slidesPerView: 1,
		speed:1000,
		spaceBetween: 24,
		loop: true,
		pagination: {
			el: ".tp-service-sa-pagenation",
			clickable: true,
		},
		breakpoints: {
			'1200': {
				slidesPerView: 3,
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
		},
	});



	////////////////////////////////////////////////////
	// 07. tp-testimonial-sa-slider
	var slider = new Swiper('.tp-testimonial-sa-slider', {
		slidesPerView: 1,
		speed:1000,
		spaceBetween: 24,
		loop: true,
		pagination: {
			el: ".tp-service-sa-pagenation",
			clickable: true,
		},
		breakpoints: {
			'1200': {
				slidesPerView: 3,
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
		},
	});

	////////////////////////////////////////////////////
	// 08. tp-portfolio-showcase-slide-active
	let t7_showcase_slide_active = new Swiper(".tp-portfolio-showcase-slide-active", {
        spaceBetween: 80,
        slidesPerView: 1,
        loop: true,
		spaceBetween: 24,
        allowTouchMove: true,
		mousewheel: true,
		centeredSlides: true,
		speed: 600,
		navigation: {
			nextEl: '.tp-portfolio-showcase-next',
			prevEl: '.tp-portfolio-showcase-prev',
		},
		breakpoints: {
			'1400': {
				slidesPerView: 2,
			},
			'1200': {
				slidesPerView: 2,
			},
			'991': {
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
	});

	////////////////////////////////////////////////////
	// 09. tp-postbox-thumb-slider-active
	var testimonial = new Swiper('.tp-postbox-thumb-slider-active', {
		slidesPerView: 1,
		loop: true,
		autoplay: false,
		arrow: false,
		spaceBetween: 0,
		speed: 1000,
		effect: 'fade',
		a11y: false,

		// Navigation arrows
		navigation: {
			prevEl: '.tp-postbox-arrow-prev',
			nextEl: '.tp-postbox-arrow-next',
		},

	});

	////////////////////////////////////////////////////
	// 10. tp-service-cst-slider
	var service_cst = new Swiper('.tp-service-cst-slider', {
		slidesPerView: 6,
		loop: true,
		autoplay: false,
		arrow: false,
		spaceBetween: 27,
		breakpoints: {
			'1200': {
				slidesPerView: 3,
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
		},
		a11y: false,
	});

	// 11. tp-text-cst-slide-active
	var tp_brand_slider= new Swiper(".tp-text-cst-slide-active", {
		loop: true,
		freemode: true,
		slidesPerView: 'auto',
		centeredSlides: true,
		allowTouchMove: false,
		speed: 8000,
		autoplay: {
		  delay: 1,
		  disableOnInteraction: true,
		},
	});

	////////////////////////////////////////////////////
	// 12. tp-testimonial-cst-slider
	var slider = new Swiper('.tp-testimonial-cst-slider', {
		slidesPerView: 1,
		speed:1000,
		spaceBetween: 24,
		loop: true,
		pagination: {
			el: ".tp-testimonial-cst-pagenation",
			clickable: true,
		},
	});

    ////////////////////////////////////////////////////
	// 13. tp-text-it-slider-active
    var tp_text_slide = new Swiper(".tp-text-it-slider-active", {
        loop: true,
        freemode: true,
        slidesPerView: 'auto',
        spaceBetween: 5,
        centeredSlides: true,
        allowTouchMove: false,
        speed: 8000,
        autoplay: {
            delay: 1,
            disableOnInteraction: true,
        },
    });


	////////////////////////////////////////////////////
	// 14. tp-service-it-slider
	var slider = new Swiper('.tp-service-it-slider', {
		slidesPerView: 1,
		speed:1000,
		spaceBetween: 24,
		loop: true,
		pagination: {
			el: ".tp-service-it-pagenation",
			clickable: true,
		},
		breakpoints: {
			'1200': {
				slidesPerView: 3,
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
		},
	});


	////////////////////////////////////////////////////
	// 15. tp-testimonial-it-slider
	var service_cst = new Swiper('.tp-testimonial-it-slider', {
		slidesPerView: 4,
		loop: true,
		autoplay: false,
		arrow: false,
		spaceBetween: 30,
		pagination: {
			el: ".tp-testimonial-it-pagenation",
			clickable: true,
		},
		breakpoints: {
			'1200': {
				slidesPerView: 4,
			},
			'992': {
				slidesPerView: 3,
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
		a11y: false,
	});

	////////////////////////////////////////////////////
	// 16. tp-testimonial-pb-slider
	var service_cst = new Swiper('.tp-testimonial-pb-slider', {
		slidesPerView: 1,
		loop: true,
		autoplay: true,
		arrow: false,
		spaceBetween: 30,
		pagination: {
			el: ".tp-testimonial-pb-pagenation",
			clickable: true,
		},
	});

    ////////////////////////////////////////////////////
	// 17. tp-skill-slider-active
	document.addEventListener("DOMContentLoaded", function () {
		document.querySelectorAll(".tp-skill-pb-slider-active").forEach((el) => {
			new Swiper(el, {
				loop: true,
				freeMode: true,
				slidesPerView: 'auto',
				spaceBetween: 0,
				centeredSlides: true,
				allowTouchMove: false,
				speed: 8000,
				autoplay: {
					delay: 1,
					disableOnInteraction: false,
				},
			});
		});
	});

    ////////////////////////////////////////////////////
	// 18. tp-text-ai-slider-active
    var tp_brand_slide = new Swiper(".tp-text-ai-slider-active", {
        loop: true,
        freemode: true,
        slidesPerView: 'auto',
        spaceBetween: 0,
        centeredSlides: true,
        allowTouchMove: false,
        speed: 8000,
        autoplay: {
            delay: 1,
            disableOnInteraction: true,
        },
    });


	////////////////////////////////////////////////////
	// 19. tp-testimonial-ai-slide-active
	let tp_testimonial_ai_slide_active = new Swiper(".tp-testimonial-ai-slide-active", {
        spaceBetween: 80,
        slidesPerView: 1,
        loop: true,
		spaceBetween: 24,
        allowTouchMove: true,
		centeredSlides: true,
		speed: 600,
		effect: "fade",
		navigation: {
			nextEl: '.tp-testimonial-ai-next',
			prevEl: '.tp-testimonial-ai-prev',
		},
	});

    ////////////////////////////////////////////////////
	// 20. tp-text-md-slider-active
	let tp_text_md_slider_active = new Swiper(".tp-text-md-slider-active", {
        loop: true,
        freemode: true,
        slidesPerView: 'auto',
        spaceBetween: 0,
        centeredSlides: true,
        allowTouchMove: false,
        speed: 12000,
        autoplay: {
            delay: 1,
            disableOnInteraction: true,
        },
	});

	////////////////////////////////////////////////////
	// 21. tp-testimonial-md-slide-active
	let tp_testimonial_md_slide_active = new Swiper(".tp-testimonial-md-slide-active", {
        spaceBetween: 80,
        slidesPerView: 1,
        loop: true,
		spaceBetween: 24,
        allowTouchMove: true,
		centeredSlides: true,
		speed: 600,
	});

	////////////////////////////////////////////////////
	// 22. tp-portfolio-slicer-active
	let tp_portfolio_slicer_active = new Swiper('.tp-portfolio-slicer-active', {
		modules: [EffectSlicer],
		effect: 'slicer',
		loop: true,
      	clickable: true,
		slicerEffect: {
		  split: 5,
		},
		direction: 'vertical',
		speed: 600,
		mousewheel: {
			releaseOnEdges: true,
		},
		navigation: {
		  nextEl: '.tp-portfolio-slicer-button-next',
		  prevEl: '.tp-portfolio-slicer-button-prev',
		},
		pagination: {
		  el: '.tp-portfolio-slicer-pagination',
		clickable: true,
		},
	});

	////////////////////////////////////////////////////
	// 23. tp-portfolio-horizontal-active

    let tp_portfolio_horizontal_active = new Swiper(".tp-portfolio-horizontal-active", {
		direction: "horizontal",
		effect: "slide",
		autoplay: {
			delay: 10000, 
			disableOnInteraction: false
        },
		parallax: true,
		speed: 1600,
		rtl: true,
		loop: true,
		loopFillGroupWithBlank: !0,
		mousewheel: {
			eventsTarged: ".swiper-slide",
			sensitivity: 1
		},
		keyboard: {
			enabled: true,
			onlyInViewport: true
		},
		scrollbar: {
			el: ".swiper-scrollbar",
			hide: false,
			draggable: true
		},
		navigation: {
			nextEl: ".tp-portfolio-horizontal-button-next",
			prevEl: ".tp-portfolio-horizontal-button-prev",
		},
		pagination: {
			el: ".swiper-pagination",
			type: "progressbar"
		}
	});

	////////////////////////////////////////////////////
	// 24. tp-portfolio-mix-slider
	var tp_portfolio_mix_slider = new Swiper('.tp-portfolio-mix-slider', {
		loop: false,
		modules: [SwiperGL],
		speed: 1200,
		effect: "gl",
		mousewheel: true,
		navigation: {
		  nextEl: '.tp-portfolio-mix-button-next',
		  prevEl: '.tp-portfolio-mix-button-prev',
		},
		pagination: {
		  el: '.tp-portfolio-slicer-pagination',
		   clickable: true,
		},
	});


	////////////////////////////////////////////////////
	// 25. tp-portfolio-creative-slider-active
	var SwiperSliderFourteen = new Swiper('.tp-portfolio-creative-slider-active', {
		loop: true,
		autoplay: {
			delay: 2000,
		},
		autoHeight: true,
		effect: "creative",
		creativeEffect: {
			prev: {
				translate: [0, 0, -400],
			},
			next: {
				translate: ["100%", 0, 0],
			},
		},
		speed: 1500,
		slidesPerView: "1",
		spaceBetween: 0,
		mousewheel: true,
		navigation: {
		  nextEl: '.tp-portfolio-mix-button-next',
		  prevEl: '.tp-portfolio-mix-button-prev',
		},
		pagination: {
			el: '.tp-portfolio-creative-slider-main .swiper-pagination',
			clickable: true,
			renderBullet: function (index, className) {
			return`<span class="${className}">
						<svg class="fp-arc-loader" width="16" height="16" viewBox="0 0 16 16">
							<circle class="path" cx="8" cy="8" r="5.5" fill="none" transform="rotate(-90 8 8)" stroke="#000" stroke-opacity="1" stroke-width="1px"></circle> 
							<circle cx="8" cy="8" r="3" fill="#000"></circle>
						</svg>
					</span>`;
			},
		},
	});

	////////////////////////////////////////////////////
	// 26. coverflow-slider

	document.addEventListener('DOMContentLoaded', function () {
		document.querySelectorAll('.coverflow-slider-main').forEach(( el)=>{
			var coverflow_thumb_slider = new Swiper('.coverflow-slider-active', {
				loop: true,
				effect: "coverflow",
				autoHeight: true,
				mousewheel: true,
				speed: 1500,
				slidesPerView: 1,
				spaceBetween: 0,
				centeredSlides: true,
				grabCursor: true,
				loopedSlides: 3,
				keyboard: {
					enabled: true,
				},
				autoplay: {
					delay: 1500,
				},
				navigation: {
					nextEl: '.tp-portfolio-mix-button-next',
					prevEl: '.tp-portfolio-mix-button-prev',
					clickable: true,
				},
				breakpoints: {
					600: {
						slidesPerView: 2,
					},
					991: {
						slidesPerView: 3,
					},
					1400: {
						slidesPerView: 4,
					},
				}
			});
			// // dgm-project-text-active
			document.querySelectorAll('.coverflow-slider-text-active').forEach((el) => {
				let coverflow_text_slider = new Swiper(el, {
					spaceBetween: 30,
					slidesPerView: 1,
					direction: 'vertical',
					loop: true,
					loopedSlides: 3,
					touchRatio: 0.2,
					centeredSlides: true,
					slideToClickedSlide: true,
					speed: 1500,
				});
       		 	coverflow_thumb_slider.controller.control = coverflow_text_slider;
        		coverflow_text_slider.controller.control = coverflow_thumb_slider;
			})
		});
	});

	////////////////////////////////////////////////////
	// 27. tp-pd-2-active

	var showcase = new Swiper('.tp-pd-2-active', {
		slidesPerView: 3,
		loop: true,
		autoplay: false,
		arrow: false,
		spaceBetween: 20,
		speed: 1000,
		pagination: {
			el: ".tp-pd-2-dot",
			clickable: true,
		},
		breakpoints: {
			'1600': {
				slidesPerView: 3,
			},
			'1400': {
				slidesPerView: 3,
			},
			'1200': {
				slidesPerView: 3,
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
		},
	});



})(jQuery);    


