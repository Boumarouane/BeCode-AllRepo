<?php

//? 4. Display a different greeting according to the user's age, gender and mothertongue.

$age = $_GET['age'];
$sexe = $_GET["sexe"];
$langage = $_GET["langage"];

if (isset($_GET['age']) AND isset($_GET["sexe"]) AND isset($_GET["langage"]))
{
    if ($age <= 12 AND $sexe == 'woman' AND $langage == 'yes')
    {
        echo "Hello girl!";
    }
    elseif ($age <= 12 AND $sexe == 'woman' AND $langage == 'no')
    {
        echo "Aloha girl";
    }
    elseif($age <= 12 AND $sexe == 'boy' AND $langage == 'yes')
    {
        echo "Hello boy";
    }
    elseif($age <= 12 AND $sexe == 'boy' AND $langage == 'no')
    {
        echo "Aloha boy";
    }
    elseif ($age > 12 AND $age <= 18 AND $sexe == 'woman' AND $langage == 'yes')
    {
        echo  "Hello Miss Teen!";
    }
    elseif ($age > 12 AND $age <= 18 AND $sexe == 'woman' AND $langage == 'no')
    {
        echo  "Aloha Miss Teen!";
    }
    elseif ($age > 12 AND $age <= 18 AND $sexe == 'boy'  AND $langage == 'yes')
    {
        echo  "Hello mister Teen!";
    }
    elseif ($age > 12 AND $age <= 18 AND $sexe == 'boy'  AND $langage == 'no')
    {
        echo  "Aloha mister Teen!";
    }
    elseif ($age > 18 AND $age <= 115 AND $sexe == 'woman'  AND $langage == 'yes')
    {
        echo  "HELLO Adult!...woman...grandma ? ";
    }
    elseif ($age > 18 AND $age <= 115 AND $sexe == 'woman'  AND $langage == 'no')
    {
        echo  "ALOHAA Adult!...woman...grandma ? ";
    }
    elseif ($age > 18 AND $age <= 115 AND $sexe == 'boy' AND $langage == 'yes')
    {
        echo  "HELLO Adult!...boy...grandpa ? ";
    }
    elseif ($age > 18 AND $age <= 115 AND $sexe == 'boy' AND $langage == 'no')
    {
        echo  "ALOHAA Adult!...boy...grandpa ? ";
    }
    else
    {
        echo "Wow! Still alive ? Are you a robot, like me ? Can I hug you ?";
    }
}
?>

<form method="get" action="">
    <br/>
	<label for="age">age : </label>
	<input type="text" name="age">
    <div></div><br/>
    <input type="radio" name="sexe" value="woman" checked="checked"/> <label for="woman">Woman</label>
    <input type="radio" name="sexe" value="boy"/> <label for="boy">Boy</label>
    <div></div><br/>
    <input type="radio" name="langage" value="yes" checked="checked"/> <label for="yes">yes</label>
    <input type="radio" name="langage" value="no"/> <label for="no">no</label>
    <div></div><br/>
	<input type="submit" name="submit" value="Greet me now">
</form>
