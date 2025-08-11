$(document).ready(function() {
    var owl = $('.leading_testimonial-section .owl-carousel');
    owl.owlCarousel({
        margin: 20,
        nav: true,
        loop: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 4500,
        responsive: {
            0: {
                items: 1
            },
            360: {
                items: 1
            },
            576: {
                items: 2
            },
            768: {
                items: 3
            },
            992: {
                items: 3
            }
        }
    })
})

$(document).ready(function() {
    var owl = $('.digital_service-section .owl-carousel');
    owl.owlCarousel({
        margin: 30,
        nav: false,
        loop: true,
        dots: true,
        autoplay: true,
        autoplayTimeout: 4500,
        responsive: {
            0: {
                items: 1
            },
            360: {
                items: 1
            },
            576: {
                items: 2
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    })
})