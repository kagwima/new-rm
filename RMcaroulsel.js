$('#patners-logo').owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    autoplay: 0,
    responsive: {
        0: {
            items: 1,
            nav: true
        },
        360: {
            items: 1,
            nav: true
        },
        768: {
            items: 2,
            nav: false
        },
        1024: {
            items: 3,
            nav: true,
            loop: true
        }
    }
})