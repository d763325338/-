<?php
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
echo true;
}
?>