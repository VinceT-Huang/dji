require.config({
    paths: {
        "jquery": "jquery-1.11.3",
        "jquery-cookie": "jquery.cookie"
    },
    shim: {
        "jquery-cookie": ["jquery"]
    }
})

define(["jquery", "jquery-cookie"], function($){
    function main(){
        //给content1插数据
        $.ajax({
            type: "post",
            url: "json/index.json",
            success: function(data){
                var arr = data.content1;
                var html = "";
                for(var i = 0; i < 3; i++){
                    html += `<a class="content1_a shadow" href="#">
                        <div></div>
                        <img src="${arr[i].img1}" alt="">
                        <img src="${arr[i].img2}" alt="">
                        <h1>${arr[i].title}</h1>
                        <p>${arr[i].desc1}</p>
                        <p>${arr[i].desc2}</p>
                        <p>${arr[i].price}</p>
                    </a>`
                }
                for(var i = 3; i < 5; i++){
                    html += `<a class="shadow" href="#">
                        <h2>${arr[i].desc1}<br>
                            ${arr[i].desc2}
                        </h2>
                    </a>`
                }
                $(".content1").html(html);
                for(var i = 0; i < 3; i++){
                    $(".content1 a").eq(i).find("div").css("background", `url(\"${arr[i].bg}\") no-repeat`).css("background-size", "100% 100%");
                }
                for(var i = 3; i < 5; i++){
                    $(".content1 a").eq(i).css("background", `url(\"${arr[i].bg}\") no-repeat`).css("background-size", "100% 100%");
                }

                // 接收内容2的头部的信息
                var content2_header = data.content2_header;
                var html1 = `<a class="shadow" href="#">
                    <div class="content_header_a_left">
                        <img src="${content2_header.img}" alt="">
                    </div>
                    <div class="content_header_a_right">
                        <h1>${content2_header.title}</h1>
                        <p>${content2_header.desc}</p>
                        <h5>${content2_header.price}</h5>
                    </div>
                </a>
                <div></div>`;
                $(".content2_header").html(html1);
                $(".content2_header").children("div").css({
                    "background-image": `url(\"${content2_header.bg}\")`,
                    "background-size": "100% 100%"
                });

                // 接收内容2的内容
                var content2_content = data.content2_content;
                var html2 = "";
                for(var i = 0; i < 8; i++){
                    html2 += `<a class="shadow" href="#">
                        <div class="content_content_a_cover">
                            <img src="${content2_content[i].cover}" alt="">
                        </div>
                        <div class="content_content_a_hover">
                            <p>${content2_content[i].hover_desc}</p>
                        </div>
                        <h2>${content2_content[i].title}</h2>
                        <p class="p"><span>${content2_content[i].nprice}</span><del>${content2_content[i].oprice}</del></p>
                    </a>`;
                }
                $(".content2_content").html(html2);
                for(var i = 0; i < 8; i++){
                    $(".content2_content a").eq(i).find(".content_content_a_hover").css({
                        "background-image": `url("${content2_content[i].hover}")`,
                        "background-size": "100% 100%"
                    });
                    $(".content2_content a").eq(i).attr("id", content2_content[i].id);
                }

                // 接收内容3的头部的信息
                var content3_header = data.content3_header;
                var html3 = `<a class="shadow" href="#">
                    <div class="content_header_a_left">
                        <img src="${content3_header.img}" alt="">
                    </div>
                    <div class="content_header_a_right">
                        <h1>${content3_header.title}</h1>
                        <p>${content3_header.desc}</p>
                        <h5>${content3_header.price}</h5>
                    </div>
                </a>
                <div></div>`;
                $(".content3_header").html(html3);
                $(".content3_header").children("div").css({
                    "background-image": `url(\"${content3_header.bg}\")`,
                    "background-size": "100% 100%"
                });

                // 接收内容3的内容
                var content3_content = data.content3_content;
                var html4 = "";
                for(var i = 0; i < 8; i++){
                    html4 += `<a class="shadow" href="#">
                        <div class="content_content_a_cover">
                            <img src="${content3_content[i].cover}" alt="">
                        </div>
                        <div class="content_content_a_hover">
                            <p>${content3_content[i].hover_desc}</p>
                        </div>
                        <h2>${content3_content[i].title}</h2>
                        <p class="p"><span>${content3_content[i].nprice}</span><del>${content3_content[i].oprice}</del></p>
                    </a>`;
                }
                $(".content3_content").html(html4);
                for(var i = 0; i < 8; i++){
                    $(".content3_content a").eq(i).find(".content_content_a_hover").css({
                        "background-image": `url("${content3_content[i].hover}")`,
                        "background-size": "100% 100%"
                    });
                }

                // 接收内容4的头部的信息
                var content4_header = data.content4_header;
                var html5 = `<a class="shadow" href="#">
                    <div class="content_header_a_left">
                        <img src="${content4_header.img}" alt="">
                    </div>
                    <div class="content_header_a_right">
                        <h1>${content4_header.title}</h1>
                        <p>${content4_header.desc}</p>
                        <h5>${content4_header.price}</h5>
                    </div>
                </a>
                <div></div>`;
                $(".content4_header").html(html5);
                $(".content4_header").children("div").css({
                    "background-image": `url(\"${content4_header.bg}\")`,
                    "background-size": "100% 100%"
                });

                // 接收内容4的内容
                var content4_content = data.content4_content;
                var html6 = "";
                for(var i = 0; i < 8; i++){
                    html6 += `<a class="shadow" href="#">
                        <div class="content_content_a_cover">
                            <img src="${content4_content[i].cover}" alt="">
                        </div>
                        <div class="content_content_a_hover">
                            <p>${content4_content[i].hover_desc}</p>
                        </div>
                        <h2>${content4_content[i].title}</h2>
                        <p class="p"><span>${content4_content[i].nprice}</span><del>${content4_content[i].oprice}</del></p>
                    </a>`;
                }
                $(".content4_content").html(html6);
                for(var i = 0; i < 8; i++){
                    $(".content4_content a").eq(i).find(".content_content_a_hover").css({
                        "background-image": `url("${content4_content[i].hover}")`,
                        "background-size": "100% 100%"
                    });
                }

                // 接收内容5的头部的信息
                var content5_header = data.content5_header;
                var html7 = `<a class="shadow" href="#">
                    <div class="content_header_a_left">
                        <img src="${content5_header.img}" alt="">
                    </div>
                    <div class="content_header_a_right">
                        <h1>${content5_header.title}</h1>
                        <p>${content5_header.desc}</p>
                        <h5>${content5_header.price}</h5>
                    </div>
                </a>
                <div></div>`;
                $(".content5_header").html(html7);
                $(".content5_header").children("div").css({
                    "background-image": `url(\"${content5_header.bg}\")`,
                    "background-size": "100% 100%"
                });
                // 接收内容5的内容
                var content5_content = data.content5_content;
                var html8 = "";
                for(var i = 0; i < 4; i++){
                    html8 += `<a class="shadow" href="#">
                        <div class="content_content_a_cover">
                            <img src="${content5_content[i].cover}" alt="">
                        </div>
                        <div class="content_content_a_hover">
                            <p>${content5_content[i].hover_desc}</p>
                        </div>
                        <h2>${content5_content[i].title}</h2>
                        <p class="p"><span>${content5_content[i].nprice}</span><del>${content5_content[i].oprice}</del></p>
                    </a>`;
                }
                $(".content5_content").html(html8);
                for(var i = 0; i < 4; i++){
                    $(".content5_content a").eq(i).find(".content_content_a_hover").css({
                        "background-image": `url("${content5_content[i].hover}")`,
                        "background-size": "100% 100%"
                    });
                }

                // 接收内容6的头部的信息
                var content6_header = data.content6_header;
                var html9 = `<a class="shadow" href="#">
                    <div class="content_header_a_left">
                        <img src="${content6_header.img}" alt="">
                    </div>
                    <div class="content_header_a_right">
                        <h1>${content6_header.title}</h1>
                        <p>${content6_header.desc}</p>
                        <h5>${content6_header.price}</h5>
                    </div>
                </a>
                <div></div>`;
                $(".content6_header").html(html9);
                $(".content6_header").children("div").css({
                    "background-image": `url(\"${content6_header.bg}\")`,
                    "background-size": "100% 100%"
                });
                // 接收内容6的内容
                var content6_content = data.content6_content;
                var html10 = "";
                for(var i = 0; i < 8; i++){
                    html10 += `<a class="shadow" href="#">
                        <div class="content_content_a_cover">
                            <img src="${content6_content[i].cover}" alt="">
                        </div>
                        <div class="content_content_a_hover">
                            <p>${content6_content[i].hover_desc}</p>
                        </div>
                        <h2>${content6_content[i].title}</h2>
                        <p class="p"><span>${content6_content[i].nprice}</span><del>${content6_content[i].oprice}</del></p>
                    </a>`;
                }
                $(".content6_content").html(html10);
                for(var i = 0; i < 8; i++){
                    $(".content6_content a").eq(i).find(".content_content_a_hover").css({
                        "background-image": `url("${content6_content[i].hover}")`,
                        "background-size": "100% 100%"
                    });
                }

                // 接收内容7的头部的信息
                var content7_header = data.content7_header;
                var html11 = `<a class="shadow" href="#">
                    <div class="content_header_a_left">
                        <img src="${content7_header.img}" alt="">
                    </div>
                    <div class="content_header_a_right">
                        <h1>${content7_header.title}</h1>
                        <p>${content7_header.desc}</p>
                        <h5>${content7_header.price}</h5>
                    </div>
                </a>
                <div></div>`;
                $(".content7_header").html(html11);
                $(".content7_header").children("div").css({
                    "background-image": `url(\"${content7_header.bg}\")`,
                    "background-size": "100% 100%"
                });
                // 接收内容7的内容
                var content7_content = data.content7_content;
                var html12 = "";
                for(var i = 0; i < 8; i++){
                    html12 += `<a class="shadow" href="#">
                        <div class="content_content_a_cover">
                            <img src="${content7_content[i].cover}" alt="">
                        </div>
                        <div class="content_content_a_hover">
                            <p>${content7_content[i].hover_desc}</p>
                        </div>
                        <h2>${content7_content[i].title}</h2>
                        <p class="p"><span>${content7_content[i].nprice}</span><del>${content7_content[i].oprice}</del></p>
                    </a>`;
                }
                $(".content7_content").html(html12);
                for(var i = 0; i < 8; i++){
                    if(content7_content[i].hover){
                        $(".content7_content a").eq(i).find(".content_content_a_hover").css({
                            "background-image": `url("${content7_content[i].hover}")`,
                            "background-size": "100% 100%"
                        });
                    }else{
                        $(".content7_content a").eq(i).find(".content_content_a_hover").css({
                            "background-image": `url("${content7_content[i].hover}")`,
                            "background-size": "100% 100%"
                        });
                        $(".content7_content a").eq(i).find(".content_content_a_hover").attr("isBg","1");
                    }
                }

                // 接收内容8的内容
                var content8_content = data.content8_content;
                var html13 = "";
                for(var i = 0; i < 4; i++){
                    html13 += `<a class="shadow" href="#">
                        <div class="content_content_a_cover">
                            <img src="${content8_content[i].cover}" alt="">
                        </div>
                        <div class="content_content_a_hover">
                            <p>${content8_content[i].hover_desc}</p>
                        </div>
                        <h2>${content8_content[i].title}</h2>
                        <p class="p"><span>${content8_content[i].nprice}</span><del>${content8_content[i].oprice}</del></p>
                    </a>`;
                }
                $(".content8_content").html(html13);
                for(var i = 0; i < 4; i++){
                    if(content8_content[i].hover){
                        $(".content8_content a").eq(i).find(".content_content_a_hover").css({
                            "background-image": `url("${content8_content[i].hover}")`,
                            "background-size": "100% 100%"
                        });
                    }else{
                        $(".content8_content a").eq(i).find(".content_content_a_hover").css({
                            "background-image": `url("${content8_content[i].hover}")`,
                            "background-size": "100% 100%"
                        });
                        $(".content8_content a").eq(i).find(".content_content_a_hover").attr("isBg","1");
                    }
                }

                //头部2第一个菜单
                var header2_nav_1 = data.header2_nav_1;
                $(".first_nav ul li").eq(0).find("a").css("color", "#1897f2");
                $(".first_nav .first_nav_box").html(`<div class="first_nav_box_son1">
                    <div class="first_nav_box_son1_left">
                        <h2><span>${header2_nav_1[0].title1}</span><a href="#">查看所有</a></h2>
                        <div>
                            <a href="#">
                                <img src="${header2_nav_1[0].content1.url}" alt="">
                                <p>${header2_nav_1[0].content1.desc}</p>
                            </a>
                            <a href="#">
                                <img src="${header2_nav_1[0].content2.url}" alt="">
                                <p>${header2_nav_1[0].content2.desc}</p>
                            </a>
                            <a href="#">
                                <img src="${header2_nav_1[0].content3.url}" alt="">
                                <p>${header2_nav_1[0].content3.desc}</p>
                            </a>
                        </div>
                    </div>
                    <div class="first_nav_box_son1_right">
                        <h2><span>${header2_nav_1[0].title2}</span><a href="#">查看所有</a></h2>
                        <div>
                            <a href="#">
                                <img src="${header2_nav_1[0].content4.url}" alt="">
                                <p>${header2_nav_1[0].content4.desc}</p>
                            </a>
                            <a href="#">
                                <img src="${header2_nav_1[0].content5.url}" alt="">
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
                                <img src="${header2_nav_1[0].content6.url}" alt="">
                                <p>${header2_nav_1[0].content6.desc}</p>
                            </a>
                            <a href="#">
                                <img src="${header2_nav_1[0].content7.url}" alt="">
                                <p>${header2_nav_1[0].content7.desc}</p>
                            </a>
                            <a href="#">
                                <img src="${header2_nav_1[0].content8.url}" alt="">
                                <p>${header2_nav_1[0].content8.desc}</p>
                            </a>
                        </div>
                    </div>
                    <div class="first_nav_box_son2_right">
                        <h2><span>${header2_nav_1[0].title4}</span><a href="#">查看所有</a></h2>
                        <div>
                            <a href="#">
                                <img src="${header2_nav_1[0].content9.url}" alt="">
                                <p>${header2_nav_1[0].content9.desc}</p>
                            </a>
                            <a href="#">
                                <img src="${header2_nav_1[0].content10.url}" alt="">
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
                    var index = $(this).parent().index();
                    html = `<div class="first_nav_box_son1">
                        <div class="first_nav_box_son1_left">
                            <h2><span>${header2_nav_1[index].title1}</span><a href="#">查看所有</a></h2>
                            <div>
                                <a href="#">
                                    <img src="${header2_nav_1[index].content1.url}" alt="">
                                    <p>${header2_nav_1[index].content1.desc}</p>
                                </a>
                                <a href="#">
                                    <img src="${header2_nav_1[index].content2.url}" alt="">
                                    <p>${header2_nav_1[index].content2.desc}</p>
                                </a>
                                <a href="#">
                                    <img src="${header2_nav_1[index].content3.url}" alt="">
                                    <p>${header2_nav_1[index].content3.desc}</p>
                                </a>
                            </div>
                        </div>
                        <div class="first_nav_box_son1_right">
                            <h2><span>${header2_nav_1[index].title2}</span><a href="#">查看所有</a></h2>
                            <div>
                                <a href="#">
                                    <img src="${header2_nav_1[index].content4.url}" alt="">
                                    <p>${header2_nav_1[index].content4.desc}</p>
                                </a>
                                <a href="#">
                                    <img src="${header2_nav_1[index].content5.url}" alt="">
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
                                    <img src="${header2_nav_1[index].content6.url}" alt="">
                                    <p>${header2_nav_1[index].content6.desc}</p>
                                </a>
                                <a href="#">
                                    <img src="${header2_nav_1[index].content7.url}" alt="">
                                    <p>${header2_nav_1[index].content7.desc}</p>
                                </a>
                                <a href="#">
                                    <img src="${header2_nav_1[index].content8.url}" alt="">
                                    <p>${header2_nav_1[index].content8.desc}</p>
                                </a>
                            </div>
                        </div>
                        <div class="first_nav_box_son2_right">
                            <h2><span>${header2_nav_1[index].title4}</span><a href="#">查看所有</a></h2>
                            <div>
                                <a href="#">
                                    <img src="${header2_nav_1[index].content9.url}" alt="">
                                    <p>${header2_nav_1[index].content9.desc}</p>
                                </a>
                                <a href="#">
                                    <img src="${header2_nav_1[index].content10.url}" alt="">
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
                        <img src="${header2_nav_2[0].content1.url}" alt="">
                        <p>${header2_nav_2[0].content1.desc}</p>
                    </a>
                    <a href="#">
                        <img src="${header2_nav_2[0].content2.url}" alt="">
                        <p>${header2_nav_2[0].content2.desc}</p>
                    </a>
                    <a href="#">
                        <img src="${header2_nav_2[0].content3.url}" alt="">
                        <p>${header2_nav_2[0].content3.desc}</p>
                    </a>
                    <a href="#">
                        <img src="${header2_nav_2[0].content4.url}" alt="">
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
                            <img src="${header2_nav_2[index].content1.url}" alt="">
                            <p>${header2_nav_2[index].content1.desc}</p>
                        </a>
                        <a href="#">
                            <img src="${header2_nav_2[index].content2.url}" alt="">
                            <p>${header2_nav_2[index].content2.desc}</p>
                        </a>
                        <a href="#">
                            <img src="${header2_nav_2[index].content3.url}" alt="">
                            <p>${header2_nav_2[index].content3.desc}</p>
                        </a>
                        <a href="#">
                            <img src="${header2_nav_2[index].content4.url}" alt="">
                            <p>${header2_nav_2[index].content4.desc}</p>
                        </a>
                    </div>`;
                    $(".second_nav_box").html(html);
                    $(".second_nav_box .second_nav_box_p").css({
                        "background-image": `url("${header2_nav_2[index].header.url}")` ,
                        "background-size": "100% 100%"
                    });
                })

            },
            error: function(msg){
                alert("错误代码" + msg)
            }
        });

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
                    $(".banner div a").eq(i-1).attr("class", `banner_a${i}`);
                    $(".banner ul li").eq(i-1).attr("class", "");
                }
                $(".banner div a").eq(iCur).addClass("banner_a_active");
                // console.log(iCur);
                $(".banner div a").eq(iCur).stop().animate({opacity: 1}, 400, "linear");
                $(".banner div a").not(".banner_a_active").stop().animate({opacity: 0}, 400, "linear");
                $(".banner ul li").eq(iCur).addClass("banner_ul_li_active");
                iCur++;
            }
            function resetICur(){
                timer = setInterval(function(){
                    changePic();
                }, 4000);
            }
            resetICur();
            $(".banner .banner_l").on("click", function(){
                iCur-=2;
                clearInterval(timer);
                changePic();
                resetICur();
            });
            $(".banner .banner_r").on("click", function(){
                clearInterval(timer);
                changePic();
                resetICur();
            });
            $(".banner ul").on("click", "li", function(){
                iCur = $(this).index();
                clearInterval(timer);
                changePic();
                resetICur();
                // console.log($(this).index());
            });
            $(".banner div").on("mouseenter", function(){
                clearInterval(timer);
            });
            $(".banner div").on("mouseleave", function(){
                resetICur();
            });
        })();

        // 给content1的前三个a添加事件
        $(".content1").on("mouseenter", ".content1_a", function(ev){
            $(this).find("img").eq(0).stop().animate({opacity: 0});
            $(this).find("img").eq(1).stop().animate({opacity: 1});
            $(this).find("div").stop().animate({opacity: 0});
        })
        $(".content1").on("mouseleave", ".content1_a", function(ev){
            $(this).find("img").eq(0).stop().animate({opacity: 1});
            $(this).find("img").eq(1).stop().animate({opacity: 0});
            $(this).find("div").stop().animate({opacity: 1});
        })

        // 给content2的全部a添加事件
        $(".content2 .content2_content").on("mouseenter", ".shadow", function(){
            $(this).find(".content_content_a_cover").stop().animate({opacity: 0});
            $(this).find(".content_content_a_hover").stop().animate({opacity: 1});
        })
        $(".content2 .content2_content").on("mouseleave", ".shadow", function(){
            $(this).find(".content_content_a_cover").stop().animate({opacity: 1});
            $(this).find(".content_content_a_hover").stop().animate({opacity: 0});
        })
        $(".content2 .content2_content").on("click", ".shadow", function(){
            var id = $(this).attr("id");
            $.cookie("product", id, {
                expires: 7,
                raw: true
            });
            location.assign("html/product.html");

            return false;
        })

        // 给content3的全部a添加事件
        $(".content3 .content3_content").on("mouseenter", ".shadow", function(){
            if($(this).find(".content_content_a_hover").find('p').html()){
                // console.log($(this).find(".content_content_a_hover").find('p').html());
                $(this).find(".content_content_a_cover").stop().animate({opacity: 0});
                $(this).find(".content_content_a_hover").stop().animate({opacity: 1});
            }
        })
        $(".content3 .content3_content").on("mouseleave", ".shadow", function(){
            $(this).find(".content_content_a_cover").stop().animate({opacity: 1});
            $(this).find(".content_content_a_hover").stop().animate({opacity: 0});
        })

        // 给content4的全部a添加事件
        $(".content4 .content4_content").on("mouseenter", ".shadow", function(){
            if($(this).find(".content_content_a_hover").find('p').html()){
                // console.log($(this).find(".content_content_a_hover").find('p').html());
                $(this).find(".content_content_a_cover").stop().animate({opacity: 0});
                $(this).find(".content_content_a_hover").stop().animate({opacity: 1});
            }
        })
        $(".content4 .content4_content").on("mouseleave", ".shadow", function(){
            $(this).find(".content_content_a_cover").stop().animate({opacity: 1});
            $(this).find(".content_content_a_hover").stop().animate({opacity: 0});
        })

        // 给content5的全部a添加事件
        $(".content5 .content5_content").on("mouseenter", ".shadow", function(){
            if($(this).find(".content_content_a_hover").find('p').html()){
                // console.log($(this).find(".content_content_a_hover").find('p').html());
                $(this).find(".content_content_a_cover").stop().animate({opacity: 0});
                $(this).find(".content_content_a_hover").stop().animate({opacity: 1});
            }
        })
        $(".content5 .content5_content").on("mouseleave", ".shadow", function(){
            $(this).find(".content_content_a_cover").stop().animate({opacity: 1});
            $(this).find(".content_content_a_hover").stop().animate({opacity: 0});
        })

        // 给content6的全部a添加事件
        $(".content6 .content6_content").on("mouseenter", ".shadow", function(){
            if($(this).find(".content_content_a_hover").find('p').html()){
                // console.log($(this).find(".content_content_a_hover").find('p').html());
                $(this).find(".content_content_a_cover").stop().animate({opacity: 0});
                $(this).find(".content_content_a_hover").stop().animate({opacity: 1});
            }
        })
        $(".content6 .content6_content").on("mouseleave", ".shadow", function(){
            $(this).find(".content_content_a_cover").stop().animate({opacity: 1});
            $(this).find(".content_content_a_hover").stop().animate({opacity: 0});
        })

        // 给content7的全部a添加事件
        $(".content7 .content7_content").on("mouseenter", ".shadow", function(){
            if(!$(this).find(".content_content_a_hover").attr("isBg")){
                // console.log($(this).find(".content_content_a_hover").attr("isBg"));
                $(this).find(".content_content_a_cover").stop().animate({opacity: 0});
                $(this).find(".content_content_a_hover").stop().animate({opacity: 1});
            }
        })
        $(".content7 .content7_content").on("mouseleave", ".shadow", function(){
            $(this).find(".content_content_a_cover").stop().animate({opacity: 1});
            $(this).find(".content_content_a_hover").stop().animate({opacity: 0});
        })

        // 给content7的全部a添加事件
        $(".content8 .content8_content").on("mouseenter", ".shadow", function(){
            if(!$(this).find(".content_content_a_hover").attr("isBg")){
                console.log($(this).find(".content_content_a_hover").attr("isBg"));
                $(this).find(".content_content_a_cover").stop().animate({opacity: 0});
                $(this).find(".content_content_a_hover").stop().animate({opacity: 1});
            }
        })
        $(".content8 .content8_content").on("mouseleave", ".shadow", function(){
            $(this).find(".content_content_a_cover").stop().animate({opacity: 1});
            $(this).find(".content_content_a_hover").stop().animate({opacity: 0});
        })

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

        // 给Mavic跳转
        $(".product_nav").find('a').eq(1).click(function(){
            location.assign("html/showProduct.html");
        })

        // 给登录注册跳转
        $(".header1_right").find("li").eq(1).find("a").click(function(){
            location.assign("html/loginAndRegister.html");
            return false;
        })
    }

    return {
        main: main
    }
})
