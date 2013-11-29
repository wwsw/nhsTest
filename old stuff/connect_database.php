<?php

header('Access-Control-Allow-Origin: *');

$server = $_POST['serer'];
$username = $_POST['username'];
$password = $_POST['password'];

$link = mysql_connect('localhost', $username, $password);
if (!$link) {
	die('Could not connect: ' . mysql_error());
}
echo "Connected successfully";
mysql_close($link);
?>