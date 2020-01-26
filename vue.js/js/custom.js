// JavaScript Document
/*global $ , alert, console */
$(function(){
	
	
	' use strict ';
	$('html').niceScroll();
	//change header height
	$('.header').height($(window).height());
	// to faeture
	$('.header .icon i').click (function (){
		
		$('html, body').animate({
			
			scrollTop: $('.faetures .container').offset().top 
			
			},1000);
		
		});
		
	//show-more hidden box
	$('.show-more').click(function(){
		
		$('.our-work .hidden').fadeIn();
		$('.show-more').hide()
		});
	});
