var Search = (function(){

	"use strict";

	var searchBtn,
		searchForm,
		searchInput,
		logo,
		_emptySearch,
		_gatherElements,
		_eventListener,
		_init;

//////////////////////////////////////////////////////////////////////////////////////	
	/// _gatherElements

	_gatherElements = function _gatherElements(){
		logo = jQuery('.logo a');
		searchBtn = jQuery('#searchBtn');
		searchForm = jQuery('#searchform');
		searchInput = jQuery('#s');
	};

//////////////////////////////////////////////////////////////////////////////////////	
	/// _eventListener()

	_eventListener = function _eventListener(){

		jQuery(document).on('click touchend', '#searchBtn', function(event) {
			
			event.preventDefault();

				// if desktop
				if (event.type == "click"){
					if( _emptySearch() ){
						// close search
						searchInput.removeClass('active');
					}else{		
				 		searchForm.submit();
				 	}
				}else{
					//touch events, open /submit search
				 	if(jQuery('#s').hasClass('active') && ! _emptySearch() ){
				 			searchForm.submit();
				 	}else{
				 		searchInput.toggleClass('active');	
				 		logo.toggleClass('animated fadeOut');
				 	}			 		
				}
			
		});

	};

//////////////////////////////////////////////////////////////////////////////////////	
	/// _emptySearch()
	_emptySearch = function _emptySearch(){
		return searchInput.val() == '';
	};

//////////////////////////////////////////////////////////////////////////////////////	
	/// init Filter.js

	_init = function _init(){
		_gatherElements();
		_eventListener();
	};

	return {
		init: _init
	};


})();

jQuery(function(){
	Search.init();
});
