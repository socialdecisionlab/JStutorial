<?php
include 'connectDB.php';

$Subject = stripslashes(htmlspecialchars($_GET['SubCode']));
$query = "SELECT  * FROM survey_experiment WHERE ID= '". $Subject ."' ;";

 if ($result = mysqli_query($db, $query)){                      

$pasajeros = "id,trialnum,choice,side,rt,amb,risk,catch,sum,time"."\r\n";

  while ($row = mysqli_fetch_array($result))  {
        $pasajeros .= $row["id"] .",".$row["trialnum"] .",".$row["choice"] .",".$row["side"] .",".$row["rt"] . ",".$row["amb"].  ",". $row["risk"]  . 
            ",".$row["catch"].  ",".$row["sum"] .",".$row["time"]."\r\n"; //note the comma here
                    } 
 }
$filename = "pasajeros_" . date("Y-m-d_H-i"); 
header("Content-type: application/vnd.ms-excel");
header("Content-disposition: csv" . date("Y-m-d") . ".csv");
header("Content-disposition: filename=RiskAmb_" . $Subject . ".csv");
 echo $pasajeros;
  mysqli_free_result($result);
   mysqli_close($db);          
?>