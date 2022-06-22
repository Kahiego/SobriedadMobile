 <?php
        $bdd = new PDO('mysql:host=' . "localhost" . ";dbname=" . "db_sobriedad" . ";charset=utf8mb4", "Lecture" , "Lecture");

        $post =$_POST['$post'];
        $sql = "SELECT A.username,C.message, C.date FROM account A, comments C WHERE A.account_id = C.account_id AND C.post_id = $post ORDER BY C.date;";

        $result = $bdd->query($sql);
        $comments = $result->fetchAll(PDO::FETCH_ASSOC);
        var_dump($comments);

?>