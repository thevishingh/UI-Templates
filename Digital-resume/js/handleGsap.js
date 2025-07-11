gsap.registerPlugin(ScrollTrigger);

(function ($) {
    /* animation_text
  -------------------------------------------------------------------------*/
    var animation_text = function () {
        if ($(".split-text").length > 0) {
            var st = $(".split-text");
            if (st.length === 0) return;
            gsap.registerPlugin(SplitText, ScrollTrigger);
            st.each(function (index, el) {
                const $el = $(el);
                const $target =
                    $el.find("p, a").length > 0 ? $el.find("p, a")[0] : el;
                const hasClass = $el.hasClass.bind($el);
                const pxl_split = new SplitText($target, {
                    type: "words, chars",
                    lineThreshold: 0.5,
                    linesClass: "split-line",
                });
                let split_type_set = pxl_split.chars;
                gsap.set($target, { perspective: 400 });

                const settings = {
                    scrollTrigger: {
                        trigger: $target,
                        start: "top 86%",
                        toggleActions: "play none none reverse",
                    },
                    duration: 0.9,
                    stagger: 0.02,
                    ease: "power3.out",
                };

                if (hasClass("effect-fade")) settings.opacity = 0;

                if (
                    hasClass("split-lines-transform") ||
                    hasClass("split-lines-rotation-x")
                ) {
                    pxl_split.split({
                        type: "lines",
                        lineThreshold: 0.5,
                        linesClass: "split-line",
                    });
                    split_type_set = pxl_split.lines;
                    settings.opacity = 0;
                    settings.stagger = 0.5;
                    if (hasClass("split-lines-rotation-x")) {
                        settings.rotationX = -120;
                        settings.transformOrigin = "top center -50";
                    } else {
                        settings.yPercent = 100;
                        settings.autoAlpha = 0;
                    }
                }

                if (hasClass("split-words-scale")) {
                    pxl_split.split({ type: "words" });
                    split_type_set = pxl_split.words;
                    split_type_set.forEach((elw, index) => {
                        gsap.set(
                            elw,
                            {
                                opacity: 0,
                                scale: index % 2 === 0 ? 0 : 2,
                                force3D: true,
                                duration: 0.1,
                                ease: "power3.out",
                                stagger: 0.02,
                            },
                            index * 0.01
                        );
                    });
                    gsap.to(split_type_set, {
                        scrollTrigger: {
                            trigger: el,
                            start: "top 86%",
                        },
                        rotateX: "0",
                        scale: 1,
                        opacity: 1,
                    });
                } else if (hasClass("effect-blur-fade")) {
                    pxl_split.split({ type: "words" });
                    split_type_set = pxl_split.words;
                    gsap.fromTo(
                        split_type_set,
                        { opacity: 0, filter: "blur(10px)", y: 20 },
                        {
                            opacity: 1,
                            filter: "blur(0px)",
                            y: 0,
                            duration: 1,
                            stagger: 0.1,
                            ease: "power3.out",
                            scrollTrigger: {
                                trigger: $target,
                                start: "top 86%",
                                toggleActions: "play none none reverse",
                            },
                        }
                    );
                } else {
                    gsap.from(split_type_set, settings);
                }
            });
        }
    };

    /* scrolling_effect
  -------------------------------------------------------------------------*/
    var scrolling_effect = function () {
        if ($(".scrolling-effect").length > 0) {
            var st = $(".scrolling-effect");
            st.each(function (index, el) {
                var $el = $(el);
                var delay = parseFloat($el.data("delay")) || 0;
                var settings = {
                    scrollTrigger: {
                        trigger: el,
                        scrub: 3,
                        toggleActions: "play none none reverse",
                        start: "30px bottom",
                        end: "bottom bottom",
                        delay: delay,
                    },
                    duration: 0.8,
                    ease: "power3.out",
                };

                if ($el.hasClass("effectRight")) {
                    settings.opacity = 0;
                    settings.x = "80";
                }
                if ($el.hasClass("effectLeft")) {
                    settings.opacity = 0;
                    settings.x = "-80";
                }
                if ($el.hasClass("effectBottom")) {
                    settings.opacity = 0;
                    settings.y = "100";
                }
                if ($el.hasClass("effectTop")) {
                    settings.opacity = 0;
                    settings.y = "-80";
                }
                if ($el.hasClass("effectZoomIn")) {
                    settings.opacity = 0;
                    settings.scale = 0.4;
                }

                gsap.from(el, settings);
            });
        }
    };

    /* stackElement
  -------------------------------------------------------------------------*/
    var stackElement = function () {
        if ($(".stack-element").length > 0) {
            let totalHeight;
            let scrollTriggerInstances = [];

            const updateTotalHeight = () => {
                const headerHeight =
                    document.querySelector(".header-fixed")?.offsetHeight || 0;
                totalHeight = $(".tabs-content-wrap").outerHeight();

                scrollTriggerInstances.forEach((instance) => instance.kill());
                scrollTriggerInstances = [];

                document
                    .querySelectorAll(".element:not(:last-child)")
                    .forEach((element, index) => {
                        const tabHeight = element.offsetHeight;
                        totalHeight -= tabHeight;

                        const pinTrigger = ScrollTrigger.create({
                            trigger: element,
                            scrub: 1,
                            start: `top+=-${headerHeight} top`,
                            end: `+=${totalHeight}`,
                            pin: true,
                            pinSpacing: false,
                            animation: gsap.to(element, {
                                scale: 0.7,
                                opacity: 0,
                            }),
                        });

                        scrollTriggerInstances.push(pinTrigger);
                    });
            };

            updateTotalHeight();

            let resizeTimeout;
            window.addEventListener("resize", () => {
                clearTimeout(resizeTimeout);
                resizeTimeout = setTimeout(updateTotalHeight, 150);
            });
        }
    };

    /* animationFooter
    -------------------------------------------------------------------------------------*/
    var animationFooter = function () {
        if ($(".footer-container").length) {
            gsap.set(".footer-container", {
                yPercent: -100,
                scale: 0.8,
                opacity: 0,
                transformOrigin: "center bottom",
            });
            const uncover = gsap.timeline({ paused: true });
            uncover.to(".footer-container", {
                yPercent: 0,
                scale: 1,
                opacity: 1,
                ease: "none",
            });
            ScrollTrigger.create({
                trigger: ".main-content",
                start: "bottom bottom",
                end: "+=10%",
                animation: uncover,
                scrub: 1,
            });
        }
    };

    /* scrollTransform
    -------------------------------------------------------------------------------------*/
    var scrollTransform = function () {
        const scrollTransformElements =
            document.querySelectorAll(".scroll-tranform");
        if (scrollTransformElements.length > 0) {
            scrollTransformElements.forEach(function (element) {
                const direction = element.dataset.direction || "up";
                const distance = element.dataset.distance || "10%";
                let animationProperty;
                switch (direction.toLowerCase()) {
                    case "left":
                        animationProperty = { x: `-${distance}` };
                        break;
                    case "right":
                        animationProperty = { x: `${distance}` };
                        break;
                    case "up":
                        animationProperty = { y: `-${distance}` };
                        break;
                    case "down":
                        animationProperty = { y: `${distance}` };
                        break;
                    default:
                        animationProperty = { y: `-${distance}` };
                }

                gsap.to(element, {
                    ...animationProperty,
                    scrollTrigger: {
                        trigger: element,
                        start: "top center",
                        end: "bottom top",
                        scrub: 2,
                    },
                });
            });
        }
    };

    $(function () {
        animation_text();
        scrolling_effect();
        stackElement();
        animationFooter();
        scrollTransform();
    });
})(jQuery);
