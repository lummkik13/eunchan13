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


	$(".question").click(function(){
		$(this).childrens(".answer").stop().slideDown(400);
	},function(){
		$(this).childrens(".answer").stop().slideUp(200);
	});