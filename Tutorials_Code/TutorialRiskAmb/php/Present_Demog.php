<?php
include 'connectDB.php';

$query = "SELECT  * FROM survey_demog ;";

 if ($result = mysqli_query($db, $query)){                      
$pasajeros = '';

  while ($row = mysqli_fetch_array($result))  {
         
       
        $pasajeros .= $row["ID"] . ",".$row["Responses"] ."\r\n"; //note the comma here
        
                    } 

 }

$filename = "pasajeros_" . date("Y-m-d_H-i"); 
header("Content-type: application/vnd.ms-excel");
header("Content-disposition: csv" . date("Y-m-d") . ".csv");
header("Content-disposition: filename=SurveyDemog.csv");
 echo $pasajeros;
  mysqli_free_result($result);

   mysqli_close($db);
   
?>