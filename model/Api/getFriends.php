 <?php
        $bdd = new PDO('mysql:host=' . "localhost" . ";dbname=" . "db_sobriedad" . ";charset=utf8mb4", "Lecture" , "Lecture");

        $status =$_POST['$status'];
        $account_id =$_POST['$account_id'];

       $sql = "SELECT F.friendrequest_id,F.sender_id,F.receiver_id,A.username AS ami FROM friend_request F, account A WHERE ((F.sender_id = A.account_id and F.receiver_id = '" . $account_id . "') OR (F.sender_id = '" . $account_id . "' and F.receiver_id = A.account_id)) and F.status = '" . $status . "' GROUP BY ami order by F.friendrequest_id DESC";
        $result = $bdd->query($sql);
        $friends = $result->fetchAll(PDO::FETCH_ASSOC);
        var_dump($friends);
?>