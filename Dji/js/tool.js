function $(str, node){
	if(!node){
		switch(str[0]){
			case "#": 
				return document.getElementById(str.substring(1));
				break;
			case ".":
				return document.getElementsByClassName(str.substring(1));
				break;
			case "[":
				return document.getElementsByName(str.substring(1, str.length - 1));
				break;
			default:
				return document.getElementsByTagName(str);
		}
	} else{
		switch(str[0]){
			case ".":
				return node.getElementsByClassName(str.substring(1));
				break;
			default:
				return node.getElementsByTagName(str);
		}
	}
}
//绘制圆圈
function circle(node, {x, y, r}){
				var radius = 0;
				setInterval(function(){
					radius++;
					var temp = radius * (Math.PI / 180);
					node.style.left = x + Math.sin(temp) * r + "px";
					node.style.top = y - Math.cos(temp) * r  + "px";
				}, 30);
			}
//碰撞框架
function touch(node1, node2){
				var l1 = node1.offsetLeft;
				var r1 = node1.offsetLeft + node1.offsetWidth;
				var t1 = node1.offsetTop;
				var b1 = node1.offsetTop + node1.offsetHeight;

				var l2 = node2.offsetLeft;
				var r2 = node2.offsetLeft + node2.offsetWidth;
				var t2 = node2.offsetTop;
				var b2 = node2.offsetTop + node2.offsetHeight;

				if(l1 > r2 || r1 < l2 || t1 > b2 || b1 < t2){
					return false;
				}else{
					return true;
				}
			}
//缓冲运动框架
function startMove(node, json, complete){
	//先清除上个定时器
	clearInterval(node.timer);

	node.timer = setInterval(function(){
		var isEnd = true;//假设都到目标值了
		// 遍历json对象
		for(var attr in json){
			// 判断属性是否透明度
			if(attr == "opacity"){
				var iCur = parseFloat(getStyle(node, attr)) * 100;
			}else{
				var iCur = parseInt(getStyle(node, attr));
			}
			// 目标值减目前值再除以缩放系数
			var speed = (json[attr] - iCur) / 8;
			// 判断速度正负值再取整
			speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);

			iCur += speed;
			if(attr == "opacity"){
				node.style["opacity"] = iCur / 100;
				node.style["filter"] = "alpha(opacity=" + iCur + ")";
			}
			else{
				node.style[attr] = iCur + "px";
			}
			// 判断是否都到目的值
			if(json[attr] != iCur){
				isEnd = false;
			}
		}
		// 所有都到目的值清除定时器并执行回调函数
		if(isEnd){
			clearInterval(node.timer);
			if(complete){
				complete.call(node);
			}
		}
	}, 30);
}
// 匀速运动框架
function line_startMove({node, speed = 5, attr, iTarget, complete}){
			clearInterval(node.timer);

			node.timer = setInterval(function(){
				if(attr == "opacity"){
						var iCur = parseFloat(getStyle(node, attr)) * 100;
					}else{
						var iCur = parseInt(getStyle(node, attr));
					}
				if(iTarget >= iCur){
					speed = Math.abs(speed);
				}else{
					speed = -Math.abs(speed);
				}

				if(Math.abs(iTarget - iCur) <= Math.abs(speed)){
					if(attr == "opacity"){
						node.style["opacity"] = iTarget / 100;
						node.style["filter"] = "alpha(opacity=" + iTarget + ")";
					}else{
						node.style[attr] = iTarget + "px";
					}
					clearInterval(node.timer);
					if(complete){
						complete.call(node);
					}
				}else{
					iCur += speed;
					if(attr == "opacity"){
						node.style["opacity"] = iCur / 100;
						node.style["filter"] = "alpha(opacity=" + iCur + ")";
					}else{
						node.style[attr] = iCur + "px";
					}
				}
			}, 30);
		}
//设置Cookie,获得Cookie,删除Cookie
function setCookie(name, value, expires, path, domain, secure){
	var cookieStr = encodeURIComponent(name) + "=" + encodeURIComponent(value);
	if(expires){
		cookieStr += ";expires=" + numOfDate(expires);
	}
	if(path){
		cookieStr += ";path=" + path;
	}
	if(domain){
		cookieStr += ";domain=" + domain;
	}
	if(secure){
		cookieStr += ";secure";
	}
	document.cookie = cookieStr;
}
function getCookie(name){
	var cookieStr = decodeURIComponent(document.cookie);

	var start = cookieStr.indexOf(name);

	if(start == -1){
		return null;
	}else{
		var end = cookieStr.indexOf(";", start);
		if(end == -1){
			end = cookieStr.length;
		}
	}
	var str = cookieStr.substring(start, end);
	var arr = str.split("=");
	return arr[1];
}
function removeCookie(name){
	document.cookie = encodeURIComponent(name) + "=;expires=" + new Date(0);
}
// 兼容IE的添加事件侦听器与删除事件侦听器
function addEvent(node, eventType, func){
	if(node.addEventListener){
		node.addEventListener(eventType, func, false);
	}else{
		node.attachEvent("on" + eventType, func);
	}
}
function removeEvent(node, eventType, func){
	if(node.removeEventListener){
		node.removeEventListener(eventType, func);
	}else{
		node.detachEvent("on" + eventType, func);
	}
}
//兼容IE的阻止超链接默认行为
function preDef(e){
	if(e.preventDefault){
		e.preventDefault();
	}else{
		e.returnValue = false;
	}
}
//拖拽函数
function drag(node){
	var offsetX = 0;
	var offsetY = 0;
	node.onmousedown = function(ev){
		var e = ev || window.event;
		offsetX = e.clientX - this.offsetLeft;
		offsetY = e.clientY - this.offsetTop;

		document.onmousemove = function(ev){
			var e = ev || window.event;
			node.style.left = e.clientX - offsetX + "px";
			node.style.top = e.clientY - offsetY + "px";
		}
	}
	document.onmouseup = function(){
		document.onmousemove = null;
	}
}
//兼容IE阻止事件冒泡的浏览器写法
function stopBubble(e){
	if(e.cancelBubble){
		e.cancelBubble = true;
	}else{
		e.stopPropagation();
	}
}
//兼容IE的通过类名获取节点的方法
function elementsByClassName(node, className){
	var res = [];
	//1、查找node所有的子节点
	var nodes = node.getElementsByTagName("*");
	for(var i = 0; i < nodes.length; i++){
		if(nodes[i].className == className){
			res.push(nodes[i]);
		}
	}
	return res;
}
//兼容IE的获取当前有效样式的方法
function getStyle(node, styleType){
	return node.currentStyle ? node.currentStyle[styleType] : getComputedStyle(node)[styleType];
}
//返回一个随机颜色的字符串
function randomColor(){
	return "rgba(" + parseInt(Math.random() * 256) + ", " + parseInt(Math.random() * 256) + ", " + parseInt(Math.random() * 256) + ", " + 1 +")";
}
//兼容IE的getElementByClassName方法
function elementsByClassName(node, className) {
	var res = [];
	//1.查找node所有的子节点
	var nodes = node.getElementsByTagName("*");
	for(i = 0; i < node.length; i++){
		if(node[i] == className){
			res.push(nodes[i]);
		}
	}
}

function bubbleSort(arr){
	//决定比较几轮
	for(var i = 0; i < arr.length - 1; i++){
		//决定每一轮比较多少次
		for(var j = 0; j < arr.length - i - 1; j++){
			if(arr[j] > arr[j + 1]){
				var tmp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = tmp;
			}
		}
	}
}

function changeSort(arr){
	for(var i = 0; i < arr.length - 1; i++){
		//次数
		for(var j = i + 1; j < arr.length; j++){
			if(arr[i] > arr[j]){
				var tmp = arr[i];
				arr[i] = arr[j];
				arr[j] = tmp;
			}
		}
	}
}

function noRepeat(arr){
	for(var i = arr.length - 1; i > 0; i--){
		for(var j = i - 1; j >= 0; j--){
			if(arr[i] == arr[j]){
				arr.splice(j, 1);
			}
		}
	}
}

//自定展示当前时间
function showTime(){
	var d = new Date();
	var year = d.getFullYear();
	var month = d.getMonth() + 1;
	var date = d.getDate();

	var week = d.getDay();
	//将数字转成中文
	week = chineseFromNum(week);
				
	var hour = d.getHours();
	var min = d.getMinutes();
	var sec = d.getSeconds();

	return year + "年" + month + "月" + date + "日 星期" + week + " " + doubleNum(hour) + ":" + doubleNum(min) + ":" + doubleNum(sec); 
}

//单位数变双位数
function doubleNum(num){
	if(num < 10){
		return "0" + num;
	}else{
		return num;
	}
}

//将数字转成中文的函数
function chineseFromNum(num){
	switch(num){
		case 0:
			return "日";
			break;
		case 1:
			return "一";
			break;
		case 2:
			return "二";
			break;
		case 3:
			return "三";
			break;
		case 4:
			return "四";
			break;
		case 5:
			return "五";
			break;
		case 6:
			return "六";
			break;
	}
}