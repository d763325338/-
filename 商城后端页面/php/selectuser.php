<?php
require "conn.php";
//查询用户名
	if(isset($_POST['name'])){
		//1.接收前端表单提交过来的数据,加入数据库。
		$name=$_POST['name'];
		//2.将数据通过insert语句插入数据库中
		$query="select * from user where username like '%".trim($name)."%'";
        $result=mysql_query($query);
        $datapic=array();//新建一个数组
        for($i=0;$i<mysql_num_rows($result);$i++){
            $datapic[$i]=mysql_fetch_array($result,MYSQL_ASSOC);
        }
        echo json_encode($datapic);
	 }
     if(isset($_POST['sid'])){
		//1.接收前端表单提交过来的数据,加入数据库。
		$sid=$_POST['sid'];
		//2.将数据通过insert语句插入数据库中
		$query="select * from user where sid='$sid'";
        $result=mysql_query($query);
        $datapic=array();//新建一个数组
        for($i=0;$i<mysql_num_rows($result);$i++){
            $datapic[$i]=mysql_fetch_array($result,MYSQL_ASSOC);
        }
        echo json_encode($datapic);
	 }
?>