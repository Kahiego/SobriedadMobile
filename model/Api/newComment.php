 <?php
       $bdd = new PDO('mysql:host=' . "localhost" . ";dbname=" . "db_sobriedad" . ";charset=utf8mb4", "Lecture" , "Lecture");

       $account_id =$_POST['account_id'];
       $POST =$_POST['POST'];
       $MESSAGE =$_POST['MESSAGE'];

       $req = $bdd->prepare('INSERT INTO comments (account_id, post_id, message) VALUES (?, ?, ?)');
       $req -> execute(array($account_id, $POST, $MESSAGE));

?>