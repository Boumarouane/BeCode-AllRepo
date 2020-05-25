<?php

//? 3. "Different greetings according to age" Exercise

$age = $_GET['age'];
$sexe = $_GET["sexe"];

if (isset($_GET['age']) AND isset($_GET["sexe"]))
{
    if ($age <= 12 AND $sexe == 'woman')
    {
        echo "hi little girl!";
    }
    elseif($age <= 12 AND $sexe == 'boy')
    {
        echo "hi little boy";
    }
    elseif ($age > 12 AND $age <= 18 AND $sexe == 'woman')
    {
        echo  "Hello Miss Teen!";
    }
    elseif ($age > 12 AND $age <= 18 AND $sexe == 'boy')
    {
        echo  "Hello mister Teen!";
    }
    elseif ($age > 18 AND $age <= 115 AND $sexe == 'woman')
    {
        echo  "Hello Adult!...woman...grandma ? ";
    }
    elseif ($age > 18 AND $age <= 115 AND $sexe == 'boy')
    {
        echo  "Hello Adult!...boy...grandpa ? ";
    }
    else
    {
        echo "Wow! Still alive ? Are you a robot, like me ? Can I hug you ?";
    }
}
?>

<form method="get" action="">
	<label for="age">age : </label>
	<input type="text" name="age">
    <input type="radio" name="sexe" value="woman" id="woman" checked="checked" /> <label for="woman">Woman</label>
    <input type="radio" name="sexe" value="boy" id="boy" /> <label for="boy">Boy</label>
	<input type="submit" name="submit" value="Greet me now">
</form>
