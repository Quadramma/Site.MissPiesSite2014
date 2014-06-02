/*-----------------------------------------------------------------------------------*/
/*  PRELOADER
/*-----------------------------------------------------------------------------------*/

/*
jQuery(window).load(function() {
	//Preloader
	setTimeout("jQuery('#preloader').animate({'opacity' : '0'},300,function(){jQuery('#preloader').hide()})", 800);
	setTimeout("jQuery('.preloader_hide, .selector_open').animate({'opacity' : '1'},500)", 800);
	setTimeout("jQuery('footer').animate({'opacity' : '1'},500)", 3000);

});
*/



$(document).on("ready", function() {});


$(function() {


	//$("img").css({"max-height": $(window).height()});

});

//1380*920

function pushState(name, $location) {
	//window.history.pushState({}, name, name);
	//$location.path('/'+name);
	$("title").html(name + " | Miss Pies");
}



var MissPiesApp = angular.module("MissPiesApp", []);

MissPiesApp.run(['$location', '$rootElement',
	function($location, $rootElement) {
		$rootElement.off('click');
	}
]);

function MenuController($scope, $location) {
	console.info("[MenuController]");
	$scope.click = function(name) {
		console.info("[MenuController][click][" + name + "]");
		window.location.href = "./" + name; //+ ".php";
	};
	$scope.enter = function(name) {
		//console.info("[MenuController][enter][" + name + "]");
		//$("#menu div.button.selected")
		//.css("display","none");
		//.toggle("false");
	};
	$scope.out = function(name) {
		//console.info("[MenuController][out][" + name + "]");
		//$("#menu div.button.selected")
		//.css("display","block");
		//.toggle("true");
	};
	$scope.goto = function(url) {
		window.location.replace(url);
	}
}

function FilosofiaController($location) {
	console.info("[FilosofiaController]");
	pushState("Filosofia", $location);
	SingleImage();
}



function LocalsController($location) {
	console.info("[LocalsController]");
	pushState("Locales", $location);
	//SingleImage();
	//
	var index = 0;
	$("#responsiveUl li").toggle("false");
	console.log(($("#responsiveUl li")[index]));
	($("#responsiveUl li").first()).toggle("true").addClass("active");
	$("#responsiveUl").fadeIn();
	setInterval(function() {
			var $ul = $("#responsiveUl");
			var $lis = $("#responsiveUl li");
			var indexAux = index;
			if (index < $lis.length - 1) {
				index++;
			} else {
				index = 0;
			}
			var old = $($lis.get(indexAux));
			$lis.removeClass("active");
			var newLi = $($lis.get(index));
			newLi.addClass("active");
			$ul.css("height", newLi.find("img").height()); //Fix para que no rebote
			old.fadeOut({
				duration: 100,
				complete: function() {
					newLi.fadeIn({
						duration: 100
					});
				}
			});
			//console.log("[Campaign Slider Active:" + index + "]");
		},
		3500);
	//
}



function ContactoController($location) {
	console.info("[ContactoController]");
	pushState("Contacto", $location);
	SingleImage();
}

function SingleImage() {
	var index = 0;
	$("#responsiveUl li").toggle("false");
	console.log(($("#responsiveUl li")[index]));
	($("#responsiveUl li").first()).toggle("true").addClass("active");
	$("#responsiveUl").fadeIn();

	var $ul = $("#responsiveUl");
	var $lis = $("#responsiveUl li");
	var indexAux = index;
	if (index < $lis.length - 1) {
		index++;
	} else {
		index = 0;
	}
	var old = $($lis.get(indexAux));
	$lis.removeClass("active");
	var newLi = $($lis.get(index));
	newLi.addClass("active");
	$ul.css("height", newLi.find("img").height()); //Fix para que no rebote
	old.fadeOut({
		duration: 100,
		complete: function() {
			newLi.fadeIn({
				duration: 100
			});
		}
	});
}

function CampaignController($location) {
	console.info("[CampaignController]");



	pushState("Campania", $location);



	var index = 0;
	$("#responsiveUl li").toggle("false");
	console.log(($("#responsiveUl li")[index]));
	($("#responsiveUl li").first()).toggle("true").addClass("active");
	$("#responsiveUl").fadeIn();
	setInterval(function() {
			var $ul = $("#responsiveUl");
			var $lis = $("#responsiveUl li");
			var indexAux = index;
			if (index < $lis.length - 1) {
				index++;
			} else {
				index = 0;
			}
			var old = $($lis.get(indexAux));
			$lis.removeClass("active");
			var newLi = $($lis.get(index));
			newLi.addClass("active");
			$ul.css("height", newLi.find("img").height()); //Fix para que no rebote
			old.fadeOut({
				duration: 100,
				complete: function() {
					newLi.fadeIn({
						duration: 100
					});
				}
			});
			//console.log("[Campaign Slider Active:" + index + "]");
		},
		3500);
}