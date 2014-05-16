<?php
require 'flight/Flight.php';  
Flight::route('/', function(){
    include "home.php";
});
Flight::route('/campaña', function(){
    include "campania.php";
});
Flight::route('/filosofia', function(){
	$scrollTo = "filosofia";
    include "filosofia.php";
});
Flight::route('/coleccion', function(){
	$scrollTo = "coleccion";
    include "coleccion.php";
});
Flight::route('/locales', function(){
	$scrollTo = "locales";
    include "locales.php";
});
Flight::route('/contacto', function(){
	$scrollTo = "contacto";
    include "contacto.php";
});



Flight::map('error', function(Exception $ex){
    echo $ex->getTraceAsString();
});


Flight::set('flight.log_errors', true);
Flight::map('notFound', function(){
    Flight::redirect($root);
});
Flight::start();
?>
