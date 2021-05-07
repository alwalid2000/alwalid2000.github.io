(function($){
    var typed = new Typed('span.txt-rotate', {
        strings: ["I'm a Web Developer", "I'm a Video Editor", "I'm a Project Maneger"],
        typeSpeed: 150,
        backSpeed: 150,
        fadeOut: false,
        smartBackspace: true,
        loop: true
    });

})(jQuery);

$(document).ready(function() {
    $('.certificate-wraper').isotope({
        filter: '*',
        layoutMode: 'masonry'
    });

    $('.list-filter a').click(function() {
        var selector = $(this).attr('data-filter');
        $('.list-filter a').removeClass('active');
        $(this).addClass('active');
        $('.certificate-wraper').isotope({
            filter: selector
        });
        return false;
    });

    $('.popup-image').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        gallery: {
            enabled: true,
            navigateByImgClick: true
        }

    });

});
