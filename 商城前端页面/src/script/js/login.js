$(function(){
    $('#footer').load('footer.html .footer_btm');
    $('#form img').hide();
    $('#form').validate({
        // debug:true,
        rules:{
            username:{

                minlength:6,
                required:true,
                maxlength:20,
                remote:{
                    type:'post',
                    url:'http://127.0.0.1/js1810/bailianshangcheng/h51810/bailianshangcheng/php/login.php',
                    dataType:'json',
                    data:{
                        username:function(){
                            return $('#username').val();
                        },

                    dataFilter: function (data) {　　　　//判断控制器返回的内容
                        console.log(data);
                        if (data == "true") {
                            return true;
                        }
                        else {
                            return false;
                        }
                    }
                }}
            },
            password:{
                required:true,
                minlength:8,
                maxlength:20,
            },
            confirm_password:{
                required:true,
                equalTo:'#password'
            },
            telphone:{
                required:true,
                minlength:11,
                maxlength:11,
                remote:{
                    type:'post',
                    url:'http://127.0.0.1/js1810/bailianshangcheng/h51810/bailianshangcheng/php/login.php',
                    dataType:'json',
                    data:{
                        telphone:function(){
                            return $('#telphone').val();
                        },
                    dataFilter: function (data) {　　　　//判断控制器返回的内容
                        console.log(data);
                        if (data == "true") {
                            return true;
                        }
                        else {
                            return false;
                        }
                    }
                }}
            },
            email:{
                required:true,
                email:true,
                remote:{
                    type:'post',
                    url:'http://127.0.0.1/js1810/bailianshangcheng/h51810/bailianshangcheng/php/login.php',
                    dataType:'json',
                    data:{
                        email:function(){
                            return $('#email').val();
                        },

                    dataFilter: function (data) {　　　　//判断控制器返回的内容
                        console.log(data);
                        if (data == "true") {
                            return true;
                        }
                        else {
                            return false;
                        }
                    }
                }}
            }
        },
        messages:{
            username:{
                required:'用户名不能为空',
                minlength:'用户名不能小于6位字符',
                maxlength:'用户名不能大于20位字符',
                remote:'该用户名已存在，请重新输入'
            },
            password:{
                required:'密码不能为空',
                minlength:'密码不能小于8位',
                maxlength:'密码不能大于20位字符',
            },
            confirm_password:{
                required:'确认不能为空',
                equalTo:'密码不匹配，请重新输入',
            },
            telphone:{
                required:'手机号码不能为空',
                minlength:'手机号码不能小于11位',
                maxlength:'手机号码不能大于11位',
                remote:'该手机号码已存在，请重新输入',
            },
            email:{
                required:'电子邮箱不能为空',
                email:'你输入的电子邮箱格式有误，请重新输入',
                remote:'该电子邮箱已存在。请重新输入'
            },
            agree:'请您阅读并同意'
        },
    　　　
    })

});
     $.validator.setDefaults({
         //添加校验成功后的提示内容
         success: function(label,img){
            //  label.text('√').css('color','green').addClass('valid');
            label.append('<img src="img/v-icon-3.png">');
            //  img.show();
         }});