$(document).ready(() => {
    AOS.init();

    $('#slick').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
    });
})