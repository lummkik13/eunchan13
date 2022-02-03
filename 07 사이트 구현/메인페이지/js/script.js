var myFullpage = new fullpage('#fullpage', {
    anchors: ['', '', '', '', ''],
    sectionsColor: ['#FFFF99', '#FFFFCC', '#B3E2E7', '#CBD2DB', '#FFFFEE' ],
    navigation: false,
    navigationPosition: 'left',
	autoScrolling:true,
	loopHorizontal:true,
	slidesNavigation:true,
	responsiveWidth: 1024
});

$(document).ready(function(){
	$(".gnb>li").hover(function(){
		$(this).children(".sub_gnb").stop().slideDown(400);
	},function(){
		$(this).children(".sub_gnb").stop().slideUp(200);
	});
});

$(document).ready(function(){
	$(".mobile_btn").click(function(){
		$(".gnb, .util").fadeToggle(200);
		$(this).toggleClass("menuAni");
	})
});