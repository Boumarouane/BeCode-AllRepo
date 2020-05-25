<?php
session_start();

############## Récupération des données ######################
    $surname = valid_donnees($_POST['surname']);
    $name = valid_donnees($_POST['name']);
    $mail = valid_donnees($_POST['email']);
    $message = valid_donnees($_POST['message']);

    $_SESSION['surname'] = $surname ;
    $_SESSION['name'] = $name;
    $_SESSION['email'] = $mail ;
    $_SESSION['message'] = $message;


####### Création d'une fonctions pour nettoyer les données avant de les stocker #########
    function valid_donnees($donnees){
        $donnees = trim($donnees);              // Nettoyer les espaces
        $donnees = stripslashes($donnees);      // Nettoyer les antislashes
        $donnees = strip_tags($donnees);        // Nettoyer les balises nocif
        $donnees = htmlspecialchars($donnees);  // Convertion des caractères spéciaux
        return $donnees;
    }
##### Si les variables existe #####
    if(isset($surname)  AND isset($name) 
                        AND isset($mail) 
                        AND isset($surname)
                        AND isset($message)
                        ){

##### Si les champs prenom et mail ne sont pas vides et si les donnees sont sanitizer ####

        if (!empty($surname)AND strlen($surname) <= 20
                            AND !empty($surname)
                            AND strlen($name) <= 20
                            AND !empty($name)
                            AND !empty($message)
                            AND !empty($mail)
                            AND filter_var($mail, FILTER_VALIDATE_EMAIL) 
                            AND filter_var($name, FILTER_SANITIZE_STRING)
                            AND filter_var($surname, FILTER_SANITIZE_STRING)  
                            AND filter_var($message, FILTER_SANITIZE_STRING)){

######################## Connexion à la BDD ######################
                        try{$user = "id11959009_user";
                            $pass = "UserName";
                            $pdo = new PDO("mysql:host=localhost;dbname=id11959009_formulairecheck",$user,$pass);
                            $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                            // On insère les données reçues avec méthode insert
                            $sql = "INSERT INTO USER (surname, name, email, message)
                            VALUES ('$surname','$name', '$mail', '$message')";
                            $pdo->exec($sql);
                            //!envoi de l'e-mail
                            $to = "i.boumarouane@gmail.com";
                            $subject = "Vérification PHP mail";
                            $headers = "From:" . $mail;
                            mail($to,$subject,$message, $headers);
                            // On renvoie l'utilisateur vers la page de remerciement
                            header("Location: Merci.php");
                            
                        }
                        // Condition si la connexion à la BDD échoue
                        catch (PDOException $exception) {
                            mail('i.boumarouane@gmail.com', 'PDOException', $exception->getMessage());
                            header("Location:index.html");
                        }
        }
    }
    else{
        header("Location:index.html");
    }