$(document).ready(function(){$(".navbar").hide(),$(window).resize(function(){$(window).width()<=640?$(".navbar").hide():$(".navbar").show()}),$(".toggle-icon").click(function(){$(".navbar").slideToggle("slow",function(){})}),$(".accordion-title").toggleClass("inactive-title");var t=$(".accordion-title").width("auto");$(".accordion-content").css({width:t}),$(".accordion-title").first().toggleClass("active-title").toggleClass("inactive-title"),$(".accordion-content").first().slideDown().toggleClass("open-content"),$(".accordion-title").click(function(){return $(this).is(".inactive-title")?($(".active-title").toggleClass("active-title").toggleClass("inactive-title").next().slideToggle().toggleClass("open-content"),$(this).toggleClass("active-title").toggleClass("inactive-title"),$(this).next().slideToggle().toggleClass("open-content")):($(this).toggleClass("active-title").toggleClass("inactive-title"),$(this).next().slideToggle().toggleClass("open-content")),!1});var e=220,i=1e3;jQuery(window).scroll(function(){jQuery(this).scrollTop()>220?jQuery(".back-to-top").fadeIn(1e3):jQuery(".back-to-top").fadeOut(1e3)}),jQuery(".back-to-top").click(function(t){return t.preventDefault(),jQuery("html, body").animate({scrollTop:0},1e3),!1})});