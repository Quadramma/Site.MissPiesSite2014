<?php
	$campaignSelected = "";
	$filosofiaSelected = "";
	$coleccionSelected = "";
	$localesSelected = "";
	$contactoSelected = "selected";
?>
<!---->
<?php include "header.php"; ?>
<!---->
<body>
<!---->
<div class="container" ng-app="MissPiesApp">
	<div class="row">
	  <?php include "menu.php"; ?>
	  <div id="section" class="inline" ng-controller="ContactoController">
	  		<ul id="responsiveUl">
	  			<li>
	  				<img class="text" src="img/contacto/contacto_text.jpg"/>	  		
	  				<img src="img/contacto/contacto.jpg"/>	  		
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