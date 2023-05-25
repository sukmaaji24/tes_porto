$('.variable-width').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [{
            breakpoint: 991,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                variableWidth: true,
            },
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                variableWidth: true,
            },
        },
        {
            breakpoint: 320,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
});

$(document).ready(function () {
    $(".about-me").mouseenter(function () {
        $("#lineLt").addClass("line-title-active")
    });
    $(".about-me").mouseleave(function () {
        $("#lineLt").removeClass("line-title-active")
    });

    $(".skill").mouseenter(function () {
        $("#lineSk").addClass("line-title-active")
    });
    $(".skill").mouseleave(function () {
        $("#lineSk").removeClass("line-title-active")
    });

    $(".portofolio").mouseenter(function () {
        $("#lineP").addClass("line-title-active")
    });
    $(".portofolio").mouseleave(function () {
        $("#lineP").removeClass("line-title-active")
    });

    $(".contact").mouseenter(function () {
        $("#lineC").addClass("line-title-active")
    });
    $(".contact").mouseleave(function () {
        $("#lineC").removeClass("line-title-active")
    });
});