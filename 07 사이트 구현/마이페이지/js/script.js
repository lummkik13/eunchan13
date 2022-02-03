$(document).ready(function(){
	
    var date  = new Date();
    var selYear = date.getFullYear();
    getYears(selYear);
    $('.year').val(selYear);
    $('.year').change(function(){
        var chgYear = $(this).val();
        getYears(chgYear);
        $('.year').val(chgYear);
    });
});
function getYears(getY){
    $("#year option").remove();
    var stY = Number(getY)-3;
    var enY = Number(getY);
    for(var y = stY; y <= enY; y++){
        $('.year').append("<option value='"+ y + "'>"+y + "년" + "</option>");
    }
}

$(document).ready(function(){
	var now = new Date();
    var year = now.getFullYear();
    var mon = (now.getMonth()  + 1) > 9 ? '' + (now.getMonth()+1) : '0'+(now.getMonth() + 1);
    var day = (now.getDate()) > 9 ? ''+(now.getDate()) : '0'+(now.getDate());

    for(var i=1; i <= 12; i++){
        var mm = i > 9 ? i : "0" + i ;
        $('.month').append('<option value="' + mm + '">' + mm + '월</option>');
    }

    for(var i=1; i <=31; i++){
        var dd = i > 9 ? i : "0"+i ;
        $('.day').append('<option value="'+dd+'">'+dd+'일</option>');
    }
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