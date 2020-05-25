<?php

//? 7. "School sucks!" Exercise

$note = $_GET['note'];

if (isset($_GET['note']))
{
    if ($note <= 4)
    {
        echo   "This work is really bad. What a dumb kid! ";
    }
    elseif ($note >= 5 AND $note <= 9)
    {
        echo "This is not sufficient. More studying is required.";
    }
    elseif ($note == 10)
    {
        echo "barely enough!";
    }
    elseif ($note >= 11 AND $note <= 14)
    {
        echo "Not bad!";
    }
    elseif ($note >= 15 AND $note <= 18)
    {
        echo "Bravo, bravissimo!";
    }
    elseif ($note == 19 OR $note == 20)
    {
        echo "Too good to be true : confront the cheater!";
    }
}
?>

<form method="get" action="">
	<label for="note">note : </label>
	<input type="text" name="note">
    <div></div><br/>
	<input type="submit" name="submit" value="Greet me now">
</form>
