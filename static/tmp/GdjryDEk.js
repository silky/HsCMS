(function(){new nicEditor({fullPanel:true}).panelInstance("h3")})();$(function(){var nav=$("#nav"),main=$("#main"),rearranged=false,rearrange=function(width){if(!rearranged&&width<900){rearranged=true;nav.removeClass("left").addClass("top");main.removeClass("right").addClass("full")}else if(rearranged&&width>900){rearranged=false;nav.removeClass("top").addClass("left");main.removeClass("full").addClass("right")}};rearrange($(window).width());$(window).resize(function(){rearrange($(window).width())})})