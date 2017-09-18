
jQuery(document).ready(function(){

//////////////////////////////////////////////////////////////

	/// play youtube video on hero single page

	jQuery('.js-video').click(function(e){
		
		jQuery(this).removeClass('video');
		var iframe = jQuery(this).find('iframe');
		iframe.addClass('active');
		iframe[0].src += "?autoplay=1";

	});



});