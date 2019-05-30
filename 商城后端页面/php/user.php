<?php
	require "conn.php";

	//删除用户名
	if(isset($_POST['username'])){
		//1.接收前端表单提交过来的数据,加入数据库。
		$username=$_POST['username'];
		//2.将数据通过insert语句插入数据库中
		$query="delete from user where username='$username'";
		mysql_query($query);
	$result=mysql_query($query);
	}

	if(isset($_POST['usernames'])){
		//1.接收前端表单提交过来的数据,加入数据库。
		$usernames=$_POST['usernames'];
		//2.将数据通过insert语句插入数据库中
		$query="delete from user where username in ($usernames)";
		mysql_query($query);
	$result=mysql_query($query);
	}
	//查询用户名
	// if(isset($_POST['name'])){
	// 	//1.接收前端表单提交过来的数据,加入数据库。
	// 	$name=$_POST['name'];
	// 	//2.将数据通过insert语句插入数据库中
	// 	$query="select * from user where username='$name'";
	// 	mysql_query($query);
	// =mysql_query($query);
	// echo json_encode($result);
	// }else{
		//3.执行sql语句，产生结果
	$query="select * from user";
	$result=mysql_query($query);
	$datapic=array();//新建一个数组
	for($i=0;$i<mysql_num_rows($result);$i++){
		$datapic[$i]=mysql_fetch_array($result,MYSQL_ASSOC);
	}

	echo json_encode($datapic);
	// }
?>