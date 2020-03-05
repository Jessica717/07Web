//水平移动轮播
function horizonScroll(wrapper,num,duration,AutoPlay) {
    $(wrapper).each(function(){

        var r=0;

        var singleLi=$(this).find("li");
        
        var liLen=singleLi.length;

        // var liW=singleLi.outerWidth(true);
        var liW=245;
        var scrollUl=$(this).find('ul');
        console.log('宽度' + liW + '数量' + liLen)

        var prev=$(this).find('.prev');

        var next=$(this).find('.next');

        var liNum=Math.ceil(liLen/num);
        var liNumW=liW*num;
        if(liLen<num+1){
            next.hide();
            prev.hide();
        }
        if (AutoPlay) {
            var timer = window.setInterval(function(){
                nextBtn();
                Scroll();
            },duration);
            $(wrapper).hover(function() {
                clearInterval(timer);
            }, function() {
                timer = setInterval(function(){
                    nextBtn();
                    Scroll();
                }, duration);
            });
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
            if (r == liNum) {
                r = 0
            }
        }
        function prevBtn() {
            r--;
            if (r < 0) {
                r = liNum - 1
            }
        }
        function Scroll(){
            scrollUl.stop().animate({
                    'margin-left': -liNumW * r + 'px'
                },
            1000);
        }
    })
}
//透明度轮播
function opacityScroll(wrapper,item,sideLi,duration) {
    sideLi = $(sideLi);
    $(wrapper).each(function() {
        var i = 0;
        var timer = 0;
        var imgLi = $(this).find(item);
        function right() {
            if (i == 0) {
                $('[data-index="5"]').addClass('active');
                $('[data-index="6"]').addClass('active');
                $('[data-index="7"]').addClass('active');
                $('[data-index="8"]').addClass('active');
                $('[data-index="1"]').removeClass('active');
                $('[data-index="2"]').removeClass('active');
                $('[data-index="3"]').removeClass('active');
                $('[data-index="4"]').removeClass('active');
                $('.blueLine').animate({'top':250},500)
            }else if (i == 1) {
                $('[data-index="1"]').addClass('active');
                $('[data-index="2"]').addClass('active');
                $('[data-index="3"]').addClass('active');
                $('[data-index="4"]').addClass('active');
                $('[data-index="5"]').removeClass('active');
                $('[data-index="6"]').removeClass('active');
                $('[data-index="7"]').removeClass('active');
                $('[data-index="8"]').removeClass('active');
                $('.blueLine').animate({'top':0},500)
            }
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

            imgLi.eq(i).addClass('current').siblings().removeClass('current');

        }
        function runn() {
            right();
            run()
        }
        timer = setInterval(runn, duration);
        $(wrapper).hover(function() {
            clearInterval(timer);
        }, function() {
            timer = setInterval(runn, duration);
        });
        sideLi.on('click',function(){
            if(!$(this).is(":animated")){
                if (!$(this).hasClass('active')) {
                    if($(this).data('index')<5){
                        $('[data-index="1"]').addClass('active');
                        $('[data-index="2"]').addClass('active');
                        $('[data-index="3"]').addClass('active');
                        $('[data-index="4"]').addClass('active');
                        $('[data-index="5"]').removeClass('active');
                        $('[data-index="6"]').removeClass('active');
                        $('[data-index="7"]').removeClass('active');
                        $('[data-index="8"]').removeClass('active');
                        left();
                        run();
                        $('.blueLine').animate({'top':0},500)
                    }else {
                        $('[data-index="5"]').addClass('active');
                        $('[data-index="6"]').addClass('active');
                        $('[data-index="7"]').addClass('active');
                        $('[data-index="8"]').addClass('active');
                        $('[data-index="1"]').removeClass('active');
                        $('[data-index="2"]').removeClass('active');
                        $('[data-index="3"]').removeClass('active');
                        $('[data-index="4"]').removeClass('active');
                        right();
                        run();
                        $('.blueLine').animate({'top':250},500)
                    }
                }
            }

        })
    })
}
/*滚动楼层亮标*/
function scrollTo(max,min,selector,scrollHeight){
    if (scrollHeight <= max && scrollHeight > min) {
        console.log('满足范围-----------'+ scrollHeight,max,min)
        $(selector).addClass('active').siblings().removeClass('active');
    }else{
        console.log("不在范围内",max,min)
    }
}
/*顶部菜单选中*/
function scrollNavTo(max,min,selector,scrollHeight){
    if (scrollHeight <= max && scrollHeight > min) {
        console.log('满足范围-----------'+ scrollHeight,max,min)
        $(selector).addClass('on').siblings().removeClass('on');
    }else{
        console.log("不在范围内",max,min)
    }
}
$(window).scroll(function(event) {
    var scrollHeight = $(window).scrollTop();
    scrollTo(800,-999,'.fixedLeftBar li.l1',scrollHeight, 1)
    scrollTo(1700,800,'.fixedLeftBar li.l2',scrollHeight, 1)
    scrollTo(2500,1700,'.fixedLeftBar li.l3',scrollHeight, 1)
    scrollTo(3300,2500,'.fixedLeftBar li.l4',scrollHeight, 1)
    scrollTo(4054,3300,'.fixedLeftBar li.l5',scrollHeight, 1)
    scrollTo(4900,4054,'.fixedLeftBar li.l6',scrollHeight, 1)
    scrollTo(5618,4900,'.fixedLeftBar li.l7',scrollHeight, 1)
    scrollTo(6400,5618,'.fixedLeftBar li.l8',scrollHeight, 1)

    scrollNavTo(399,-999,'.bigNav li.l0',scrollHeight, 2)
    scrollNavTo(800,399,'.bigNav li.l1',scrollHeight, 2)
    scrollNavTo(1700,800,'.bigNav li.l2',scrollHeight, 2)
    scrollNavTo(2500,1700,'.bigNav li.l3',scrollHeight, 2)
    scrollNavTo(3300,2500,'.bigNav li.l4',scrollHeight, 2)
    scrollNavTo(4054,3300,'.bigNav li.l5',scrollHeight, 2)
    scrollNavTo(4900,4054,'.bigNav li.l6',scrollHeight, 2)
    // scrollNavTo(7000,4900,'.bigNav li.l7',scrollHeight, 2)
    scrollNavTo(7000,4900,'.bigNav li.l8',scrollHeight, 2)
    console.log('滚动高度'+scrollHeight)
    if (scrollHeight > 6300) {
        $('.fixedLeftBar li').removeClass('active');
        $('.bigNav li').removeClass('on');
    }
    if (scrollHeight >= 1452) {
        $('.modWeiShang').addClass('current');
    }
    if (scrollHeight >= 2431) {
        $('.modO2O').addClass('current');
    }
    if (scrollHeight >= 3255) {
        $('.modPromotion').addClass('current');
    }
    if (scrollHeight >= 4711) {
        $('.modHuiYuan').addClass('current');
    }
    if (scrollHeight >= 5510) {
        $('.modClient').addClass('current');
    }
});
$(function(){
    horizonScroll('.slider5-wrapper',5,8000,true);
    opacityScroll('.sliderVertical-wrapper','.ul','.sideHuiYuan li',8000);
    $('.prev').on('mouseover',function(){
        $(this).addClass('pointer');
    })
    $('.next').on('mouseover',function(){
        $(this).addClass('pointer');
    })
    $('.sideHuiYuan li').on('mouseover',function(){
        $(this).addClass('pointer');
    })
    /*多场景交易*/
    //$('.modScene li:lt(4)').addClass('current');
    $('.modScene').on('mouseover','li',function(){
        $(this).addClass('active').siblings().removeClass('active');
    })
    $('.modScene').on('mouseleave','li',function(){
        $(this).removeClass('active');
    })
    /*社交电商引流*/
    $('.modDrain').on('mouseover','li',function(){
        $(this).addClass('active').siblings().removeClass('active');
    })
    $('.modDrain').on('mouseleave','li',function(){
        $(this).removeClass('active');
    })
    /*多门店O2O体系*/
    $('.modO2O').on('mouseover','li',function(){
        $(this).addClass('active').siblings().removeClass('active');
    })
    $('.modO2O').on('mouseleave','li',function(){
        $(this).removeClass('active');
    })
    $('.modWeiShang').on('mouseover','li',function(){
        $(this).addClass('active').siblings().removeClass('active');
    })
    $('.modClient').on('mouseover','li',function(){
        $(this).addClass('active').siblings().removeClass('active');
    })

    /*新闻动态*/
    $('.mod7 .newsUl').on('mouseover','.newsColumns .newsLsit li',function(){
        $(this).addClass('active').siblings().removeClass('active');
    })
    $('.mod7 .newsUl').on('mouseleave','.newsColumns .newsLsit li',function(){
        $(this).removeClass('active');
    })
    /*左侧边栏*/
    //$('.fixedLeftBar').attr('style','position:absolute;top:1334px;');
    $('.fixedLeftBar').on('mouseover','li',function(){
        // $(this).addClass('hover_active').siblings().removeClass('active');
        $(this).addClass('hover_active');
    })
    $('.fixedLeftBar').on('mouseleave','li',function(){
        $(this).removeClass('hover_active');
    })
    /*右侧边栏*/
    $('.fixedRightBar').on('mouseover','.l_box',function(){
        $(this).addClass('active').siblings().removeClass('active');
    })
    $('.fixedRightBar').on('mouseleave','.l_box',function(){
        $(this).removeClass('active');
    })
    $('.fixedLeftBar').on('click','li',function(){
        $(this).addClass('active')
        if ($(this).hasClass('l1')) {
            $('html, body').animate({
                scrollTop: 648
            }, 500);
            console.log($(this))
            console.log("l1电商分销")
        }
        if ($(this).hasClass('l2')) {
            $('html, body').animate({
                scrollTop: 1539
            }, 500);
            console.log("l2社交电商")
        }
        if ($(this).hasClass('l3')) {
            $('html, body').animate({
                scrollTop: 2430
            }, 500);
            console.log("l3分销管理")
        }
        if ($(this).hasClass('l4')) {
            $('html, body').animate({
                scrollTop: 3254
            }, 500);
            console.log("l4电商O2O")
        }
        if ($(this).hasClass('l5')) {
            $('html, body').animate({
                scrollTop: 3918
            }, 500);
            console.log("l5促销应用")
        }
        if ($(this).hasClass('l6')) {
            $('html, body').animate({
                scrollTop: 4710
            }, 500);
            console.log("l6会员营销")
        }
        if ($(this).hasClass('l7')) {
            $('html, body').animate({
                scrollTop:6129
            }, 500);
            console.log("l7多客户端")
        }
        if ($(this).hasClass('l8')) {
            $('html, body').animate({
                scrollTop: 6129
            }, 500);
            console.log("l8功能体系")
        }
    })
    // 顶部导航锚点跳转
    $('.bigNav').on('click','li',function(){
        if ($(this).hasClass('l0')) {
            $('html, body').animate({
                scrollTop: 0
            }, 500);
            console.log("l0首页")
        }
        if ($(this).hasClass('l1')) {
            $('html, body').animate({
                scrollTop: 648
            }, 500);
            console.log("l1电商分销")
        }
        if ($(this).hasClass('l2')) {
            $('html, body').animate({
                scrollTop: 1539
            }, 500);
            console.log("l2社交电商")
        }
        if ($(this).hasClass('l3')) {
            $('html, body').animate({
                scrollTop: 2430
            }, 500);
            console.log("l3分销管理")
        }
        if ($(this).hasClass('l4')) {
            $('html, body').animate({
                scrollTop: 3254
            }, 500);
            console.log("l4电商O2O")
        }
        if ($(this).hasClass('l5')) {
            $('html, body').animate({
                scrollTop: 3918
            }, 500);
            console.log("l5促销应用")
        }
        if ($(this).hasClass('l6')) {
            $('html, body').animate({
                scrollTop: 4710
            }, 500);
            console.log("l6会员营销")
        }
        if ($(this).hasClass('l7')) {
            $('html, body').animate({
                scrollTop:6129
            }, 500);
            console.log("l7多客户端")
        }
        if ($(this).hasClass('l8')) {
            $('html, body').animate({
                scrollTop: 6129
            }, 500);
            console.log("l8功能体系")
        }
    })
})





 