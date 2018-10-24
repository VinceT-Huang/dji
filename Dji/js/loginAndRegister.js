require.config({
	paths: {
		"jquery": "jquery-1.11.3",
		"jquery-cookie": "jquery.cookie",
		"dji": "dji"
	},
	shim: {
		"jquery-cookie": ["jquery"]
	}
})

define(["dji", "jquery", "jquery-cookie"], function(dji, $){
	function main(){
		var code = null;
		var isR_1,isR_2,isR_3,isR_4;


		// 跳转注册页面
		$(".article_form_l .article_form_register").find("button").on("click", function(){
			$(".article_form_r").css("display", "block");
			$(".article_form_l").css("display", "none");
			return false;
		})

		// 手机注册跳转登录页面
		$(".article_form_r .article_form_r_forPhone .article_form_r_login").find("a").on("click", function(){
			$(".article_form_r").css("display", "none");
			$(".article_form_l").css("display", "block");
			return false;
		})

		// 邮箱注册跳转登录页面
		$(".article_form_r .article_form_r_forMail .article_form_r_forMail_login").find("a").on("click", function(){
			$(".article_form_r").css("display", "none");
			$(".article_form_l").css("display", "block");
			return false;
		})

		// 手机注册跳转邮箱注册
		$(".article_form_r .article_form_r_choice").on("click", "button", function(){
			$(this).parent().children().attr("class", "");
			$(this).addClass("active");
			if($(this).attr("id") == "article_form_r_choice_email"){
				$(".article_form_r_forPhone").css("display", "none");
				$(".article_form_r_forMail").css("display", "block");
			}else if($(this).attr("id") == "article_form_r_choice_phone"){
				$(".article_form_r_forPhone").css("display", "block");
				$(".article_form_r_forMail").css("display", "none");
			}

		})

		// 邮箱注册的事件
		// 验证邮箱
		$(".article_form_r_forMail").find(".article_form_r_forMail_mail").eq(0).find("input").on("blur", function(){
			var str = $(this).val();
			var result = dji.checkEMail(str);
			if(result == 1){
				$(this).next().html("");
				$(this).css("border-color", "#eee");
				isR_1 = true;
			}else{
				$(this).next().html(result);
				$(this).css("border-color", "#f04848");
				isR_1 = false;
			}
		});

		// 验证密码
		$(".article_form_r_forMail").find(".article_form_r_forMail_mail").eq(1).find("input").on("blur", function(){
			var str = $(this).val();
			var result = dji.checkPassword(str);
			if(result == 1){
				$(this).next().html("");
				$(this).css("border-color", "#eee");
				isR_2 = true;
			}else{
				$(this).next().html(result);
				$(this).css("border-color", "#f04848");
				isR_2 = false;
			}
		});

		// 验证确认密码
		$(".article_form_r_forMail").find(".article_form_r_forMail_mail").eq(2).find("input").on("blur", function(){
			var password = $(".article_form_r_forMail").find(".article_form_r_forMail_mail").eq(1).find("input").val();
			var cpassword = $(this).val()
			if(cpassword == ""){
				$(this).next().html("确认密码不能为空");
				$(this).css("border-color", "#f04848");
				isR_3 = false;
			}else if(password == cpassword){
				$(this).next().html("");
				$(this).css("border-color", "#eee");
				isR_3 = true;
			}else {
				$(this).next().html("确认密码与新密码不一致，请重新输入");
				$(this).css("border-color", "#f04848");
				isR_3 = false;
			}
		});

		// 拖动验证条
		(function(){
			var mail_slide = $(".article_form_r_forMail_slide").find(".slide");
			isR_4 = dji.slide_drag(mail_slide);
			var phone_slide = $(".article_form_r_slide").find(".slide");
			dji.slide_drag(phone_slide);
		})()

		// 手机号验证
		$(".article_form_r_forPhone .article_form_r_num").find("input").on("blur", function(){
			var phone = $(this).val();
			var result = dji.checkPhone(phone);
			if(result == 1){
				$(this).next().html("");
				$(this).css("border-color", "#eee");
			}else{
				$(this).next().html(result);
				$(this).css("border-color", "#f04848");
			}
		})

		// 发送验证码
		$(".article_form_r_forPhone .article_form_r_code").find("#send_code").on("click", function(){
			var sec = 60;
			var node = $(".article_form_r_forPhone .article_form_r_code").find("#send_code");
			var this_code = dji.createCode(4);
			code = this_code;
			console.log(this_code);
			var timer = setInterval(function(){
				sec--;
				if(sec == 0){
					clearTimeout(timer);
					node.css({
						"opacity": 1,
						"cursor": "pointer"
					});
					node.attr("disabled", false);
					node.html(`发送验证码`);
				}else{
					node.css({
						"opacity": 0.5,
						"cursor": "wait"
					});
					node.attr("disabled", true);
					node.html(`重新发送(${sec})S`);
				}
				// console.log(sec);
			}, 1000)
		});

		// 验证验证码
		$(".article_form_r_forPhone .article_form_r_code").find("#input_code").on("blur", function(){
			if($(this).val() == code){
				$(this).parent().find("p").html("");
				$(this).css("border-color", "#eee");
			}else{
				$(this).parent().find("p").html("验证码错误");
				$(this).css("border-color", "#f04848");
			}
		});

		// 以下代码在服务器上做的修改
		// 登录操作
		(function(){
			var oLogin = $(".article_form_l");
			var bLogin = oLogin.find(".article_form_login").find("button");

			bLogin.on("click", function(){
				var username = oLogin.find(".article_form_input_u").find("input").val();
				var password = oLogin.find(".article_form_input_p").find("input").val();
				var str = `username=${username}&password=${password}`;
				$.ajax({
					method: "post",
					url: "../php/loginAndRegister.php?type=login",
					data: str,
					success: function(data){
						if(data == "success"){
							oLogin.find(".article_form_input_p").find("p").html("");
							var sec = 2;
							var timer = setInterval(function(){
								oLogin.find(".article_form_login").find("button").html(`登录成功(${sec})后跳转`);
								oLogin.find(".article_form_login").find("button").css("opacity", 0.5);
								if(sec == 0){
									clearInterval(timer);
									location.assign("../index.html");
								}
								sec--;
							}, 1000);
						}else{
							$(".article_form_input_p").find("p").html("账号密码错误");
						}
					},
					error: function(msg){
						alert("错误" + msg);
					}
				})
			})
		})();


		// 注册操作
		(function(){
			var oRegister = $(".article_form_r");

			// var id = oRegister.find(".article_form_r_choice").find(".active").attr("id");

			// 邮箱注册的操作
			// 邮箱点击注册的操作
			oRegister.find('.article_form_r_forMail').find(".article_form_r_forMail_submit").find("button").on("click", function(){
				var username = oRegister.find(".article_form_r_forMail_mail").eq(0).find("input").val();
				var password = oRegister.find(".article_form_r_forMail_mail").eq(1).find("input").val();
				var str = `username=${username}&password=${password}`;
				var sec = 2;

				// alert(username + "," + password);
				if(isR_1 && isR_2 && isR_3){
					$.ajax({
						method: "post",
						url: "../php/loginAndRegister.php?type=register",
						data: str,
						success: function(data){
							if(data == "success"){
								var timer = setInterval(function(){
									oRegister.find('.article_form_r_forMail').find(".article_form_r_forMail_submit").find("button").html(`注册成功(${sec}S)后跳转`)
									oRegister.find('.article_form_r_forMail').find(".article_form_r_forMail_submit").find("button").css("opacity", 0.5);
									if(sec == 0){
										location.reload();
									}
									sec--;
								}, 1000);
							}else if(data == "账号已存在"){
								oRegister.find(".article_form_r_forMail_mail").eq(0).find("input").css("border-color", "#f04848");
								oRegister.find(".article_form_r_forMail_mail").eq(0).find("p").html("邮箱已被注册");
							}else{
								alert("注册失败");
							}
						},
						error: function(msg){
							alert("错误" + msg);
						}
					})
				}else{
					alert("false");
				}
			})
		})();

		// 广告图的事件
        (function(){
            var iCur = 0;
            var timer = null;
            function changePic(){
                if(iCur >= 3){
                    iCur = 0;
                }else if(iCur < 0){
                    iCur = 2;
                }
                for(var i = 1; i <= 3; i++){
                    $(".article_banner div a").eq(i-1).attr("class", `banner_a${i}`);
                    $(".article_banner ul li").eq(i-1).attr("class", "");
                }
                $(".article_banner div a").eq(iCur).addClass("banner_a_active");
                // console.log(iCur);
                $(".article_banner div a").eq(iCur).stop().animate({opacity: 1}, 400, "linear");
                $(".article_banner div a").not(".banner_a_active").stop().animate({opacity: 0}, 400, "linear");
                $(".article_banner ul li").eq(iCur).addClass("banner_ul_li_active");
                iCur++;
            }
            function resetICur(){
                timer = setInterval(function(){
                    changePic();
                }, 4000);
            }
            resetICur();
            $(".article_banner .banner_l").on("click", function(){
                iCur-=2;
                clearInterval(timer);
                changePic();
                resetICur();
            });
            $(".article_banner .banner_r").on("click", function(){
                clearInterval(timer);
                changePic();
                resetICur();
            });
            $(".article_banner ul").on("click", "li", function(){
                iCur = $(this).index();
                clearInterval(timer);
                changePic();
                resetICur();
                // console.log($(this).index());
            });
            $(".article_banner div").on("mouseenter", function(){
                clearInterval(timer);
            });
            $(".article_banner div").on("mouseleave", function(){
                resetICur();
            });
        })();

	}

	return {
		main: main
	}
})