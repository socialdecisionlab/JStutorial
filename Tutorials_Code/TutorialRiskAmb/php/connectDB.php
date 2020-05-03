<?php


$database="experiment1";
$host="localhost";
$user="wampuser";
$password="turhturh";



$db = new mysqli($host, $user, $password, $database);

if (mysqli_connect_errno()) {
   printf("DB error: %s", mysqli_connect_error());
   exit();
}