function isElementInViewport($el) {
    var top = $el.offset().top;
    var bottom = top + $el.outerHeight();
    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();
    return bottom > viewportTop && top < viewportBottom;
}

function checkCounters() {
    $(".counter-item").each(function () {
        var $counter = $(this);
        if (isElementInViewport($counter) && !$counter.hasClass("counted")) {
            $counter.addClass("counted");

            var $odometer = $counter.find(".odometer");
            var targetNumber = $odometer.data("number");

            if (typeof Odometer !== "undefined") {
                if (!$odometer.data("odometer-initialized")) {
                    $odometer.data("odometer-initialized", true);
                }
                $odometer[0].innerHTML = targetNumber;
            } else {
                $odometer.text(targetNumber);
            }
        }
    });
}

if ($(".counter-scroll").length > 0) {
    $(window).on("scroll", checkCounters);
    $(window).on("load", checkCounters);
    $(document).ready(checkCounters);
}
