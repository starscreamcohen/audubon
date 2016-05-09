// Contact subject
$subject ="$subject"; 
// Details
$message="$comment";
 
// Mail of sender
$mail_from="$mail"; 
// From 
$header="from: $name <$mail_from>";
 
// Enter your email address
$to ='benjamin.cohen86@gmail.com';
 
$send_contact=mail($to,$subject,$message,$header);
 
// Check, if message sent to your email 
// display message "We've recived your information"
if($send_contact){
echo "We've recived your contact information";
}
else {
echo "ERROR";
}
?>