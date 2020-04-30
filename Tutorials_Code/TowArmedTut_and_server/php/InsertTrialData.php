<?php
include 'connectDB.php';
                       

$ID = stripslashes(htmlspecialchars($_POST['ID']));
$TrialNum = stripslashes(htmlspecialchars($_POST['TrialNum']));
$Choice = stripslashes(htmlspecialchars($_POST['Choice']));
$Side = stripslashes(htmlspecialchars($_POST['Side']));

$RT = stripslashes(htmlspecialchars($_POST['RT']));
$Amb = stripslashes(htmlspecialchars($_POST['Amb']));
$Risk = stripslashes(htmlspecialchars($_POST['Risk']));
$Catch = stripslashes(htmlspecialchars($_POST['Catch']));
$Sum = stripslashes(htmlspecialchars($_POST['Sum']));
$Time = stripslashes(htmlspecialchars($_POST['Time'])); 



$stmt = $db->prepare("INSERT INTO survey_experiment VALUE(?,?,?,?,?,?,?,?,?,?)");

$stmt->bind_param("siiiiiiiii", $ID,$TrialNum,$Choice,$Side,$RT,$Amb,$Risk,$Catch,$Sum,$Time);
$stmt->execute();
$err = $stmt->errno ;
$data[] = array(
      'ErrorNo' => $err,
    );
$stmt->close();
 $db->close();
echo json_encode($data);
 ?>
