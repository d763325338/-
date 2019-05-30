$(function(){
    $('#footer').load('footer.html .footer_btm');
$('.login_btn').on('click',function(){
    $.ajax({
        type:'post',
        url:'http://127.0.0.1/js1810/bailianshangcheng/h51810/bailianshangcheng/php/registor.php',
        data:{
            username:$('.username').val(),
            password:$('.password').val()
    },
    dataType:'json'
    }).done(function(data){
        console.log(data)
        if(!data){
            alert('用户名或密码错误，请重新输入');
            $('.username').val('');
            $('.password').val('');
        }else{
            addcookie('username',$('.username').val());
            alert('登陆成功');
            location.href='http://127.0.0.1/js1810/bailianshangcheng/h51810/bailianshangcheng/src/index1.html';
        }
    })
})

})