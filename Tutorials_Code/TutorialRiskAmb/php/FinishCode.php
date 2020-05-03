<?php


include 'connectDB.php';
$ID = stripslashes(htmlspecialchars($_POST['SubID']));




$stmt = $db->prepare("INSERT INTO survey_finished VALUE(?,NOW())");
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
