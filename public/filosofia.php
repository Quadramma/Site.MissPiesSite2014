<?php
	$campaignSelected = "";
	$filosofiaSelected = "selected";
	$coleccionSelected = "";
	$localesSelected = "";
	$contactoSelected = "";
?>
<!---->
<?php include "header.php"; ?>
<!---->
<body>
<!---->
<!---->
<div class="container" ng-app="MissPiesApp">
	<div class="row">
	  <?php include "menu.php"; ?>
	   <div id="section" class="inline" ng-controller="FilosofiaController">
	  		<ul id="responsiveUl">
	  			<li>
	  				<img class="text" src="img/filosofia/filosofia_text.jpg"/>	  		
	  				<img src="img/filosofia/1.jpg"/>	  		
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