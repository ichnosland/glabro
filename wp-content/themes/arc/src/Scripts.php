<?php
/// Scripts
	
	/**
			USE THIS FILE TO ENQUEUE YOUR SCRIPTS IN WORDPRESS
			I.E. add you external resources
	**/
	
//////////////////////////////////////////////////////////////////////////////////////

	/// vendor.js script
	///	vendor.js is compiled from all the scripts in js/vendor/ from Grungfile.js 

	function vendor_script(){		
		wp_register_script( 'vendor', get_template_directory_uri() . '/vendor.js', array( 'jquery' ) );		
		wp_enqueue_script( 'vendor' );
	}
	add_action( 'wp_enqueue_scripts', 'vendor_script' );	

//////////////////////////////////////////////////////////////////////////////////////

	/// main.js script
	///	main.js compiled from all the scripts in js/script/ from Grungfile.js 

	function main_script(){		
		wp_register_script( 'main', get_template_directory_uri() . '/main.js', array( 'jquery' ) );		
		wp_enqueue_script( 'main' );
	}
	add_action( 'wp_enqueue_scripts', 'main_script' );	
?>