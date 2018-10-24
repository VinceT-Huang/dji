require.config({
    paths: {
        "jquery": "jquery-1.11.3"
    }
})

define(["jquery"], function($){
    function main(){
        // index的ajax
        $.ajax({
            method: "get",
            url: "../json/index.json",
            success: function(data){
                // 接收内容1的头部的信息
                var content1_header = data.content2_header;
                var html1 = `<a class="shadow" href="#">
                    <div class="content_header_a_left">
                        <img src="../${content1_header.img}" alt="">
                    </div>
                    <div class="content_header_a_right">
                        <h1>${content1_header.title}</h1>
                        <p>${content1_header.desc}</p>
                        <h5>${content1_header.price}</h5>
                    </div>
                </a>
                <div></div>`;
                $(".content1_header").html(html1);
                $(".content1_header").children("div").css({
                    "background-image": `url("../${content1_header.bg}")`,
                    "background-size": "100% 100%"
                });

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

        // showProduct的ajax
        $.ajax({
            method: "get",
            url: "../json/showProduct.json",
            success: function(data){
                // 接收内容1的内容的信息
                var content1_content = data.content1_content;
                var html = "";
                for(var i = 0; i < 4; i++){
                    html += `<a class="shadow" href="#">
                        <div class="content1_content_a_left">
                            <img src="${content1_content[i].cover}" alt="">
                            <img src="${content1_content[i].hover}" alt="">
                        </div>
                        <div class="content1_content_a_right">
                            <div>
                                <h1>${content1_content[i].title}</h1>
                                <p>${content1_content[i].desc}</p>
                                <h5><span>${content1_content[i].nprice}</span><del>${content1_content[i].oprice}</del></h5><span></span>
                            </div>
                        </div>
                    </a>`
                }
                $(".content1_content").html(html);

                // 接收内容2的内容1 的信息
                var content2_content1 = data.content2_content1;
                // console.log(content2_content1);
                var html2 = "";
                for(var i = 0; i < 7; i++){
                    html2 += `<a class="shadow" href="#">
                        <div class="content_content_a_cover">
                            <img src="${content2_content1[i].cover}" alt="">
                        </div>
                        <div class="content_content_a_hover">
                            <p>${content2_content1[i].hover_desc}</p>
                        </div>
                        <h2>${content2_content1[i].title}</h2>
                        <p class="p"><span>${content2_content1[i].nprice}</span><del>${content2_content1[i].oprice}</del></p>
                    </a>`;
                }
                $(".content2_content").html(html2);
                for(var i = 0; i < 7; i++){
                    $(".content2_content a").eq(i).find(".content_content_a_hover").css({
                        "background-image": `url("${content2_content1[i].hover}")`,
                        "background-size": "100% 100%"
                    });
                }

                // 给内容2菜单添加点击事件
                $(".content2 .content2_nav ul").on("click", "li", function(){
                    $(".content2 .content2_nav ul").find("li").attr("class", "");
                    $(this).addClass('content2_nav_ul_li_active');
                    var index = $(this).index() + 1;
                    var content2_content = null;
                    switch (index) {
                        case 1:
                            content2_content = data.content2_content1
                            break;
                        case 2:
                            content2_content = data.content2_content2
                            break;
                        case 3:
                            content2_content = data.content2_content3
                            break;
                        case 4:
                            content2_content = data.content2_content4
                            break;
                        default:
                            alert("错误");
                            break;
                    }
                    var html2 = "";
                    for(var i = 0; i < 7; i++){
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
                    for(var i = 0; i < 7; i++){
                        $(".content2_content a").eq(i).find(".content_content_a_hover").css({
                            "background-image": `url("${content2_content[i].hover}")`,
                            "background-size": "100% 100%"
                        });
                    }

                });

            },
            error: function(msg){
                alert("错误代码" + msg);
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

        // 给内容一加事件
        $(".content1 .content1_content").on("mouseenter", ".shadow", function(){
            $(this).find("img").eq(0).stop().animate({
                opacity: 0
            });
            $(this).find("img").eq(1).stop().animate({
                opacity: 1
            });
        });
        $(".content1 .content1_content").on("mouseleave", ".shadow", function(){
            $(this).find("img").eq(0).stop().animate({
                opacity: 1
            });
            $(this).find("img").eq(1).stop().animate({
                opacity: 0
            });
        });

        // 给内容2的content加事件
        $(".content2 .content2_content").on("mouseenter", ".shadow", function(){
            if($(this).find(".content_content_a_hover").find('p').html()){
                // console.log($(this).find(".content_content_a_hover").find('p').html());
                $(this).find(".content_content_a_cover").stop().animate({opacity: 0});
                $(this).find(".content_content_a_hover").stop().animate({opacity: 1});
            }
        })
        $(".content2 .content2_content").on("mouseleave", ".shadow", function(){
            $(this).find(".content_content_a_cover").stop().animate({opacity: 1});
            $(this).find(".content_content_a_hover").stop().animate({opacity: 0});
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
    }

    return {
        main: main
    }
})
