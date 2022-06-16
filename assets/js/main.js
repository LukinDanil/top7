function pad(str, max) {
    str = str.toString();
    return str.length < max ? pad("0" + str, max) : str;
}

(function ($) {

    $('.slider').on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        $(this).parents('.slider__wrap').find('.slider__count').text(pad(slick.slideCount, 2));
        $(this).parents('.slider__wrap').find('.slider__number').text(pad((slick.currentSlide + 1), 2));
    });

    $('.section__cover .slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        arrows: false,
        dots: false,
        infinite: true,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                }
            }
        ]
    });
    $('.section__our-works .slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        arrows: false,
        dots: false,
    });

    $('.slider__next').click(function (e) {
        e.preventDefault();
        let index = $(this).parents('.slider__wrap').find('.slider').slick('slickCurrentSlide') + 1;
        $(this).parents('.slider__wrap').find('.slider').slick('slickGoTo', index);
    });

    $('.slider__prev').click(function (e) {
        e.preventDefault();
        let index = $(this).parents('.slider__wrap').find('.slider').slick('slickCurrentSlide') - 1;
        $(this).parents('.slider__wrap').find('.slider').slick('slickGoTo', index);
    });

    $('.tasks__item').click(function (e) {
        e.preventDefault();
        $('.tasks__item').each(function () {
            $(this).removeClass('active');
        });
        $('.tasks__window-item').each(function () {
            $(this).removeClass('active');
        });

        $(this).addClass('active');
        $('.tasks__window-item').eq($(this).index()).addClass('active');
    });

    $('label.form__text input').on('change', function () {
        if ($(this).val().length > 0) {
            $(this).parent().addClass('focus');
        } else {
            $(this).parent().removeClass('focus');
        }
    });

    $('.our-team__department-item').click(function (e) {
        e.preventDefault();
        $('.our-team__department-item').each(function () {
            $(this).removeClass('active');
        });
        $(this).addClass('active');
    });
})(jQuery)