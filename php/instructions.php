

<?php
	// Values received via ajax
	$id = $_POST['id'];
	$title = $_POST['title'];
	$start = $_POST['startDB'];
	$end = $_POST['endDB'];

	$instruction= $_POST['instruction'];

	
	// connection to the database
	try {
		$bdd = mysqli_connect('localhost','TianLiZhou', 'calendar', 'LyndaCalendar');
	} 
	catch(Exception $e) 
	{
		exit('Unable to connect to database.');
	}


	// add the records
	if($instruction == "adding")
	{
		$sql = "INSERT INTO evenement (title, start, end) VALUES ('$title', '$start', '$end')";
	}
	 // update the records
	if($instruction == "updating")
	{
		$sql = "UPDATE evenement SET title='$title', start='$start', end='$end' WHERE id='$id'";
	}
	// delete the records
	if($instruction == "deleting")
	{
		$sql = "DELETE FROM evenement WHERE id = '$id'";
	}


	mysqli_query($bdd,$sql) or die (mysqli_error($bdd));

?>

