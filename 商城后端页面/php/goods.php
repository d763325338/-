<?php
	require "conn.php";

	//删除商品
	if(isset($_POST['sid'])){
		//1.接收前端表单提交过来的数据,加入数据库。
		$sid=$_POST['sid'];
		//2.将数据通过insert语句插入数据库中
		$query="delete from goods where sid='$sid'";
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

	$query="select * from goods";
	$result=mysql_query($query);
	$datapic=array();//新建一个数组
	for($i=0;$i<mysql_num_rows($result);$i++){
		$datapic[$i]=mysql_fetch_array($result,MYSQL_ASSOC);
	}
	echo json_encode($datapic);
	// }
?>