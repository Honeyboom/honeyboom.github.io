$(document).ready(function(){

var rel = $('.relationship-container');
var life = $('.life-container');


$(".relationship-button").click(function() {
    rel.slideToggle(300);
    if(life.is(":visible")) {
        life.hide();
    }
});

$(".life-button").click(function() {
    life.slideToggle(300);
    if(rel.is(":visible")) {
        rel.hide();
    }
});

});

//Slideshow
var slideIndex = 1;


function plusDivs(n) {
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

setInterval(plusDivs, 3000, 1);
