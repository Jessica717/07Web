$(function () {
	$("body").on("click",'.year_close a',function () {
		$(this).parents(".modal").hide();
	}).on("click",'.left_year a',function () {
		$("#yearModal").show();
	}).on("click",'.btn_sub',function () {
		var type=$(this).attr("data-type");
		enroll(type)
	})
})
var year=function (btnImg,modalImg,type,active) {
	var active=active?active:'';
	var yearLeft='<div class="left_year"> <a href="javascript:;" style="display: block;"><img src="'+btnImg+'" alt=""></a></div>';
	//var yearModal='<div class="modal" id="yearModal" style="display: none;"><div class="content"><div class="year_wrap" style="background: url('+modalImg+') no-repeat;background-size: 100% 15.1893333333rem;"><div class="year_content"><p class="year_text">请您填写有效信息，我们将及时与您联系！</p><form action=""><div class="year_input"><input type="text" placeholder="请填写您的姓名" name="nick"></div><div class="year_input"><input type="tel" placeholder="请填写您的手机号" name="phone"></div><div class="btn_wrap flex_box flex_middle flex_space"><div class="btn_year"><a href="javascript:;" class="btn_sub  btn" data-type="'+type+'">提交</a></div><div class="btn_year"><button class="btn"><a href="http://www.pigcms.com/huodong/180528/app.html" style="color:#fff;">进入五周年专题</a></button></div></div></form></div><div class="year_close"><a href="javascript:;" style="display: block;"><img src="https://pigmcsdotcom.pigcms.com/ds/wapchoujiang/images/year_close.png" alt=""></a></div></div></div></div>';
	var yearModal='<div class="modal" id="yearModal" style="display: none;"><div class="content"><div class="year_wrap" style="background: url('+modalImg+') no-repeat;background-size: 100% 15.1893333333rem;"><div class="year_content"><p class="year_text">请您填写有效信息，我们将及时与您联系！</p><form action=""><div class="year_input"><input type="text" placeholder="请填写您的姓名" name="nick"></div><div class="year_input"><input type="tel" placeholder="请填写您的手机号" name="phone"></div><div class="btn_wrap flex_box flex_middle flex_space"><div class="btn_year btn_full"><a href="javascript:;" class="btn_sub  btn" data-type="'+type+'">提交</a></div></div></form></div><div class="year_close"><a href="javascript:;" style="display: block;"><img src="https://pigmcsdotcom.pigcms.com/ds/wapchoujiang/images/year_close.png" alt=""></a></div></div></div></div>';
	var html='<div class="'+active+'">'+yearLeft+yearModal+'</div><div class="msgTip"></div>'
	$("body").append(html);
}
var  enroll=function (type) {
	var data={phone:phone,item:'pc',source_type:'five_year'};
	var phone=$("input[name='phone']").val(),nick=$("input[name='nick']").val();
	if(nick==''){
		$(".msgTip").addClass('tip').html('姓名不能为空');
		setTimeout(function () {
			$(".msgTip").removeClass('tip')
		},1500)
		return false;
	}
	if(phone==''){
		$(".msgTip").addClass('tip').html('手机号码不能为空');
		setTimeout(function () {
			$(".msgTip").removeClass('tip')
		},1500)
		return false;
	}
	console.log(type)
	$.post('https://d.pigcms.com/api.php?c=user&a=registerActivityUser', {phone:phone,name:nick,source_type:type,item:'mobile '}, function (data) {
		var data=data;
		if(data.err_code==0){
			$(".msgTip").addClass('tip').html(data.err_msg);
			$("#yearModal").hide();
			setTimeout(function () {
				$(".msgTip").removeClass('tip');
				location.reload();
			},1500)

		}else{
			$(".msgTip").addClass('tip').html(data.err_msg);
			setTimeout(function () {
				$(".msgTip").removeClass('tip')
			},1500)
			return false;
		}
	})
}