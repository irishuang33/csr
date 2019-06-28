$(function() {
    "use strict";
    var width = $(window).width(),
        height = $(window).height(),
        container = $(".container").outerWidth(),
        slider_start = -(container - ((width - container) / 2)),
        $slider = $(".slider"),
        $slider_wrap = $(".slider__wrap"),
        $slider_item = $(".slider > li"),
        slider_item_width = $slider_item.outerWidth(), //每張slide寬度
        slider_item_height = $slider_item.outerHeight(), //每張slide高度
        slider_item_index = 0, //預宣告slide為0
        slider_count = $slider_item.length; //計算slide數量
    $slider_item.first().clone().appendTo($slider);
    $slider_item.last().clone().prependTo($slider);
    $slider_wrap.css({
        // "left": slider_start,
        "width": slider_item_width * (slider_count + 2)
    });
    console.log(slider_item_width);
    if (slider_count > 1) {
        setInterval(function() {
            if (slider_item_index != $slider_item.length - 1) {
                slider_item_index++;
            } else {
                slider_item_index = 0;
            }
            switch_slider();
            console.log(slider_item_index, (slider_count - 1));
        }, 5000)
    }

    function switch_slider() {
        $slider_item.eq(slider_item_index).addClass('active').siblings().removeClass('active');
        $slider_wrap.animate({
            // "left": slider_start - (container * slider_item_index)
        }, 500);
        if (slider_item_index >= (slider_count - 1)) {
            slider_item_index = -1;
            // $slider_wrap.css("left", slider_start);
        }
    }
});