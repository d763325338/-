$(function(){
    $('#footer').load('footer.html');
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
        $('.fixed_nav_left_cart').on('click',function(){
            window.location.replace('http://127.0.0.1/js1810/bailianshangcheng/h51810/bailianshangcheng/src/cart.html');
            }
        )
    //倒计时
    function time() {
        var futuretime = new Date('2019-6-10 16:00:00');
        var nowtime = new Date();
        var sec = parseInt((futuretime - nowtime) / 1000);
        var day = parseInt(sec / 86400);
        var hour = parseInt(sec % 86400 / 3600);
        var min = parseInt(sec % 3600 / 60);
        var sec = sec % 60;
        var sec1 = parseInt(sec / 10);
        var sec2 = parseInt(sec % 10);
        var min1 = parseInt(min / 10);
        var min2 = parseInt(min % 10);
        var hour1 = parseInt(hour / 10);
        var hour2 = parseInt(hour % 10);
        var span = document.querySelectorAll('.product_time span');
        span[0].innerHTML = day;
        span[1].innerHTML = hour1 + '' + hour2;
        span[2].innerHTML = min1 + '' + min2;
        span[3].innerHTML = sec1 + '' + sec2;
    }
    time();
    setInterval(function () {
        time();
    }, 1000)

    //数据导入
    !function() {
	//1.获取sid
	var picid = location.search.substring(1).split('=')[1];
	//2.将当前的id传给后端获取对应的数据
	$.ajax({
		url: 'http://127.0.0.1/js1810/bailianshangcheng/h51810/bailianshangcheng/php/details.php',
		data: {
			sid: picid
		},
		dataType: 'json'
	}).done(function(data) {//data:后端返回的和id对应的数据
		$('.big_img').attr('src', data.url);
		$('.small_img img').attr('src', data.url);
		$('.small_img img').attr('sid', data.sid);
		$('.product_name h1').html(data.title);
		$('.price span').html(data.price);
		var arr = data.urls.split(',');
		var str = '';
		$.each(arr, function(index, value) {
			str += '<li><img src="' + value + '"/></li>';
		});
		$('.items ul').html(str);
    });
    //3.放大镜效果
    $('.small_fd').width($('.small_img').width()*$('.big_fd').width()/$('.big_img').width());
    $('.small_fd').height($('.small_img').height()*$('.big_fd').height()/$('.big_img').height());
    var bili = $('.big_img').width() / $('.small_img').width();
    $('.small_img').hover(function(){
        $('.small_fd').css('visibility','visible');
        $('.big_fd').css('visibility','visible');
        $(this).on('mousemove',function(ev){
            var $left=ev.pageX-$('.product_img').offset().left-$('.small_fd').width()/2;
            var $top=ev.pageY-$('.product_img').offset().top-$('.small_fd').height()/2;
            if($left<0){
                $left=0;
            }else if($left>=$('.small_img').width()-$('.small_fd').width()){
                $left=$('.small_img').width()-$('.small_fd').width();
            }
            if($top<0){
                $top=0;
            }else if($top>=$('.small_img').height()-$('.small_fd').height()){
                $top=$('.small_img').height()-$('.small_fd').height();
            }
            $('.small_fd').css('left',$left);
            $('.small_fd').css('top',$top);
            $('.big_img').css('left',-$left*bili);
            $('.big_img').css('top',-$top*bili);
        });
    },function(){
        $('.small_fd').css('visibility','hidden');
        $('.big_fd').css('visibility','hidden');
    });
    //点击小图切换
    $('.items ul').on('click','li',function(){
        var $imgurl=$(this).find('img').attr('src');
        $('.small_img img').attr('src',$imgurl);
        $('.big_img').attr('src',$imgurl);
    });
    //点击箭头切换图片
    !function(){
        var $list=$('.items ul li');
        var $liwidth=$list.eq(0).width()
        var $num=0;
        $('.list_img .l').on('click',function(){
            $num--;
            if($num<0){
                $num=0;
            }
            lb();
        })
        $('.list_img .r').on('click',function(){
            $num++;
            if($num>$('.items ul li').size()-4){
                $num=$('.items ul li').size()-4;
            }
            lb();
        })
        function lb(){
            $('.items ul').stop().animate({
                left:-$num*$liwidth,
            },200)
        }
    }();
    //添加商品数量
    $('#reduce').on('click',function(){
        $num=$('#product_num').val();
        $num--;
        if($num<1){
            $num=1;
        }
        $('#product_num').val($num)
    })
    $('#add').on('click',function(){
        $num=$('#product_num').val();
        $num++;
        $('#product_num').val($num)
    })
    //添加购物车
    !function(){
        var arrsid = []; //商品的sid
        var arrnum = []; //商品的数量
        function cookietoarray() {
            if(getcookie('cookiesid') && getcookie('cookienum')) {//判断商品是第一次存还是多次存储
                arrsid = getcookie('cookiesid').split(','); //cookie商品的sid
                arrnum = getcookie('cookienum').split(','); //cookie商品的num
            }
        }

        //2.有了上面的方法，可以点击加入购物车按钮判断商品是否是第一次还是多次。

        $('#addcart').on('click', function() { //点击加入购物车按钮。
            //location.reload(true);
            //判断当前的商品sid是否存在购物车(cookie)
            //判断当前的按钮对应的商品的sid和取出的cookie里面的sid进行比较

            //获取当前的按钮对应的商品的sid
            var $sid = $(this).parents('.product').find('.small_img img').attr('sid');
            console.log($sid)
            cookietoarray();//获取已经存在的cookie值。

            if($.inArray($sid, arrsid) != -1) { //商品存在，数量叠加
                //先取出cookie中的对应的数量值+当前添加的数量值，添加到对应的cookie中。
                var num = parseInt(arrnum[$.inArray($sid, arrsid)]) + parseInt($('#product_num').val());
                arrnum[$.inArray($sid, arrsid)] = num;
                addcookie('cookienum', arrnum.toString(), 10); //数组存入cookie

            } else { //不存在，第一次添加。将商品的id和数量存入数组，再存入cookie.
                arrsid.push($sid); //将当前的id存入数组
                addcookie('cookiesid', arrsid.toString(), 10); //数组存入cookie
                arrnum.push($('#product_num').val());
                addcookie('cookienum', arrnum.toString(), 10); //数组存入cookie
            }
        });
    }();
}();
})

