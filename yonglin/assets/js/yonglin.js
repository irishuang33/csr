$(function() {
	"use strict";
	var width = $(window).width(),
		height = $(window).height();
	var swiper = new Swiper('#swiper .swiper-container', {
		spaceBetween: 0,
		effect: 'fade',
		pagination: {
			el: '#swiper .swiper-pagination',
			clickable: true,
		},
		autoplay: {
			delay: 5000,
		}
	});
	$(".lightbox").hide();
	$(".embed-16by9").on("click", function(){
		var url = $(this).attr("data-videoUrl");
		$(".lightbox .embed-16by9 iframe").attr("src", url);
		$(".lightbox").css({"display": "flex"});
		console.log(url);
	});
	$(".lightbox .sketch-close, .lightbox .black").on("click", function(){
		$(".lightbox").fadeOut();
		$(".lightbox .embed-16by9 iframe").attr("src", "");
	});
	$(window).scroll(function () {
		var scroTop = $(window).scrollTop();
		if (scroTop > (height / 2) ) {
			$('nav').addClass('scroll');
		} else {
			$('nav').removeClass('scroll');
		}
	});
});