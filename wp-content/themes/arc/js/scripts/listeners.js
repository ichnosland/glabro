jQuery(document).ready(function() {
    //////////////////////////////////////////////////////////////

    /// play youtube video on hero single page

    jQuery(".js-video").click(function(e) {
        jQuery(this).removeClass("video");
        var iframe = jQuery(this).find("iframe");
        iframe.addClass("active");
        iframe[0].src += "?autoplay=1";
    });

    //////////////////////////////////////////////////////////////

    /// flip card on author avatar click
    jQuery(".js-author-info").click(function(e) {
        e.preventDefault();
        console.log("author");
        var authorID = jQuery(this).data("author");
        jQuery(this)
            .closest(".flip-container")
            .addClass("flip");
    });

    jQuery(".js-close-info").click(function(e) {
        e.preventDefault();
        console.log("author");
        var authorID = jQuery(this).data("author");
        jQuery(this)
            .closest(".flip-container")
            .removeClass("flip");
    });

    //////////////////////////////////////////////////////////////

    /// related gallery
    jQuery("#related").flickity({
        // options
        resize: true,
        cellAlign: "left",
        contain: true
    });
});