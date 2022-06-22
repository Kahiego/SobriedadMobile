 <?php
       $bdd = new PDO('mysql:host=' . "localhost" . ";dbname=" . "db_sobriedad" . ";charset=utf8mb4", "Lecture" , "Lecture");

       $account_id =$_POST['account_id'];

       $bdd = self::connectDb();
       $sql = "SELECT M.private_message_id as id, M.sender_id, M.pm_message, M.pm_picture, M.date, A.username
       FROM private_message M
       INNER JOIN account A on (M.receiver_id = '$account_id' and M.sender_id = A.account_id ) OR (M.sender_id = 'account_id' and M.receiver_id = A.account_id)
       WHERE A.account_id = A.account_id
       order by M.date ASC;";

       $result = $bdd->query($sql);
       $messages = $result->fetchAll(PDO::FETCH_ASSOC);
       var_dump($messages);

?>