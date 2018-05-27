<?php
  $mailTo("anthony@hungrybunny.com.sa");
  $subj = "User Feedback";
  $name = "user_name";
  $email = "user_email";
  $message = "message";
  mail($mailTo, $subj, $name, $email, $message);
?>
