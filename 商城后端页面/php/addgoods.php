<?php
 require "conn.php";
 //一.确认点击的是提交按钮
if(isset($_POST['submit'])){
//1.接收前端表单提交过来的数据,加入数据库。
$title=$_POST['title'];
$url=$_POST['url'];
$urls=$_POST['urls'];
$price=$_POST['price'];
$sailnumber=$_POST['sailnumber'];
$starttime=$_POST['starttime'];
$endtime=$_POST['endtime'];
//2.将数据通过insert语句插入数据库中
$query="insert goods values(NULL,'$title','$url','$urls','$price','$sailnumber','$starttime','$endtime')";
mysql_query($query);
echo true;
}
?>