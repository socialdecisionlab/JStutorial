<?php

include 'connectDB.php';
$ID = stripslashes(htmlspecialchars($_POST['ID']));

$stmt = $db->prepare("INSERT INTO two_arm_tut_finished VALUE(?,NOW())");
$stmt->bind_param("s", $ID );
$stmt->execute();
$err = $stmt->errno ;
$data[] = array(
      'ErrorNo' => $err,
    );
$stmt->close();
 $db->close();
echo json_encode($data);
 ?>