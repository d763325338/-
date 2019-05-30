<?php
	//引入数据库连接
	require "conn.php";
	//1.获取前端传入的用户名和密码
	if(isset($_POST['name']) && isset($_POST['password'])){
		$user=$_POST['name'];
		$pass=$_POST['password'];
		$result=mysql_query("select * from admin where name='$user' and password='$pass'");
		if(mysql_fetch_array($result)){
			echo 1;//登陆成功
		}else{
			echo 0;//登陆失败
		}
		}

?>