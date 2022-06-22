 <?php
        $bdd = new PDO('mysql:host=' . "localhost" . ";dbname=" . "db_sobriedad" . ";charset=utf8mb4", "Lecture" , "Lecture");

        $username =$_POST['username'];

        $sql = "SELECT U.user_id,U.birthday,U.nationality,U.phone_number,U.bio_message,U.catchphrase,U.languages,U.lastname,U.firstname,A.account_id,A.role,A.username,A.creation_date,A.mail FROM USER U, ACCOUNT A WHERE A.username = :username and U.account_id = A.account_id";
        $req = $bdd->prepare($sql);
        $req->execute(array('username' => $value));
        //$result = $bdd->query($sql);
        $user = $req->fetch(PDO::FETCH_ASSOC);
        var_dump($user);
?>