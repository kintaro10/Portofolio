<?php

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$email_message = "
Name: ".$name."
Email: ".$email."
Message: ".$message."
";
mail("fodil.pro@hotmail.fr", "New Inquiry", $email_message);
header("Location: success.html#contact")

?>
