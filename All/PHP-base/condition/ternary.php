<?php

//? 9. Ternary operators

$gender = $_GET["gender"];
if(isset($gender)){
$hello = ($gender == "F")? "Hello girl" : "Hello boy";
echo $hello;
}
?>
<form method="get" action="">
    <div></div><br/>
    <input type="radio" name="gender" value="F"/> <label for="F">FEMELLE :</label>
    <input type="radio" name="gender" value="M"/> <label for="M">MAL :</label>
    <div></div><br/>
	<input type="submit" name="submit" value="Greet me now">
</form>
