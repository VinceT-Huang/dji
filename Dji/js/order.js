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

define(["dji","jquery","jquery-cookie"],function(dji, $){
	function main(){
		// 加载数据
		(function(){
			var arr = eval($.cookie("goods"));
			// console.log(arr);
			if(arr.length){
				$.ajax({
					method: "get",
					url: "../json/index.json",
					success: function(data){
						var content = data.content2_content;
						// console.log(content);
						for(var i = 0; i < arr.length; i++){
							var id = parseInt(arr[i].id);
								$(".content_box").append(`<div id="${id}" class="content_product">
						<div class="content_product_img">
							<img src="../${content[id - 1].cover}" alt="">
						</div>
						<div class="content_product_title">
							<a href="#">${content[id - 1].title}</a>
							<p>发货时间：订单付款后1个工作日。</p>
						</div>
						<div class="content_product_price">
							${dji.price((parseInt(content[id - 1].nprice)).toFixed(2))}
						</div>
						<div class="content_product_num">
							<button class="content_product_num_reduce">-</button><input type="text" readonly="true" value="${arr[i].num}"><button class="content_product_num_add">+</button>
						</div>
						<div class="content_product_sum">
							${dji.price((parseInt(content[id - 1].nprice) * parseInt(arr[i].num)).toFixed(2))}
						</div>
						<div class="content_product_clear">
							<span>1</span>
						</div>
					</div>`);
								
						}


						// 动态改变总价
						var yigong = 0;
						for(var i = 0; i < content.length; i++){
							for(var j = 0; j < arr.length; j++){
								if(content[i].id == arr[j].id){
									// console.log(arr[j].id);
									// var id1 = parseInt(arr[j].id);
									var num = parseInt(arr[j].num);

									yigong += num * parseInt(content[i].nprice);
								}
							}
						}
						$(".content_action_right h4").find("span").html(`${dji.price(yigong.toFixed(2))}`);
					
						// 按钮加的事件
						$(".content_box").on("click", ".content_product_num_add", function(){
							var value = parseInt($(this).prev().val()) + 1;
							var price1, sum1;
							var id1 = parseInt($(this).parent().parent().attr("id"));
							$(this).prev().val(value);
							for(var i = 0; i < content.length; i++){
								if(content[i].id == id1){
									price1 = parseInt(content[i].nprice);
									break;
								}
							}
							sum1 = value * price1;
							$(this).parent().next().html(dji.price(sum1.toFixed(2)));

							//改变小计的价格
							var sum2 = $(".content_action_right h4").find("span").html();
							sum2 = parseInt(sum2.substring(1));
							sum2 += price1;
							$(".content_action_right h4").find("span").html(dji.price(sum2.toFixed(2)));
						
							// 改cookie的数据
							for(var i = 0; arr.length; i++){
								if(arr[i].id == id1){
									arr[i].num = value;
									break;
								}
							}
							$.cookie("goods", JSON.stringify(arr), {
			                    expires: 7,
			                    raw: true
			                });
						})

						// 按钮减的事件
						$(".content_box").on("click", ".content_product_num_reduce", function(){
							var value = parseInt($(this).next().val()) - 1;
							var price1, sum1;
							var id1 = parseInt($(this).parent().parent().attr("id"));
							var sum2 = $(".content_action_right h4").find("span").html();
							sum2 = parseInt(sum2.substring(1));
							// 根据ID找到对应商品的单价
							for(var i = 0; i < content.length; i++){
								if(content[i].id == id1){
									price1 = parseInt(content[i].nprice);
									break;
								}
							}
							if(value == 0){
								value = 1;
								//改变小计的价格
								sum2 = sum2;
							}else{
								sum2 -= price1;
							}
							$(this).next().val(value);

							// 单项商品的总计
							sum1 = value * price1;
							$(this).parent().next().html(dji.price(sum1.toFixed(2)));

							$(".content_action_right h4").find("span").html(dji.price(sum2.toFixed(2)));
							
							// 改cookie的数据
							for(var i = 0; arr.length; i++){
								if(arr[i].id == id1){
									arr[i].num = value;
									break;
								}
							}
							$.cookie("goods", JSON.stringify(arr), {
			                    expires: 7,
			                    raw: true
			                });
						})
					},
					error: function(msg){
						alert("错误" + msg);
					}
				})
			}
			// console.log(arr);
		})();


		// 继续购物跳转
		$(".content_final_right").find("button").eq(0).on("click", function(){
			location.assign("../index.html");
		})

	}

	return {
		main: main
	}
})