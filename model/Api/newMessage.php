<?php
       $bdd = new PDO('mysql:host=' . "localhost" . ";dbname=" . "db_sobriedad" . ";charset=utf8mb4", "Lecture" , "Lecture");

       $sender_id =$_POST['sender_id'];
       $receiver_id =$_POST['receiver_id'];
       $pm_picture =$_POST['pm_picture'];
       $pm_message =$_POST['pm_message'];

       $req = $bdd->prepare('INSERT INTO private_message (sender_id, receiver_id, pm_picture, pm_message) VALUES (?, ?, ?, ?)');
       $req -> execute(array($sender_id, $receiver_id, $pm_picture, $pm_message));
?>