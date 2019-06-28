$(function() {
    $(".slider > li").last().clone().prependTo($(".slider"));
    $(".slider > li").eq(1).clone().appendTo($(".slider"));
    var $slider_item = $(".slider > li"),
        slider_item__count = $slider_item.length,
        slider_item_width = $slider_item.outerWidth(),
        index = 0;
    $(".slider").css("left", "-" + slider_item_width);

    function run() {
        if ($(".slider").is(":animated")) return;
        $(".slider").animate({ left: "-=" + slider_item_width }, function() {
            if (index >= slider_item__count - 1) {
                index = -1;
                $(this).css("left", "-" + slider_item_width);
            }
            console.log(index, (slider_item__count - 1));
            index++;
        });
    }
    var sid = setInterval(run, 3500);
    $(".slider, .prev, .next").hover(function() {
        clearInterval(sid);
    }, function() {
        sid = setInterval(run, 3500);
    });

    function back() {
        if ($(".slider").is(":animated")) return;
        if (index <= 0) {
            index = slider_item__count;
            $(".slider").css("left", index * -slider_item_width);
        }
        $(".slider").animate({ left: "+=" + slider_item_width }, function() {
            index--;
        });
    }
    $(".next").click(run);
    $(".prev").click(back);
});