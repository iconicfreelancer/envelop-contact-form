<?php
/*
    @package envelop Contact Form
*/
$name = strip_tags( $_POST['name'] );
$email = strip_tags( $_POST['email'] );
$message = strip_tags( $_POST['message'] );



$to = 'jacqueshelly@gmail.com'; //Your Email Address
$from = 'Iconic Freelancer'; //Name of Sender
$fromEmail = 'iconicfreelancer@gmail.com';//Email of Sendere

$subject = 'Mail Envelop Contact - ' . $name; //Subject of the Email

$encoding = "utf-8";

 // Preferences for Subject field
$subject_preferences = array(
    "input-charset" => $encoding,
    "output-charset" => $encoding,
    "line-length" => 76,
    "line-break-chars" => "\r\n"
);

//Mail Headers
$header = "Content-type: text/html; charset=".$encoding." \r\n";
    $header .= "From: ".$from." <".$fromEmail."> \r\n";
    $header .= "MIME-Version: 1.0 \r\n";
    $header .= "Content-Transfer-Encoding: 8bit \r\n";
    $header .= "Date: ".date("r (T)")." \r\n";
    $header .= "Reply-To: ".$name." <".$email."> \r\n";
    $header .= iconv_mime_encode("Subject", $subject, $subject_preferences);


if( mail($to, $subject, $message, $header) ):
    echo true;
else:
    echo false;
endif;