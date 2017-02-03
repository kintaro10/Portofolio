// Link to navigate from section to section
$(document).ready(function() {
    $("#nav1").click(function() {
        $("html, body").animate({
            scrollTop: $("#section2").offset().top
        }, 1200);
    });
    $("#nav2").click(function() {
        $("html, body").animate({
            scrollTop: $("#section3").offset().top
        }, 1200);
    });

    $("#nav3").click(function() {
        $("html, body").animate({
            scrollTop: $("#section4").offset().top
        }, 1200);
    });

    $("#nameLink").click(function() {
        $("html, body").animate({
            scrollTop: $("#section1").offset().top
        }, 1200);
    });

    //   Return to top page (show up when 300px down top)
    $(window).scroll(function() {

        if ($(this).scrollTop() < 300) {
            $('#nameLink').hide("slow");

        } else if ($(this).scrollTop() >= 300) {
            $('#nameLink').show("slow");
        }
    });

    // Carousel interval
       $('.carousel').carousel({
          interval: false
        })
});
