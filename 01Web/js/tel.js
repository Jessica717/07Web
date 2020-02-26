//头部电话号码填写错误提示

$(function() {

    var t = null;

    var html = $('<div class="phoneError"> <p>您输入的号码有误，请核对后重新填写！</p> </div>');
    var html1 = $('<div class="phoneError"> <p>您输入的号码为空！</p> </div>');

    var html2 = $('<div class="phoneError"> <p>我们已经收到您的信息，请保持手机畅通！</p> </div>');
    var telNote = $('<div class="telNote"> <p>提交中，请稍候……</p> </div>');

    function phoneError() {

        $(".phoneError").show().animate({ 'top': '300px' }, 1000);

        t = setTimeout(function() {

            $(".phoneError").animate({ 'top': '-500px' }, 1000, function() {

                $(".phoneError").remove();

            });

        }, 4000)

    }

    var telReg;
    var tel;
    $(".foorterBanner button").on('click', function() {

        tel = $("input[name='phoneNum']").val();
        $("body").append(telNote);

        $(".telNote").show(600, function() {
            setTimeout(function() {
                submitInfo();
            }, 1000);
        });
        //        console.log(tel);
    });
    $(".benefit button").on('click', function() {
        tel = $("input[name='bTphoneNum']").val();
        $("body").append(telNote);
        $(".telNote").show(600, function() {
            setTimeout(function() {
                submitInfo();
            }, 1000);
        });
    });

    function submitInfo() {
        telReg = !!tel.match(/^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/);

        clearTimeout(t);
        if (tel == '') {
            console.log(tel)
            $("body").append(html1);
            phoneError();
        }
        if (telReg == false) {
            $(".telNote").remove();
            $("body").append(html);
            phoneError();
        } else {

            var xhrurl = 'http://ws.pigcms.com/t.php?mp=' + tel + '&code=6Tg4G1z';

            $.ajax({

                type: "get",

                async: false,

                url: xhrurl,

                dataType: "jsonp",

                jsonp: "callbackparam",

                jsonpCallback: "jsonpCallback",

                complete: function(msg)

                {

                    console.log(msg.statusText);
                    $(".telNote").remove();
                    $("body").append(html2);

                    phoneError();

                },

                success: function(msg) {

                    console.log(msg);
                    $(".telNote").remove();
                    $("body").append(html2);

                    phoneError();

                },

                error: function(msg) {

                    var errorHtml = $('<div class="phoneError"> <p>抱歉，服务器开小差了</p> </div>');
                    $(".telNote").remove();
                    $("body").append(errorHtml);

                    phoneError();

                }

            });

        }

    }

});
