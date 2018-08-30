<!DOCTYPE html>
<html >
<head>
	<meta charset="UTF-8" />
	<title>Login Lynda Calendar</title>
	
	<link rel="stylesheet" type="text/css" href="../css/MyCalendarTestCss.css"> 

</head>

<body>
	
	<header>
		<h1>Lynda Calendar</h1>
	</header>
	
	<h2>Welcome to the Lynda reservation calendar !</h2>
	
	<section>
			<div class="loginPage">
				<form action="" method="POST" class="loginForm">
							<h3>Login</h3>
							
							<label>Email: </label>
								<input type="email" name="email" id="email_id" /> </br></br>
								
							<label>Password: </label>
								<input type="password" name="password" id="password_id" /> </br></br>
							
							<input type="submit" value="Login" name="submit" class="Buttons" id="loginButton" />
				</form>
			</div>
					
			<?php
				if(isset($_POST["submit"]))
				{
					if(!empty($_POST['email']) && !empty($_POST['password'])) 
					{
						$userEmail=$_POST['email'];
						$pass=$_POST['password'];

						$con=mysqli_connect('localhost', 'TianLiZhou', 'calendar') or die(mysqli_error());
						mysqli_select_db($con,'LyndaCalendar') or die("cannot select DB");

						$query=mysqli_query($con,"SELECT * FROM lyndaUserTable WHERE Email='".$userEmail."' AND Password='".$pass."'");
						$numrows=mysqli_num_rows($query);
						if($numrows!=0)
						{
							while($row=mysqli_fetch_assoc($query))
							{
								$dbuserEmail=$row['Email'];
								$dbpassword=$row['Password'];
								$dbuserName=$row['UserName'];
							}

							if($userEmail == $dbuserEmail && $pass == $dbpassword)
							{
							session_start();
								$_SESSION['session_user']=$dbuserName;

								/* Redirect browser */
								header("Location: ../index.php");
							}
						} 
						else 
						{
							echo "</br><span class='errorMsg'>Invalid username or password!</span>";
						}
					}
					else
					{
						echo "</br><span class='errorMsg'>All fields are required!</span>";
					}
				}
				
			?>
	</section></br></br>
	
	<footer>
	</footer>
	
</body>
</html>