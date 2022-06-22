 <?php
        $bdd = new PDO('mysql:host=' . "localhost" . ";dbname=" . "db_sobriedad" . ";charset=utf8mb4", "Lecture" , "Lecture");

        $id =$_POST['id'];

        $sql = "DELETE FROM comments WHERE post_id = '" . $id . "'";

        $result = $bdd->query($sql);

        $sql = "DELETE FROM post WHERE post_id = '" . $id . "';";
        $result = $bdd->query($sql);

?>