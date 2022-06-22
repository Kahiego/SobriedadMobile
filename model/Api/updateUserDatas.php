 <?php
        $bdd = new PDO('mysql:host=' . "localhost" . ";dbname=" . "db_sobriedad" . ";charset=utf8mb4", "Lecture" , "Lecture");

            $setSql = array();

            foreach ($values as $column => $value) {
                $setSql[] = "`{$column}` = :{$column}";
            }

            $setString = implode(', ', $setSql);
            //var_dump($setString);


            $a = array_key_exists('mail', $values);
            $bdd = self::connectDb();
            $sql = "UPDATE user U";
            if ($a) $sql .= ", account A";
            $sql .= " SET $setString";

            $sql .= " WHERE U.account_id = " . $_SESSION['user']['account_id'];
            if ($a) $sql .= " and A.account_id = U.account_id";

            echo($sql);

            $req = $bdd->prepare($sql);

            $req->execute($values);

            $_SESSION['user'] = array_replace($_SESSION['user'], $values);
        }


?>