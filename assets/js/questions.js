$(function() {
    const answerHeader = $('.question-header')
    answerHeader.on('click', function() {
        const $this = $(this);
        const parent = $this.parent();

        const answer = parent.children('.answer-wrapper');
        const btn    = $this.children('.btn-collapse');

        if (answer.hasClass('hidden')) {
            answer.removeClass('hidden');
            btn.html('<i class="icon fa-solid fa-angle-down"></i>');
        } else {
            answer.addClass('hidden');
            btn.html('<i class="icon fa-solid fa-angle-right"></i>');
        }
    })
})