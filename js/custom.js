$(function () {
    $('.wallpaper').owlCarousel({
        loop: true,
        margin: 0,
        autoplay: true,
        autoplayTimeout: 3000,
        smartSpeed: 1000,
        nav: true,
        navText: ['<i class="fas fa-angle-left bn_pvs"></i>', '<i class="fas fa-angle-right bn_nxt"></i>'],
        responsiveClass: true,
        dots: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 1,
                nav: false
            },
            1000: {
                items: 1,
            }
        }
    });

});