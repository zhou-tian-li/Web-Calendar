<?php 
	session_start();
	if(!isset($_SESSION["session_user"]))
	{
		header("location:php/login.php");
	} 
	else {
?>



	<!DOCTYPE html>
	<html >
	<head>
		<meta charset="UTF-8" />
		<title>LyndaCalendar</title>
		
		<link rel="stylesheet" type="text/css" href="css/MyCalendarTestCss.css"> 

		<link href='fullcalendar/fullcalendar.css' rel='stylesheet' />
		<link href='fullcalendar/fullcalendar.print.css' rel='stylesheet' media='print' />
		<script src='fullcalendar/lib/moment.min.js'></script>
		<script src='fullcalendar/lib/jquery.min.js'></script>
		<script src='fullcalendar/lib/jquery-ui.custom.min.js'></script>
		<script src='fullcalendar/fullcalendar.min.js'></script>
		
		<script type="text/javascript" src="js/MyCalendarTestJs.js"></script>  
		
		<link rel="stylesheet" href="js/jquery-ui-1.11.4.custom/jquery-ui.css">
		<link rel="stylesheet" href="js/jquery-ui-1.11.4.custom/jquery-ui.theme.css">
		<script src="js/jquery-ui-1.11.4.custom/jquery-ui.js"></script>
	</head>

	<body>
		
		<div class="darkBackground"></div>

		<header>
			<h1>Lynda Calendar</h1>
		</header>
		
		<div class="sub-title-container">
			<h2 class="sub-title">Hi <span class="nameOfUser"><?=$_SESSION['session_user'];?></span> ! Welcome to the Lynda reservation calendar !</h2>

			<a href="php/logout.php"><input type="button" class="Buttons" id="logoutButton" value="Logout"/> </a>
		</div>	
		
		<section>
				<div id='calendar'></div>

				<div id="event_create_container" title="Create">
					<form>
								<h2>Add a reservation</h2>
								
								<label>Name: </label> 
									<?=$_SESSION['session_user'];?></br></br>
									<input type="text" name="name" id="name_id" value="<?=$_SESSION['session_user'];?>" />
									
								<label>Date: </label>
									<span id="date_holder1"></span>  </br></br>
									
								<label>Start Time: </label>
									<span id="start_holder1"></span>  </br></br>
								
								<label>End Time: </label> 
									<span id="end_holder1"></span>  </br></br>
					</form>
				</div>
				
				<div id="event_changeDate_container" title="Edit">
					<form>
								<h2>Change Date</h2>
								
								<span id="name_holder2"></span>, are you sure you want to change your reservation date to </br> </br>
									
								<label>Date: </label>
									<span id="date_holder2"></span>  </br></br>
									
								<label>Start Time: </label>
									<span id="start_holder2"></span>  </br></br>
								
								<label>End Time: </label> 
									<span id="end_holder2"></span>  </br></br>
					</form>
				</div>	

				<div id="event_resize_container" title="Edit">
					<form>
								<h2>Modify duration</h2>
								
								<span id="name_holder3"></span>, are you sure you want to change your ending time to the following time</br> </br>
									
								<label>Date: </label>
									<span id="date_holder3"></span>  </br></br>
									
								<label>Start Time: </label>
									<span id="start_holder3"></span>  </br></br>
								
								<label id="resizeLabel">End Time: </label> 
									<span id="end_holder3"></span>  </br></br>
					</form>
				</div>	
		
				
				<div id="event_info_container" title="Info">
						<form>
									<h2>Reservation Infos</h2>
									
									<label>Name: </label> 
										<span id="name_holder4"></span>  </br> </br>
										
									<label>Date: </label>
										<span id="date_holder4"></span>  </br></br>
										
									<label>Start Time: </label>
										<span id="start_holder4"></span>  </br></br>
									
									<label>End Time: </label> 
										<span id="end_holder4"></span>  </br></br>
										
									<div> * You can drag you reservation to another date or resize it.</div>
						</form>
				</div>

		</section>
		
		</br>
		</br>
		
		<footer>
		</footer>
		
	</body>
	</html>



<?php
	}
?>