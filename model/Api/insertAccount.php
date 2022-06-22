<?php
	$CN=mysqli_connect("localhost","root","");
	$DB=mysqli_select_db($CN,"db_sobriedad");

	$EncodedData = file_get_contents('php://input');
	$DecodedData = json_decode($EncodedData);


	$Username=$DecodedData['Username'];
	$Mail=$DecodedData['Mail'];
	$Password=$DecodedData['Password'];
	$Langue =$DecodedData['langue'];

	$lastname=$DecodedData['Lastname'];
	$Firstname=$DecodedData['Firstname'];

	$IQ="Insert Into account(username,mail,password,langue,role) Values('$Username','$Mail','$Password','$Langue','1')";
	$R=mysqli_query($CN,$IQ);
	$IQ="Insert Into user(lastname,firstname,account_id) Values('$lastname','$Firstname',(Select Max(account_id) From account))";
	$R=mysqli_query($CN,$IQ);

	If($R){
		$Message = "Votre Compte à Bien été enregistré";
	}
	else
	{
		$Message ="Erreur Lors De L'inscription";
	}
	echo($Message);
	//$Response[]=array("Message"=>$Message)
	//echo json_encode($Response);
?>