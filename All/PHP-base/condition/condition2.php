<?php
//? 2. "Different greetings according to time" Exercise

$heure = date("H:i");

if ($heure >= 05.00 AND $heure < 09.00)
{
    echo "Bonjour!";
}
elseif ($heure >= 09.00 AND $heure < 12.00)
{
    echo "Bonne journée!";
}
elseif ($heure >= 12.00 AND $heure < 16.00)
{
    echo "Bon après-midi!";
}
elseif ($heure >= 16.00 AND $heure <= 21.00)
{
    echo "Bonsoir!";
}
else
{
    echo "Bonne nuit!";
}
?>