<?php

//? 6. Achieve the same, without the ELSE.

$age = $_GET['age'];
$gender = $_GET["gender"];
$name = $_GET["name"];

if (isset($_GET['age']) AND isset($_GET["gender"]) AND isset($_GET["name"]))
{
    if ($age >= 21 AND $age <= 40 AND $gender == 'woman')
    {
        echo   "welcome to the team"." ".$name;
    }
}
?>

<form method="get" action="">
	<label for="age">age : </label>
	<input type="text" name="age">
    <div></div><br/>
    <label for="name">name : </label>
	<input type="text" name="name">
    <div></div><br/>
    <input type="radio" name="gender" value="woman" checked="checked"/> <label for="woman">Woman</label>
    <input type="radio" name="gender" value="boy"/> <label for="boy">Boy</label>
    <div></div><br/>
	<input type="submit" name="submit" value="Greet me now">
</form>
