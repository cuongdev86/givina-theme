$(document).ready(function () {
    // console.log('hello world');
    AOS.init();

    // Loader
    $('#pre_loader').removeClass('show');
    setTimeout(() => {}, 1000);

    // Menu
    if ($(window).width() < 992) {
        $('.menu-item.has-submenu > a').each(function (index) {
            $(this).on('click', function (e) {
                e.preventDefault();
                $(this).siblings('.submenu').toggleClass('show');
            });
        });
    }

    let menuMoved = false;
    let originalParent = $('.nav-menu').parent();

    $(window).on('scroll', function () {
        let scrollTop = $(this).scrollTop();

        if (scrollTop >= 210 && !menuMoved) {
            $('.nav-menu').fadeOut(200, function () {
                $(this).appendTo('#menu-after-scroll').hide(200);
            });
            $('.container-contact').hide(300);
            menuMoved = true;
        } else if (scrollTop <= 190 && menuMoved) {
            $('.nav-menu').fadeOut(200, function () {
                $(this).appendTo(originalParent).show(200);
            });
            $('.container-contact').show(100);
            menuMoved = false;
        }
    });
});

function handleClickOnSide(el) {
    $('header .nav-menu').toggleClass('show');
}

// Carousel
$(document).ready(function () {
    $('.carousel-banner').owlCarousel({
        center: true,
        items: 3,
        loop: true,
        margin: 10,
        dots: true,
        nav: false,
        autoplay: true,
        autoplayTimeout: 3000,
        onInitialized: function () {
            AOS.refresh();
        }
    });

    $('.carousel-prolist.owl-carousel').owlCarousel({
        items: 4,
        loop: true,
        dots: true,
        nav: true,
        navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],

        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,

        responsive: {
            0: {
                items: 2,
                margin: 10
            },

            768: {
                items: 3,
                margin: 20
            },
            1280: {
                items: 4,
                margin: 30
            }
        },
        onInitialized: function () {
            AOS.refresh();
        }
    });
});

$(document).ready(function () {
    lightGallery(document.getElementById('lightgallery'), {
        plugins: [lgThumbnail, lgZoom],
        speed: 400,
        download: false,
        thumbnail: true,
        allowMediaOverlap: true,
        toggleThumb: true,
        zoom: true,
        licenseKey: '0000-0000-000-0000',
        selector: 'a'
    });
});
