/***************************************************
==================== JS INDEX ======================
****************************************************
01. Counter Js
02. range-slider
03.	slider-range-min2
04. slider-range-min3
05. slider-range-min4
06. preloader Js
07. search-toggle
08. cartmini-open-btn
09. Sidebar Js
10. auto update year
11. Jquery Appear raidal
12. data-width
13. increment-dreckment-btn
14. data-background
15. magnificPopup video view
16. magnific-Popup-image-active
17. Wow Js
18. scrrol up
19. mobile-menu-active
20. Nice Select Js
21. Jquery Appear raidal
22. back-to-top
23. Ecommerce js
24. slider-range-min5
25. magnific-Popup-active
26. One Page Scroll Js
 ****************************************************/

(function ($) {
	"use strict";

	////////////////////////////////////////////////////
	// 01. Counter Js
	new PureCounter();
	new PureCounter({
		filesizing: true,
		selector: ".filesizecount",
		pulse: 2,
	});


	////////////////////////////////////////////////////
	// 02. range-slider
	$( function() {
		$( "#slider-range-min" ).slider({
		range: "min",
		value: 21325,
		min: 1,
		max: 51325,
		slide: function( event, ui ) {
			$( "#amount" ).val( "$" + ui.value );
		}
		});
		$( "#amount" ).val( "$" + $( "#slider-range-min" ).slider( "value" ) );
	} );

	////////////////////////////////////////////////////
	// 03.	slider-range-min2
	$( function() {
		$( "#slider-range-min2" ).slider({
		range: "min",
		value: 21325,
		min: 1,
		max: 51325,
		slide: function( event, ui ) {
			$( "#amount2" ).val( "$" + ui.value );
		}
		});
		$( "#amount2" ).val( "$" + $( "#slider-range-min2" ).slider( "value" ) );
	} );

	////////////////////////////////////////////////////
	// 04. slider-range-min3
	$( function() {
		$( "#slider-range-min3" ).slider({
		range: "min",
		value: 21325,
		min: 1,
		max: 51325,
		slide: function( event, ui ) {
			$( "#amount3" ).val( "$" + ui.value );
		}
		});
		$( "#amount3" ).val( "$" + $( "#slider-range-min3" ).slider( "value" ) );
	} );

	////////////////////////////////////////////////////
	// 05. slider-range-min4
	$( function() {
		$( "#slider-range-min4" ).slider({
		range: "min",
		value: 21325,
		min: 1,
		max: 51325,
		slide: function( event, ui ) {
			$( "#amount4" ).val( "$" + ui.value );
		}
		});
		$( "#amount4" ).val( "$" + $( "#slider-range-min4" ).slider( "value" ) );
	} );

	////////////////////////////////////////////////////
	// 06. preloader Js
	var $window = $(window); 
	$window.on('load', function(){
		$(".preloader").fadeOut(800);
	});


	////////////////////////////////////////////////////
	// 07. search-toggle
	$(".search-click").on("click", function () {
		$(".tp-search-form-toggle,.tp-search-body-overlay").addClass("active");
	});

	$(".tp-search-close,.tp-search-body-overlay").on("click", function () {
		$(".tp-search-form-toggle,.tp-search-body-overlay").removeClass("active");
	});
  	var windowOn = $(window)

	////////////////////////////////////////////////////
	// 08. cartmini-open-btn

	$(".cartmini-open-btn").on("click", function () {
		$(".cartmini__area").addClass("cartmini-opened");
		$(".cartmini-overlay").addClass("openeds");
	});

	
	$(".cartmini-close-btn").on("click", function () {
		$(".cartmini__area").removeClass("cartmini-opened");
		$(".cartmini-overlay").removeClass("openeds");
	});

	$(".cartmini-overlay").on("click", function () {
		$(".cartmini__area").removeClass("cartmini-opened");
		$(".cartmini-overlay").removeClass("openeds");
	});


	////////////////////////////////////////////////////
	// 09. Sidebar Js
	$(".tp-menu-bar").on("click", function () {
		$(".tpoffcanvas").addClass("opened");
		$(".body-overlay").addClass("apply");
	});
	$(".close-btn").on("click", function () {
		$(".tpoffcanvas").removeClass("opened");
		$(".body-overlay").removeClass("apply");
	});
	$(".body-overlay").on("click", function () {
		$(".tpoffcanvas").removeClass("opened");
		$(".body-overlay").removeClass("apply");
	});


	////////////////////////////////////////////////////
	// 10. auto update year
	$('#year').text(new Date().getFullYear())


	////////////////////////////////////////////////////
	// 11. Jquery Appear raidal
	if (typeof ($.fn.knob) != 'undefined') {
		$('.knob').each(function () {
		var $this = $(this),
		knobVal = $this.attr('data-rel');

		$this.knob({
		'draw': function () {
			$(this.i).val(this.cv + '%')
		}
		});

		$this.appear(function () {
		$({
			value: 0
		}).animate({
			value: knobVal
		}, {
			duration: 1500,
			easing: 'swing',
			step: function () {
			$this.val(Math.ceil(this.value)).trigger('change');
			}
		});
		}, {
		accX: 0,
		accY: -150,
		});
	});
	}

	////////////////////////////////////////////////////
	// 12. data-width

	$("[data-width]").each(function () {
		$(this).css("width", $(this).attr("data-width"));
	});


	////////////////////////////////////////////////////
	// 13. increment-dreckment-btn
	$('.tp-shop-cart-minus').on('click', function () {
		var $input = $(this).parent().find('input');
		var count = parseInt($input.val()) - 1;
		count = count < 1 ? 1 : count;
		$input.val(count);
		$input.change();
		return false;
	});

	$('.tp-shop-cart-plus').on('click', function () {
		var $input = $(this).parent().find('input');
		$input.val(parseInt($input.val()) + 1);
		$input.change();
		return false;
	});

	////////////////////////////////////////////////////
	// 14. data-background
	$("[data-background").each(function () {
		$(this).css("background-image", "url( " + $(this).attr("data-background") + "  )");
	});


	////////////////////////////////////////////////////
	// 15. magnificPopup video view
	$(".popup-video").magnificPopup({
		type: "iframe",
	});


	////////////////////////////////////////////////////
	// 16. magnific-Popup-image-active
	$('.popup-image').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true
		},
		mainClass: 'mfp-with-zoom',
		removalDelay: 500,
	});

	////////////////////////////////////////////////////
	// 17. Wow Js
	new WOW().init();


	////////////////////////////////////////////////////
	// 18. scrrol up
	windowOn.on('scroll', function () {
		var scroll = $(window).scrollTop();
		if (scroll < 400) {
			$("#tp-header-sticky").removeClass("tp-header-sticky");
		} else {
			$("#tp-header-sticky").addClass("tp-header-sticky");
		}
	});

	////////////////////////////////////////////////////
	// 19. mobile-menu-active

	if($('.tp-main-menu-content').length && $('.tp-main-menu-mobile').length){
		let navContent = document.querySelector(".tp-main-menu-content").outerHTML;
		let mobileNavContainer = document.querySelector(".tp-main-menu-mobile");
		mobileNavContainer.innerHTML = navContent;


		let arrow = $(".tp-main-menu-mobile .has-dropdown > a");

		arrow.each(function () {
			let self = $(this);
			let arrowBtn = document.createElement("BUTTON");
			arrowBtn.classList.add("dropdown-toggle-btn");
			arrowBtn.innerHTML = "<i class='fal fa-angle-right'></i>";

			self.append(function () {
			return arrowBtn;
			});

			self.find("button").on("click", function (e) {
			e.preventDefault();
			let self = $(this);
			self.toggleClass("dropdown-opened");
			self.parent().toggleClass("expanded");
			self.parent().parent().addClass("dropdown-opened").siblings().removeClass("dropdown-opened");
			self.parent().parent().children(".tp-submenu").slideToggle();
			});

		});
	}

	////////////////////////////////////////////////////
	// 20. Nice Select Js
	$('select').niceSelect();
	$('.tp-header-search-category select').niceSelect();


	////////////////////////////////////////////////////
	// 21. Jquery Appear raidal
	if (typeof ($.fn.knob) != 'undefined') {
		$('.knob').each(function () {
		var $this = $(this),
		knobVal = $this.attr('data-rel');

		$this.knob({
			'draw': function () {
				$(this.i).val(this.cv + '%')
			}
		});

		$this.appear(function () {
			$({
				value: 0
			}).animate({
				value: knobVal
			}, {
				duration: 2000,
				easing: 'swing',
				step: function () {
					$this.val(Math.ceil(this.value)).trigger('change');
					}
				});
			}, {
			accX: 0,
			accY: -150,
			});
		});
	}

	
////////////////////////////////////////////////////
// 22. back-to-top

	var btn = $('#back_to_top');
	var btn_wrapper = $('.back-to-top-wrapper');

	windowOn.scroll(function() {
	if (windowOn.scrollTop() > 300) {
		btn_wrapper.addClass('back-to-top-btn-show');
	} else {
		btn_wrapper.removeClass('back-to-top-btn-show');
	}
	});

	btn.on('click', function(e) {
		e.preventDefault();
		$('html, body').animate({scrollTop:0}, '300');
	});

	if ($('.tp-header-height').length > 0) {
		var headerHeight = document.querySelector(".tp-header-height");      
		var setHeaderHeight = headerHeight.offsetHeight;	
		$(".tp-header-height").each(function () {
			$(this).css({
				'height' : $(this).height()
			});
		});
	}

	////////////////////////////////////////////
	// 23. Ecommerce js
	function tp_ecommerce() {
		$('.tp-cart-minus').on('click', function () {
			var $input = $(this).parent().find('input');
			var count = parseInt($input.val()) - 1;
			count = count < 1 ? 1 : count;
			$input.val(count);
			$input.change();
			return false;
		});

		$('.tp-cart-plus').on('click', function () {
			var $input = $(this).parent().find('input');
			$input.val(parseInt($input.val()) + 1);
			$input.change();
			return false;
		});



		$('.cart-minus').on('click', function () {
			var $input = $(this).parent().find('input');
			var count = parseInt($input.val()) - 1;
			count = count < 1 ? 1 : count;
			$input.val(count);
			$input.change();
			return false;
		});

		$('.cart-plus').on('click', function () {
			var $input = $(this).parent().find('input');
			$input.val(parseInt($input.val()) + 1);
			$input.change();
			return false;
		});


		$('#showlogin').on('click', function () {
			$('#checkout-login').slideToggle(900);
		});


		$('#showcoupon').on('click', function () {
			$('#checkout_coupon').slideToggle(900);
		});


		$('#cbox').on('click', function () {
			$('#cbox_info').slideToggle(900);
		});

		$('#ship-box').on('click', function () {
			$('#ship-box-info').slideToggle(1000);
		});
	}
	tp_ecommerce();

	////////////////////////////////////////////////////
	// 24. slider-range-min5
	$("#slider-range2").slider({
		range: true,
		min: 0,
		max: 500,
		values: [75, 300],
		slide: function (event, ui) {
			$("#amount5").val("$" + ui.values[0] + " - $" + ui.values[1]);
		}
		});
	$("#amount5").val("$" + $("#slider-range2").slider("values", 0) +
			" - $" + $("#slider-range2").slider("values", 1));

	////////////////////////////////////////////////////
	// 25. magnific-Popup-active
	$('.tp-shop-product').each(function() {
		$(this).magnificPopup({
			delegate: 'a',
			type: 'image',
			gallery: {
			enabled:true
			}
		});
	});

	////////////////////////////////////////////////////
	// 26. One Page Scroll Js
	function scrollNav() {
		$('.tp-onepage-menu li a').click(function(){
		  $(".tp-onepage-menu li a.active").removeClass("active");     
		  $(this).addClass("active");
		  
		  $('html, body').stop().animate({
			scrollTop: $($(this).attr('href')).offset().top - 96
		  }, 300);
		  return false;
		});
	  }
	scrollNav();

	
	if ($('.jarallax').length > 0) {
		$('.jarallax').jarallax({
			speed: 0.2,
			imgWidth: 1366,
			imgHeight: 768
		});
	};

})(jQuery);