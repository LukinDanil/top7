// $(document).scrollTop()

// function sectionScrollDown() {
//     let html = $('html, body');
//     let scrollTo = $(document).scrollTop() + $(window).height();
//     html
//         .stop(true)
//         .queue('fx',
//             function () {
//                 html
//                     .animate({
//                         scrollTop: scrollTo
//                     }, scrollTo)
//                     .dequeue('fx');
//                 console.log('DOWN = ' + scrollTo);
//             });
// }

function sectionScrollDown() {
    let html = $('html, body');
    let scrollTo = $(document).scrollTop() + $(window).height();
    // let scrollTo = 1000;
    html.animate({scrollTop: scrollTo});
    console.log('DOWN = ' + scrollTo);
}

function sectionScrollUp() {
    let html = $('html, body');
    // let scrollTo = $(document).scrollTop() - $(window).height();
    let scrollTo = 0;
    html
        .stop(true)
        .queue('fx',
            function () {
                html
                    .animate({
                        scrollTop: scrollTo
                    }, 300)
                    .dequeue('fx');
                console.log('UP = ' + scrollTo);
            });
}

function alignScrollSection() {
    $('.section').each(function () {
        if ($(this).offset().top <= $(document).scrollTop() && ($(this).offset().top + $(this).height()) >= $(document).scrollTop()) {
            let th = $(this);
            $('html, body')
                .stop(true)
                .queue('fx',
                    function () {
                        $('html, body')
                            .animate({
                                scrollTop: th.offset().top
                            }, 300)
                            .dequeue('fx');
                        console.log('DOWN = ' + th.offset().top);
                    });
        }
    });
}

function sectionScroll() {
    alignScrollSection();
    $('.section__nav-arrows .section__prev').click(sectionScrollUp);
    $('.section__nav-arrows .section__next').click(sectionScrollDown);

    $(document).bind('DOMMouseScroll mousewheel', function (e) {
        $(this).stop(true).dequeue('fx');
        if (e.originalEvent.wheelDelta / 120 > 0) {
            sectionScrollUp();
        }
        else {
            sectionScrollDown();
        }
    });
}

(function ($) {
    $(document).ready(function () {
        sectionScroll();
    });

    $(document).scroll(function () {
        console.log($(document).scrollTop());
    });
})(jQuery)