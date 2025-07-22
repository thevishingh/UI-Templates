"use strict";
document.addEventListener("DOMContentLoaded", function () {

  $(function ($) {

    // preloader
    $("#preloader").delay(300).animate({
      "opacity": "0"
    }, 500, function () {
      $("#preloader").css("display", "none");
    });

    // Click to Scroll Top
    var ScrollTop = $(".scrollToTop");
    $('.scrollToTop').on('click', function () {
      $('html, body').animate({
        scrollTop: 0
      }, 600);
      return false;
    });

    // Sticky Header
    var fixed_top = $(".header-section.head-first");
    if ($(window).scrollTop() > 50) {
      fixed_top.addClass("animated fadeInDown header-fixed");
    }
    else {
      fixed_top.removeClass("animated fadeInDown header-fixed");
    }

    // header text animation
    function toggleActive(elements, index) {
      elements.eq(index).addClass("active");
      setTimeout(function() {
          elements.eq(index).removeClass("active");
          toggleActive(elements, (index + 1) % elements.length);
      }, 5000);
    }
    $(".head-text").each(function() {
        var cmnTextElements = $(this).find(".cmn-text");
        toggleActive(cmnTextElements, 0);
    });

    // sidebar close open
    var activeItem = $(".bottom-area .active-item");
    var inActiveItem = $(".bottom-area .inactive-item");
    activeItem.css("display", "none");
    inActiveItem.css("display", "block");

    // window on scroll function
    $(window).on("scroll", function () {

      // progress bar
      const scrollTop = $(window).scrollTop();
      const scrollHeight = $(document).height() - $(window).height();
      const scrollPercentage = (scrollTop / scrollHeight) * 100;
      $('.progress-scrollbar').css('height', scrollPercentage + '%');
      
      // Sticky Header
      var fixed_top = $(".header-section.head-first");
      if ($(window).scrollTop() > 50) {
        fixed_top.addClass("animated fadeInDown header-fixed");
      }
      else {
        fixed_top.removeClass("animated fadeInDown header-fixed");
      }

      // sidebar content visible
      let sidebarHeight = document.querySelector('.side-menubar');
      if(sidebarHeight){
        sidebarHeight = $(".side-menubar")[0].clientHeight;
        if ($(this).scrollTop() < sidebarHeight-200) {
          activeItem.css("display", "none");
          inActiveItem.css("display", "block");
        } else {
          activeItem.css("display", "block");
          inActiveItem.css("display", "none");
        }
      }

      // Check Scroll 
      if ($(this).scrollTop() < 600) {
        ScrollTop.removeClass("active");
      } else {
        ScrollTop.addClass("active");
      }

      // Odometer Init 
      let windowHeight = $(window).height();
      $('.odometer').children().each(function () {
        if ($(this).isInViewport({ "tolerance": windowHeight, "toleranceForLast": windowHeight, "debug": false })) {
          var section = $(this).closest(".counters");
          section.find(".odometer").each(function () {
            $(this).html($(this).attr("data-odometer-final"));
          });
        }
      });

    });

    // Check VisualViewport
    function setupIntersectionObserver() {
      const targetsAos = document.querySelectorAll('.reveal-content.scroll .content-wrap');
      const handleIntersect = (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-init');
          } else {
            entry.target.classList.remove('reveal-init');
          }
        });
      };
      const observer = new IntersectionObserver(handleIntersect, {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      });
      targetsAos.forEach(target => {
        observer.observe(target);
      });
    }setupIntersectionObserver();


    // menu item animation
    $('.navbar-toggle-btn').on('click', function() {
      $('.reveal-content.no-scroll .content-wrap').toggleClass('reveal-init');
    });

    // progress-area
    let progressBars = $('.progress-area');
    let observer = new IntersectionObserver(function(progressBars) {
      progressBars.forEach(function(entry, index) {
        if (entry.isIntersecting) {
          let width = $(entry.target).find('.progress-bar').attr('aria-valuenow');
          let count = 0;
          let time = 1000 / width;
          let progressValue = $(entry.target).find('.progress-value');
          setInterval(() => {
            if (count == width) {
              clearInterval();
            } else {
              count += 1;
              $(progressValue).text(count +"%")
            }
          }, time);
          $(entry.target).find('.progress-bar').css({"width": width + "%", "transition": "width 1s linear"});
        }else{
          $(entry.target).find('.progress-bar').css({"width": "0%", "transition": "width 1s linear"});
        }
      });
    });
    progressBars.each(function() {
      observer.observe(this);
    });
    $(window).on('unload', function() {
      observer.disconnect();
    });

    // Custom Tabs
    $(".tabLinks .nav-links").each(function () {
      var targetTab = $(this).closest(".singleTab");
      targetTab.find(".tabLinks .nav-links").each(function () {
        var navBtn = targetTab.find(".tabLinks .nav-links");
        navBtn.on('click', function () {
          navBtn.removeClass('active');
          $(this).addClass('active');
          var indexNum = $(this).closest("li").index();
          var tabContent = targetTab.find(".tabContents .tabItem");
          $(tabContent).removeClass('active');
          $(tabContent).eq(indexNum).addClass('active');
        });
      });
    });

    // tabLinks add active 
    $('.tabLinks .nav-links').on('mouseenter', function () {
      $(this).addClass('active');
      $('.tabLinks .nav-links').not(this).removeClass('active');
    });    

    // hover add active 
    $('.hover-active .single-item').on('mouseenter', function () {
      $(this).addClass('active');
      $('.hover-active .single-item').not(this).removeClass('active');
    });

    // image before after slider 
    document.querySelectorAll('.slider-input').forEach(slider => {
      slider.addEventListener('input', (e) => {
          const container = slider.closest('.before-after-slider');
          container.style.setProperty('--position', `${e.target.value}%`);
      });
    });

    // Circle Text
    const text = document.querySelector(".circle-text.first p");
    const text2 = document.querySelector(".circle-text.second p");
    if (text) {
      text.innerHTML = text.innerText.split('').map(
        (char, i) =>
          `<span style="transform:rotate(${i * 10}deg)">${char}</span>`
      ).join('');
    }
    if (text2) {
      text2.innerHTML = text2.innerText.split('').map(
        (char, i) =>
          `<span style="transform:rotate(${i * 6}deg)">${char}</span>`
      ).join('');
    }
  
    // Input Increase
    var minVal = 1, maxVal = 20;
    $(".increaseQty").on('click', function(){
      var $parentElm = $(this).parents(".qtySelector");
      $(this).addClass("clicked");
      setTimeout(function(){
          $(".clicked").removeClass("clicked");
      },100);
      var value = $parentElm.find(".qtyValue").val();
      if (value < maxVal) {
          value++;
      }
      $parentElm.find(".qtyValue").val(value);
    });
    $(".decreaseQty").on('click', function(){
      var $parentElm = $(this).parents(".qtySelector");
      $(this).addClass("clicked");
      setTimeout(function(){
          $(".clicked").removeClass("clicked");
      },100);
      var value = $parentElm.find(".qtyValue").val();
      if (value > 1) {
          value--;
      }
      $parentElm.find(".qtyValue").val(value);
    });    

    // Navbar Auto Active Class 
    var curUrl = $(location).attr('href');
    var terSegments = curUrl.split("/");
    var desired_segment = terSegments[terSegments.length - 1];
    var removeGarbage = desired_segment.split(".html")[0] + ".html";
    var checkLink = $('.menu-link a[href="' + removeGarbage + '"]');
    var targetClass = checkLink.addClass('active');
    targetClass.parents('.menu-item').addClass('active-parents');
    $('.active-parents > button').addClass('active');  

    // navbar custom
    $('.navbar-toggle-btn').on('click', function () {
      $('.sidebar-menu').toggleClass('active');
      $(this).toggleClass('open');
      $(this).parents('.navbar-toggle-wrapper').toggleClass('active');
    });
    $('.menu-close-btn').on('click', function () {
      $('.navbar-toggle-btn')[0].click();
      $('.navbar-toggle-btn').removeClass('open');
    });
    $('.menu-item button').on('click', function () {
      $(this).siblings("ul").slideToggle(300);
    });

    // navbar clone 
    const clone = $('.header-section .show-mobile-menu').clone();
    clone.appendTo('.header-section .mobile-menu');

    // navbar clone 
    const newsletterWrapper = $('.newsletter-wrapper .single-item').clone();
    newsletterWrapper.appendTo('.header-section .right-area-item .newsletter-show');

    // navbar clone 
    const cloneRightArea = $('.header-section.index-three .right-area-item .right-area').clone();
    cloneRightArea.appendTo('.header-section .right-area-mobile');
    
    // Header Active
    $('.single-item .cmn-head').on('click', function () {
      $(this).parents('.single-item').toggleClass('active');
      $(this).parents('.single-item').siblings().removeClass('active');
    });

    // Dropdown Active Remove
    $(".close-btn").on('click', function () {
      $('.single-item').removeClass('active');
    });    

    // Box Style 
    const targetBtn = document.querySelectorAll('.box-style')
    if (targetBtn) {
      targetBtn.forEach((element) => {
        element.addEventListener('mousemove', (e) => {
          const x = e.offsetX + 'px';
          const y = e.offsetY + 'px';
          element.style.setProperty('--x', x);
          element.style.setProperty('--y', y);
        })
      })
    }

    // comments-area
    $('.comments-area .reply-btn').on('click', function () {
      $(this).closest(".single-area").find(".comment-form").slideToggle();
    });

    // data background
    $("[data-background]").each(function () {
      $(this).css(
        "background-image",
        "url(" + $(this).attr("data-background") + ")"
      );
    });

    // Password Show Hide
    $('.show-hide-pass').on('click', function () {
      var passwordInput = $($(this).siblings("input"));
      var icon = $(this).find('i');
      if (passwordInput.attr("type") == "password") {
        passwordInput.attr("type", "text");
        icon.removeClass("ph-eye-slash");
        icon.addClass("ph-eye");
      } else {
        passwordInput.attr("type", "password");
        icon.removeClass("ph-eye");
        icon.addClass("ph-eye-slash");
      }
    });

    // magnific-popup
    $('.popup-video').magnificPopup({
      type: 'iframe'
    });

    // gridGallery
    $('.popup_img').magnificPopup({
        type:'image',
        gallery:{
            enabled: true
        }
    });
    
    // navbar-toggle-btn-toggler 
    let clickCount = 0;
    $('.navbar-toggle-btn.menu').on('click', function () {
      clickCount++;
      if (clickCount % 2 === 1) {
        $('.custom-nav button, .custom-nav a').removeClass('fs-six');
        $('.custom-nav button, .custom-nav a').addClass('fs-two');
        if ($('.navbar-toggle-btn').hasClass('alt')) {
          $('.custom-nav button, .custom-nav a').removeClass('second');
        }
      } else {
        $('.custom-nav button, .custom-nav a').addClass('fs-six');
        $('.custom-nav button, .custom-nav a').removeClass('fs-two');
      }
    });

    // navbar-toggle-btn-toggler Screen resize
    function handleResize() {
      $('.navbar-toggle-btn.menu.open').click();
      if ($('.navbar-toggle-btn').hasClass('alt')) {
        $('.custom-nav button, .custom-nav a').addClass('second');
      }
    }handleResize();
    $(window).on('resize', handleResize);

    // mega Menu Window
    megaMenuWindow();
    $(window).on('resize', function() {
      megaMenuWindow();
    });
    function megaMenuWindow() {
      if ($(window).width() < 992) {
        $('.mega-sub-menu').removeClass('sub-menu');
      } else {
        $('.mega-sub-menu').addClass('sub-menu');
      }

      if ($('.navbar-toggle-btn').hasClass('mega-menu')) {
        $('.mega-sub-menu').removeClass('sub-menu');
        $('.mega-menu-item > button').addClass('d-lg-none');
        $('.mega-menu-item .col-lg-3').addClass('col-lg-12');
        $('.mega-menu-item a, .mega-menu-item button').addClass('fs-two');
      }

    }

    // Current Year
    $(".currentYear").text(new Date().getFullYear());

    // sidebar-toggler
    var primarySidebar = $('.sidebar-toggler .sidebar-head');
    $('.sidebar-toggler .toggler-btn').on('click', function () {
      $(this).closest('.sidebar-head').toggleClass('active');
      if (!$('.sidebar-head').hasClass('active')) {
        setTimeout(function () {
          primarySidebar.css("height", "24px");
        }, 550);
      } else {
        primarySidebar.css("height", "100%");
      }
    });
    
    // sidebar-toggler
    $('.sidebar-wrapper .sidebar-item-head').on('click', function () {
      $(this).siblings('.sidebar-single-body').slideToggle();
      $(this).toggleClass('active');
    });

    // Social Item Remove
    $('.social-hide-btn').on('click', function () {
      $(this).parents(".img-area").toggleClass('active');
      if ($('.img-area').hasClass("active")) {
        $('.active .social-hide-btn i').html("remove");
      } else {
        $('.social-hide-btn i').html("add");
      }
    });

    // target Items Remove from anywhere click
    var targetBox = $('.target-item');
    $(document).on('click', function(event) {
      if (!targetBox.is(event.target) && !targetBox.has(event.target).length) {
        targetBox.removeClass('active');
      }
    });
    
    // Mouse Follower
    const follower = document.querySelector(".mouse-follower .cursor-outline");
    const dot = document.querySelector(".mouse-follower .cursor-dot");
    window.addEventListener("mousemove", (e) => {
      follower.animate(
        [{
            opacity: 1,
            left: `${e.clientX}px`,
            top: `${e.clientY}px`,
            easing: "ease-in-out"
          }],
        {
          duration: 3000,
          fill: "forwards"
        }
      );
      dot.animate(
        [{
            opacity: 1,
            left: `${e.clientX}px`,
            top: `${e.clientY}px`,
            easing: "ease-in-out"
          }],
        {
          duration: 1500,
          fill: "forwards"
        }
      );
    });

    // Mouse Follower Hide Function
    $("a, button").on('mouseenter mouseleave', function () {
      $('.mouse-follower').toggleClass('hide-cursor');
    });

    var terElement = $('h1, h2, h3, .display-one, .display-two, .display-three, .display-four, .display-five, .display-six');
    $(terElement).on('mouseenter mouseleave', function () {
      $('.mouse-follower').toggleClass('highlight-cursor-head');
      $(this).toggleClass('highlight-cursor-head');
    });
    
    var terElement = $('p');
    $(terElement).on('mouseenter mouseleave', function () {
      $('.mouse-follower').toggleClass('highlight-cursor-para');
      $(this).toggleClass('highlight-cursor-para');
    });

    // custom Accordion
    $('.accordion-single .header-area').on('click', function () {
      if ($(this).closest(".accordion-single").hasClass("active")) {
        $(this).closest(".accordion-single").removeClass("active");
        $(this).next(".content-area").slideUp();
      } else {
        $(".accordion-single").removeClass("active");
        $(this).closest(".accordion-single").addClass("active");
        $(".content-area").not($(this).next(".content-area")).slideUp();
        $(this).next(".content-area").slideToggle();
      }
    });
    $(".accordion-single.active").each(function() {
      $(this).find(".content-area").slideDown();
    });

    // popup-video icon move 
    var iconWrapperHeight = $(".icon-wrapper").height();
    $(document).mousemove(function(event){
        var screenHeight = $(window).height();
        var mouseY = event.clientY;
        var popupVideoHeight = $(".popup-video").outerHeight();
        var newBottom = Math.min(100 - ((mouseY / screenHeight) * 100), 100 - ((popupVideoHeight / iconWrapperHeight) * 100));
        $(".popup-video").css("bottom", newBottom + "%");
    });

    // Function to filter items
    function applyFilter(filterItem) {
      var filter = filterItem.data('filter');
      $('.filter-list .filter-links').removeClass('active');
      filterItem.find('.filter-links').addClass('active');
      var singleFilter = filterItem.closest('.singleFilter');
      var tabItem = singleFilter.find('.filterItems');
      var filterTags = filter.split(' ');
      tabItem.find('> div').removeClass('active');
      if (filter === '*') {
        tabItem.find('> div').addClass('active');
      } else {
        tabItem.find('> div').each(function() {
          var itemTags = $(this).data('tag').split(' ');
          for (var i = 0; i < filterTags.length; i++) {
            if (itemTags.includes(filterTags[i])) {
              $(this).addClass('active');
              break;
            }
          }
        });
      }
    }
    $('.filter-item.active').each(function() {
      applyFilter($(this));
    });
    $('.filter-list li').each(function(index) {
      $(this).on('click', function () {
        applyFilter($(this));
      });
    });

    // singleMasonry
    function singleMasonry() {
      $('.single-masonry').each(function() {
        const singleMasonry = $(this);
        if (singleMasonry.hasClass('random-size-toggle') && $(window).width() > 991) {
            singleMasonry.addClass('random-size');
            singleMasonry.removeClass('fixed-size');
        }else{
            singleMasonry.removeClass('random-size');
            singleMasonry.addClass('fixed-size');
        }

        if ($(singleMasonry).hasClass('random-size')) {
          const images = singleMasonry[0].querySelectorAll('img');
          let smallestNaturalHeight = Infinity;
          let smallestNaturalWidth = Infinity;
          images.forEach(img => {
              const naturalWidth = img.naturalWidth;
              const naturalHeight = img.naturalHeight;
              if (naturalHeight < smallestNaturalHeight) {
                  smallestNaturalHeight = naturalHeight;
              }
              if (naturalWidth < smallestNaturalWidth) {
                  smallestNaturalWidth = naturalWidth;
              }
          });
          
          var screenWidth = $(window).width();
          if (screenWidth >= 1399) {
              $(singleMasonry[0]).css('grid-template-columns', `repeat(auto-fit, minmax(${smallestNaturalWidth}px, 1fr))`);
          } else if (screenWidth >= 1199) {
              $(singleMasonry[0]).css('grid-template-columns', `repeat(auto-fit, minmax(${smallestNaturalWidth - 50}px, 1fr))`);
          } else if (screenWidth >= 991) {
              $(singleMasonry[0]).css('grid-template-columns', `repeat(auto-fit, minmax(${smallestNaturalWidth - 100}px, 1fr))`);
          } else {
              $(singleMasonry[0]).css('grid-template-columns', `repeat(2, 1fr)`);
          }

          if ($(singleMasonry[0]).hasClass('random-second')) {
            var screenWidth = $(window).width();
            if (screenWidth >= 1799) {
                $(singleMasonry[0]).css('grid-template-columns', `repeat(auto-fit, minmax(${smallestNaturalWidth}px, 1fr))`);
            } else if (screenWidth >= 1199) {
                $(singleMasonry[0]).css('grid-template-columns', `repeat(auto-fit, minmax(${smallestNaturalWidth / 2}px, 1fr))`);
            } else if (screenWidth >= 991) {
                $(singleMasonry[0]).css('grid-template-columns', `repeat(auto-fit, minmax(${smallestNaturalWidth / 3}px, 1fr))`);
            } else {
                $(singleMasonry[0]).css('grid-template-columns', `repeat(auto-fit, minmax(${smallestNaturalWidth / 4}px, 1fr))`);
            }
          }

          const img = $(this).find('img');
          $(img).each(function() {
            const img = $(this)[0];
            img.addEventListener('load', function() {
              const naturalWidth = img.naturalWidth;
              const naturalHeight = img.naturalHeight;
              const card = $(img).parents('.single-item');

              if (naturalWidth <= smallestNaturalWidth) {
                  card.addClass('item-width-1');
              } else if (naturalWidth <= (smallestNaturalWidth+50)*2) {
                  card.addClass('item-width-2');
                } else if (naturalWidth <= (smallestNaturalWidth+50)*3) {
                  card.addClass('item-width-3');
              }
              if (naturalHeight <= smallestNaturalHeight) {
                  card.addClass('item-height-1');
              } else if (naturalHeight <= (smallestNaturalHeight+50)*2) {
                  card.addClass('item-height-2');
              } else if (naturalHeight <= (smallestNaturalHeight+50)*3) {
                  card.addClass('item-height-3');
              }

            });
            if (img.complete) {
                img.dispatchEvent(new Event('load'));
            }
          });
        }

        if ($(singleMasonry).hasClass('fixed-size')) {
          const stylesMasonry = singleMasonry[0].currentStyle || window.getComputedStyle(singleMasonry[0]);
          const gridTemplateColumns = stylesMasonry.gridTemplateColumns;
          const howManyItem = gridTemplateColumns.split(' ');
          const countItem = howManyItem.length;
          const singleItems = singleMasonry.find('> div.active');
          singleItems.css('marginTop', '0px');
          singleItems.each(function(index) {
            const card = $(this);
            const img = card.find('img');
            if (img.length) {
              const cardHeight = card.outerHeight();
              const imgHeight = img.outerHeight();
              const heightDifference = cardHeight - imgHeight;
              const nextSiblingIndex = index + countItem;
              const nextSiblingItem = singleItems.eq(nextSiblingIndex);
              if (nextSiblingItem.length) {
                nextSiblingItem.css('marginTop', `-${heightDifference}px`);
              }
            }
          });
        }
      });
    }  
    singleMasonry();
    $(window).on('resize', function() {
      singleMasonry();
    });
    $('.filter-list li').on('click', function() {
        singleMasonry();
    });

    // text limit 
    $(".text-limit").each(function() {
      var textContainer = $(this);
      var maxLength = parseInt(textContainer.attr("text-limit"));
      var text = textContainer.text();
      if (text.length > maxLength) {
        var truncatedText = text.substring(0, maxLength);
        var fullText = text;
        textContainer.empty();
        var textSpan = $('<span class="text-content" style="color: inherit; font-family: inherit; font-size: inherit; font-weight: inherit;"></span>');
        textContainer.append(textSpan);
        textSpan.text(truncatedText);
        var readMoreButton = $('<span class="read-more-button ms-1" style="color: inherit; font-family: inherit; font-size: inherit; font-weight: inherit;">...</span>');
        textContainer.append(readMoreButton);

        textSpan.on('mouseenter', function() {
          textSpan.text(fullText);
          readMoreButton.hide();
        });
        textSpan.on('mouseleave', function() {
          textSpan.text(truncatedText);
          readMoreButton.show();
        });
      }
    });

  });

});