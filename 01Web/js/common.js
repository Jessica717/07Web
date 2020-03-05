/**

 * Created by tanytree on 2016/03/01.

 */
window.onbeforeunload = function(event){
    console.log("页面刷新了吗")
};
$(function(){
    //四周年banner
    if(JudgeTime()){
		
		var actWindowStrVar = "";
			actWindowStrVar += "<section class=\"actWindow\" style=\"background-color:#000;left:0;right:0;bottom:0;opacity:.8;position:fixed;top:0;z-index:2000;filter:alpha(opacity=80);-moz-opacity:.8;-khtml-opacity:.8;display:block;z-index:1000;width:100%\"><div class=\"thisActMod\" style=\"position:fixed;width:629px;height:390px;top:50%;left:50%;margin-left:-315px;margin-top:-195px\"><em class=\"pa\" onclick=\"$(&quot;.actWindow&quot;).hide()\" style=\"right:0;top:0;width:37px;height:37px;display:block;position:absolute;cursor:pointer;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAlCAMAAADyQNAxAAAAw1BMVEUcHBwAAAD///8nJyf///8eHh45OTlRUVFdXV2SkpK0tLSwsLDb29vZ2dn+/v7///////////////////////////////////9KSkr7+/v19fWDg4M0NDQoKChJSUn////////y8vKhoaH////4+Pjq6urW1tbBwcG+vr6jo6OSkpJ6enpiYmJSUlJCQkIlJSVMTEz////////9/f3m5ubi4uLd3d3a2tpra2tmZmZYWFg4ODjt7e3Kysqenp6YmJj///+o9GcmAAAAQHRSTlPUAMXTttXS0dDMysrIyMW6qpeJZFssIxrc/v3m2NbRbT/8y3D9+vby8ezp5ODd2tbRa0D++fn49+Hg3tn79OvpiJfuYQAAAadJREFUOMuVlNdyg0AMRWXh3rsxDrZxiXtN4hKn6P+/KloWIiCZwT4vDOKOdCW0C4kgrWa9WsFKtd5sheIBVWeQRCE56PyjatcwSq0dVQ3dPKVcNm2Akc7mSm6+Y1jV4Fg53wehny9zrBFUjTlQzECYTJGjY1GpTAUDohgFPxsoT/wySsFfUiP+MtSqdpIziSgk42zJtquqsScpFynK3mpK1eHuxHiUDHfaYdUBMa8jtg2C3dPPPOKBVexqr03MzzfweXqmJSj27CwBLZ44uHwRTU3QbN+ISL+UEFvQRMyBy6pLZF1BsfkgevFK5hCbUEfMgmbteN/WFtHkAposYh2qiGnwMF+JaJFSSZ13P5hGrEIF0Qh6JjqRGGQMxAogIgi7OSlONxBY4eUSmWquq8tJLvHlYn+SwloDBH25PYqvM0tmFmdTrUqPMi9mq3pcgjl1WwWZV2D2sHE4ycpvdb4Dmb36j31dTs3yqu3NVOXAf0wMfndiSc7GX78FTUzZidB+fW+ltd5F9uvuXY3f+3vO0PGB8xh/tuPviXvvnPj76/G7MP5e/QHdTi2w8g/BFgAAAABJRU5ErkJggg==) no-repeat\"><\/em> <a href=\"http://www.pigcms.com/special/years4/\" target=\"_blank\" style=\"display:block;height:100%;width:100%;background:url(https://pigmcsdotcom.pigcms.com/statics/images/www/banner/actwindow.png) no-repeat\"><\/a><\/div><\/section>\n";
        //$('body').append(actWindowStrVar);
		
        var strVar = "";
        strVar += "<li class=\"year4\" style=\"background: url('http://static.pigcms.com/ds/statics/images/wei/banner/year4-1.png') no-repeat 100% 100%\"> <a href=\"http://www.pigcms.com/special/years4/\" target=\"_blank\"><div class=\"w1120 pr\" style=\"height: 100%\"><img src=\"http://static.pigcms.com/ds/statics/images/wei/banner/year4-2.png\" style=\"top: 50%;left:50%;margin-top: -144px;margin-left: -365px;position: absolute\"><\/div><\/a><\/li>\n";
        $('.banner .flashBox ul').prepend(strVar);

        var strVars = "";
        strVars += "<aside class=\"asideBanner\"><div class=\"asideBannerIcon\"><\/div><section class=\"foorterBanner\" style=\"\"><div class=\"width1200\"><i><\/i> <input type=\"text\" name=\"phoneNum\" placeholder=\"留下联系方式 立即预约折扣 \"> <button id=\"yuyue\"><\/button> <a href=\"http://crm2.qq.com/page/portalpage/wpa.php?uin=800022936&aty=0&a=0&curl=&ty=1\" target=\"_blank\" class=\"a2\"><em><\/em>在线咨询<\/a> <a href=\"http://www.pigcms.com/special/years4/\" target=\"_blank\" class=\"a3\"><em><\/em>活动详情<\/a><\/div><\/section><\/aside>\n";
        $("body").append(strVars);
        ;(function footBanner(){
            var width = $(window).width();
            $('.foorterBanner').css({ 'left': -width, 'width': width,'display':'block'});
            $('.asideBannerIcon').click(function(event) {
                $(this).animate({
                    'left': '-100%'
                });

                $('.foorterBanner').animate({
                    'left': '0',
                    'width': width
                }, 300);
            });
            $('.foorterBanner div>i').click(function(event) {
                $('.foorterBanner').animate({
                    'left': '-' + width
                });
                $('.asideBanner').css('width', '2%');
                $('.asideBannerIcon').animate({
                    'left': '0'
                }, 300);
            });
        })();
    }

});

function loadImage(url, callback) {
    var img = new Image(); //创建一个Image对象，实现图片的预下载
    img.src = url;
    if (img.complete) { // 如果图片已经存在于浏览器缓存，直接调用回调函数
        callback.call(img);
        return; // 直接返回，不用再处理onload事件
    }
    img.onload = function () { //图片下载完毕时异步调用callback函数。
        callback.call(img);//将回调函数的this替换为Image对象
    };
};


function imgName(){
    console.log(this)
}
function qrDownWindow(imgurl){
    var html=$('<div class="qrWindow"> <div class="qrMain"> <h3>请扫描下面二维码下载</h3> <img class="qrCode" src="'+imgurl+'" alt="qr"/> <a class="xClosed" href="javascript:;" onclick="$(this).parent().parent().remove()"></a> </div> </div>');
    $('body').append(html);
}

$(function(){
    loadImage('http://static.pigcms.com/statics/images/wei/icons.png',imgName);
    // 页面初始化
    $('body,html').animate({
        scrollTop:0
    }, 10);
    bigScroll();//调用轮播图方法


    $(window).scroll(function() {
        if ($(window).scrollTop() > 0) {

            $("#fixedNav").addClass('fixedStyle');

            //$(".singleBanner").css('margin-top','20px');

        }

        else {

            $("#fixedNav").removeClass('fixedStyle');

			//$(".singleBanner").css('margin-top','-20px');
            //$(".singleBanner").css('margin-top','-52px');


        }

    });



    $(window).scroll(function() {

        if ($(window).scrollTop() > 200) {

            $(".backTop").css('display','block');

        }

        else {

            $(".backTop").fadeOut(500);

        }

    });

    $(".backTop").click(function() {

        $('body,html').animate({

                scrollTop: 0

            },

            500);

        return false;

    });
    $(".navAndLogo .returnTop").click(function() {

        $('body,html').animate({

                scrollTop: 0

            },

            500);
        $(this).addClass('on').siblings().removeClass('on');
        return false;

    });





    $(".navAndLogo .bigNav ul li").hover(function(){

        $(".navAndLogo .bigNav ul li").removeClass('hover');

        $(".subNav").find(".row").hide();

        if($(this).hasClass("fx")){

            $(this).addClass('hover');

            $(".subNav").slideDown();

            $(".subNav").find(".row").eq(0).show();

        }else if($(this).hasClass("product")){

            $(this).addClass('hover');

            $(".subNav").slideDown();

            $(".subNav").find(".row").eq(1).show();

        }else if($(this).hasClass("about")){

            $(this).addClass('hover');

            $(".subNav").slideDown();

            $(".subNav").find(".row").eq(2).show();

        }else{

            $(".subNav").slideUp();

        }

    });



    $(".subNav").mouseleave(function(){

        $(".navAndLogo .bigNav ul li").removeClass('hover');

        $(".subNav").slideUp();

        $(".subNav").find(".row").hide();

    });





    myFun.tab(".modTab");

    myFun.tabFade(".singleTab");

    myFun.tabFade(".whyTab");
    myFun.tabFade(".proTabThis");




    /***内页面banner按钮**/



    $(".morePlan").click(function(){

        if($(document).hasClass(".minNav")){

            $('body,html').animate({

                    scrollTop:($(".footMod2Style").offset().top)-300

                },

                500);

        }else{

            $('body,html').animate({

                    scrollTop:($(".footMod2Style").offset().top)-150

                },

                500);

        }

        return false;

    });

	

	

	/***导航解决方案**/



    $(".navSpecial").click(function(){

        if($(document).hasClass(".minNav")){

            $('body,html').animate({

                    scrollTop:($(".contentSpecial").offset().top)-300

                },

                500);

        }else{

            $('body,html').animate({

                    scrollTop:($(".contentSpecial").offset().top)-150

                },

                500);

        }

        return false;

    });

	

    $(".minNavHeight").height($(".minNav").outerHeight(true));



    /*固定小导航滚动后悬浮*/

    $(window).scroll(function() {

        if ($(window).scrollTop() > 500) {

            $(".minNav ").addClass('minNavFixed');

        }

        else {

            $(".minNav").removeClass('minNavFixed');

        }

    });



});

//在有小导航的页面根据hash值作为id滚动到对应的模块，hash值格式“floor”+"5"

function hashJump(){

    var hash=window.location.hash;

    var s=hash.indexOf('floor');

    //alert(s);

    if(s>=0){

        var topNavH=$("#fixedNav").outerHeight(true);

        var minNavH=$(".minNav").outerHeight(true);

        $('body,html').animate({

                scrollTop:($(hash).offset().top)-(topNavH + minNavH)

            },

            1000);

    }else{

        return false;

    }

}



/*查看示例灯箱的单例效果*/

$(function(){

    $("#wfxFancyBox1").find('li').each(function(index){

        $(this).find(".btnA a").click(function(){

            $.fancybox.open([

                {

                    href : '/statics/images/wei/singleBanner/wfxImg.png',

                    title : '发'

                },

                {

                    href : 'images/tec/2.png',

                    title : '我在这里打酱油'

                },

                {

                    href : 'images/tec/3.png',

                    title : '我在这里打酱油'

                },

                {

                    href : 'images/tec/4.png',

                    title : '我在这里打酱油'

                },

                {

                    href : 'images/tec/5.png',

                    title : '我在这里打酱油'

                },

                {

                    href : 'images/tec/6.png',

                    title : '我在这里打酱油'

                },

                {

                    href : 'images/tec/7.png',

                    title : '我在这里打酱油'

                },

                {

                    href : 'images/tec/8.png',

                    title : '我在这里打酱油'

                }

            ], {

                helpers : {

                    thumbs : {

                        width: 75,

                        height: 50

                    }

                }

            });

        });

    });

});





function bigScroll() {

    $(".flashBox").each(function() {

        var i = 0;

        var timer = 0;

        var prev = $(this).find(".bannerBtn a.prev");

        var next = $(this).find(".bannerBtn a.next");
        var imgLi = $(this).find("ul li");

        var ht='';
        for (var io = 0; io < imgLi.length; io++) {
            ht += "<li></li>";
        }
        $(this).find("ol").html(ht);
        var pageI = $(this).find("ol li");
        function right() {

            i++;

            if (i == imgLi.length) {

                i = 0

            }

        }

        function left() {

            i--;

            if (i < 0) {

                i = imgLi.length - 1

            }

        }

        function run() {

            pageI.eq(i).addClass("active").siblings().removeClass("active");

            imgLi.eq(i).fadeIn(600).siblings().fadeOut(600).hide()

        }

        pageI.each(function(index) {

            $(this).click(function() {

                i = index;

                run()

            })

        }).eq(0).trigger("click");



        function runn() {

            right();

            run()

        }

        timer = setInterval(runn, 8000);

        $('.flashBox').hover(function() {

            clearInterval(timer);

            $(".bannerBtn a").show()

        }, function() {

            timer = setInterval(runn, 8000);

            $(".bannerBtn a").hide();

        });

        prev.click(function() {

            left();

            run()

        });

        next.click(function() {

            right();

            run()

        })

    })

}





$(function(){

   var thisScroll=$(".indexScroll ");



    thisScroll.each(function(){

        var r=0;

        var singleLi=$(this).find("li");

        var liLen=singleLi.length;

        // var liW=singleLi.outerWidth(true);
        var liW=264;

        var scrollUl=$(this).find('ul');

       scrollUl.width(liW*liLen);

        var prev=$(this).find('.prev');

        var next=$(this).find('.next');

        var li4=Math.ceil(liLen/4);

        var li4W=liW*4;



        if(liLen<5){

            next.hide();

            prev.hide();

        }

        prev.bind('click',function(){

            prevBtn();

            Scroll();

        });

        next.bind('click',function(){

            nextBtn();

            Scroll();

        });

        function nextBtn() {

            r++;

            if (r == li4) {

                r = 0

            }

        }

        function prevBtn() {

            r--;

            if (r < 0) {

                r = li4 - 1

            }

        }

        function Scroll(){

            scrollUl.stop().animate({

                    'margin-left': -liW * r + 'px'

                },

                1000);

        }





    })

});





//常用方法

var myFun = {

    rowlastLi: function(a, b) {

        $(a).each(function() {

            var li = $(this).find("ul>li");

            var len = $(this).find("ul>li").length;

            var y = len / b;

            for (var i = 1; i <= y; i++) {

                li.eq(i * b - 1).css({

                    'margin-right': '0'

                })

            }

        })

    },

    tab: function(obj) {

        var tabObj = $(obj);

        tabObj.each(function() {

            var len = $(this).find('.hd ol li');

            var row = $(this).find('.row');

            len.bind("click", function() {

                var index = 0;

                $(this).addClass('on').siblings().removeClass('on');

                index = len.index(this);

                row.eq(index).show().siblings(".row").hide();

                return false

            }).eq(0).trigger("click")

        })

    },
    tabFade: function(obj) {

        var tabObj = $(obj);

        tabObj.each(function() {

            var len = $(this).find('.hd ul li');

            var row = $(this).find('.row');

            len.bind("click", function() {

                var index = 0;

                $(this).addClass('on').siblings().removeClass('on');

                index = len.index(this);

                row.eq(index).fadeIn(1000).siblings(".row").hide();

                return false

            }).eq(0).trigger("click")

        })

    },

    tabs: function(a, b, c) {

        var len = $(a);

        len.bind("click", function() {

            var index = 0;

            $(this).addClass(c).siblings().removeClass(c);

            index = len.index(this);

            $(b).eq(index).addClass("animate").show().siblings().removeClass("animate").hide();

            return false

        }).eq(0).trigger("click")

    },

    lastLi: function(a) {

        $(a).find("li").last().css('borderBottom', '0')

    },

    lastLimr: function(a) {

        $(a).find("li").last().css('marginRight', '0')

    },

    marginTop: function(a) {

        var wHeight = $(window).height();

        var boxHeight = $(a).height();

        var top = (wHeight - boxHeight) / 2;

        $(a).css('marginTop', top)

    },

    animate: function(sum) {

        var t = $(window).scrollTop();

        var h = $(window).height();

        for (var i = 1; i < sum + 1; i++) {

            var off = $('.floor' + i).offset().top + 100;

            if (t + h > off) {

                $('.floor' + i).addClass('animate')

            }

        }

    }

};
function qrWindow(imgurl){
    var html=$('<div class="qrWindow"> <div class="qrMain"> <h3>微信扫描下面二维码体验</h3> <img class="qrCode" src="'+imgurl+'" alt="qr"/> <a class="xClosed" href="javascript:;" onclick="$(this).parent().parent().remove()"></a> </div> </div>');
    $('body').append(html);
}


$(".btnA a.app_guanli").click(function(){
    var a='https://pigmcsdotcom.pigcms.com/ds/statics/images/s_shangjiaguanliCode.png';
    qrWindow(a);
});
$(".btnA a.app_pingtai").click(function(){
    var a='https://pigmcsdotcom.pigcms.com/ds/statics/images/s_pingtaiCode.png';
    qrWindow(a);
});
$(".btnA a.app_shejiao").click(function(){
    var a='https://pigmcsdotcom.pigcms.com/ds/statics/images/s_libaoCode.png';
    qrWindow(a);
});


$(function() {
    if($(".qiuWindow").length){
		timeShow();
		function timeShow() {
    var show_time = $(".qiuWindow .timeIcon");
    endtime = new Date("10/21/2016 23:59:59"); //结束时间
    today = new Date(); //当前时间
    delta_T = endtime.getTime() - today.getTime(); //时间间隔
    if (delta_T < 0) {
        alert("活动已经结束啦");
        $(".header .Places i").text("0");
        return;
    }
    window.setTimeout(timeShow, 1000);
    total_days = delta_T / (24 * 60 * 60 * 1000); //总天数
    total_show = Math.floor(total_days); //实际显示的天数
    total_hours = (total_days - total_show) * 24; //剩余小时
    hours_show = Math.floor(total_hours); //实际显示的小时数
    total_minutes = (total_hours - hours_show) * 60; //剩余的分钟数
    minutes_show = Math.floor(total_minutes); //实际显示的分钟数
    total_seconds = (total_minutes - minutes_show) * 60; //剩余的分钟数
    seconds_show = Math.floor(total_seconds); //实际显示的秒数
    if (total_show <= 15) {

    }

    if (total_show < 10) {
        total_show = String(total_show);
        total_show = "0" + total_show;
    }
    if (hours_show < 10) {
        hours_show = "0" + hours_show;
    }
    if (minutes_show < 10) {
        minutes_show = "0" + minutes_show;
    }
    if (seconds_show < 10) {
        seconds_show = "0" + seconds_show;
    }

    show_time.find("i").eq(0).text(total_show); //显示在页面上
    show_time.find("i").eq(1).text(hours_show);
    show_time.find("i").eq(2).text(minutes_show);
    show_time.find("i").eq(3).text(seconds_show);
}
		var endtime = new Date("10/21/2016 23:59:59"); //结束时间
    var today = new Date(); //当前时间
   var delta_T = endtime.getTime() - today.getTime(); //时间间隔
		
		var dayss = Math.floor(delta_T/(24 * 60 * 60 * 1000));    
        //days=days<0?'0':days;
        console.log(dayss);
        //console.log(places);
		var url='http://static.pigcms.com/statics/js/www/places.txt';
		//var url='/product/o2o/statics/js/www/places.txt';
        $.get(url,function(sta){
			var obj = eval("("+sta+")");
			console.log(obj.rows.length);
			if(obj.rows.length>=dayss){
							console.log(dayss);
				if(dayss>=0){
					$(".qiuWindow .places em").text(obj.rows[parseInt(dayss+1)].place);
				}else if(dayss<0){
					$(".qiuWindow .places em").text(obj.rows[0].place);
				}
			}else{
			$(".qiuWindow .places em").text('88');
			}
        });
			$(".fullBg").show();
			$(".qiuWindow").show();
			$(".fullBg").css('z-index','99999999999999999999');
			$(".qiuWindow").css('z-index','99999999999999999999');
        $(".fullBg").click(function(){
            $(".qiuWindow").hide();
            $(".fullBg").hide();
			$(".fullBg").css('z-index','1000');
			$(".qiuWindow").css('z-index','1109');
        });
		$(".qiuWindow").click(function(){
			window.open('http://www.pigcms.com/special/20161017/');
		})
    }
});
$(function(){
   if($(".summer").length){
       $(".fullBg").show();
       $(".summer").show();
       $(".fullBg").click(function(){
           $(".summer").hide();
           $(".fullBg").hide();
       });
   }
   $(".summer .xClosed").on("click",function(){
   $(this).parent().hide();$('.fullBg').hide();
   setTimeout(function(){
	   $(".summerBtn").slideDown();
   },500)
   });
   $(".fullBg").on("click",function(){
	   $(this).hide();
   $('.window').hide();
   setTimeout(function(){
	   $(".summerBtn").slideDown();
   },500)
   });
});


$(function(){
	    $(".page-yzf .minNavHeight ul li").unbind('click');
    $("#android_down").click(function(){
        var androidUrl='http://static.pigcms.com/ds/statics/images/wei/1477618292.png';
        qrDownWindow(androidUrl);
    });
    $("#iphone_down").click(function(){
        alert('敬请期待。');
    });
});


jQuery.cookie = function(name, value, options) {
    if (typeof value != 'undefined') { // name and value given, set cookie
        options = options || {};
        if (value === null) {
            value = '';
            options.expires = -1;
        }
        var expires = '';
        if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
            var date;
            if (typeof options.expires == 'number') {
                date = new Date();
                date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
            } else {
                date = options.expires;
            }
            expires = '; expires=' + date.toUTCString(); // use expires attribute, max-age is not supported by IE
        }
        // CAUTION: Needed to parenthesize options.path and options.domain
        // in the following expressions, otherwise they evaluate to undefined
        // in the packed version for some reason...
        var path = options.path ? '; path=' + (options.path) : '';
        var domain = options.domain ? '; domain=' + (options.domain) : '';
        var secure = options.secure ? '; secure' : '';
        document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
    } else { // only name given, get cookie
        var cookieValue = null;
        if (document.cookie && document.cookie != '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = jQuery.trim(cookies[i]);
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) == (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
};

//判断当前时间是否在一个时间段内
var JudgeTime= function ()
{
    //将计划开始时间转成以秒为单位：
    var   planStartTime = "2017-6-5";
    var startTime = new Array();
    startTime = planStartTime.split('-');
    planStartTime = Date.UTC(parseInt(startTime[0]), parseInt(startTime[1]), parseInt(startTime[2]));
    //将计划结束时间转成以秒为单位：
    var planStopTime = "2017-6-11";
    var stopTime = new Array();
    stopTime = planStopTime .split('-');
    planStopTime = Date.UTC(parseInt(stopTime[0]), parseInt(stopTime[1]), parseInt(stopTime[2]));
    //将当前系统时间转化成以秒为单位：
    //获取当前时间
    var nowDate = new Date();
    //当前年
    var nowYear = nowDate.getFullYear();
    //当前月，记得要加1
    var nowMonth = (nowDate.getMonth() + 1);
    //当前日
    var nowDay = nowDate.getDate();
    var nowTime = Date.UTC(nowYear,nowMonth,nowDay);
    //判断：如果当前系统时间大于等于开始时间以及小于等于结束时间则登记成功
    if (nowTime >= planStartTime && nowTime <= planStopTime) {
        return true;
    } else {
        return false;
    }
}


// try {
//             if (window.console && window.console.log) {
//                 console.log("\n\n");
//                 console.log("最美年华，做最好的技术员！\n\n");
//                 console.log('如何让我遇见你，在你最美的时候\n加入小猪CMS，改变生活，改变社会，改变未来，在这里启程！\n');
//                 console.log("请将简历发送至 %c hr@pigcms.cn（邮件标题请以“姓名-应聘XX职位-来自console”命名）", "color:red");
//                 console.log("职位介绍：http://www.pigcms.com/contact/job/\n\n");
//             }
// } catch (e) {}

