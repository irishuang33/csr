$(function() {
    "use strict";
    var width = $(window).width(),
        oldhtml = "";
    new WOW().init();
    //取得主文的位置
    var mainTop = $("main").offset().top;
    $("header .icon-down").click(function() {
        $("html, body").animate({
            scrollTop: mainTop
        }, 700);
    });
    if (width >= 768) {
        oldhtml += "<div class='slider__item slider__item--slice'>";
        for (var j = 0; j < 3; j++) {
            oldhtml += "<div><a href='";
            oldhtml += data[j]["link"];
            oldhtml += "' target='_blank'><img class='slider__item__img' src='";
            oldhtml += data[j]["image"];
            oldhtml += "' alt='";
            oldhtml += data[j]["title"];
            oldhtml += "'></a><div class='slider__item__body'><a href='";
            oldhtml += data[j]["link"];
            oldhtml += "' class='h3' target='_blank' data-title='";
            oldhtml += data[j]["title"];
            oldhtml += "'></a><p data-title='";
            oldhtml += data[j]["preview"];
            oldhtml += "'></p></div></div>";
        }
        oldhtml += "</div>";
        oldhtml += "<div class='slider__item slider__item--slice'>";
        for (var j = 3; j < data.length; j++) {
            oldhtml += "<div><a href='";
            oldhtml += data[j]["link"];
            oldhtml += "' target='_blank'><img class='slider__item__img' src='";
            oldhtml += data[j]["image"];
            oldhtml += "' alt='";
            oldhtml += data[j]["title"];
            oldhtml += "'></a><div class='slider__item__body'><a href='";
            oldhtml += data[j]["link"];
            oldhtml += "' class='h3' target='_blank' data-title='";
            oldhtml += data[j]["title"];
            oldhtml += "'></a><p data-title='";
            oldhtml += data[j]["preview"];
            oldhtml += "'></p></div></div>";
        }
        oldhtml += "</div>";
    } else {
        for (var j = 0; j < data.length; j++) {
            oldhtml += "<div class='slider__item slider__item--slice'><a href='";
            oldhtml += data[j]["link"];
            oldhtml += "' target='_blank'><img class='slider__item__img' src='";
            oldhtml += data[j]["image"];
            oldhtml += "' alt='";
            oldhtml += data[j]["title"];
            oldhtml += "'></a><div class='slider__item__body'><a href='";
            oldhtml += data[j]["link"];
            oldhtml += "' class='h3' target='_blank' data-title='";
            oldhtml += data[j]["title"];
            oldhtml += "'></a><p data-title='";
            oldhtml += data[j]["preview"];
            oldhtml += "'></p></div></div>";
        }
    }
    $(".slider__wrap--fill").html(oldhtml);
    // slideshow
    $(".slideshow").each(function() {
        var $slider = $(this).children(".slider"),
            $sliderCountDiv = $(this).children(".slider__count"),
            $slider_wrap = $(this).children(".slider").children(".slider__wrap"),
            $slider_dot = $(this).children(".slider__dot"),
            $slider_navi_prev = $(this).children(".slider__navi--prev"),
            $slider_navi_next = $(this).children(".slider__navi--next"),
            $slider_item = $slider_wrap.children(".slider__item"),
            slider_item_width = $slider.outerWidth(), //每張slide寬度
            slider_count = $slider_item.length,
            slider_item_index = 0, //預宣告slide為0
            index = 0,
            dot = "";
        for (var i = 0; i < slider_count; i++) {
            dot += "<li";
            if (i == 0) {
                dot += " class=\"active\"";
            }
            dot += "></li>";
        }
        $slider_dot.html(dot);
        $slider_item.first().clone().css({
            "width": slider_item_width
        }).appendTo($slider_wrap);
        $slider_wrap.css({
            "width": slider_item_width * (slider_count + 1),
        });
        $slider_item.css({
            "width": slider_item_width
        });
        console.log(slider_item_width);

        function switch_next() {
            if ($slider_wrap.is(":animated")) return;
            $slider_wrap.animate({ left: "-=" + slider_item_width }, function() {
                if (index >= slider_count - 1) {
                    index = -1;
                    $(this).css("left", 0);
                }
                index++;
                switch_item();
            });
        }

        function switch_item() {
            $slider_dot.children("li.active").removeClass();
            $slider_dot.children("li").eq(index).addClass("active");
        }

        function switch_prev() {
            if ($slider_wrap.is(":animated")) return;
            if (index <= 0) {
                index = slider_count;
                $slider_wrap.css("left", -(index * slider_item_width));
            }
            $slider_wrap.animate({ left: "+=" + slider_item_width }, function() {
                index--;
                switch_item();
            });
        }
        $slider_navi_next.click(switch_next);
        $slider_navi_prev.click(switch_prev);
        $slider_dot.children("li").click(function() {
            index = $(this).index();
            $slider_wrap.animate({ left: index * -slider_item_width }, switch_item);
        });
        if ($(this).hasClass("slideshow--autoplay")) {
            var sid = setInterval(switch_next, 3000);
            $slider.hover(function() {
                clearInterval(sid);
            }, function() {
                sid = setInterval(switch_next, 3000);
            });
        }
    })
    $('.slideshow .slider .slider__item--fullscreen .h3').each(function() {
        var num = $(this).data('title');
        if (($(this).data('title').length >= 19) && (width >= 992)) {
            $(this).text(num.substr(0, 19) + '...');
        } else if (($(this).data('title').length >= 19) && (width >= 768) && (width <= 991)) {
            $(this).text(num.substr(0, 19) + '...');
        } else if (($(this).data('title').length >= 21) && (width >= 414) && (width <= 767)) {
            $(this).text(num.substr(0, 21) + '...');
        } else if (($(this).data('title').length >= 17) && (width >= 375) && (width <= 413)) {
            $(this).text(num.substr(0, 17) + '...');
        } else if (($(this).data('title').length >= 11) && (width <= 374)) {
            $(this).text(num.substr(0, 11) + '...');
        } else {
            $(this).text(num);
        }
    });
    $('.slideshow .slider .slider__item--fullscreen p').each(function() {
        var num = $(this).data('title');
        if (($(this).data('title').length >= 71) && (width >= 992)) {
            $(this).text(num.substr(0, 71) + '...');
        } else if (($(this).data('title').length >= 47) && (width >= 768) && (width <= 991)) {
            $(this).text(num.substr(0, 47) + '...');
        } else if (($(this).data('title').length >= 47) && (width >= 414) && (width <= 767)) {
            $(this).text(num.substr(0, 47) + '...');
        } else if (($(this).data('title').length >= 25) && (width <= 413)) {
            $(this).text(num.substr(0, 25) + '...');
        } else {
            $(this).text(num);
        }
    });
    $('.slideshow .slider .slider__item--slice .h3').each(function() {
        var num = $(this).data('title');
        if (($(this).data('title').length >= 27) && (width >= 992)) {} else {
            $(this).text(num);
        }
    });
    $('.slideshow .slider .slider__item--slice p').each(function() {
        var num = $(this).data('title');
        if (($(this).data('title').length >= 45) && (width >= 992)) {
            $(this).text(num.substr(0, 45) + '...');
        } else if (($(this).data('title').length >= 74) && (width >= 768) && (width <= 991)) {
            $(this).text(num.substr(0, 74) + '...');
        } else if (($(this).data('title').length >= 62) && (width >= 414) && (width <= 767)) {
            $(this).text(num.substr(0, 62) + '...');
        } else if (($(this).data('title').length >= 53) && (width <= 413)) {
            $(this).text(num.substr(0, 53) + '...');
        } else if (($(this).data('title').length >= 44) && (width <= 374)) {
            $(this).text(num.substr(0, 44) + '...');
        } else {
            $(this).text(num);
        }
    });
    $('.video__tab li').click(function() {
        $(this).addClass('active').siblings().removeClass('active');
        var yt = $(this).data('yt');
        $('.video__player .embed-video > iframe').attr('src', 'https://www.youtube.com/embed/' + yt + '?enablejsapi=1&playsinline=1&color=white&html5=1&cc_lang_pref=tw&cc_load_policy=1');
    })
});