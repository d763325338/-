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
$sid=$_POST['sid'];
    $query="update goods set title='$title',url='$url',urls='$urls',price='$price',sailnumber='$sailnumber',starttime='$starttime',endtime='$endtime' where sid='$sid'";
mysql_query($query);
echo mysql_query($query1);
}
?>