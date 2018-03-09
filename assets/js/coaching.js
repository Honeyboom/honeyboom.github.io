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


