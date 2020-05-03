<?php
include 'connectDB.php';

$ID = stripslashes(htmlspecialchars($_POST['ID']));
$Responses = stripslashes(htmlspecialchars($_POST['Responses']));


$stmt = $db->prepare("INSERT INTO survey_demog VALUE(?,?,NOW())");
$stmt->bind_param("ss", $ID,$Responses );
$stmt->execute();
$err = $stmt->errno ;
$data[] = array(
      'ErrorNo' => $err,
    );
$stmt->close();
 $db->close();
echo json_encode($data);
 ?>