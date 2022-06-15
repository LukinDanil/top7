// $(document).scrollTop()

let scrolling = false;
let duration = 0;
let screen = 0;

function sectionsInit() {
    $('.section').each(function (index) {
        $(this).attr('data-screen-index', index);
    });

    if (!scrolling) {
        scrolling = true;
        let html = $('html, body');
        let scrollTo = $(`[data-screen-index='${screen}']`).offset().top;
        clearActiveScreen();
        $(`[data-screen-index='${screen}']`).addClass('active');
        html.stop().animate({ scrollTop: scrollTo }, duration);
        setTimeout(function () { scrolling = false; }, 500);
    }
};

function clearActiveScreen() {
    $(`[data-screen-index]`).each(function () {
        $(this).removeAttr('active');
    });
}

function sectionScrollDown() {
    if (!scrolling) {
        scrolling = true;
        if ($('[data-screen-index]').length - 1 > screen) {screen++}
        let html = $('html, body');
        let scrollTo = $(`[data-screen-index='${screen}']`).offset().top;
        clearActiveScreen();
        $(`[data-screen-index='${screen}']`).addClass('active');
        html.queue(function(){
            $(this).animate({ scrollTop: scrollTo }, duration).dequeue();
        });
        console.log('screen = ' + screen);
        setTimeout(function () { scrolling = false; }, 500);
    }
}

function sectionScrollUp() {
    if (!scrolling) {
        scrolling = true;
        if (screen > 0) {screen--}
        let html = $('html, body');
        let scrollTo = $(`[data-screen-index='${screen}']`).offset().top;
        clearActiveScreen();
        $(`[data-screen-index='${screen}']`).addClass('active');
        html.queue(function(){
            $(this).animate({ scrollTop: scrollTo }, duration).dequeue();
        });
        console.log('screen = ' + screen);
        setTimeout(function () { scrolling = false; }, 500);
    }
}

function sectionScroll() {
    $(document).bind('DOMMouseScroll.customDOMMouseScroll mousewheel.customMousewheel', function (e) {
        if (e.originalEvent.wheelDelta / 120 > 0) {
            sectionScrollUp(e);
        }
        else {
            sectionScrollDown(e);
        }
    });
}

(function ($) {
    $(document).ready(function () {
        sectionsInit();
        // alignScrollSection();
        $('.section__nav-arrows .section__prev').click(sectionScrollUp);
        $('.section__nav-arrows .section__next').click(sectionScrollDown);
        sectionScroll();
    });

    // $(document).scroll(function(){console.log($(window).scrollTop())});
})(jQuery)