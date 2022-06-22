  <?php
         $bdd = new PDO('mysql:host=' . "localhost" . ";dbname=" . "db_sobriedad" . ";charset=utf8mb4", "Lecture" , "Lecture");
        
        $user_id =$_POST['user_id'];
        $sql = "SELECT C.label, C.category_id FROM user U, categorie C WHERE DATEDIFF(current_date(),U.birthday) >= C.pegi and U.user_id='". $user_id . "'";

        $result = $bdd->query($sql);
        $categories = $result->fetchAll();
        if ($categories)
            return ($categories);
        else
            {
                $sql = "SELECT category_id, label FROM categorie WHERE pegi = 0";
                $categories = $bdd->query($sql);
                $categories = $categories->fetchAll();
                var_dump($categories) ;
            }
        ?>