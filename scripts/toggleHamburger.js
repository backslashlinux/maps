jQuery(document).ready(function () {
    jQuery("#hamburger").click(function () {
        jQuery("#sidebar").toggle("slide");
        jQuery('ham').toggleClass("fa-bars");
        jQuery('ham').toggleClass("fa-arrow-left");
    });
});