$("#about").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#About").offset().top
    }, 1000);
});
$("#projects").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#Projects").offset().top
    }, 1000);
});
$("#pricing").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#Pricing").offset().top
    }, 1000);
});
$("#contact").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#Contact").offset().top
    }, 1000);
});