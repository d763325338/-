<?php

	// //引入数据库连接
	 require "conn.php";
	 //一.确认点击的是提交按钮
	if(isset($_POST['submit'])){
	//1.接收前端表单提交过来的数据,加入数据库。
	$tel=$_POST['telphone'];
	$user=$_POST['username'];
	$pass=sha1($_POST['password']);
	$email=$_POST['email'];
	//2.将数据通过insert语句插入数据库中
	$query="insert user values(NULL,'$tel','$user','$pass','$email',NOW())";
	mysql_query($query);

	//3.跳转到登陆页面
	header('location:http://127.0.0.1/js1810/bailianshangcheng/h51810/bailianshangcheng/src/registor.html');
}
	//后端获取手机号码和数据库进行匹配 --sql语句
	if(isset($_POST['telphone'])){
		$telphone=$_POST['telphone'];
		$result=mysql_query("select * from user where telphone='$telphone'");//如果存在，返回结果。
		//如果$result存在值，tel已经存在
		if(mysql_fetch_array($result)){//存在
			exit( "false" );
		}else{//不存在
			exit( "true" );
		}
	}
	//后端获取用户名和数据库进行匹配 --sql语句
	if(isset($_POST['username'])){
		$username=$_POST['username'];
		$result=mysql_query("select * from user where username='$username'");//如果存在，返回结果。
		//如果$result存在值，username已经存在
		if(mysql_fetch_array($result)){//存在
			exit( "false" );
		}else{//不存在
			exit( "true" );
		}
	}
	//后端获取电子邮箱和数据库进行匹配 --sql语句
	if(isset($_POST['email'])){
		$email=$_POST['email'];
		$result=mysql_query("select * from user where email='$email'");//如果存在，返回结果。
		//如果$result存在值，email已经存在
		if(mysql_fetch_array($result)){//存在
			exit( "false" );
		}else{//不存在
			exit( "true" );
		}
	}

?>