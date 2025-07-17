// =================== preloader js  ================== //
window.addEventListener('load', function () {
    var preloader = document.querySelector('.preloader');
    preloader.style.transition = 'opacity .5s ease';
    preloader.style.opacity = '0';
    setTimeout(function () {
        preloader.style.display = 'none';
    }, 1500);
});

// =================== preloader js end ================== //





// =================== header js start here ===================


// Add class 'menu-item-has-children' to parent li elements of '.submenu'
var submenuList = document.querySelectorAll("ul>li>.submenu");
submenuList.forEach(function (submenu) {
    var parentLi = submenu.parentElement;
    if (parentLi) {
        parentLi.classList.add("menu-item-has-children");
    }
});





// Toggle menu on click

if (parseInt(window.innerWidth) < 1200) {

    var menuLinks = document.querySelectorAll(".menu>li>a");

    menuLinks.forEach(function (link) {
        link.addEventListener("click", function (e) {


            e.stopPropagation(); // prevent the event from bubbling up to parent elements
            var element = link.parentElement;

            var links = document.querySelectorAll(".menu>.menu-item-has-children");

            links.forEach(function (item, index) {

                if (element != item) {
                    item.classList.remove("open");
                    item.querySelector('.submenu').style.display = "none";
                } else {

                    if (item.classList.contains("open")) {
                        item.querySelector('.submenu').style.display = "none";
                    } else {
                        item.querySelector('.submenu').style.display = "block";
                    }
                    item.classList.toggle("open");


                }

            })


        });
    });

} else {

    // Fix dropdown menu overflow problem
    var menuList = document.querySelectorAll("ul.menu ul");
    menuList.forEach(function (submenu) {
        var parentLi = submenu.parentElement;
        if (parentLi) {
            parentLi.addEventListener("mouseover", function () {

                var links = document.querySelectorAll(".menu>.menu-item-has-children");

                links.forEach(function (item, index) {
                    // console.log(item);

                    if (item != submenu) {

                        item.classList.remove("open");
                        item.querySelector('.submenu').style.display = "block";


                    } else {
                        item.classList.toggle("open");
                        item.querySelector('.submenu').style.display = "none";
                    }

                })




                var menuPos = submenu.getBoundingClientRect();
                if (menuPos.left + submenu.offsetWidth > window.innerWidth) {
                    submenu.style.left = -submenu.offsetWidth + "px";
                }

            });
        }
    });

}




// Toggle header bar on click
var headerBar = document.querySelector(".header-bar");
headerBar.addEventListener("click", function () {
    headerBar.classList.toggle("active");
    var menu = document.querySelector(".menu");
    if (menu) {
        menu.classList.toggle("active");
    }
});





//Header
var fixedTop = document.querySelector("header");
window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
        fixedTop.classList.add("header-fixed", "fadeInUp");
    } else {
        fixedTop.classList.remove("header-fixed", "fadeInUp");
    }
});


// =================== header js end here =================== //




//Animation on Scroll initializing
AOS.init();




// =================== custom trk slider js here =================== //

// component slider here
const Swiper1 = new Swiper('.course__slider', {
    spaceBetween: 24,
    grabCursor: true,
    loop: true,
    slidesPerView: 1,
    breakpoints: {
        576: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 15,
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 25,
        },
        1400: {
            slidesPerView: 5,
            spaceBetween: 20,
        },
        1600: {
            slidesPerView: 5,
            spaceBetween: 20,
        },
    },

    autoplay: {
        delay: 1,
        disableOnInteraction: true,
    },
    speed: 3000,
    pagination: {
        el: ".slider__pagination-1",
        clickable: true
    },
});


const course__sliderpopular = new Swiper('.course__sliderpopular', {
    spaceBetween: 24,
    grabCursor: true,
    loop: true,
    slidesPerView: 1,
    breakpoints: {
        576: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 15,
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 25,
        },
        1400: {
            slidesPerView: 4,
            spaceBetween: 20,
        }

    },

    autoplay: {
        delay: 1,
        disableOnInteraction: true,
    },
    speed: 3000,
    pagination: {
        el: ".slider__pagination-1",
        clickable: true
    },
});

// home 4 course slider
const Swiper4 = new Swiper('.course__slider--style4', {
    spaceBetween: 24,
    grabCursor: true,
    loop: true,
    slidesPerView: 1,
    breakpoints: {
        576: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 15,
        }
    },

    autoplay: {
        delay: 1,
        disableOnInteraction: true,
    },
    speed: 3000,
    pagination: {
        el: ".slider__pagination-2",
        clickable: true
    },
});

// home 1 testimonial  slider here

var swiperAuthor = new Swiper(".testimonial__author", {
    spaceBetween: 1,
    slidesPerView: 4,
    clickable: true,
    spaceBetween: 10,
    breakpoints: {

        768: {
            slidesPerView: 5,
        },
        1200: {
            slidesPerView: 5,
            spaceBetween: 15,
        },
        1440: {
            slidesPerView: 5,
            spaceBetween: 20,
        }
    },
});


const Swiper2 = new Swiper('.testimonial__slider', {
    grabCursor: true,
    effect: "fade",
    loop: true,
    slidesPerView: 1,
    speed: 500,
    thumbs: {
        swiper: swiperAuthor,
    },
    autoplay: true,
});



const studentreview = new Swiper('.studentreview__slider', {
    spaceBetween: 24,
    grabCursor: true,
    loop: true,
    breakpoints: {
        576: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 15,
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 25,
        },
    },
    autoplay: {
        delay: 1,
        disableOnInteraction: true,
    },
    speed: 5000,
});


// home 1 partner  slider here
const Swiper3 = new Swiper('.partner__slider', {
    spaceBetween: 24,
    grabCursor: true,
    loop: true,
    slidesPerView: 2,
    breakpoints: {
        576: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        992: {
            slidesPerView: 4,
            spaceBetween: 15,
        },
        1200: {
            slidesPerView: 5,
            spaceBetween: 25,
        },
    },
    autoplay: {
        delay: 1,
        disableOnInteraction: true,
    },
    speed: 3000,
});


// home 2 course category slider
// component slider here
const Swiper5 = new Swiper('.categories__slider', {
    spaceBetween: 24,
    grabCursor: true,
    loop: true,
    slidesPerView: 1,
    breakpoints: {
        576: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        992: {
            slidesPerView: 4,
            spaceBetween: 15,
        },
        1400: {
            slidesPerView: 5,
            spaceBetween: 25,
        }
    },
    speed: 3000,
    pagination: {
        el: ".slider__pagination-1",
        clickable: true
    },
});

// testimonial
const Swiper7 = new Swiper('.testimonial__slider2', {
    spaceBetween: 24,
    grabCursor: true,
    loop: true,
    breakpoints: {
        576: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 2,
            spaceBetween: 15,
        },
        1400: {
            slidesPerView: 2,
            spaceBetween: 25,
        }
    },
    speed: 3000,
    pagination: {
        el: ".slider__pagination-3",
        clickable: true
    },
});



// home 3 slider
// team slider 
const swiper11 = new Swiper('.team__slider1', {
    slidesPerView: 2,
    grabCursor: true,
    spaceBetween: 24,
    loop: true,
    breakpoints: {
        576: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        992: {
            slidesPerView: 4,
            spaceBetween: 15,
        },
        // 1200: {
        //     slidesPerView: 5,
        //     spaceBetween: 25,
        // },
    },
    autoplay: {
        delay: 1,
        disableOnInteraction: true,
    },
    speed: 5000,
});
const swiper12 = new Swiper('.team__slider2', {
    slidesPerView: 2,
    grabCursor: true,
    spaceBetween: 24,
    loop: true,
    breakpoints: {
        576: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        992: {
            slidesPerView: 4,
            spaceBetween: 15,
        },
        // 1200: {
        //     slidesPerView: 5,
        //     spaceBetween: 25,
        // },
    },
    autoplay: {
        delay: 1,
        reverseDirection: true,
        disableOnInteraction: true,
    },
    speed: 5000,
});



var testimonialStoryteller = new Swiper(".testimonial__author3", {
    spaceBetween: 24,
    watchSlidesProgress: true,
    loop: true,
    clickable: true,
    breakpoints: {
        576: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 15,
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 24,
        }
    },
});

// testimonial
const testimonialSlider3 = new Swiper('.testimonial__slider3', {
    spaceBetween: 40,
    grabCursor: true,
    loop: true,
    slidesPerView: 1,
    speed: 3000,
    thumbs: {
        swiper: testimonialStoryteller,
    },
});







// blog
const BlogSlider = new Swiper('.blog__slider', {
    spaceBetween: 24,
    grabCursor: true,
    loop: true,
    breakpoints: {
        576: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 15,
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 15,
        },
        1400: {
            slidesPerView: 5,
            spaceBetween: 25,
        }
    },
    autoplay: {
        delay: 1,
        disableOnInteraction: true,
    },
    speed: 3000,
});


// =================== custom trk slider end here =================== //




// =================== scroll js start here =================== //

// Show/hide button on scroll
window.addEventListener('scroll', function () {
    var scrollToTop = document.querySelector('.scrollToTop');

    if (scrollToTop) {
        if (window.pageYOffset > 300) {
            scrollToTop.style.bottom = '7%';
            scrollToTop.style.opacity = '1';
            scrollToTop.style.transition = 'all .5s ease';
        } else {
            scrollToTop.style.bottom = '-30%';
            scrollToTop.style.opacity = '0';
            scrollToTop.style.transition = 'all .5s ease';
        }
    }
});

var scrollToTop = document.querySelector('.scrollToTop');

if (scrollToTop) {

    // Click event to scroll to top
    scrollToTop.addEventListener('click', function (e) {
        e.preventDefault();
        var scrollDuration = 100; // Set scroll duration in milliseconds
        var scrollStep = -window.scrollY / (scrollDuration / 15);
        var scrollInterval = setInterval(function () {
            if (window.scrollY !== 0) {
                window.scrollBy(0, scrollStep);
            } else {
                clearInterval(scrollInterval);
            }
        }, 15);
    });
}

// =================== scroll js end here =================== //



// =================== count start here =================== //
new PureCounter();
// =================== count end here =================== //



// ===================home 3 search start here =================== //


// Get the search button and search bar element
const pathName = window.location.pathname;

if (pathName === "/index-3.html") {
    const searchBtn = document.querySelector('.trk-btn--search');
    const searchBar = document.querySelector('.searchbar');
    const searchClose = document.querySelector('.searchbar__close');
    const searchForm = document.querySelector('.searchbar__inner');

    // Add an event listener to the search button
    searchBtn.addEventListener('click', function () {
        // Toggle the 'active' class on the search bar
        searchBar.classList.toggle('show');
    });
    searchClose.addEventListener('click', function () {
        // Toggle the 'active' class on the search bar
        searchBar.classList.remove('show');
    });

    // Add an event listener to the search bar
    searchBar.addEventListener('click', function (event) {
        // Check if the target element is the search form
        if (!searchForm.contains(event.target)) {
            // Remove the 'active' class from the search bar
            searchBar.classList.remove('show');
        }
    });


}



// ===================home 3 search end here =================== //










// ===================cart quantity count start here =================== //
// const cartPlusMinus = document.querySelectorAll('.cart-plus-minus');

// cartPlusMinus.forEach(el => {
//     el.insertAdjacentHTML('afterbegin', '<div class="dec qtybutton">-</div>');
//     el.insertAdjacentHTML('beforeend', '<div class="inc qtybutton">+</div>');
// });

// document.querySelectorAll('.qtybutton').forEach(button => {
//     button.addEventListener('click', () => {
//         const parentEl = button.parentElement;
//         const oldValue = parseFloat(parentEl.querySelector('input').value);
//         let newVal;

//         if (button.textContent === '+') {
//             newVal = oldValue + 1;
//         } else {
//             // Don't allow decrementing below zero
//             if (oldValue > 0) {
//                 newVal = oldValue - 1;
//             } else {
//                 newVal = 1;
//             }
//         }

//         parentEl.querySelector('input').value = newVal;
//     });
// });

// ===================cart quantity count end here =================== //