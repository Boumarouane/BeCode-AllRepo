<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="./assets/css/style.css">
    <!--Import Google Icon Font-->
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <!--Import materialize.css-->
    <link type="text/css" rel="stylesheet" href="./assets/materialize-src/css/materialize.css"  media="screen,projection"/>

    <!--Let browser know website is optimized for mobile-->
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Todo list</title>
</head>
<body>
    <div class="global">
<!--!Hearder-->
        <header>
            <form class="form " action="formulaire.php" method="post">
                <i class="material-icons">android</i>
                <a onclick="toggle_text()" id="add" class="btn-floating btn-small pulse red"><i class="material-icons">add</i></a>
                <a id="close" onclick="toggle_text()" class="btn-floating btn-small red waves-effect waves-yellow"><i class="material-icons">close</i></a>
                <input id="span_txt" type="text" name="task" required>
                <button class="btn-floating btn-small" id="run" type="submit"><i class="material-icons">add</i></button>
            </form>
        </header>
<!--!Body-->
        <div class="containeur">
        <h4>Todo List</h4>
        <?php
        $doIt = file_get_contents('todo.json');
        $doIt = json_decode($doIt, true);
        for($i=0; $i <count($doIt); $i++):
        ?>
            <div class="todo"><!--?Part of task uncompleted-->
                <div id="task">
                    <p>
                        <label>
                            <input id="indeterminate-checkbox" type="checkbox" name="fait[]"/>
                            <span><?php echo $doIt[$i]["afaire"];?><span>
                            <p><?php echo $doIt[$i]["date"]; ?></p>
                        </label>
                    </p>
                </div>
            </div>
            <?php endfor; ?>
            <div class="form-field center-align">
                <button class="btn waves-effect waves-light"  type="Envoyer" name="action">Envoyer
                    <i class="material-icons right">send</i>
                </button>
            </div>
            <h4>Objectif completed</h4>
            <div class="bedo"><!--?Part of task completed-->
                <div id="ok">
                    <p id="end">task 1</p>
                    <p id="end">task 2</p>
                    <p id="end">task 3</p>
                </div>
            </div>
        </div>
<!--!Footer-->
        <footer>
            <p>ALPHA</p>
        </footer>
        <script src="assets/Js/script.js"></script>
        <script type="text/javascript" src="./assets/materialize-src/js/bin/materialize.min.js"></script>
    </div>
</body>
</html>