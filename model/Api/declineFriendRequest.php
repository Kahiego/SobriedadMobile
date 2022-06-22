 <?php
        $bdd = new PDO('mysql:host=' . "localhost" . ";dbname=" . "db_sobriedad" . ";charset=utf8mb4", "Lecture" , "Lecture");

        $id =$_POST['id'];

        $sql = "DELETE FROM friend_request WHERE friendrequest_id = '" . $values['id'] . "'";

        $result = $bdd->query($sql);

?>