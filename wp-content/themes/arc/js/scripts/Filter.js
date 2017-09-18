var Filter = (function(){

	"use strict";

	var 
		$win, 			// window
		$grid,			// isotope
		$btnCategory,	// category dropdown
		$btnClient,		// client dropdown
		$clientMenu,	// client ul
		$categoryMenu,  // category dropdown
		$categoryItem,	// category item filter
		$clientItem,	// category item filter

		filterByCategory,	// filter from a collection of category
		filterByClient,	// filter from a collection of category
		filterList,		// list of filters (category + client)

		_updateFilter,
		_updateCategoryFilter,
		_updateClientFilter,
		_removeCategoryFilter,
		_addCategoryFilter,
		_buildFilter,
		_hasClientFilter,
		_hasCategoryFilter,
		_updateClientLabel,
		_gatherElements,
		_eventListener,
		_initIsotope,
		_init;
//////////////////////////////////////////////////////////////////////////////////////	
	
	/// gather elements
	
	_gatherElements = function _gatherElements(){
		
		/// DOM elements
		$win = jQuery(window);
		$btnCategory = jQuery('.js-category-dropdown');
		$btnClient = jQuery('.js-client-dropdown');
		$categoryItem = jQuery('.filter-category > li');
		$clientItem = jQuery('.filter-client > li');
		$clientMenu = jQuery('.filter-client');
		$categoryMenu = jQuery('.filter-category');
		/// utils
		filterByCategory = [];
		filterByClient = '';
		filterList= '';

	};

//////////////////////////////////////////////////////////////////////////////////////	
	
	//event listeners

	_eventListener = function _eventListener(){
		
		_initIsotope();

		/// on click CATEGORY ITEM
		$categoryItem.on('touchend click' , function(event){
			// prevent double action (click + touch)
			event.stopPropagation();
  			event.preventDefault();

			var dataFilter = jQuery(this).data('filter');
			var isActive = jQuery(this).hasClass('active');
			_updateCategoryFilter(dataFilter, isActive);
			
			jQuery(this).toggleClass('active');
		
		});

		$categoryItem.on('touchend', function(event) {
			if(jQuery('body').width() <= 736){
				$categoryMenu.toggle();
			}
			// remove filter if active
		});

		/// on click CLIENT ITEM
		$clientItem.on('touchend click' , function(event){
			// prevent double action (click + touch)
			event.stopPropagation();
  			event.preventDefault();
			var dataFilter = jQuery(this).data('filter');
			var isActive = jQuery(this).hasClass('active');
			filterByClient = dataFilter;
			_updateClientLabel(jQuery(this));
			_buildFilter();	
			//$btnClient.toggleClass('active');
		
		});

		$clientItem.on('touchend', function(event) {
			$clientMenu.toggle();
			$btnClient.addClass('active');
			// remove filter if active
		});

		$btnClient.click(function(){
			jQuery(this).toggleClass('active');
			jQuery(this).text('CLIENTI');
			filterByClient = '';
			$btnClient.removeClass('active');
			_buildFilter();	
		});
		
		$btnClient.on('touchend', function(event) {
			$clientMenu.toggle();
			// remove filter if active
		});

		$btnCategory.on('touchend', function(event) {
			// show dropdown
			$categoryMenu.toggle();
		});

	};

//////////////////////////////////////////////////////////////////////////////////////	
	
	/// init isotope
	
	_initIsotope = function _initIsotope(){
		
		$grid =  jQuery('.works').isotope({
		  // options
		  	itemSelector: '.work-item',
		  	 masonry: {
    			gutterWidth: 0,
    			columnWidth: '.work-item',
    			layoutMode: 'fitRows'
  			}
		});

		_updateFilter();

		$grid.on('layoutComplete', function(){
        	$win.trigger("scroll");
    	});
		
	};


//////////////////////////////////////////////////////////////////////////////////////	
	
	/// update isotope from filterList
	
	_updateFilter = function _updateFilter(){
		console.log('filter by', filterList);
		$grid.isotope({ filter: filterList });
	};

//////////////////////////////////////////////////////////////////////////////////////	
	
	/// update category Filter
	
	_updateCategoryFilter = function _updateCategoryFilter(dataFilter, isActive){

		if(isActive){
			_removeCategoryFilter(dataFilter); 
		}else{ 
			_addCategoryFilter(dataFilter); 
		}
		
		_buildFilter();	
		
	};

//////////////////////////////////////////////////////////////////////////////////////	
	
	/// remove category Filter
	
	_removeCategoryFilter = function _removeCategoryFilter(dataFilter){
		
		var index = filterByCategory.indexOf(dataFilter);
		if(index >= 0){
			filterByCategory.splice(index, 1);
		}

	};

//////////////////////////////////////////////////////////////////////////////////////	
	
	/// add category Filter
	
	_addCategoryFilter = function _addCategoryFilter(dataFilter){
		
		filterByCategory.push(dataFilter);
	};

//////////////////////////////////////////////////////////////////////////////////////	
	
	/// build isotope filter string
	
	_buildFilter = function _buildFilter(){
		
		if( _hasCategoryFilter()){ // has at least ONE elem in category

			if(filterByCategory.length > 1){ // has ONE elem in category
				
				filterList = filterByCategory.reduce(function(filter , item){
					if( _hasClientFilter() ){
						filter = filter +  filterByClient + "," +  item + filterByClient;
					}else{
						filter = filter + "," + item;
					}
					return filter;
				});
			}else{ // has more than ONE elem in category

				if( _hasClientFilter() ){
					filterList = filterByCategory[0]  + filterByClient;
				}else{
					filterList = filterByCategory[0];
				}
			}

		}else{ // has no elem in category, filter only by client
			
			
			if( _hasClientFilter() ){
				filterList =  filterByClient;
			}else{
				filterList = '';
			}
		}

		_updateFilter();
		
	};

//////////////////////////////////////////////////////////////////////////////////////	
	
	/// check id there's client filter ative

	_hasClientFilter = function _hasClientFilter(){
		return (filterByClient != '');
	};

//////////////////////////////////////////////////////////////////////////////////////	
	
	/// check id there's client filter ative

	_updateClientLabel = function _updateClientLabel(btn){
		$btnClient.addClass('active');
		$btnClient.text(btn.text());
	};

//////////////////////////////////////////////////////////////////////////////////////	
	
	/// check id there's client filter ative

	_hasCategoryFilter = function _hasCategoryFilter(){
		return (filterByCategory.length > 0 );
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
	Filter.init();
});
