<?php

    $tache = valid_task($_POST['task']);

    function valid_task($task){
        $task = trim($task);              // Nettoyer les espaces
        $task = stripslashes($task);      // Nettoyer les antislashes
        $task = strip_tags($task);        // Nettoyer les balises nocif
        $task = htmlspecialchars($task);  // Convertion des caractères spéciaux
        return $task;
    }
    if (isset($tache)){


        if (!empty($tache) AND filter_var($tache, FILTER_SANITIZE_STRING)){
                $doIt = array();

                $doIt["afaire"] = $tache;
                $doIt["date"] = date("d/m/Y à H:i");

                $js = file_get_contents('todo.json');

                $js = json_decode($js, true);

                $js[] = $doIt;

                $js= json_encode($js);

                file_put_contents('todo.json',$js);
                header("location: index.php");
        }
    }
    else{
        echo "nop";
    }

