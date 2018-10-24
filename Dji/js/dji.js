define(["jquery", "jquery-cookie"],function($){
	function price(str){
		if(str){
			return "￥" + str;
		}
		return "";
	}

	function img_src(name, position){
		if(name && position){
			return "../images/" + position + "/" + name;
		}else if(name){
			return "../images/" + name;
		}
		return "";
	}

	function checkEMail(str){
		var reg = new RegExp("^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$");
		if(str == ""){
			return "邮箱地址不能为空";
		}else if(!reg.test(str)){
			return "邮箱地址格式不对";
		}
		return 1;
	}

	function checkPassword(str){
		if(str == ""){
			return "密码不能为空";
		}else if(str.length < 8 || str.length > 20){
			return "密码需要8-20个字符，且包含字母和数字";
		}else if(!(/\d+/.test(str) && /[a-zA-Z]+/.test(str))){
			return "密码需要8-20个字符，且包含字母和数字";
		}
		return 1;
	}

	function checkPhone(str){
		if(str == ""){
			return "手机号不能为空";
		}else if(!/^((13[0-9])|(14[0-9])|(15[0-9])|(17[0-9])|(18[0-9]))\d{8}$/.test(str)){
			return "手机号格式不正确";
		}
		return 1;
	}

	function slide_drag(node){
		var offsetX = null;
		var offsetY = null;
		node.on("mousedown", function(ev){
			offsetX = ev.clientX - node.position().left;
			offsetY = ev.clientY - node.position().top;
			$(document).on("mousemove", function(ev){
				node.css("left", ev.clientX - offsetX);
				if(node.position().left <= 0 ){
					node.css("left", 0);
				}else if(node.position().left >= node.parent().width() - node.outerWidth()){
					node.css("left", node.parent().width() - node.outerWidth());
				}
				// console.log(node.position().left);
			});
			$(document).on("mouseup", function(){
				$(document).off();
			})
		});
	}

	function createCode(num){
		var str = "";
		for(var i = 0; i < num; i++){
			var n = parseInt(Math.random() * 100);
			if(n >= 48 && n <= 57){
				str += String.fromCharCode(n);
			}else if(n >= 65 && n <= 90){
				str += String.fromCharCode(n);
			}else if(n >= 17 && n < 42){
				str += String.fromCharCode(n + 80);
			}else{
				i--
			}
		}
		return str;
	}

	return {
		price: price,
		img_src: img_src,
		checkEMail: checkEMail,
		checkPassword: checkPassword,
		slide_drag: slide_drag,
		checkPhone: checkPhone,
		createCode: createCode
	}
})