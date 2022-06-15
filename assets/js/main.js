// $(document).scrollTop()

let scrolling = false;
let duration = 0;

function alignScrollSection() {
    $('.section').each(function () {
        if ($(this).offset().top <= $(document).scrollTop() && ($(this).offset().top + ($(this).height() / 2)) >= $(document).scrollTop()) {
            // if (!scrolling) {
                // scrolling = true;
                let scrollAlign = $(this).offset().top;
                $('html, body').stop().animate({
                    scrollTop: scrollAlign
                }, duration);
                console.log('ALIGN = ' + scrollAlign);
                // setTimeout(function () { scrolling = false }, 500);
            // }
        }
    });
}

function sectionScrollDown() {
    if (!scrolling) {
        scrolling = true;
        let html = $('html, body');
        let scrollTo = $(document).scrollTop() + $(window).height();
        html.stop().animate({ scrollTop: scrollTo }, duration);
        console.log('DOWN = ' + scrollTo);
        setTimeout(function () { scrolling = false; alignScrollSection() }, 500);
    }
}

function sectionScrollUp() {
    if (!scrolling) {
        scrolling = true;
        let html = $('html, body');
        let scrollTo = $(document).scrollTop() - $(window).height();
        html.stop().animate({ scrollTop: scrollTo }, duration);
        console.log('UP = ' + scrollTo);
        setTimeout(function () { scrolling = false; alignScrollSection() }, 500);
    }
}

function sectionScroll() {
    $(document).bind('DOMMouseScroll.customDOMMouseScroll mousewheel.customMousewheel', function (e) {
        // e.preventDefault();
        if (e.originalEvent.wheelDelta / 120 > 0) {
            sectionScrollUp(e);
        }
        else {
            sectionScrollDown(e);
        }
        // console.log('sectionScroll');
    });
}

(function ($) {
    $(document).ready(function () {
        alignScrollSection();
        $('.section__nav-arrows .section__prev').click(sectionScrollUp);
        $('.section__nav-arrows .section__next').click(sectionScrollDown);
        sectionScroll();
    });

    // $(document).scroll(function(){console.log($(window).scrollTop())});
})(jQuery)