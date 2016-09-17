<?php

if(isset($_POST['submit'])){
	$to = "southcoastmusicanddesign@gmail.com";
	$from = $_POST['email'];
	$name = $_POST['name'];
	$subject = "Form submission";
	$message = $_POST['comments'];

	$headers = "From:" . $from;
	mail($to, $subject, $message, $headers);
}

?>
