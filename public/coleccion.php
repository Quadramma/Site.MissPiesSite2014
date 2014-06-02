<?php
	$campaignSelected = "";
	$filosofiaSelected = "";
	$coleccionSelected = "selected";
	$localesSelected = "";
	$contactoSelected = "";

	function GetFiles($path){
	  $rta = array();
	  if ($handle = opendir($path)) {
	    while (false !== ($entry = readdir($handle))) {
	        if ($entry != "." && $entry != "..") {
	            if (strpos($entry,'.') !== false) {
	                $rta [] = $entry;
	            }else{
	                
	            }
	        }
	    }
	    closedir($handle);
	  }
	  return $rta;
	}
	$collection = GetFiles("img/coleccion");

?>
<!---->
<?php include "header.php"; ?>
<!---->
<body>
<!---->
<?php
	echo "<script>";
	echo "db = {};";
	echo "db.collection = JSON.parse('".addslashes(json_encode($collection))."');";
	echo "</script>";
?>
<!---->
<div class="container" ng-app="MissPiesApp">
	<div class="row">
	  <?php include "menu.php"; ?>
	  <div id="section" class="inline" ng-controller="CollectionController">
	  		<ul id="responsiveUl" class="collection">
	  			<!--
	  			<li ng-repeat="item in items">
	  				<img class="img-responsive" src="img/coleccion/{{item}}"/>	  		
	  			</li>
-->
	  			<li ng-repeat="item in items">
		  			 <a href="img/coleccion/{{item}}"
		  			 ng-click="click(item)" 
		  			 data-toggle="lightbox" 
		  			 data-gallery="imagesizes" >
	                    <img src="img/coleccion/{{item}}" class="img-responsive">
	                 </a>
                 </li>

	  		</ul>
	  </div>
	</div>
</div>
<!---->
<!---->
<!---->
</body>
</html>