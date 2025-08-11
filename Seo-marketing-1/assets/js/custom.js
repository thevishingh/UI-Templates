
// TABS JS

function makeTabActive() {

    var url = window.location.href;

    var indexof = url.indexOf("#");

    if (indexof > 0) {

        var activeTab = url.substring(indexof + 1);

        if (typeof activeTab != 'undefined' && activeTab != '' && activeTab != '#') {

            // to dispaly give tab content

            jQuery(".tab-pane").removeClass("active in show");

            jQuery("#" + activeTab).addClass("active in show")

            // to make active given tab

            jQuery(".nav-tabs li a").removeClass("active");

            jQuery(".nav-tabs li a[href='#" + activeTab + "']").addClass("active");
        }
    }
}

// Spin text

const element = document.querySelectorAll(".badge__char");
const step = 360/element.length;

element.forEach((elem, i) => {
  elem.style.setProperty('--char-rotate', (i * step) + 'deg');
})

const foo = (360 / 7);

for (i = 0; i <= 7; i++) {
  console.log((i * foo) + 'deg');
}

// Pop Up On Image

$("#fixed-form-container .body").hide();
$("#fixed-form-container .image").on("click", function(e){
    $(this).next("#fixed-form-container div").slideToggle(400);
    $(this).toggleClass("expanded");
}); 


