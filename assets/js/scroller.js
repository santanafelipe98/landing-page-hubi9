$(function(){
    const scroller = $('#side_scroller');

    $(window).on('scroll', function() {
        const MAX_TOP = 500;
        const scrollTop = $(window).scrollTop();
        
        if (scrollTop >= MAX_TOP)
            scroller.show(500);
        else
            scroller.hide(500);
    });
});