$(window).scroll(function() {

    let documentHeight = $(document).height()
    let contactHeight = $("#Contact").height()
    let windowHeight = $(window).scrollTop()

    let total = windowHeight + contactHeight

    let percentage = total / documentHeight * 100

    if (percentage < 30) {
        console.log("About")
        $("#about").css("background", "#444444")
        $("#projects").css("background", "none")
        $("#pricing").css("background", "none")
        $("#contact").css("background", "none")
    } else if (percentage >= 30 && percentage < 55) {
        console.log("Projects")
        $("#about").css("background", "none")
        $("#projects").css("background", "#444444")
        $("#pricing").css("background", "none")
        $("#contact").css("background", "none")
    } else if (percentage >= 55 && percentage < 80) {
        console.log("Pricing")
        $("#about").css("background", "none")
        $("#projects").css("background", "none")
        $("#pricing").css("background", "#444444")
        $("#contact").css("background", "none")
    } else if (percentage >= 80) {
        console.log("Contact")
        $("#about").css("background", "none")
        $("#projects").css("background", "none")
        $("#pricing").css("background", "none")
        $("#contact").css("background", "#444444")
    }
})

$(".button1").click(function() {
    if ($(this).html() == "about") {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#About").offset().top
        }, 1000);
    } else if ($(this).html() == "projects") {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#Projects").offset().top
        }, 1000);
    } else if ($(this).html() == "pricing") {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#Pricing").offset().top
        }, 1000);
    } else if ($(this).html() == "contact") {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#Contact").offset().top
        }, 1000);
    }
})