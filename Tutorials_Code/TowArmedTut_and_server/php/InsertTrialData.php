<?php
include 'connectDB.php';
                       

$ID = stripslashes(htmlspecialchars($_POST['ID']));
$TrialNum = stripslashes(htmlspecialchars($_POST['TrialNum']));
$Choice = stripslashes(htmlspecialchars($_POST['Choice']));
$Side = stripslashes(htmlspecialchars($_POST['Side']));
$Reward = stripslashes(htmlspecialchars($_POST['Reward']));
$RT = stripslashes(htmlspecialchars($_POST['RT']));
$Time = stripslashes(htmlspecialchars($_POST['Time'])); 



$stmt = $db->prepare("INSERT INTO two_arm_tut_data VALUE(?,?,?,?,?,?,?)");

$stmt->bind_param("siiiiii", $ID,$TrialNum,$Choice,$Side,$Reward,$RT,$Time);
$stmt->execute();
$err = $stmt->errno ;
$data[] = array(
      'ErrorNo' => $err,
    );
$stmt->close();
 $db->close();
echo json_encode($data);
 ?>