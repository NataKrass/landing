function niceScrollInit() {
    $("html").niceScroll({
        scrollspeed: 60,
        mousescrollstep: 45,
        cursorwidth: 10,
        cursorborder: 0,
        cursorcolor: "#ffc000",
        cursorborderradius: 2,
        autohidemode: !1,
        horizrailenabled: !1
    }), $("html").addClass("no-overflow-y")
}
$(document).ready(function () {
    $(".scroll").on("click", function () {
        var e = $(this).data("scroll"), t = $(e).offset().top;
        $("html, body").stop().animate({scrollTop: t + "px"}, 1100, "easeInOutExpo"), $(".main-nav ul").removeClass("active"), event.preventDefault()
    }), $(".nav-bars").on("click", function () {
        $(".main-nav ul").toggleClass("active")
    }), $(".tooltipster").tooltipster({
        theme: "tooltipster-shadow",
        maxWidth: 275
    }), $(".promo-title-slider").length && $(".promo-title-slider").slick({
        dots: !1,
        arrows: !1,
        infinite: !0,
        autoplay: !0,
        autoplaySpeed: 3500,
        fade: !0,
        pauseOnFocus: !1,
        pauseOnHover: !1
    }), $(".work-slider").length && $(".work-slider").slick({
        dots: !1,
        arrows: !1,
        infinite: !0,
        adaptiveHeight: !0,
        fade: !0
    }), $(".reviews-slide").on("click", function () {
        $(".reviews-list").slick("slickNext")
    }), $(".yourself-content").length && $(".yourself-content").slick({
        dots: !1,
        arrows: !1,
        fade: !0,
        draggabl: !1,
        swipe: !1,
        adaptiveHeight: !0
    }), $(".work-link-item a").on("click", function () {
        var e = $(this).closest(".work-link-item");
        e.hasClass("active") || ($(".work-slider").slick("slickGoTo", e.index()), $(".work-link-item").removeClass("active"), e.addClass("active"), $(".work .small-btn").data("type", e.data("type")), $(".work .small-btn").text(e.data("btn")), !0 === e.data("visible") ? $(".work .small-btn").removeClass("disabled") : $(".work .small-btn").addClass("disabled"))
    }), $(".filter-links a").on("click", function () {
        $(this).hasClass("active") || ($(".filter-links a").removeClass("active"), $(this).addClass("active"), $(".portfolio-list .row").isotope({filter: $(this).data("filter")}), $(".portfolio .actions-wrap").slideDown())
    }), $(".all-portfolio").on("click", function () {
        $(".filter-links a").removeClass("active"), $(".portfolio-list .row").isotope({filter: "*"}), $(".portfolio .actions-wrap").slideUp()
    }), $(".services-slide").on("click", function () {
        $(".services-slider").slick("slickNext")
    }), $(".yourself-link").on("click", function () {
        $(this).hasClass("active") || ($(".yourself-link").removeClass("active"), $(this).addClass("active"), $(".yourself-content").slick("slickGoTo", $(this).index()))
    }), $(".fancybox").length && $(".fancybox").fancybox({
        helpers: {overlay: {locked: !1}},
        openEffect: "none",
        closeEffect: "none",
        padding: 0
    }), $(".modal-open").fancybox({
        autoSize: !0,
        type: "inline",
        closeBtn: !1,
        padding: 0,
        scrolling: "visible",
        fixed: !1,
        autoCenter: !1,
        beforeShow: function () {
            $("input").removeClass("incorrect"), $('input[type="text"]').val(""), $("textarea").val(""), $(".fancybox-skin").css("background-color", "transparent"), this.element.hasClass("order-link") && ($("#order-modal .send").text(this.element.data("btn")), $("#order-modal .custom-modal-title").html(this.element.data("title")), $("#order-modal .custom-modal-subtitle").html(this.element.data("subtitle")), $('#order-modal [name="type"]').val(this.element.data("type")), $('#order-modal [name="from"]').val(this.element.data("from")))
        },
        afterShow: function () {
        },
        beforeClose: function () {
        },
        afterClose: function () {
        }
    }).click(function () {
        $(this).data("from")
    }), $(".modal-close, .close-modal").click(function () {
        return $.fancybox.close(), !1
    }), $("body").on("click", ".send", function () {
        $(this).parents("form").submit()
    }), $("form").submit(function () {
        return $(this).isCorrectRequest(), !1
    }), /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? $("body").addClass("mobile") : niceScrollInit(), new WOW({
        animateClass: "animated",
        mobile: !1,
        offset: 200,
        callback: function (e) {
            console.log("WOW: animating <" + e.tagName.toLowerCase() + ">")
        }
    }).init()
}), $(window).on("scroll", function () {
    $(window).outerHeight(), $(this).scrollTop() > $(".promo").height() ? $(".main-nav:not(.blog-nav)").addClass("active") : $(".main-nav:not(.blog-nav)").removeClass("active")
}), $(window).on("load", function () {
    $(".portfolio-list").length && ($(".portfolio-list .row").isotope({
        itemSelector: ".portfolio-item",
        masonry: {columnWidth: ".portfolio-item"}
    }), $('[data-filter=".top-item"]').trigger("click"))
}), $(window).on("resize", function () {
    $(window).outerHeight()
}), $("input[name='phone']").mask("+99 (999) 999-99-99"), function (e) {
    e.fn.isCorrectRequest = function () {
        this.find("input[type=text]").removeClass("correct incorrect");
        var t = e(this).find('[name = "name"]'), o = e(this).find('[name = "phone"]'), i = e(this).find('[name = "email"]');
        if (t.val(e.trim(t.val())), o.val(e.trim(o.val())), i.val(e.trim(i.val())), void 0 != t.val() && 0 === t.val().length)return t.addClass("incorrect"), t.focus(), !1;
        if (void 0 != i.val()) {
            var l = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
            if (0 === i.val().length || 0 == l.test(i.val()))return i.addClass("incorrect"), i.focus(), !1
        }
        if (void 0 != o.val() && 0 === o.val().length)return o.addClass("incorrect"), o.focus(), !1;
        var s = e(this), a = new FormData(e(this)[0]), n = s.attr("action");
        e.ajax({
            type: "POST",
            url: n,
            data: a,
            cache: !1,
            contentType: !1,
            processData: !1,
            async: !1,
            success: function (t) {
                e("input").removeClass("incorrect"), e('input[type="text"]').val(""), window.location.href = "http://landing.ua/thanks/"
            },
            error: function (e) {
                alert("Ошибка отправки данных. Попробуйте еще раз.")
            }
        })
    }
}(jQuery), jQuery(function (e) {
    e("#load-more").click(function (t) {
        t.preventDefault(), e(this).text("Загрузка...");
        var o = {action: "loadmore", query: true_posts, page: current_page};
        e.ajax({
            url: ajaxurl, data: o, type: "POST", success: function (t) {
                console.log(t), t ? (e("#load-more").text("Загрузить ещё"), e(".blog-grid").append(t), ++current_page == max_pages && e("#load-more").remove()) : e("#load-more").remove()
            }
        })
    })
}), $(".types-content").length && $(".types-contents").slick({
    dots: !1,
    arrows: !1,
    fade: !0,
    draggabl: !1,
    swipe: !1,
    adaptiveHeight: !0
}), $(".cases-content").length && $(".cases-contents").slick({
    dots: !1,
    arrows: !1,
    fade: !0,
    draggabl: !1,
    swipe: !1,
    adaptiveHeight: !0
}), $(document).ready(function () {
    $('body').append('<a href="#" id="go-top" title="Вверх"></a>');
    $(".loader").removeClass("active")
});
$(".services-slider").length && $(".services-slider").slick(
    {
        dots: !1,
        arrows: !1,
        infinite: !0,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    adaptiveHeight: !0,
                    dots: true,
                }
            }
        ]
    })
$(".reviews-list").length && $(".reviews-list").slick({
    dots: !1,
    arrows: !1,
    infinite: !0,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [{
        breakpoint: 992,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        },
        breakpoint: 767,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
        }
    }]
})


$(function () {
    $.fn.scrollToTop = function () {
        $(this).hide().removeAttr("href");
        if ($(window).scrollTop() >= "250") $(this).fadeIn("slow")
        var scrollDiv = $(this);
        $(window).scroll(function () {
            if ($(window).scrollTop() <= "250") $(scrollDiv).fadeOut("slow")
            else $(scrollDiv).fadeIn("slow")
        });
        $(this).click(function () {
            $("html, body").animate({scrollTop: 0}, "slow")
        })
    }
});

$(".types-link").on("click", function () {
    if ($(window).width() > 767) {
        $(this).hasClass("active") || (
            $(".types-link").removeClass("active"),
                $(this).addClass("active"),
                $(".types-contents").slick("slickGoTo", $(this).index())
        )
    } else {
        $(this).hasClass("active") || (
            $(".types-link").removeClass("active"),
                $(this).addClass("active"),
                $(".types-contents").slick("slickGoTo", $(this).index()),
                scrollID = $('#types-contents').offset().top,
                $("html, body").animate({scrollTop: scrollID - 60}, 500)
        )
    }
})

$(".cases-link").on("click", function () {
    if ($(window).width() > 767) {
        $(this).hasClass("active") || (
            $(".cases-link").removeClass("active"),
                $(this).addClass("active"),
                $(".cases-contents").slick("slickGoTo", $(this).index())
        )
    } else {
        $(this).hasClass("active") || (
            $(".cases-link").removeClass("active"),
                $(this).addClass("active"),
                $(".cases-contents").slick("slickGoTo", $(this).index()),
                scrollID = $('#cases-contents').offset().top,
                $("html, body").animate({scrollTop: scrollID - 60}, 500)
        )
    }
})

$(function () {
    $("#go-top").scrollToTop();
});