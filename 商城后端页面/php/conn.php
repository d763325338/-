<?php
	//1.连接数据库--mysql_connect(主机名,用户名,密码);
	header('content-type:text/html;charset=utf-8');
	define('HOST','127.0.0.1');
	define('USERNAME','root');
	define('PASSWORD','123456');//密码是自己数据库的密码。
	$conn=@mysql_connect(HOST,USERNAME,PASSWORD);//@:简单的容错处理。
	if(!$conn){
		die('数据库连接失败'.mysql_error());
		//退出并返回括号里面的内容  mysql_error():报错信息。
	}

	//2.选择数据库,设置字符集
	mysql_select_db('bailian');
	mysql_query('set names utf8');

?>
