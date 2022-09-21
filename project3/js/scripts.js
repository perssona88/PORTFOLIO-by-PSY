$(function(){
	$('.nav > li').hover(function(){
        $('.submenu_all').stop().slideDown();
    },function(){
        $('.submenu_all').stop().slideUp();
    });

    $('.submenu_all').hover(function(){
        $('.submenu_all').stop().slideDown();
    },function(){
        $('.submenu_all').stop().slideUp();
    });
});


// ..................전체메뉴............... /


$(function(){
	var interval = 3000;
	// 3초간격 /
	
	$('.slideshow').each(function(){
		// slideshow 안에 있는요소를 반복적으로 사용 = each  /
		var container = $(this);
		function switchimg(){
			// 페이드전환 1회분 /
			var imgs = container.find('img');
			// img 요소 모두 취득 /
			var first = imgs.eq(0);
			// imgs.eq (몇번째 이미지인지)(0) (숫자는 0부터); -선두의 이미지 요소 /
			var second = imgs.eq(1);
			// -두번째의 이미지 요소 /
			
			first.appendTo(container).fadeOut();
			// 처음의 이미지요소를 페이드아웃시켜 가장 뒤로 이동 /
			second.fadeIn();
			// 두번째 이미지 요소를 페이드인 - 첫번째 자리로 /

		};
		setInterval(switchimg, interval);
		// 3초마다 (인터벌로 설정) switchimg 를 실행 /
	});
});

// sub1_box3

$(function(){
    var now = 1;
    var max = 3;
    var h = 220;
    var slide;

    slide = setInterval(function(){
        $('#slide .container > div:nth-child(1)')
        .animate({'margin-top':(h*(-1))+'px'},700,function(){
            
            $('#slide .container').append($('#slide .container > div:nth-child(1)'));
            $('#slide .container > div:nth-child(2)').css('margin-top','0px');
        });

    },2500);
});

// ------------------------------ sub1_box3//

// sub1_box5

$(function(){
    var now = 1;
    var max = 3;
    var h = 220;
    var slide;

    slide = setInterval(function(){
        $('#slide .container1 > div:nth-child(1)')
        .animate({'margin-top':(h*(-1))+'px'},700,function(){
            
            $('#slide .container1').append($('#slide .container1 > div:nth-child(1)'));
            $('#slide .container1 > div:nth-child(2)').css('margin-top','0px');
        });

    },2500);
});

// ------------------------------ sub1_box5//

// sub3_box5

$(function(){
    var now = 1;
    var max = 3;
    var h = 220;
    var slide;

    slide = setInterval(function(){
        $('#slide .container3 > div:nth-child(1)')
        .animate({'margin-top':(h*(-1))+'px'},700,function(){
            
            $('#slide .container3').append($('#slide .container3 > div:nth-child(1)'));
            $('#slide .container3 > div:nth-child(2)').css('margin-top','0px');
        });

    },2500);
});

$(function(){
    var now = 1;
    var max = 3;
    var h = 220;
    var slide;

    slide = setInterval(function(){
        $('#slide .container4 > div:nth-child(1)')
        .animate({'margin-top':(h*(-1))+'px'},700,function(){
            
            $('#slide .container4').append($('#slide .container4 > div:nth-child(1)'));
            $('#slide .container4 > div:nth-child(2)').css('margin-top','0px');
        });

    },2500);
});


// ------------------------------ sub3_box5//


// sub6_b

$(function(){
    var now = 1;
    var max = 3;
    var h = 270;
    var slide;

    slide = setInterval(function(){
        $('#slide .container5 > div:nth-child(1)')
        .animate({'margin-top':(h*(-1))+'px'},700,function(){
            
            $('#slide .container5').append($('#slide .container5 > div:nth-child(1)'));
            $('#slide .container5 > div:nth-child(2)').css('margin-top','0px');
        });

    },2500);
});


// sub6_b

