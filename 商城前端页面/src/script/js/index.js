$(function(){
    //用户登录
    if(getcookie('username')){
        $('.nav_right_top_text_top b').text(getcookie('username'));
        $('.nav_right_top_text_top .nouser').hide();
        $('.nav_right_top_text_top .user').show();
    }else{
        $('.nav_right_top_text_top .nouser').show();
        $('.nav_right_top_text_top .user').hide();
    }
    $('.nav_right_top_text_top .user').on('click',function(){
        if(confirm('你确定要退出吗？')){
        delcookie('username');
        window.location.reload();
        }
    })

    $('.fixed_nav_left_cart').on('click',function(){
        window.location.replace('http://127.0.0.1/js1810/bailianshangcheng/h51810/bailianshangcheng/src/cart.html');
        }
    )
    //头部二级菜单效果
    // $('.top_main_left').hover(function(){
    //     $(this).find('.top_main_left_show').addClass('show')},
    //     function(){
    //      $(this).find('.top_main_left_show').removeClass('show')
    //     });
    // $('.top_main_right li').hover(function(){
    //     $(this).find('div').addClass('show')},
    //     function(){
    //      $(this).find('div').removeClass('show')
    //     });
    //头部二级菜单效果
    $('.top_main_left').hover(function(){
        $(this).find('.top_main_left_show').show()},
        function(){
         $(this).find('.top_main_left_show').hide()
        });
    $('.top_main_right li').hover(function(){
        $(this).find('div').show()},
        function(){
         $(this).find('div').hide()
        });
        console.log($('.top_main_left'))
    //顶部悬浮框效果
    $(window).on('scroll', function() {
        var $top = $(window).scrollTop();
        if($top >= 130) {
            $('.fixed_header').show();
            $('.fixed_header').stop(true).animate({
                top: 0
            },200);
        } else {
            $('.fixed_header').stop(true).animate({
                top: -75
            },200,function(){
                $('.fixed_header').hide();
            });
        }
    });
    //顶部悬浮栏菜单效果
    $('.flnav').hover(function(){
        $('.nav_left').clone(true).appendTo('.flnav');
        $('.flnav .nav_left .right').css('top','60px');
    },function(){
        $('.nav_left').remove('.flnav .nav_left');
    })
    //导航二级菜单效果
    $('.nav_left .left li').hover(function(){
        $('.nav_left .right').addClass('show')
        $('.nav_left .right li').eq($(this).index()).addClass('show')
    },function(){
        $('.nav_left .right').removeClass('show')
        $('.nav_left .right li').eq($(this).index()).removeClass('show')
    })
    $('.nav_left .right li').hover(function(){
        $('.nav_left .right').addClass('show')
        $(this).addClass('show')
    },function(){
        $('.nav_left .right').removeClass('show')
        $(this).removeClass('show')
    })
    //楼梯效果
    $(window).on('scroll',function(){
        var $top = $(window).scrollTop();
        if($top >= 1200) {
            $('.navigation').addClass('show');
        } else {
            $('.navigation').removeClass('show')
        }
        $('.louceng').each(function(index,element){
            var $loucengtop=$(element).offset().top+300;
            if($loucengtop>$top){
                $('.navigation a').removeClass('active');
                $('.navigation a').eq(index).addClass('active');
                return false;
            }
        });
    })
    $('.navigation a').not('#navigation9').on('click',function(){
        $(this).addClass('active').siblings('a').removeClass('active');
        var $top=$('.louceng').eq($(this).index()).offset().top-80;
        $('html,body').animate({
            scrollTop:$top
        });
    });
    $('#navigation9').on('click',function(){
        $('html,body').animate({
            scrollTop:0
        });
    })
    //图片放大效果
    $('.section_1 img,.section_2 img').hover(function(){
        $(this).stop().css({width: "100%",height: "100%",left:"0px",top:"0px"});
        var $width=$(this).width()*1.1;
        var $height=$(this).height()*1.1;
        $(this).animate({
            width:$width,
            height:$height,
            left:"-"+(0.1 * $(this).width())/2+'px',
			top:"-"+(0.1 * $(this).height())/2+'px'
        })
    },function(){
        $(this).stop().animate({
            width:'100%',
            height:'100%',
            left:'0px',
            top:'0px'
        })
    })
    //图片切换
    !function(){
        var $list=$('.section_1 .right ul li');
        var $liwidth=$list.eq(0).width()
        var $num=0;
        $('.section_1 .leftbtn').on('click',function(){
            $num-=2;
            if($num<0){
                $num=0;
            }
            lb();
        })
        $('.section_1 .rightbtn').on('click',function(){
            $num+=2;
            console.log($num);
            if($num>$('.section_1 ul li').size()-6){
                $num=$('.section_1 ul li').size()-6;
            }
            lb();
        })
        function lb(){
            $('.section_1 ul').stop().animate({
                left:-$num*$liwidth,
            },200)
        }
        $('.section_1 .right').hover(function(){
            $('.section_1 .rightbtn').show();
            $('.section_1 .leftbtn').show();
        },function(){
            $('.section_1 .rightbtn').hide();
            $('.section_1 .leftbtn').hide();
        })
    }();
    //轮播图效果
    ;(function($){
        $.fn.lunbo=function(){
            var $box=this.find('.box_lb');
            var $img=this.find('.box_lb .lb li');
            var $btns=this.find('.box_lb .lb_btn li');
            var $ullist=this.find('.box_lb .lb ul');
            var $liwidth=$img.eq(0).width();
            var $num=0;
            var timer=setInterval(function(){
                    var $min=1000;
                    var $max=5000;
                    var $n=parseInt(Math.random()*($max-$min+1)+$min);
                    setTimeout(function(){
                        zidong();
                    },$n)
            },3000);
            // timer=setInterval(function(){
            //     var $min=1000;
            //     var $max=2000;
            //     var $n=parseInt(Math.random()*($max-$min+1)+$min);
            //     setTimeout(function(){
            //         lb();
            //     },$n)
            // },3000);
            $img.eq(0).clone().appendTo($ullist);
            $img.hover(function(){
                clearInterval(timer)
            },function(){
                timer=setInterval(zidong,3000);
            })
            $btns.on('mouseenter',function(){
                $num=$(this).index();
                lb();
                clearInterval(timer)
            })
            function zidong(){;
                lb();
                $num++;
            }
            function lb(){
                $btns.eq($num).css('background','#798899').siblings('li').css('background','#fff');
                $ullist.stop(true).animate({
                    left:-$liwidth*($num)
                },1000,function(){
                if(parseInt($ullist.css('left'))==-$liwidth*($img.size())){
                    $ullist.css('left','0px');
                    $num=0;
                }
                })
                if($num>$btns.size()-1){
                    $btns.eq(0).css('background','#798899').siblings('li').css('background','#fff');
                    $num=0;
                }
            }
        }
    })(jQuery)
    $('.section_2').lunbo();
    $('.section_3').lunbo();
    $('.section_4').lunbo();
    $('.section_5').lunbo();
    $('.section_6').lunbo();
    $('.section_7').lunbo();
    $('.section_8').lunbo();
    $('.section_9').lunbo();
    $('.section_10').lunbo();
    //图片平移效果
    $('.louceng img').not('.louceng .logo img,.box_lb img').hover(function(){
        $(this).stop().animate({
            left:'-10px',
        })
    },function(){
        $(this).stop().animate({
            left:'0px',
        })
    })
    //图片透明效果
    $('.louceng .logo img').hover(function(){
        $(this).stop().animate({
            opacity:0.5
        },200)
    },function(){
        $(this).stop().animate({
            opacity:1
        },200)
    })

    //幻灯片效果
    ;(function($){
        var $box=$('.banner');
        var $img=$('.banner_img li');
        var $left=$('.banner_leftbtn');
        var $right=$('.banner_rightbtn');
        var $btns=$('.banner_circle li');
        var $num=0;
        var $bstop=true;
        var timer=setInterval(zidong,5000)
        $box.hover(function(){
            $left.show();
            $right.show();
            clearInterval(timer)
        },function(){
            $left.hide();
            $right.hide();
            timer=setInterval(zidong,5000)
        })

        $left.on('click',function(){
            $num--;
            lb();
        });
        $right.on('click',function(){
          zidong();
        })
        $btns.on('click',function(){
            $num=$(this).index();
            lb();
        })
        function zidong(){
            if($bstop){
                $bstop=false;
                $num++;
                if($num>$btns.size()-1){
                $btns.eq(0).css('background','#000').siblings('li').css('background','#fff');
                $img.eq(0).show().stop(true).animate({opacity:1}).siblings('li').animate({opacity:0});
            }
            setTimeout(lb,200);
            }
        }
        function lb(){
            $btns.eq($num).css('background','#000').siblings('li').css('background','#fff');
            $img.eq($num).show().stop(true).animate({opacity:1}).siblings('li').animate({opacity:0});
            if($num<0){
                $num=$btns.size()-1
            }else if($num>$btns.size()-1){
                $num=0;
            }
            $bstop=true;
        }
    })(jQuery);
    //数据导入
    !function(){
        //1.拼接数据
        $.ajax({
            url:'http://127.0.0.1/js1810/bailianshangcheng/h51810/bailianshangcheng/php/data.php',
            dataType:'json'
        }).done(function(data){
            var $html='<ul>';
            console.log(data);
            $.each(data,function(index,value){
                $html+=`
                    <li>
                    <div class="like_goods">
                        <div class="img"><a href="http://127.0.0.1/js1810/bailianshangcheng/h51810/bailianshangcheng/src/details.html?sid=${value.sid}" target="_blank"><img class="lazy" data-original="${value.url}" style="height:220px;width:220px" alt=""></a></div>
                        <div class="name"><a href="http://127.0.0.1/js1810/bailianshangcheng/h51810/bailianshangcheng/src/details.html?sid=${value.sid}" target="_blank">${value.title}</a></div>
                        <div class="money">
                            <div>
                            ￥
                            <span>${value.price}</span>
                            
                        </div>
                    </div>
                </div>
            </li>
                `;
             });
            $html+='</ul>';
            $('.data').html($html);
            $(function() {
                $("img.lazy").lazyload({
                    effect: "fadeIn",
                    placeholder:'',
                    failure_limit: 10,
                });
            });
        });

    }();
    //懒加载
    $(function() {
        $("img.lazy").lazyload({
            effect: "fadeIn",
            placeholder:'',
            failure_limit: 10,
        });
    });
})