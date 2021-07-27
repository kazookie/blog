/**
 * Menu action
 *
 */
$(function() {
    $("#navbar-toggle").on("click", function() {
        $("#navbar-menu").toggleClass("is-active");
    });
    $(window).on("scroll", function() {
        if($("#navbar-menu").hasClass("is-active")) {
            $("#navbar-menu").removeClass("is-active");
        }
    });
});
