function relClick() {
    var rel = document.getElementsByClassName('relationship-container');
    var life = document.getElementsByClassName('life-container');
    if(rel[0].style.display === "none") {
        rel[0].style.display = "block";
        life[0].style.display = "none";
    }
    else {
        rel[0].style.display = "none";
    }
}

function lifeClick() {
    var rel = document.getElementsByClassName('relationship-container');
    var life = document.getElementsByClassName('life-container');

    if(life[0].style.display === "none") {
        life[0].style.display = "block";
        rel[0].style.display = "none";
    }
    else {
        life[0].style.display = "none";
    }
}

//Slideshow
var slideIndex = 1;
showDivs(slideIndex);

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
