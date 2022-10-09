// Escurece o cabeçalho ao rolar a página 

function menuOpacity() {
    const navbar = $('#navbar');

    let top =  $(window).scrollTop();
    let alpha = Math.min(300, top / 300);

    navbar.css('background-color', `rgba(17, 17, 17, ${alpha})`);

    if (alpha >= 1)
        navbar.css('border-bottom', 'none');
    else
        navbar.css('border-bottom', '1px solid rgba(255, 255, 255, .1)');
}

function responsive(width) {
    const BREAKPOINT = 1200

    if (width >= BREAKPOINT) {
        const toggle = $('.btn-toggle');
        const icon   = toggle.children('.icon');
        const target = $(toggle.data('target'));

        toggle.removeClass(' open');
        target.removeClass('active');
        icon.removeClass('fa-xmark');
        icon.addClass('fa-bars');
    }
}

$(function() {
    const width = $(window).innerWidth();
    responsive(width);
    menuOpacity();
});

$(window).on('resize', function() {
    let width = $(this).innerWidth();
    responsive(width);
});

$(window).on('scroll', menuOpacity);

// Botão do menu responsivo

$('.btn-toggle').on('click', function() {
    const $this = $(this);
    const target = $($this.data('target'));
    target.toggleClass('active');

    const icon = $this.children('.icon');

    if ($this.hasClass('open')) {
        $this.removeClass('open');
        icon.addClass('fa-bars');
        icon.removeClass('fa-xmark');
    } else {
        $this.addClass('open');
        icon.removeClass('fa-bars');
        icon.addClass('fa-xmark');
    }
});