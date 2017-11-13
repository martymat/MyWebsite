var clicked = 0;

function nav() {

    if (clicked == 0) {
   
            document.getElementById("mySidenav").style.width = "15em";
            document.getElementById("main").style.marginLeft = "16em";
            clicked = 1;
        
    }

    else if (clicked == 1) {

        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";

        clicked = 0;

    }


}



$(document.body).click(function () {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";

    clicked = 0;
});

$(".closer").click(function (e) {
    e.stopPropagation(); // this stops the event from bubbling up to the body
});
