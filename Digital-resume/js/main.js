/**

 * headerFixed
 * tabSlide
 * settings_color
 * switchMode
 * oneNavOnePage
 * handleEffectSpotlight
 * preventDefault
 * spliting
 * handleSidebar
 
**/

(function ($) {
    ("use strict");

    /* headerFixed
  -------------------------------------------------------------------------*/
    const headerFixed = () => {
        const header = document.querySelector(".header-fixed");
        if (!header) return;
        let isFixed = false;
        const scrollThreshold = 350;
        const handleScroll = () => {
            const shouldBeFixed = window.scrollY >= scrollThreshold;
            if (shouldBeFixed !== isFixed) {
                header.classList.toggle("is-fixed", shouldBeFixed);
                isFixed = shouldBeFixed;
            }
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();
    };

    /* Tab Slide 
  ------------------------------------------------------------------------------------- */
    var tabSlide = function () {
        if ($(".tab-slide").length > 0) {
            function updateTabSlide() {
                var $activeTab = $(".tab-slide li.active");
                if ($activeTab.length > 0) {
                    var $width = $activeTab.width();
                    var $left = $activeTab.position().left;
                    var sideEffect = $activeTab
                        .parent()
                        .find(".item-slide-effect");
                    $(sideEffect).css({
                        width: $width,
                        transform: "translateX(" + $left + "px)",
                    });
                }
            }
            $(".tab-slide li").on("click", function () {
                var itemTab = $(this).parent().find("li");
                $(itemTab).removeClass("active");
                $(this).addClass("active");

                var $width = $(this).width();
                var $left = $(this).position().left;
                var sideEffect = $(this).parent().find(".item-slide-effect");
                $(sideEffect).css({
                    width: $width,
                    transform: "translateX(" + $left + "px)",
                });
            });

            $(window).on("resize", function () {
                updateTabSlide();
            });

            updateTabSlide();
        }
    };

    /* settings_color
  ------------------------------------------------------------------------------------- */
    const settings_color = () => {
        if (!$(".settings-color").length) return;

        const COLOR_KEY = "selectedColorIndex";

        const savedIndex = localStorage.getItem(COLOR_KEY);

        if (savedIndex !== null) {
            setColor(savedIndex);
            setActiveItem(savedIndex - 1);
        }

        $(".choose-item").on("click", function () {
            const index = $(this).index();
            setColor(index + 1);
            setActiveItem(index);
            localStorage.setItem(COLOR_KEY, index + 1);
        });

        function setColor(index) {
            $("body").attr("data-color-primary", "color-primary-" + index);
        }

        function setActiveItem(index) {
            $(".choose-item")
                .removeClass("active")
                .eq(index)
                .addClass("active");
        }
    };

    /* switchMode
  ------------------------------------------------------------------------------------- */
    const switchMode = () => {
        const $toggles = $(".toggle-switch-mode");
        const $body = $("body");
        const $logoHeader = $(".main-logo");
        const $logoMobile = $("#logo_header_mobile");
        const tflight = $logoHeader.data("light");
        const tfdark = $logoHeader.data("dark");

        if (!$toggles.length) return;

        const applyLogo = (isDark) => {
            const src = isDark ? tfdark : tflight;
            $logoHeader.attr("src", src);
            $logoMobile.attr("src", src);
        };

        const updateToggles = (isDark) => {
            $toggles.each(function () {
                $(this).toggleClass("active", isDark);
            });
        };

        const savedMode = localStorage.getItem("darkMode");
        const defaultMode = $body.data("default-mode") || "light";
        const isDarkInitially = savedMode
            ? savedMode === "enabled"
            : defaultMode === "dark";

        $body.toggleClass("dark-mode", isDarkInitially);
        updateToggles(isDarkInitially);
        applyLogo(isDarkInitially);

        $toggles.on("click", function () {
            const isDark = !$body.hasClass("dark-mode");

            $body.toggleClass("dark-mode", isDark);
            updateToggles(isDark);
            applyLogo(isDark);
            localStorage.setItem("darkMode", isDark ? "enabled" : "disabled");
        });
    };

    /* oneNavOnePage
  -------------------------------------------------------------------------------------*/
    const oneNavOnePage = () => {
        if (!$(".section-onepage").length) return;

        const $navLinks = $(".nav_link");
        const $sections = $(".section");

        $navLinks.on("click", function (e) {
            e.preventDefault();

            const target = $(this).attr("href");
            const $target = $(target);
            if (!$target.length) return;

            const headerHeight = $(".header-fixed").outerHeight() || 0;
            const offsetTop = $target.offset().top - headerHeight;

            $("html, body").animate({ scrollTop: offsetTop }, 0);

            $(".tf-sidebar-menu,.popup-menu-mobile").removeClass("show");
            $(".overlay-popup").removeClass("show");
            $("body").removeAttr("style");

            if ($(this).hasClass("open-popup")) {
                openYourPopup();
            }
        });

        const updateActiveMenu = () => {
            const scrollTop = $(window).scrollTop();
            const headerHeight = $(".header-fixed").outerHeight() || 0;
            let current = "";
            let currentIndex = -1;

            $sections.each(function (index) {
                const $section = $(this);
                const top = $section.offset().top - headerHeight;
                const bottom = top + $section.outerHeight();

                if (scrollTop >= top && scrollTop < bottom) {
                    current = $section.attr("id");
                    currentIndex = index;
                }
            });
            $navLinks
                .removeClass("active")
                .filter(`[href="#${current}"]`)
                .addClass("active");

            $sections.removeClass("dimmed");

            if (currentIndex !== -1) {
                $sections.each(function (index) {
                    if (index < currentIndex) {
                        $(this).addClass("dimmed");
                    }
                });
            }
        };

        $(window).on("scroll", updateActiveMenu);
        $(window).on("resize", updateActiveMenu);
        updateActiveMenu();
    };

    /* handleEffectSpotlight
  -------------------------------------------------------------------------*/
    const handleEffectSpotlight = () => {
        if (!$(".area-effect").length) return;
        $(".area-effect").each(function () {
            const $container = $(this);
            const $spotlight = $container.find(".spotlight");
            $spotlight.css("opacity", "1");
            $container.on("mousemove", function (e) {
                const offset = $container.offset();
                const relX = e.pageX - offset.left;
                const relY = e.pageY - offset.top;
                $spotlight.css({
                    top: relY,
                    left: relX,
                });
            });
        });
    };

    /* preventDefault
  -------------------------------------------------------------------------*/
    const preventDefault = () => {
        $(".link-no-action").on("click", function (e) {
            e.preventDefault();
        });
    };

    /* spliting
  -------------------------------------------------------------------------*/
    const spliting = () => {
        if ($(".splitting").length) {
            Splitting();
        }
    };

    /* handleSidebar
  -------------------------------------------------------------------------------------*/
    const handleSidebar = () => {
        $(document)
            .off("click.handleSidebar")
            .on("click.handleSidebar", ".show-sidebar", function (e) {
                e.preventDefault();
                $(".popup-show-bar").toggleClass("show");
            })
            .on("click.handleSidebar", ".show-menu-mobile", function (e) {
                e.preventDefault();
                const $target = $($(this).data("target"));
                if (!$target.length) return;

                const isOpen = $target.hasClass("show");
                $(".popup-menu-mobile, .overlay-popup").removeClass("show");
                if (!isOpen) {
                    $target.addClass("show");
                    $(".overlay-popup").addClass("show");
                }
            })
            .on("click.handleSidebar", ".overlay-popup", function () {
                $(
                    ".popup-show-bar, .popup-menu-mobile, .overlay-popup"
                ).removeClass("show");
            });
    };

    // Dom Ready
    $(function () {
        headerFixed();
        tabSlide();
        settings_color();
        switchMode();
        oneNavOnePage();
        handleEffectSpotlight();
        preventDefault();
        spliting();
        handleSidebar();
    });
})(jQuery);
