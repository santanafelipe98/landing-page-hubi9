$(function () {
    new Splide('#main_slider', {
        type: 'loop',
        width: '100%',
        height: '100vh',
        pagination: true,
        perPage: 1,
        autoplay: true,
        speed: 3000
    }).mount();

    new Splide('#slider_clientes', {
        type: 'loop',
        pagination: false,
        perPage: 7,
        breakpoints: {
            992: {
                perPage: 5
            },
            768: {
                perPage: 4
            },
            560: {
                perPage: 3
            }
        },
        autoplay: true,
        speed: 3000,
        arrows: false
    }).mount();
});

var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
(function () {
    var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
    s1.async = true;
    s1.src = 'https://embed.tawk.to/62b536417b967b117996419e/1g69tnsqs';
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');
    s0.parentNode.insertBefore(s1, s0);
})();

window.NuVidioId = "hubi9.comercial";
window.NuVidioConfigs = {
    fabButton: true,
}