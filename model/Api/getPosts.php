 <?php
       $bdd = new PDO('mysql:host=' . "localhost" . ";dbname=" . "db_sobriedad" . ";charset=utf8mb4", "Lecture" , "Lecture");

       $account_id =$_POST['account_id'];

       $sql = "SELECT P.post_id as id, P.title,P.message,P.post_date,P.post_picture,P.categorie_id,P.account_id,P.reported,A.username FROM post P , account A  WHERE P.account_id = A.account_id";
        if ($type == 'mine') {
            $sql.= " AND A.account_id = '" . $account_id ."' ";
        } else if ($type == 'reported') {
            $sql.= " AND P.reported > 0";
        }
        $sql .= " order by P.post_date DESC;";

        $result = $bdd->query($sql);
        $posts = $result->fetchAll(PDO::FETCH_ASSOC);
        var_dump($posts);
?>