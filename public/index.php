<?php
require 'flight/Flight.php';  
Flight::route('/', function(){
    include "campaign.php";
});
Flight::route('/Campaign', function(){
    include "campaign.php";
});
Flight::route('/Filosofia', function(){
	$scrollTo = "filosofia";
    include "filosofia.php";
});
Flight::route('/Coleccion', function(){
	$scrollTo = "coleccion";
    include "coleccion.php";
});
Flight::route('/Locales', function(){
	$scrollTo = "locales";
    include "locales.php";
});
Flight::route('/Contacto', function(){
	$scrollTo = "contacto";
    include "contacto.php";
});

Flight::map('error', function(Exception $ex){
    echo $ex->getTraceAsString();
});

Flight::set('flight.log_errors', true);

Flight::map('notFound', function(){
    //Flight::redirect($root);
    echo "INVALID";
});

Flight::start();
?>
