$(document).on("ready", function() {});


$(function() {


	//$("img").css({"max-height": $(window).height()});

});

//1380*920



var MissPiesApp = angular.module("MissPiesApp", []);

function CampaignController(){
	console.info("[CampaignController]");

	$("#campaign li").toggle("false");
	console.log($("#campaign li"));
	$("#campaign li")[0].toggle("true");
	$("#campaign").fadeIn();

}