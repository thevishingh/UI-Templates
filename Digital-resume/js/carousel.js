if ($(".sw-single").length > 0) {
    const tfSwCategories = $(".sw-single");
    var effect = tfSwCategories.data("effect");
    var loop = tfSwCategories.data("loop") || false;
    var swiperSlider = {
        slidesPerView: 1,
        loop: loop,
        navigation: {
            clickable: true,
            nextEl: ".sw-single-next",
            prevEl: ".sw-single-prev",
        },
        spaceBetween: 15,
        speed: 800,
        pagination: {
            el: ".sw-pagination-single",
            clickable: true,
        },
    };

    if (effect === "fade") {
        swiperSlider.effect = "fade";
        swiperSlider.fadeEffect = {
            crossFade: true,
        };
    }
    if (effect === "creative") {
        swiperSlider.effect = "creative";
        swiperSlider.creativeEffect = {
            prev: {
                shadow: true,
                translate: [0, 0, -400],
            },
            next: {
                translate: ["100%", 0, 0],
            },
        };
    }
    var swiper = new Swiper(".sw-single", swiperSlider);
}

const $partnerEl = $(".tf-sw-partner");
if ($partnerEl.length > 0) {
    let swiperPartner;
    const screenLimit = 992;

    const preview = $partnerEl.data("preview");
    const tablet = $partnerEl.data("tablet");
    const mobile = $partnerEl.data("mobile");
    const mobileSm = $partnerEl.data("mobile-sm");

    const spacing = $partnerEl.data("space");
    const spacingMd = $partnerEl.data("space-md");
    const spacingLg = $partnerEl.data("space-lg");

    function initSwiperPartner() {
        if (window.matchMedia(`(max-width: ${screenLimit}px)`).matches) {
            if (!swiperPartner) {
                swiperPartner = new Swiper(".tf-sw-partner", {
                    autoplay: {
                        delay: 0,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    },
                    slidesPerView: mobile,
                    spaceBetween: spacing,
                    loop: true,
                    speed: 3000,
                    navigation: {
                        nextEl: ".nav-next-partner",
                        prevEl: ".nav-prev-partner",
                    },
                    pagination: {
                        el: ".sw-pagination-partner",
                        clickable: true,
                    },
                    breakpoints: {
                        575: {
                            slidesPerView: mobileSm,
                            spaceBetween: spacing,
                        },
                        768: {
                            slidesPerView: tablet,
                            spaceBetween: spacingMd,
                        },
                    },
                });
            }
        } else {
            if (swiperPartner) {
                swiperPartner.destroy(true, true);
                swiperPartner = null;
                $partnerEl
                    .find(".swiper-wrapper, .swiper-slide")
                    .removeAttr("style");
            }
        }
    }

    initSwiperPartner();

    let resizeTimeout;
    window.addEventListener("resize", function () {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(initSwiperPartner, 200);
    });
}

if ($(".sw-layout").length > 0) {
    $(".sw-layout").each(function () {
        var tfSwCategories = $(this);
        var swiperContainer = tfSwCategories.find(".swiper");
        if (swiperContainer.length === 0) return;
        var preview = swiperContainer.data("preview");
        preview = preview === "auto" ? "auto" : parseInt(preview) || 1;
        var screenXl = swiperContainer.data("screen-xl");
        screenXl = screenXl === "auto" ? "auto" : parseInt(screenXl) || preview;
        var tablet = swiperContainer.data("tablet") || 1;
        var mobile = swiperContainer.data("mobile") || 1;
        var mobileSm = swiperContainer.data("mobile-sm") || mobile;
        var spacingLg = swiperContainer.data("space-lg") || 0;
        var spacingXl = swiperContainer.data("space-xl") || spacingLg;
        var spacingMd = swiperContainer.data("space-md") || 0;
        var spacing = swiperContainer.data("space") || 0;
        var perGroup = swiperContainer.data("pagination") || 1;
        var perGroupMd = swiperContainer.data("pagination-md") || 1;
        var perGroupLg = swiperContainer.data("pagination-lg") || 1;
        var center = swiperContainer.data("slide-center") || false;
        var intitSlide = swiperContainer.data("init-slide") || 0;
        var autoplay =
            swiperContainer.data("autoplay") === true ||
            swiperContainer.data("autoplay") === "true";
        var paginationType =
            swiperContainer.data("pagination-type") || "bullets";
        var loop =
            swiperContainer.data("loop") !== undefined
                ? swiperContainer.data("loop")
                : false;
        var nextBtn = tfSwCategories.find(".nav-next-layout")[0] || null;
        var prevBtn = tfSwCategories.find(".nav-prev-layout")[0] || null;
        var progressbar =
            tfSwCategories.find(".sw-pagination-layout")[0] ||
            tfSwCategories.find(".sw-progress-layout")[0] ||
            null;
        var swiper = new Swiper(swiperContainer[0], {
            slidesPerView: mobile,
            spaceBetween: spacing,
            speed: 1000,
            centeredSlides: center,
            initialSlide: intitSlide,
            pagination: progressbar
                ? {
                      el: progressbar,
                      clickable: true,
                      type: paginationType,
                  }
                : false,
            observer: true,
            observeParents: true,
            autoplay: autoplay
                ? {
                      delay: 3000,
                      disableOnInteraction: false,
                  }
                : false,
            navigation: {
                clickable: true,
                nextEl: nextBtn,
                prevEl: prevBtn,
            },
            loop: loop,
            breakpoints: {
                575: {
                    slidesPerView: mobileSm,
                    spaceBetween: spacing,
                    slidesPerGroup: perGroup,
                },
                768: {
                    slidesPerView: tablet,
                    spaceBetween: spacingMd,
                    slidesPerGroup: perGroupMd,
                },
                992: {
                    slidesPerView: preview,
                    spaceBetween: spacingLg,
                    slidesPerGroup: perGroupLg,
                },
                1200: {
                    slidesPerView: screenXl,
                    spaceBetween: spacingXl,
                    slidesPerGroup: perGroupLg,
                },
            },
        });
    });
}
