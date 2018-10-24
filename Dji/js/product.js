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
		$.ajax({
			method: "get",
			url: "../json/index.json",
			success: function(data){
                (function(){
                    var id = $.cookie("product");
                    id = parseInt(id);
                    // 先加载专业版的数据
                    $(".content_main_right_title").html(data.content2_content[id - 1].title);
                    $(".content_main_right_price").find("span").html(dji.price(data.content2_content[id - 1].nprice));

                })();
				//头部2第一个菜单
                var header2_nav_1 = data.header2_nav_1;
                $(".first_nav ul li").eq(0).find("a").css("color", "#1897f2");
                $(".first_nav .first_nav_box").html(`<div class="first_nav_box_son1">
                    <div class="first_nav_box_son1_left">
                        <h2><span>${header2_nav_1[0].title1}</span><a href="#">查看所有</a></h2>
                        <div>
                            <a href="#">
                                <img src="../${header2_nav_1[0].content1.url}" alt="">
                                <p>${header2_nav_1[0].content1.desc}</p>
                            </a>
                            <a href="#">
                                <img src="../${header2_nav_1[0].content2.url}" alt="">
                                <p>${header2_nav_1[0].content2.desc}</p>
                            </a>
                            <a href="#">
                                <img src="../${header2_nav_1[0].content3.url}" alt="">
                                <p>${header2_nav_1[0].content3.desc}</p>
                            </a>
                        </div>
                    </div>
                    <div class="first_nav_box_son1_right">
                        <h2><span>${header2_nav_1[0].title2}</span><a href="#">查看所有</a></h2>
                        <div>
                            <a href="#">
                                <img src="../${header2_nav_1[0].content4.url}" alt="">
                                <p>${header2_nav_1[0].content4.desc}</p>
                            </a>
                            <a href="#">
                                <img src="../${header2_nav_1[0].content5.url}" alt="">
                                <p>${header2_nav_1[0].content5.desc}</p>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="first_nav_box_son2">
                    <div class="first_nav_box_son2_left">
                        <h2><span>${header2_nav_1[0].title3}</span><a href="#">查看所有</a></h2>
                        <div>
                            <a href="#">
                                <img src="../${header2_nav_1[0].content6.url}" alt="">
                                <p>${header2_nav_1[0].content6.desc}</p>
                            </a>
                            <a href="#">
                                <img src="../${header2_nav_1[0].content7.url}" alt="">
                                <p>${header2_nav_1[0].content7.desc}</p>
                            </a>
                            <a href="#">
                                <img src="../${header2_nav_1[0].content8.url}" alt="">
                                <p>${header2_nav_1[0].content8.desc}</p>
                            </a>
                        </div>
                    </div>
                    <div class="first_nav_box_son2_right">
                        <h2><span>${header2_nav_1[0].title4}</span><a href="#">查看所有</a></h2>
                        <div>
                            <a href="#">
                                <img src="../${header2_nav_1[0].content9.url}" alt="">
                                <p>${header2_nav_1[0].content9.desc}</p>
                            </a>
                            <a href="#">
                                <img src="../${header2_nav_1[0].content10.url}" alt="">
                                <p>${header2_nav_1[0].content10.desc}</p>
                            </a>
                        </div>
                    </div>
                </div>`);
                if(!$(".first_nav .first_nav_box .first_nav_box_son1_left h2").find("span").html()){
                    $(".first_nav .first_nav_box .first_nav_box_son1_left h2").find("a").css("display", "none");
                }
                if(!$(".first_nav .first_nav_box .first_nav_box_son1_right h2").find("span").html()){
                    $(".first_nav .first_nav_box .first_nav_box_son1_right h2").find("a").css("display", "none");
                }
                if(!$(".first_nav .first_nav_box .first_nav_box_son2_left h2").find("span").html()){
                    $(".first_nav .first_nav_box .first_nav_box_son2_left h2").find("a").css("display", "none");
                }
                if(!$(".first_nav .first_nav_box .first_nav_box_son2_right h2").find("span").html()){
                    $(".first_nav .first_nav_box .first_nav_box_son2_right h2").find("a").css("display", "none");
                }
                $(".first_nav ul").on("mouseenter", "li a", function(){
                    $(".first_nav ul li a").css("color", "#3b3e40")
                    $(this).css("color", "#1897f2");
                    var html = "";
                    // console.log(1);
                    var index = $(this).parent().index();
                    html = `<div class="first_nav_box_son1">
                        <div class="first_nav_box_son1_left">
                            <h2><span>${header2_nav_1[index].title1}</span><a href="#">查看所有</a></h2>
                            <div>
                                <a href="#">
                                    <img src="../${header2_nav_1[index].content1.url}" alt="">
                                    <p>${header2_nav_1[index].content1.desc}</p>
                                </a>
                                <a href="#">
                                    <img src="../${header2_nav_1[index].content2.url}" alt="">
                                    <p>${header2_nav_1[index].content2.desc}</p>
                                </a>
                                <a href="#">
                                    <img src="../${header2_nav_1[index].content3.url}" alt="">
                                    <p>${header2_nav_1[index].content3.desc}</p>
                                </a>
                            </div>
                        </div>
                        <div class="first_nav_box_son1_right">
                            <h2><span>${header2_nav_1[index].title2}</span><a href="#">查看所有</a></h2>
                            <div>
                                <a href="#">
                                    <img src="../${header2_nav_1[index].content4.url}" alt="">
                                    <p>${header2_nav_1[index].content4.desc}</p>
                                </a>
                                <a href="#">
                                    <img src="../${header2_nav_1[index].content5.url}" alt="">
                                    <p>${header2_nav_1[index].content5.desc}</p>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="first_nav_box_son2">
                        <div class="first_nav_box_son2_left">
                            <h2><span>${header2_nav_1[index].title3}</span><a href="#">查看所有</a></h2>
                            <div>
                                <a href="#">
                                    <img src="../${header2_nav_1[index].content6.url}" alt="">
                                    <p>${header2_nav_1[index].content6.desc}</p>
                                </a>
                                <a href="#">
                                    <img src="../${header2_nav_1[index].content7.url}" alt="">
                                    <p>${header2_nav_1[index].content7.desc}</p>
                                </a>
                                <a href="#">
                                    <img src="../${header2_nav_1[index].content8.url}" alt="">
                                    <p>${header2_nav_1[index].content8.desc}</p>
                                </a>
                            </div>
                        </div>
                        <div class="first_nav_box_son2_right">
                            <h2><span>${header2_nav_1[index].title4}</span><a href="#">查看所有</a></h2>
                            <div>
                                <a href="#">
                                    <img src="../${header2_nav_1[index].content9.url}" alt="">
                                    <p>${header2_nav_1[index].content9.desc}</p>
                                </a>
                                <a href="#">
                                    <img src="../${header2_nav_1[index].content10.url}" alt="">
                                    <p>${header2_nav_1[index].content10.desc}</p>
                                </a>
                            </div>
                        </div>
                    </div>`;
                    $(".first_nav .first_nav_box").html(html);
                    if(!$(".first_nav .first_nav_box .first_nav_box_son1_left h2").find("span").html()){
                        $(".first_nav .first_nav_box .first_nav_box_son1_left h2").find("a").css("display", "none");
                    }
                    if(!$(".first_nav .first_nav_box .first_nav_box_son1_right h2").find("span").html()){
                        $(".first_nav .first_nav_box .first_nav_box_son1_right h2").find("a").css("display", "none");
                    }
                    if(!$(".first_nav .first_nav_box .first_nav_box_son2_left h2").find("span").html()){
                        $(".first_nav .first_nav_box .first_nav_box_son2_left h2").find("a").css("display", "none");
                    }
                    if(!$(".first_nav .first_nav_box .first_nav_box_son2_right h2").find("span").html()){
                        $(".first_nav .first_nav_box .first_nav_box_son2_right h2").find("a").css("display", "none");
                    }
                })

                //头部第二个菜单栏
                var header2_nav_2 = data.header2_nav_2;
                $(".second_nav ul li").eq(0).find("a").css("color", "#1897f2");
                $(".second_nav_box").html(`<p class="second_nav_box_p">${header2_nav_2[0].header.title}</p>
                <div class="second_nav_box_down">
                    <a href="#">
                        <img src="../${header2_nav_2[0].content1.url}" alt="">
                        <p>${header2_nav_2[0].content1.desc}</p>
                    </a>
                    <a href="#">
                        <img src="../${header2_nav_2[0].content2.url}" alt="">
                        <p>${header2_nav_2[0].content2.desc}</p>
                    </a>
                    <a href="#">
                        <img src="../${header2_nav_2[0].content3.url}" alt="">
                        <p>${header2_nav_2[0].content3.desc}</p>
                    </a>
                    <a href="#">
                        <img src="../${header2_nav_2[0].content4.url}" alt="">
                        <p>${header2_nav_2[0].content4.desc}</p>
                    </a>
                </div>`);
                $(".second_nav_box .second_nav_box_p").css({
                        "background-image": `url("../${header2_nav_2[0].header.url}")` ,
                        "background-size": "100% 100%"
                    });
                $(".second_nav ul").on("mouseenter", "li a", function(){
                    $(".second_nav ul li a").css("color", "#3b3e40")
                    $(this).css("color", "#1897f2");
                    var html = "";
                    var index = $(this).parent().index();
                    html = `<p class="second_nav_box_p">${header2_nav_2[index].header.title}</p>
                    <div class="second_nav_box_down">
                        <a href="#">
                            <img src="../${header2_nav_2[index].content1.url}" alt="">
                            <p>${header2_nav_2[index].content1.desc}</p>
                        </a>
                        <a href="#">
                            <img src="../${header2_nav_2[index].content2.url}" alt="">
                            <p>${header2_nav_2[index].content2.desc}</p>
                        </a>
                        <a href="#">
                            <img src="../${header2_nav_2[index].content3.url}" alt="">
                            <p>${header2_nav_2[index].content3.desc}</p>
                        </a>
                        <a href="#">
                            <img src="../${header2_nav_2[index].content4.url}" alt="">
                            <p>${header2_nav_2[index].content4.desc}</p>
                        </a>
                    </div>`;
                    $(".second_nav_box").html(html);
                    $(".second_nav_box .second_nav_box_p").css({
                        "background-image": `url("../${header2_nav_2[index].header.url}")` ,
                        "background-size": "100% 100%"
                    });
                })

			},
			error: function(msg){
				alert("错误代码" + msg);
			}
		});

		// 接收商品详情的JSON
		$.ajax({
			method: "get",
			url: "../json/product.json",
			success: function(data){
				// 邮费
				if(data.zy.zy.oprice){
					var offer = parseInt(data.zy.zy.nprice) - parseInt(data.zy.zy.oprice);
					$(".content_main_right_price").find("del").html("￥" + data.zy.zy.oprice);
					if(data.zy.postage == 0){
						$(".content_main_right_offer").html(`优惠:
        				<span>￥${offer}</span>邮费:
        				<span>免费</span>`)
					}else{
						$(".content_main_right_offer").html(`优惠:
        				<span>￥${offer}</span>邮费:
        				<span>${data.zy.postage}</span>`)
					}
				}else{
					if(data.zy.postage == 0){
						$(".content_main_right_offer").html(`邮费:
        				<span>免费</span>`)
					}else{
						$(".content_main_right_offer").html(`邮费:
        				<span>${data.zy.postage}</span>`)
					}
				}
				// 最低月付
				var spend = parseInt(data.zy.zy.nprice) * 1.1 / 24;
				$(".content_main_right_staging").html(`<span></span>分期最低月付${dji.price(spend.toFixed(2))}起`);
				
				// 描述
				$(".content_main_right_info").find("p").html(data.zy.info_title);

				// info
				for(var i = 0; i < data.zy.info.length; i++){
					$(".content_main_right_info_box div").eq(i).find("i").html(`${data.zy.info_desc[i]}`)
				}
				for(var i = 0; i < data.zy.info.length; i++){
					$(".content_main_right_info_box div").eq(i).find("span").css({
						"background": `url("../images/product/${data.zy.info[i]}")`,
						"background-size": "100% 100%"
					});
				}

				// 页面第一次加载完成时默认套装按钮是专用版的
				(function(){
					$(".content_main_right_suit_choice_button").eq(0).find(".content_main_right_suit_choice_desc").find("header").html(data.zy.zy.title);
					$(".content_main_right_suit_choice_button").eq(1).find(".content_main_right_suit_choice_desc").find("header").html(data.zy.fx.title);
					$(".content_main_right_suit_choice_button").eq(0).find("img").attr("src", `../images/product/${data.zy.zy.img[0]}`);
					$(".content_main_right_suit_choice_button").eq(1).find("img").attr("src", `../images/product/${data.zy.fx.img[0]}`);
					$(".content_main_right_suit_choice_button").eq(0).find(".content_main_right_suit_choice_desc").find(".content_main_right_suit_choice_desc_price").find('span').html(dji.price(data.zy.zy.nprice));
					$(".content_main_right_suit_choice_button").eq(1).find(".content_main_right_suit_choice_desc").find(".content_main_right_suit_choice_desc_price").find("span").html(dji.price(data.zy.fx.nprice));
					$(".content_main_right_suit_choice_button").eq(0).find(".content_main_right_suit_choice_desc").find(".content_main_right_suit_choice_desc_price").find('del').html(dji.price(data.zy.zy.oprice));
					$(".content_main_right_suit_choice_button").eq(1).find(".content_main_right_suit_choice_desc").find(".content_main_right_suit_choice_desc_price").find("del").html(dji.price(data.zy.fx.oprice));
				})();

				// 商品左边图的显示
		        (function(){
		        	for(var i = 0; i < 7; i++){
		        		$(".content_main_left_box_img").find("img").eq(i).attr("src", dji.img_src(data.zy.zy.img[i], "product"));
		        		$(".content_main_left_box_img").find("img").eq(0).css("opacity", 1);

                        $(".content_main_left_box_rightView").find("img").eq(i).attr("src", dji.img_src(data.zy.zy.img[i], "product"));
                        $(".content_main_left_box_rightView").find("img").eq(0).css("opacity", 1);
		        	}
		        	// console.log(dji.img_src(data.zy.zy.img[index], "product"));
		        })()

				// 页面第一次加载完成时默认左边图是专用版的
				for(var i = 0; i < 7; i++){
					$(".content_main_left_box_product").find(".content_main_left_box_product_list")
						.eq(i).find("img").attr("src", dji.img_src(data.zy.zy.img[i], "product"));
				}

				

			},
			error: function(msg){
				alert("错误代码" + msg);
			}
		})

		//菜单栏优惠事件
        $(".header2_nav_last_li").on("mouseenter", function(){
            $(".header2_nav_last_li").find("div").css("display", "block");
            $(".header2_nav_last_li").find("div").stop().animate({opacity: 1});
            // console.log(1);
        });
        $(".header2_nav_last_li").on("mouseleave", function(){
            $(".header2_nav_last_li").find("div").stop().animate({opacity: 0},function(){
                $(".header2_nav_last_li").find("div").css("display", "none");
            })
            // console.log(1);
        });

        // 给头部2的第一个菜单栏加事件
        $(".header2_nav_first_li").on("mouseenter",function(){
            $(".first_nav").css("display", "block");
            $(".first_nav").stop().animate({opacity: 1});
        });
        $(".header2_nav_first_li").on("mouseleave",function(){
            $(".first_nav").stop().animate({opacity: 0},function(){
                $(".first_nav").css("display", "none");
            })
        });

        $(".first_nav").on("mouseenter",function(){
            $(".first_nav").css("display", "block");
            $(".first_nav").stop().animate({opacity: 1});
        });
        $(".first_nav").on("mouseleave",function(){
            $(".first_nav").stop().animate({opacity: 0},function(){
                $(".first_nav").css("display", "none");
            })
        });

        // 给头部2的第二个菜单栏加事件
        $(".header2_nav_second_li").on("mouseenter",function(){
            $(".second_nav").css("display", "block");
            $(".second_nav").stop().animate({opacity: 1});
        });
        $(".header2_nav_second_li").on("mouseleave",function(){
            $(".second_nav").stop().animate({opacity: 0},function(){
                $(".second_nav").css("display", "none");
            })
        });

        $(".second_nav").on("mouseenter",function(){
            $(".second_nav").css("display", "block");
            $(".second_nav").stop().animate({opacity: 1});
        });
        $(".second_nav").on("mouseleave",function(){
            $(".second_nav").stop().animate({opacity: 0},function(){
                $(".second_nav").css("display", "none");
            })
        });

        //版本的点击事件
        $(".content_main_right_version_choice").on("click", "div",function(){
        	$(".content_main_right_version_choice").find("div").attr("class", "");
        	$(this).addClass('content_main_right_version_choice_active');
        });

        //套装的点击事件
        $(".content_main_right_suit_choice").on("click", ".content_main_right_suit_choice_button", function(){
        	$(this).parent().children().attr("class", "content_main_right_suit_choice_button");
        	$(this).addClass('content_main_right_suit_choice_button_active');
        });

        // 判断商品图片此时的位置
        (function(){
        	var referenceBottom = $(".content_main_right_buy").offset().top + $(".content_main_right_buy").height();
        	var curBottom = $(".content_main_left_box").offset().top + $(".content_main_left_box").height();
        	var lastTop = referenceBottom - $(".content_main_left_box").height() - $(".content_main_left").offset().top;
        	if($(document).scrollTop() >= $(".content_main_left").offset().top && $(document).scrollTop() <= (referenceBottom - $(".content_main_left_box").height())){
        		$(".content_main_left_box").css({
        			"position": "fixed",
        			"top": 0
        		});
        	}else if($(document).scrollTop() <= $(".content_main_left").offset().top){
        		$(".content_main_left_box").css({
        			"position": "absolute",
        			"top": 0
        		});
        	}else if($(document).scrollTop() >= (referenceBottom - $(".content_main_left_box").height())){
        		$(".content_main_left_box").css({
        			"position": "absolute",
        			"top": lastTop
        		});
        	}
        })()

        // 商品图片的滚动事件
        $(document).on("scroll", function(){
        	// console.log($(document).scrollTop());
        	var cur = 0;
        	// 参考物的底部离页面顶部距离
        	var referenceBottom = $(".content_main_right_buy").offset().top + $(".content_main_right_buy").height();
        	var curBottom = $(".content_main_left_box").offset().top + $(".content_main_left_box").height();
        	var lastTop = referenceBottom - $(".content_main_left_box").height() - $(".content_main_left").offset().top;
        	if($(document).scrollTop() >= $(".content_main_left").offset().top && $(document).scrollTop() <= (referenceBottom - $(".content_main_left_box").height())){
        		$(".content_main_left_box").css({
        			"position": "fixed",
        			"top": 0
        		});
        	}else if($(document).scrollTop() <= $(".content_main_left").offset().top){
        		$(".content_main_left_box").css({
        			"position": "absolute",
        			"top": 0
        		});
        	}else if($(document).scrollTop() >= (referenceBottom - $(".content_main_left_box").height())){
        		$(".content_main_left_box").css({
        			"position": "absolute",
        			"top": lastTop
        		});
        	}
        });

        // 左边图点击事件
		$(".content_main_left_box_product").on("click", ".content_main_left_box_product_list", function(){
			$(this).parent().children().attr("class", "content_main_left_box_product_list");
			$(this).addClass('content_main_left_box_product_list_active');
			var index = $(".content_main_left_box_product").find(".content_main_left_box_product_list_active")
		        .index();
		    $(".content_main_left_box_img").find("img").stop().animate({opacity: 0, "z-index": 1});
		    $(".content_main_left_box_img").find("img").eq(index).stop().animate({opacity: 1, "z-index": 2});
            $(".content_main_left_box_rightView").find("img").css({opacity: 0, "z-index": 1});
            $(".content_main_left_box_rightView").find("img").eq(index).css({opacity: 1, "z-index": 2});

		});

        // 左边图的放大镜
        (function(){
            var offsetX = $(".content_main_left_box_img").find(".magnifier").outerWidth() / 2;
            var offsetY = $(".content_main_left_box_img").find(".magnifier").outerHeight() / 2;
            $(".content_main_left_box_img").on("mouseover", function(ev){
                $(".content_main_left_box_img").find(".magnifier").css({
                    display: "block"
                })
                $(".content_main_left_box_rightView").css({
                    display: "block"
                })
            })
            $(".content_main_left_box_img").on("mouseout", function(ev){
                $(".content_main_left_box_img").find(".magnifier").css({
                    display: "none"
                })
                $(".content_main_left_box_rightView").css({
                    display: "none"
                })
            })
            $(".content_main_left_box_img").on("mousemove", function(ev){
                var offsetX = ev.pageX - $(this).offset().left - $(".content_main_left_box_img").find(".magnifier").outerWidth() / 2;
                var offsetY = ev.pageY - $(this).offset().top - $(".content_main_left_box_img").find(".magnifier").outerHeight() / 2;

                if(offsetX <= 0){
                    offsetX = 0;
                }else if(offsetX >= $(".content_main_left_box_img").outerWidth() - $(".content_main_left_box_img").find(".magnifier").outerWidth()){
                    offsetX = $(".content_main_left_box_img").outerWidth() - $(".content_main_left_box_img").find(".magnifier").outerWidth();
                }

                if(offsetY <= 0){
                    offsetY = 0;
                }else if(offsetY >= $(".content_main_left_box_img").find("img").outerHeight() - $(".content_main_left_box_img").find(".magnifier").outerHeight()){
                    offsetY = $(".content_main_left_box_img").find("img").outerHeight() - $(".content_main_left_box_img").find(".magnifier").outerHeight();
                }

                $(".content_main_left_box_img").find(".magnifier").css({
                    left: offsetX,
                    top: offsetY
                })

                var rate1 = $(".content_main_left_box_img").find(".magnifier").height() / $(".content_main_left_box_rightView").height();
                var offsetLeft = (-1) * parseInt(offsetX /rate1);
                var offsetTop = (-1) * parseInt(offsetY / rate1);

                $(".content_main_left_box_rightView").find("img").css({
                    left: offsetLeft,
                    top: offsetTop,
                    width: parseInt(595 / rate1),
                    height: parseInt(396 / rate1)
                });
                // console.log(rate1 + "," + rate2);
                
            })
        })()

        // 商品的介绍的三个按钮的滚动效果
        $(document).on("scroll", function(){
        	// console.log($("content_header_wrapper").offset().top);
        	if($(".content_header_wrapper").offset().top <= $(document).scrollTop()){
        		$(".content_header_wrapper_position").css({
        			position: "fixed",
        			top: 0
        		});
        	}else {
        		$(".content_header_wrapper_position").css({
        			position: "absolute",
        			top: 0
        		});
        	}
        });

        // 商品的介绍的三个部分的按钮的点击事件
        $(".content_header_wrapper_position").on("click", "div", function(){
        	$(this).parent().children().attr("class", "");
        	$(this).addClass('content_header_wrapper_position_active');
        	$(".content_bigBox").children('.content_bigBox_content').css("display", "none");
        	if($(this).attr("id") == "content_header_wrapper_position_overview"){
        		$(".content_bigBox").find('.content_overview').css("display", "block")
        	}else if($(this).attr("id") == "content_header_wrapper_position_list"){
        		$(".content_bigBox").find('.content_list').css("display", "block")
        	}else if($(this).attr("id") == "content_header_wrapper_position_problem"){
        		$(".content_bigBox").find('.content_problem').css("display", "block")
        	}
        })

        // 点击选购按钮
        $(".content_main_right_buy").on("click", "button", function(){
            var id = $.cookie("product");
            var first = $.cookie("goods") == null ? true : false;
            if(first){
                $.cookie("goods", `[{id:${id},num:1}]`, {
                    expires: 7,
                    raw: true
                })
            }else{
                var arr = eval($.cookie("goods"));
                var isHas = false;
                for(var i = 0; i < arr.length; i++){
                    if(arr[i].id == id){
                        arr[i].num++;
                        isHas = true;
                        break;
                    }
                }
                if(!isHas){
                    var obj = {id: id, num: 1};
                    arr.push(obj);
                }
                $.cookie("goods", JSON.stringify(arr), {
                    expires: 7,
                    raw: true
                });
            }
            alert("选购成功");
            return false;
        });

        // 点击购物车按钮
        $(".header1_right").find("li").eq(0).find("a").click(function(){
            location.assign("order.html");
            return false;
        })


	}

	return {
		main: main
	}
});