<? php

//! Série d'exercices sur les structures conditionnelles PHP. 

//? 1.1 Clean your room Exercise 

$room_is_filthy = true;

if($room_is_filthy)
{
	echo "Yuk, Room is dirty : let's clean it up !";
	cleanup_room();
	echo "<br>Room is now clean!";
	$room_is_filthy = false;
} else
{
	echo "<br>Nothing to do, room is neat.";
}

//? 1.2 Clean your room Exercise, improved

$room_filthiness = array('health hazard', 'filthy', 'dirty','clean','immaculate');

if ($room_filthiness[0] == 'health hazard')
{
    echo "Impossible à vivre! brule la maison!";
}
else if ($room_filthiness[1] == 'filthy')
{
    echo " Yuk, la chambre est dégueulasse! Nettoyons-le ! ";
}
else if ($room_filthiness[2] == 'dirty')
{
    echo " Yuk, la pièce est sale: nettoyons-le ! ";
}
else if ($room_filthiness[3] == 'clean')
{
    echo " <br> Rien à faire, la salle est propre. ";
}
else 
{ 
    echo "Wow";
}
?>