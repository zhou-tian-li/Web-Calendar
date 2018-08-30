<?php
// List of events
 $json = array();

 // Query that retrieves events
 $requete = "SELECT * FROM evenement ORDER BY id";

 // connection to the database
 try {
 $bdd = mysqli_connect('localhost', 'TianLiZhou', 'calendar', 'LyndaCalendar');
 } catch(Exception $e) {
  exit('Unable to connect to database.');
 }
 // Execute the query
 $result = mysqli_query($bdd, $requete);

 // sending the encoded result to success page
	while ($row = mysqli_fetch_assoc( $result)) {
		$json[] = $row;
	}
	echo json_encode($json);

?>