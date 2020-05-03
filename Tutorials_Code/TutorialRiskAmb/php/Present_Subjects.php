<?php

include 'connectDB.php';

$query = "select * from survey_finished;";
 if ($result = mysqli_query($db, $query)){
                
           

 Print "<table border cellpadding=3>"; 
 
  while ($row = mysqli_fetch_array($result))  {
   echo "<th>ID:</th> <td>".$row['ID'] . "</td> "; 
 echo "<th>Time:</th> <td>".$row['time'] . " </td>";

 echo " <td><a href=Export_Table.php?SubCode=".$row['ID'] .">Export Data</a></td>". "</tr>"; 
      
                    } 

                    echo "</table>";
 }
          
  mysqli_free_result($result);
            mysqli_close($db);

?>


