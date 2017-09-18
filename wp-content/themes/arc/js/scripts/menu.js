var Menu = (function(){

	"use strict";
	var	$hamburger,
		$body,
		$menuLink,
		dir,
		_gatherElements,
		_eventListener,
		_init;


	_gatherElements = function _gatherElements(){
		var path = window.location.pathname;
		dir = path.split('/');
		$body = jQuery('body');
		$menuLink = jQuery('.menu a');
		$hamburger = jQuery('.hamburger');
	};
	
	_eventListener = function _eventListener(){

		$hamburger.click(function(event){
			event.preventDefault();
			$body.toggleClass('open-menu');
			//$mobileMenu.addClass("fixed-mobile");
			jQuery(".hamburger").toggleClass('is-active');
		});
		// set data-hover into inner link span
		$menuLink.each(function(){

			var span = jQuery(this).find('span');
			
			if(dir[1].toLowerCase() == jQuery(this).text().toLowerCase()){
				jQuery(this).addClass('active');
			}

			span.attr('data-hover', span.text());

		});
	};

	_init = function _init(){
		_gatherElements();
		_eventListener();
	};

	return {
		init: _init
	};

})();

jQuery(function(){
	Menu.init();
});
