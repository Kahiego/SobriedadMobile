 <?php
        $bdd = new PDO('mysql:host=' . "localhost" . ";dbname=" . "db_sobriedad" . ";charset=utf8mb4", "Lecture" , "Lecture");

        $id =$_POST['id'];
        $sql = "UPDATE friend_request SET status = '2' WHERE friendrequest_id = '" . $id . "'";

        $result = $bdd->query($sql);

?>