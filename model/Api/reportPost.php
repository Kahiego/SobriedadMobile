 <?php
        $bdd = new PDO('mysql:host=' . "localhost" . ";dbname=" . "db_sobriedad" . ";charset=utf8mb4", "Lecture" , "Lecture");

        $id =$_POST['id'];
        $sql = "UPDATE post SET reported = reported + 1 WHERE post_id = '" . $id . "'";

        $result = $bdd->query($sql);
?>