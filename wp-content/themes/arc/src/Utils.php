<?php
	/// Utility
	
	/**
			USE THIS FILE TO ADD UTILTIES TO YOUR WORDPRESS SITE
			I.E. get_svg() print inline svg into your theme

	**/
	
	
//////////////////////////////////////////////////////////////////////////////////////
	
	/// get_svg 
	function get_svg($filename) {
    	return file_get_contents( get_template_directory() .DIRECTORY_SEPARATOR. 'assets'.DIRECTORY_SEPARATOR. 'svg' .DIRECTORY_SEPARATOR. $filename . '.svg');
	}

//////////////////////////////////////////////////////////////////////////////////////

?>