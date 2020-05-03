<?php


$SUBCODE = stripslashes(htmlspecialchars($_POST['thisCode']));
$ID = stripslashes(htmlspecialchars($_POST['ID']));


include 'connectDB.php';


$query = mysqli_query($db, "SELECT * FROM survey_subcode WHERE subcode='".$SUBCODE."'");



if (mysqli_num_rows($query) > 0) {

 $db->close();
    $data[] = array(
      'ErrorNo' => 8,
    ); 

   echo json_encode($data);
   
}else {
$stmt2 = $db->prepare("INSERT INTO survey_subcode VALUE(?,NOW(),?)");
$stmt2->bind_param("ss", $SUBCODE,$ID);
$stmt2->execute();
$err = $stmt2->errno ;
$data[] = array(
      'ErrorNo' => $err,
    );
$stmt2->close();
 $db->close();
echo json_encode($data);
    exit;
    
     };
 ?>
