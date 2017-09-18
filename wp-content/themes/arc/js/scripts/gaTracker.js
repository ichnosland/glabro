/***
	GA TRACKING SCRIPT
	
	add in event dom class="js-track" data-track="category.action.label"
	label is optional

****/

jQuery(document).ready(function(){

	jQuery('.js-track').click(function(event){
		event.preventDefault();
		gaGetDataTracker(jQuery(this));
		
		//  if has href goto link
		var href = jQuery(this).attr('href');
		var target = jQuery(this).attr('target') || '';
		if(href != undefined && href != '#'){
			if(target == '_blank'){
				window.open( href, target);
			}else{
				location.href= href;
			}
		}
	});

});

function gaGetDataTracker(link){
    var data = link.data('track');
    var result = data.split('.');   
    gaTracker(result[0], result[1], result[2]);

}

function gaTracker(eventCategory, eventAction, eventLabel){

    if(eventLabel == undefined){
        eventLabel='';
    }
    console.log('send',eventCategory, eventAction, eventLabel);
    ga('send', 'event', eventCategory, eventAction, eventLabel);
}