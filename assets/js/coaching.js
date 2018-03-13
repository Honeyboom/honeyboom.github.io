$(document).ready(function(){
    // Detects if the browser is Chrome
    var isChrome = !!window.chrome && !!window.chrome.webstore;
    var rel = $('.relationship-container');
    var life = $('.life-container');


    $(".relationship-button").click(function(e) {
        e.preventDefault();
        if(life.is(":visible")) {
            life.hide();
        }
        rel.slideToggle(500);
    });

    $(".life-button").click(function(e) {
        e.preventDefault();
        if(rel.is(":visible")) {
            rel.hide();
        }
        life.slideToggle(500);

        if(!isChrome) {
            $('html, body').animate({
            scrollTop: $(".life-button").offset().top
            }, 0);
        }

    });

    $(".back-to-top").click(function() {
        $("html, body").animate({ scrollTop: 0 }, "slow");
    });


});

//Slideshow
var slideIndex = 1;

var sliderInterval = setInterval(plusDivs, 3000, 1);

function plusDivs(n) {
    clearInterval(sliderInterval);
    sliderInterval = setInterval(plusDivs, 3000, 1);
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length} ;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex-1].style.display = "block";
}

