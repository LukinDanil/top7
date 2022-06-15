function slidescreen() {
    h = $(window).height();
    $(".section1").css('height', h);
};

var num = 1;
var scrolling = false;

function scroll(event) {
    event.preventDefault();
    if (!scrolling) {
        scrolling = true;
        if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
            num--;
            num = num < 1 ? 1 : num;
        } else {
            num++;
            num = num > $(".section").length ? $(".section").length : num;
        }

        console.log(`.section[data-screen-index="${num}"]`);
        $('html, body').animate({
            scrollTop: $(`.section[data-screen-index="${num}"]`).offset().top
        }, 500, "linear", function () {
            scrolling = false;
        });
    }
}

function sectionScrollInit() {
    $('.section').each(function (index) {
        $(this).attr('data-screen-index', index + 1);
    });

    $(window).resize(slidescreen);
    $(document).ready(slidescreen);
    $(document).bind('mousewheel DOMMouseScroll', function (event) {
        scroll(event);
    });
}