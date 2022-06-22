 <?php
        $bdd = new PDO('mysql:host=' . "localhost" . ";dbname=" . "db_sobriedad" . ";charset=utf8mb4", "Lecture" , "Lecture");

        $account_id =$_POST['account_id'];

        $sql = "SELECT F.*,
        A.account_id, A.username AS ami,
        user.catchphrase
        FROM friend_request F
        JOIN account A ON (F.receiver_id = " . $account_id . " and F.sender_id = A.account_id ) OR (F.sender_id = " . $account_id . " and F.receiver_id = A.account_id)
        JOIN user ON user.account_id = A.account_id
        WHERE F.status = 2
        order by F.friendrequest_id DESC";

        $result = $bdd->query($sql);
        $friends = $result->fetchAll(PDO::FETCH_ASSOC);
        var_dump($friends);
?>