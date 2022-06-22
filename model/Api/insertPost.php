<?php
	$CN=mysqli_connect("localhost","root","");
	$DB=mysqli_select_db($CN,"db_sobriedad");

	$account_id=$_POST['account_id'];
	$categorie_id=$_POST['categorie_id'];
	$title=$_POST['title'];
	$message =$_POST['message,'];
	$post_picture=$_POST['post_picture'];

	$IQ="INSERT INTO post (account_id,categorie_id,title,message,post_picture) VALUES (account_id, categorie_id, title, message,post_picture)";
	$R=mysqli_query($CN,$IQ);
	
	If($R){
		$Message = "Votre Post à bien été publier";
	}
	else
	{
		$Message ="Erreur Lors De La Publication";
	}
	echo($Message);
	//$Response[]=array("Message"=>$Message)
	//echo json_encode($Response);
?>