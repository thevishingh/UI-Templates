(function ($) {
  ("use strict");

  /*
|--------------------------------------------------------------------------
| Template Name: Gymfito
| Author: Thememarch
| Version: 1.1.0
|--------------------------------------------------------------------------
|--------------------------------------------------------------------------
| TABLE OF CONTENTS:
|--------------------------------------------------------------------------
| 1. Mobile Menu
| 2. Sticky Header
| 3. Dynamic Background
| 4. Slick Slider
| 5. Modal Video
| 6. Scroll Up
| 7. Accordion
| 8. Sticky Content
| 9. Light Gallery
| 10. Auto Counter funfact
| 11. Feature Video scrollingImage
| 12. Feature Crad Animation
| 13. Hover add/remove Active Class
| 14. Price Card Animation

    /*--------------------------------------------------------------
    Scripts initialization
--------------------------------------------------------------*/

  $.exists = function (selector) {
    return $(selector).length > 0;
  };

  $(window).on("load", function () {
    $(window).trigger("scroll");
    $(window).trigger("resize");
  });

  AOS.init({
    disable: false,
    startEvent: "DOMContentLoaded",
    initClassName: "aos-init",
    animatedClassName: "aos-animate",
    offset: 100,
    delay: 0,
    duration: 500,
    easing: "ease",
    once: false,
    mirror: false,
  });

  $(function () {
    $(window).trigger("resize");
    mainNav();
    stickyHeader();
    dynamicBackground();
    swiperInit();
    modalVideo();
    scrollUp();
  });

  $(window).on("scroll", function () {
    showScrollUp();
  });

  /*--------------------------------------------------------------
     1. Mobile  Menu  
 -----------------------------------------------------------------*/

  function mainNav() {
    $(".button-offcanva").append(
      '<span class="button-offcanva-toggle"><span></span></span>'
    );

    $(".ak-nav").append('<span class="ak-munu_toggle"><span></span></span>');
    $(".menu-item-has-children").append(
      '<span class="ak-munu_dropdown_toggle"></span>'
    );
    $(".ak-munu_toggle").on("click", function () {
      $(this)
        .toggleClass("ak-toggle_active")
        .siblings(".ak-nav_list")
        .slideToggle();
    });
    $(".ak-munu_dropdown_toggle").on("click", function () {
      $(this).toggleClass("active").siblings("ul").slideToggle();
      $(this).parent().toggleClass("active");
    });

    $(".menu-item-has-black-section").append(
      '<span class="ak-munu_dropdown_toggle_1"></span>'
    );

    $(".ak-munu_dropdown_toggle_1").on("click", function () {
      $(this).toggleClass("active").siblings("ul").slideToggle();
      $(this).parent().toggleClass("active");
    });

    $(".ak-mode_btn").on("click", function () {
      $(this).toggleClass("active");
      $("body").toggleClass("ak-dark");
    });
    // Side Nav
    $(".ak-icon_btn").on("click", function () {
      $(".ak-side_header").addClass("active");
    });
    $(".ak-close, .ak-side_header_overlay").on("click", function () {
      $(".ak-side_header").removeClass("active");
    });
    //  Menu Text Split
    $(".ak-animo_links > li > a").each(function () {
      let xxx = $(this).html().split("").join("</span><span>");
      $(this).html(`<span class="ak-animo_text"><span>${xxx}</span></span>`);
    });
  }
  /*--------------------------------------------------------------
     2. Sticky Header
--------------------------------------------------------------*/
  function stickyHeader() {
    var $window = $(window);
    var lastScrollTop = 0;
    var $header = $(".ak-sticky_header");
    var headerHeight = $header.outerHeight() + 30;

    $window.scroll(function () {
      var windowTop = $window.scrollTop();

      if (windowTop >= headerHeight) {
        $header.addClass("ak-gescout_sticky");
      } else {
        $header.removeClass("ak-gescout_sticky");
        $header.removeClass("ak-gescout_show");
      }

      if ($header.hasClass("ak-gescout_sticky")) {
        if (windowTop < lastScrollTop) {
          $header.addClass("ak-gescout_show");
        } else {
          $header.removeClass("ak-gescout_show");
        }
      }

      lastScrollTop = windowTop;
    });
  }

  /*--------------------------------------------------------------
     3. Dynamic Background
-------------------------------------------------------------*/
  function dynamicBackground() {
    $("[data-src]").each(function () {
      var src = $(this).attr("data-src");
      $(this).css({
        "background-image": "url(" + src + ")",
      });
    });
  }

  /*--------------------------------------------------------------    
     4. Slick Slider
 --------------------------------------------------------------*/

  function swiperInit() {
    if ($.exists(".slider_hero_1")) {
      var swiper = new Swiper(".slider_hero_1", {
        loop: true,
        speed: 1500,
        effect: "coverflow",
        autoplay: true,
        slidesPerView: 1,
        delay: 300,
        keyboard: {
          enabled: true,
        },
        navigation: {
          nextEl: ".hero-swiper-button-prev-1",
          prevEl: ".hero-swiper-button-next-1",
        },
      });
    }
    if ($.exists(".slider_hero_2")) {
      var swiper = new Swiper(".slider_hero_2", {
        loop: true,
        speed: 1500,
        parallax: true,
        zoom: {
          maxRatio: 5,
        },
        watchSlidesProgress: true,
        // autoplay: true,
        slidesPerView: 1,
        delay: 300,
        keyboard: {
          enabled: true,
        },
        navigation: {
          nextEl: ".hero-swiper-button-prev-2",
          prevEl: ".hero-swiper-button-next-2",
        },
      });
    }

    if ($.exists(".slider_2")) {
      var swiper = new Swiper(".slider_2", {
        loop: true,
        speed: 1000,
        autoplay: false,
        slidesPerView: "auto",
        navigation: {
          nextEl: ".slider_2-prev",
          prevEl: ".slider_2-next",
        },
      });
    }

    if ($.exists(".partner-client-slider")) {
      var swiper = new Swiper(".partner-client-slider", {
        loop: true,
        speed: 1000,
        autoplay: true,
        slidesPerView: "auto",
        pagination: {
          clickable: true,
        },
      });
    }
    if ($.exists(".gallery-slider")) {
      var swiper = new Swiper(".gallery-slider", {
        loop: true,
        speed: 1000,
        autoplay: true,
        slidesPerView: "auto",
        centeredSlides: true,
        pagination: {
          clickable: true,
        },
      });
    }
    if ($.exists(".testimonial-slider-home")) {
      var swiper = new Swiper(".testimonial-slider-home", {
        loop: true,
        speed: 1000,
        autoplay: true,
        slidesPerView: "auto",
        centeredSlides: true,
        effect: "cube",
        grabCursor: true,
        cubeEffect: {
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        },
        pagination: {
          clickable: true,
        },
      });
      const swiperContainer = document.querySelector(
        ".testimonial-slider-home"
      );
      swiperContainer.addEventListener("mouseenter", () => {
        swiper.autoplay.stop();
      });

      swiperContainer.addEventListener("mouseleave", () => {
        swiper.autoplay.start();
      });
    }
    if ($.exists(".testimonial-style2-slider")) {
      var swiper = new Swiper(".testimonial-style2-slider", {
        loop: true,
        speed: 800,
        effect: "fade",
        // autoplay: true,
        slidesPerView: "auto",
      });
    }
  }

  /*--------------------------------------------------------------
     5. Modal Video
 --------------------------------------------------------------*/
  function modalVideo() {
    $(document).on("click", ".ak-video-open", function (e) {
      e.preventDefault();
      var video = $(this).attr("href");
      video = video.split("?v=")[1].trim();
      $(".ak-video-popup-container iframe").attr(
        "src",
        `https://www.youtube.com/embed/${video}`
      );
      $(".ak-video-popup").addClass("active");
    });
    $(".ak-video-popup-close, .ak-video-popup-layer").on("click", function (e) {
      $(".ak-video-popup").removeClass("active");
      $("html").removeClass("overflow-hidden");
      $(".ak-video-popup-container iframe").attr("src", "about:blank");
      e.preventDefault();
    });
  }

  /*--------------------------------------------------------------
     6. Scroll Up
--------------------------------------------------------------*/
  function scrollUp() {
    $(".ak-scrollup").on("click", function (e) {
      e.preventDefault();
      $("html,body").animate(
        {
          scrollTop: 0,
        },
        0
      );
    });
  }
  // For Scroll Up
  function showScrollUp() {
    let scroll = $(window).scrollTop();
    if (scroll >= 350) {
      $(".ak-scrollup").addClass("ak-scrollup-show");
    } else {
      $(".ak-scrollup").removeClass("ak-scrollup-show");
    }
  }

  /*--------------------------------------------------------------
    7. Accordion
 --------------------------------------------------------------*/
  if ($.exists(".ak-accordion-title")) {
    $(".ak-accordion-title").click(function () {
      $(this).toggleClass("active");
      var $accordionTab = $(this).next(".ak-accordion-tab");
      $accordionTab.slideToggle();
      $accordionTab
        .parent()
        .siblings()
        .find(".ak-accordion-tab")
        .slideUp()
        .prev()
        .removeClass("active");
    });
  }

  /*--------------------------------------------------------------
    8. Sticky Content
 --------------------------------------------------------------*/

  if ($.exists(".classespages-details-content.style1")) {
    var top =
      $("#sidebar").offset().top -
      parseFloat($("#sidebar").css("marginTop").replace(/auto/, 0));
    var footTop =
      $("#footer").offset().top -
      parseFloat($("#footer").css("marginTop").replace(/auto/, 0));

    var maxY = footTop - $("#sidebar").outerHeight();

    $(window).scroll(function (evt) {
      var y = $(this).scrollTop();
      if (y > top && $(this).innerWidth() > 991) {
        if (y < maxY) {
          $("#sidebar").addClass("fixed").removeAttr("style");
        } else {
          $("#sidebar")
            .removeClass("fixed")
            .css({
              position: "absolute",
              top: maxY - top + "px",
            });
        }
      } else {
        $("#sidebar").removeClass("fixed");
      }
    });
  }

  /*--------------------------------------------------------------
    9. Light Gallery
--------------------------------------------------------------*/
  if ($.exists("#static-thumbnails")) {
    const galleryDiv = document.getElementById("static-thumbnails");
    lightGallery(galleryDiv, {
      selector: ".item a",
      addClass: "lg-custom-thumbnails",
      animateThumb: true,
      zoomFromOrigin: true,
      allowMediaOverlap: true,
      toggleThumb: true,
    });
  }

  /*--------------------------------------------------------------
    10. Auto Counter funfact
--------------------------------------------------------------*/
  if ($.exists(".auto-counter-section")) {
    var a = 0;
    $(window).scroll(function () {
      var oTop = $(".funfact-number").offset().top - window.innerHeight;
      if (a == 0 && $(window).scrollTop() > oTop) {
        $(".counter").each(function () {
          var $this = $(this),
            countTo = $this.attr("data-number");
          $({
            countNum: $this.text(),
          }).animate(
            {
              countNum: countTo,
            },

            {
              duration: 1500,
              easing: "swing",
              step: function () {
                $this.text(Math.ceil(this.countNum).toLocaleString("en"));
              },
              complete: function () {
                $this.text(Math.ceil(this.countNum).toLocaleString("en"));
              },
            }
          );
        });
        a = 1;
      }
    });
  }

  /*--------------------------------------------------------------
    11.Feature Video scrollingImage
--------------------------------------------------------------*/
  if ($.exists(".feature-video")) {
    const $container = $(".feature-video");
    if ($container.length > 0) {
      $(window).on("scroll", function () {
        const $image = $("#scrollingImage");
        if ($image.length === 0) {
          return;
        }
        var top = $(".feature-video").offset().top;
        const scrollTop = $(this).scrollTop();
        var imgTop = 0;

        if (scrollTop - top > "-950" && scrollTop - top < 0) {
          imgTop = (scrollTop - top) / 2;
          $image.css("top", `${imgTop}px`);
        }

        if (scrollTop - top < "950" && scrollTop - top > 1) {
          imgTop = (scrollTop - top) / 2;
        }
        $image.css("top", `${imgTop}px`);
      });
    }
  }

  /*--------------------------------------------------------------
    12. Feature Crad Animation
--------------------------------------------------------------*/
  if ($.exists(".feature")) {
    const nodes = [].slice.call(document.querySelectorAll(".feature-card"), 0);
    const directions = { 0: "top", 1: "right", 2: "bottom", 3: "left" };
    const classNames = ["in", "out"]
      .map((p) => Object.values(directions).map((d) => `${p}-${d}`))
      .reduce((a, b) => a.concat(b));

    const getDirectionKey = (ev, node) => {
      const { width, height, top, left } = node.getBoundingClientRect();
      const l = ev.pageX - (left + window.pageXOffset);
      const t = ev.pageY - (top + window.pageYOffset);
      const x = l - (width / 2) * (width > height ? height / width : 1);
      const y = t - (height / 2) * (height > width ? width / height : 1);
      return Math.round(Math.atan2(y, x) / 1.3 + 5) % 4;
    };

    class Item {
      constructor(element) {
        this.element = element;
        this.element.addEventListener("mouseover", (ev) =>
          this.update(ev, "in")
        );
        this.element.addEventListener("mouseout", (ev) =>
          this.update(ev, "out")
        );
      }

      update(ev, prefix) {
        this.element.classList.remove(...classNames);
        this.element.classList.add(
          `${prefix}-${directions[getDirectionKey(ev, this.element)]}`
        );
      }
    }

    nodes.forEach((node) => new Item(node));
  }
  if ($.exists(".feature-card-content")) {
    const $featureCards = $(".feature-card.style-2");
    const $firstCard = $featureCards.first();

    $featureCards.on("mouseover", function () {
      $featureCards.removeClass("active");
      $(this).addClass("active");
    });

    $featureCards.on("mouseout", function () {
      $(this).removeClass("active");
      $firstCard.addClass("active");
    });
  }

  /*--------------------------------------------------------------
    13. Hover add/remove Active Class
--------------------------------------------------------------*/
  if ($.exists(".add-active-class-content")) {
    const packages = document.querySelectorAll(".hover-active-class");
    packages.forEach(function (package) {
      package.addEventListener("mouseenter", function () {
        package.classList.add("active");
      });
      package.addEventListener("mouseleave", function () {
        package.classList.remove("active");
      });
    });
  }

  /*--------------------------------------------------------------
    14. Counter
--------------------------------------------------------------*/
  if ($.exists(".package-content .style2")) {
    const packageItems = document.querySelectorAll(".style2");
    packageItems.forEach((item) => {
      item.addEventListener("mouseenter", function () {
        packageItems.forEach((item) => {
          item.classList.remove("active");
        });
        this.classList.add("active");
      });
      item.addEventListener("mouseleave", function () {
        packageItems.forEach((item) => {
          console.log(item.className);
          item.classList.remove("active");
        });
        packageItems[1].classList.add("active");
      });
    });
  }
  //end the scripts
})(jQuery);
