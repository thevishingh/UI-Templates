(function($) {
	
	"use strict";
	
	//Hide Loading Box (Preloader)
	function handlePreloader() {
		if($('.preloader').length){
			$('.preloader').delay(200).fadeOut(500);
		}
	}
	
	
	//Update Header Style and Scroll to Top
	function headerStyle() {
		if($('.main-header').length){
			var windowpos = $(window).scrollTop();
			var siteHeader = $('.main-header');
			var scrollLink = $('.scroll-to-top');
			
			var HeaderHight = $('.main-header').height();
			if (windowpos >= HeaderHight) {
				siteHeader.addClass('fixed-header');
				scrollLink.fadeIn(300);
			} else {
				siteHeader.removeClass('fixed-header');
				scrollLink.fadeOut(300);
			}
			
		}
	}
	
	headerStyle();
	
	
	//Submenu Dropdown Toggle
	if($('.main-header li.dropdown ul').length){
		$('.main-header li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>');
		
		//Dropdown Button
		$('.main-header li.dropdown .dropdown-btn').on('click', function() {
			$(this).prev('ul').slideToggle(500);
		});
		
		//Disable dropdown parent link
		$('.navigation li.dropdown > a').on('click', function(e) {
			e.preventDefault();
		});
		
		//Disable dropdown parent link
		$('.main-header .navigation li.dropdown > a,.hidden-bar .side-menu li.dropdown > a').on('click', function(e) {
			e.preventDefault();
		});

		$('.xs-sidebar-group .close-button').on('click', function(e) {
			$('.xs-sidebar-group.info-group').removeClass('isActive');
		});
		
	}
	
	// Menu Aimation
	//document.querySelectorAll('.main-menu .navigation > li > a').forEach(button => button.innerHTML = '<div class="menu-text"><span>' + button.textContent.split('').join('</span><span>') + '</span></div>');
	
	
	//Mobile Nav Hide Show
	if($('.mobile-menu').length){
		
		//$('.mobile-menu .menu-box').mCustomScrollbar();
		
		var mobileMenuContent = $('.main-header .nav-outer .main-menu').html();
		$('.mobile-menu .menu-box .menu-outer').append(mobileMenuContent);
		$('.sticky-header .main-menu').append(mobileMenuContent);
		
		//Hide / Show Submenu
		$('.mobile-menu .navigation > li.dropdown > .dropdown-btn').on('click', function(e) {
			e.preventDefault();
			var target = $(this).parent('li').children('ul');
			
			if ($(target).is(':visible')){
				$(this).parent('li').removeClass('open');
				$(target).slideUp(500);
				$(this).parents('.navigation').children('li.dropdown').removeClass('open');
				$(this).parents('.navigation').children('li.dropdown > ul').slideUp(500);
				return false;
			}else{
				$(this).parents('.navigation').children('li.dropdown').removeClass('open');
				$(this).parents('.navigation').children('li.dropdown').children('ul').slideUp(500);
				$(this).parent('li').toggleClass('open');
				$(this).parent('li').children('ul').slideToggle(500);
			}
		});

		//3rd Level Nav
		$('.mobile-menu .navigation li.dropdown > ul > li.dropdown > .dropdown-btn, .mobile-menu .navigation li.dropdown > ul > li.dropdown > ul > li.dropdown > .dropdown-btn').on('click', function(e) {
			e.preventDefault();
			var targetInner = $(this).parent('li').children('ul');
			
			if ($(targetInner).is(':visible')){
				$(this).parent('li').removeClass('open');
				$(targetInner).slideUp(500);
				$(this).parents('.navigation > ul').find('li.dropdown').removeClass('open');
				$(this).parents('.navigation > ul').find('li.dropdown > ul').slideUp(500);
				return false;
			}else{
				$(this).parents('.navigation > ul').find('li.dropdown').removeClass('open');
				$(this).parents('.navigation > ul').find('li.dropdown > ul').slideUp(500);
				$(this).parent('li').toggleClass('open');
				$(this).parent('li').children('ul').slideToggle(500);
			}
		});


		//Menu Toggle Btn
		$('.mobile-nav-toggler').on('click', function() {
			$('body').addClass('mobile-menu-visible');

		});

		//Menu Toggle Btn
		$('.mobile-menu .menu-backdrop,.mobile-menu .close-btn').on('click', function() {
			$('body').removeClass('mobile-menu-visible');
			$('.mobile-menu .navigation > li').removeClass('open');
			$('.mobile-menu .navigation li ul').slideUp(0);
		});

		$(document).keydown(function(e){
	        if(e.keyCode == 27) {
				$('body').removeClass('mobile-menu-visible');
			$('.mobile-menu .navigation > li').removeClass('open');
			$('.mobile-menu .navigation li ul').slideUp(0);
        	}
	    });
		
	}


	
	// Add Current Class Auto
	function dynamicCurrentMenuClass(selector) {
		let FileName = window.location.href.split("/").reverse()[0];

		selector.find("li").each(function () {
			let anchor = $(this).find("a");
			if ($(anchor).attr("href") == FileName) {
				$(this).addClass("current");
			}
		});
		// if any li has .current elmnt add class
		selector.children("li").each(function () {
			if ($(this).find(".current").length) {
				$(this).addClass("current");
			}
		});
		// if no file name return
		if ("" == FileName) {
			selector.find("li").eq(0).addClass("current");
		}
	}

	if ($('.main-header .main-menu .navigation').length) {
		dynamicCurrentMenuClass($('.main-header .main-menu .navigation'));
	}
	
	
	
	if($('.paroller').length){
		$('.paroller').paroller({
			  factor: 0.2,            // multiplier for scrolling speed and offset, +- values for direction control  
			  factorLg: 0.4,          // multiplier for scrolling speed and offset if window width is less than 1200px, +- values for direction control  
			  type: 'foreground',     // background, foreground  
			  direction: 'horizontal' // vertical, horizontal  
		});
	}
	
	
	
	// Main Slider
	var slider = new Swiper('.main-slider', {
		slidesPerView: 1,
		spaceBetween: 0,
		loop: false,
		autoplay: {
			enabled: true,
			delay: 6000
		},
		// Navigation arrows
		navigation: {
			nextEl: '.main-slider-next',
			prevEl: '.main-slider-prev',
			clickable: true,
		},
		//Pagination
		pagination: {
			el: ".main-slider_pagination",
			clickable: true,
		},
		speed: 500,
		breakpoints: {
			'1600': {
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
	});
	
	
	
	
	// Masonary
	function enableMasonry() {
		if($('.masonry-items-container').length){
	
			var winDow = $(window);
			// Needed variables
			var $container=$('.masonry-items-container');
	
			$container.isotope({
				itemSelector: '.masonry-item',
				 masonry: {
					columnWidth : '.masonry-item.col-lg-6'
				 },
				animationOptions:{
					duration:500,
					easing:'linear'
				}
			});
	
			winDow.bind('resize', function(){

				$container.isotope({ 
					itemSelector: '.masonry-item',
					animationOptions: {
						duration: 500,
						easing	: 'linear',
						queue	: false
					}
				});
			});
		}
	}
	
	enableMasonry();
	
	
	
	
	function sortableMasonry() {
		if($('.sortable-masonry').length){
	
			var winDow = $(window);
			// Needed variables
			var $container=$('.sortable-masonry .items-container');
			var $filter=$('.filter-btns');
	
			$container.isotope({
				filter:'*',
				 masonry: {
					columnWidth : '.masonry-item.col-lg-6'
				 },
				animationOptions:{
					duration:500,
					easing:'linear'
				}
			});
			// Isotope Filter 
			$filter.find('li').on('click', function(){
				var selector = $(this).attr('data-filter');
	
				try {
					$container.isotope({ 
						filter	: selector,
						animationOptions: {
							duration: 500,
							easing	: 'linear',
							queue	: false
						}
					});
				} catch(err) {
	
				}
				return false;
			});
	
	
			winDow.bind('resize', function(){
				var selector = $filter.find('li.active').attr('data-filter');

				$container.isotope({ 
					filter	: selector,
					animationOptions: {
						duration: 500,
						easing	: 'linear',
						queue	: false
					}
				});
			});
	
	
			var filterItemA	= $('.filter-btns li');
	
			filterItemA.on('click', function(){
				var $this = $(this);
				if ( !$this.hasClass('active')) {
					filterItemA.removeClass('active');
					$this.addClass('active');
				}
			});
		}
	}
	sortableMasonry();
	

	
	
	// Case Carousel
	var slider = new Swiper('.case-carousel', {
		slidesPerView: 3,
		spaceBetween: 30,
		loop: false,
		centeredSlides: true,
		autoplay: {
			enabled: true,
			delay: 6000
		},
		// Navigation arrows
		navigation: {
			nextEl: '.case-carousel-next_arrow',
			prevEl: '.case-carousel-prev_arrow',
			clickable: true,
		},
		//Pagination
		pagination: {
			el: ".case-carousel_pagination",
			clickable: true,
		},
		speed: 500,
		breakpoints: {
			'1600': {
				slidesPerView: 3,
			},
			'1200': {
				slidesPerView: 2
			},
			'992': {
				slidesPerView: 2,
				centeredSlides: false
			},
			'768': {
				slidesPerView: 1,
				centeredSlides: false
			},
			'576': {
				slidesPerView: 1,
				centeredSlides: false
			},
			'0': {
				slidesPerView: 1,
				centeredSlides: false
			},
		},
	});
	
	
	
	
	// Single Item Carousel
	var slider = new Swiper('.single-item_carousel', {
		slidesPerView: 1,
		spaceBetween: 0,
		loop: false,
		autoplay: {
			enabled: true,
			delay: 6000
		},
		// Navigation arrows
		navigation: {
			nextEl: '.single-item_carousel_arrow-next',
			prevEl: '.single-item_carousel_arrow-prev',
			clickable: true,
		},
		//Pagination
		pagination: {
			el: ".single-item_carousel_pagination",
			clickable: true,
		},
		speed: 500,
		breakpoints: {
			'1600': {
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
	});
	
	
	
	
	// Two Item Carousel
	var slider = new Swiper('.two-item_carousel', {
		slidesPerView: 2,
		spaceBetween: 30,
		loop: false,
		autoplay: {
			enabled: true,
			delay: 6000
		},
		// Navigation arrows
		navigation: {
			nextEl: '.two-item_carousel_arrow',
			prevEl: '.two-item_carousel_arrow',
			clickable: true,
		},
		//Pagination
		pagination: {
			el: ".two-item_carousel_pagination",
			clickable: true,
		},
		speed: 500,
		breakpoints: {
			'1600': {
				slidesPerView: 2,
			},
			'1200': {
				slidesPerView: 2,
			},
			'992': {
				slidesPerView: 2,
			},
			'950': {
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
	
	
	
	
	// Three Item Carousel
	var slider = new Swiper('.three-item_carousel', {
		slidesPerView: 3,
		spaceBetween: 30,
		loop: false,
		autoplay: {
			enabled: true,
			delay: 6000
		},
		// Navigation arrows
		navigation: {
			nextEl: '.three-item_carousel_arrow',
			prevEl: '.three-item_carousel_arrow',
			clickable: true,
		},
		//Pagination
		pagination: {
			el: ".three-item_carousel_pagination",
			clickable: true,
		},
		speed: 500,
		breakpoints: {
			'1600': {
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
	
	



	///////////////////////////////////////////////////// 
    // Title Animation
    let splitTitleLines = gsap.utils.toArray(".title-anim");

    splitTitleLines.forEach(splitTextLine => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: splitTextLine,
          start: 'top 90%',
          end: 'bottom 60%',
          scrub: false,
          markers: false,
          toggleActions: 'play none none none'
        }
      });

      const itemSplitted = new SplitText(splitTextLine, { type: "words, lines" });
      gsap.set(splitTextLine, { perspective: 400 });
      itemSplitted.split({ type: "lines" })
      tl.from(itemSplitted.lines, { duration: 1, delay: 0.3, opacity: 0, rotationX: -80, force3D: true, transformOrigin: "top center -50", stagger: 0.1 });
    });
    /////////////////////////////////////////////////////




	//Progress Bar
	if($('.progress-line').length){
		$('.progress-line').appear(function(){
			var el = $(this);
			var percent = el.data('width');
			$(el).css('width',percent+'%');
		},{accY: 0});
	}
	
	//Fact Counter + Text Count
	if($('.count-box').length){
		$('.count-box').appear(function(){
	
			var $t = $(this),
				n = $t.find(".count-text").attr("data-stop"),
				r = parseInt($t.find(".count-text").attr("data-speed"), 10);
				
			if (!$t.hasClass("counted")) {
				$t.addClass("counted");
				$({
					countNum: $t.find(".count-text").text()
				}).animate({
					countNum: n
				}, {
					duration: r,
					easing: "linear",
					step: function() {
						$t.find(".count-text").text(Math.floor(this.countNum));
					},
					complete: function() {
						$t.find(".count-text").text(this.countNum);
					}
				});
			}
			
		},{accY: 0});
	}
	
	
	//  Animation Fade Left End
	/////////////////////////////////////////////////////
	// CURSOR
	var cursor = $(".cursor"),
	follower = $(".cursor-follower");

	var posX = 0,
		posY = 0;

	var mouseX = 0,
		mouseY = 0;

	TweenMax.to({}, 0.016, {
	repeat: -1,
	onRepeat: function() {
		posX += (mouseX - posX) / 9;
		posY += (mouseY - posY) / 9;

		TweenMax.set(follower, {
			css: {
			left: posX - 12,
			top: posY - 12
			}
		});

		TweenMax.set(cursor, {
			css: {
			left: mouseX,
			top: mouseY
			}
		});
	}
	});

	$(document).on("mousemove", function(e) {
		mouseX = e.clientX;
		mouseY = e.clientY;
	});
	//circle
	$(".theme-btn, a").on("mouseenter", function() {
		cursor.addClass("active");
		follower.addClass("active");
	});
	$(".theme-btn, a").on("mouseleave", function() {
		cursor.removeClass("active");
		follower.removeClass("active");
	});   
	// CURSOR End
	
	
	
	//Accordion Box
	if($('.accordion-box').length){
		$(".accordion-box").on('click', '.acc-btn', function() {
			
			var outerBox = $(this).parents('.accordion-box');
			var target = $(this).parents('.accordion');
			
			if($(this).hasClass('active')!==true){
				$(outerBox).find('.accordion .acc-btn').removeClass('active');
			}
			
			if ($(this).next('.acc-content').is(':visible')){
				return false;
			}else{
				$(this).addClass('active');
				$(outerBox).children('.accordion').removeClass('active-block');
				$(outerBox).find('.accordion').children('.acc-content').slideUp(300);
				target.addClass('active-block');
				$(this).next('.acc-content').slideDown(300);	
			}
		});	
	}
	
	
	//Accordion Box
	if($('.accordion-box_two').length){
		$(".accordion-box_two").on('click', '.acc-btn', function() {
			
			var outerBox = $(this).parents('.accordion-box_two');
			var target = $(this).parents('.accordion');
			
			if($(this).hasClass('active')!==true){
				$(outerBox).find('.accordion .acc-btn').removeClass('active');
			}
			
			if ($(this).next('.acc-content').is(':visible')){
				return false;
			}else{
				$(this).addClass('active');
				$(outerBox).children('.accordion').removeClass('active-block');
				$(outerBox).find('.accordion').children('.acc-content').slideUp(300);
				target.addClass('active-block');
				$(this).next('.acc-content').slideDown(300);	
			}
		});	
	}
	


	// LightBox Image
	if($('.lightbox-image').length) {
		$('.lightbox-image').magnificPopup({
		  type: 'image',
		  gallery:{
		    enabled:true
		  }
		});
	}
	


	// LightBox Video
	if($('.lightbox-video').length) {
		$('.lightbox-video').magnificPopup({
	      // disableOn: 700,
	      type: 'iframe',
	      mainClass: 'mfp-fade',
	      removalDelay: 160,
	      preloader: false,
	      iframe:{
	        patterns:{
	          youtube:{
	          index: 'youtube.com',
	          id: 'v=',
	          src: 'https://www.youtube.com/embed/%id%'
	        },
	      },
	      srcAction:'iframe_src',
	    },
	      fixedContentPos: false
	    });
	}



	// Odometer
	if ($(".odometer").length) {
		$('.odometer').appear();
		$('.odometer').appear(function(){
			var odo = $(".odometer");
			odo.each(function() {
				var countNumber = $(this).attr("data-count");
				$(this).html(countNumber);
			});
			window.odometerOptions = {
				format: 'd',
			};
		});
	}


	
	
	//Contact Form Validation
	if($('#contact-form').length){
		$('#contact-form').validate({
			rules: {
				username: {
					required: true
				},
				email: {
					required: true,
					email: true
				},
				message: {
					required: true
				}
			}
		});
	}
	
	
	
	// Scroll to a Specific Div
	if($('.scroll-to-target').length){
		$(".scroll-to-target").on('click', function() {
			var target = $(this).attr('data-target');
		   // animate
		   $('html, body').animate({
			   scrollTop: $(target).offset().top
			 }, 1500);
	
		});
	}
	
	
	
	// Elements Animation
	if($('.wow').length){
		var wow = new WOW(
		  {
			boxClass:     'wow',      // animated element css class (default is wow)
			animateClass: 'animated', // animation css class (default is animated)
			offset:       0,          // distance to the element when triggering the animation (default is 0)
			mobile:       true,       // trigger animations on mobile devices (default is true)
			live:         true       // act on asynchronously loaded content (default is true)
		  }
		);
		wow.init();
	}
	


/* ==========================================================================
   When document is Scrollig, do
   ========================================================================== */
	
	$(window).on('scroll', function() {
		headerStyle();
	});
	
/* ==========================================================================
   When document is loading, do
   ========================================================================== */
	
	$(window).on('load', function() {
		handlePreloader();
		enableMasonry();
		sortableMasonry();
	});	

})(window.jQuery);