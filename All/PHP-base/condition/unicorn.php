<?php

//? 10. Ternary exercises

$humain = $_GET["humain"];
$chat = $_GET["chat"];
$licorne = $_GET["licorne"];
if(isset($humain)){
    $hello = ($humain == "humain")? "Hello girl" : "Hello boy";
    echo $hello;
    // $chat = ($chat == "chat")? "Hello girl" : "Hello boy";
    // echo $chat;
    // $licorne = ($licorne == "licorne")? "Hello girl" : "Hello boy";
    // echo $licorne;

}


?>
<form method="get" action="">
    <div></div><br/>
    <p>Etes-vous :</p>
    <input type="radio" name="humain" value="humain"/> <label for="umain">un humain :</label>
    <input type="radio" name="chat" value="chat"/> <label for="chat">un chat :</label>
    <input type="radio" name="licorne" value="licorne"/> <label for="licorne">une licorne :</label>
    <div></div><br/>
	<input type="submit" name="submit" value="Valider">
</form>
