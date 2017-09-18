<?php
	/// Common WP tricks
	
//////////////////////////////////////////////////////////////////////////////////////

	// add post thumbnail support tu theme
	
	add_theme_support( 'post-thumbnails' );

/////////////////////////////////////////////////////////////////////////////////////

	// remove admin bar for admin user on login

	add_action('after_setup_theme', 'remove_admin_bar');
	function remove_admin_bar() {
		show_admin_bar(false);
	}

/////////////////////////////////////////////////////////////////////////////////////

	// register menu navigation
	function register_my_menus() {
  		register_nav_menus(
    		array(
		      'header-menu' => __( 'Header Menu' )
		    )
  		);
	}
	add_action( 'init', 'register_my_menus' );

/////////////////////////////////////////////////////////////////////////////////////

	// rewrite search form
	function my_search_form( $form ) {
   		 $form = '<form role="search" method="get" id="searchform" class="searchform" action="' . home_url( '/' ) . '" >
	    <input type="text" value="' . get_search_query() . '" name="s" id="s" placeholder="'. __('CERCA NEL SITO', 'bcube').'" />
	    </form>';

	    return $form;
	}

	add_filter( 'get_search_form', 'my_search_form' );

/////////////////////////////////////////////////////////////////////////////////////

	// REGISTER TAXONOMY
	/*
	function team_init() {

		$singular = 'People';
		$plural = 'People';
		$labels = array(
			'name' => _x( $plural, "taxonomy general name"),
			'singular_name' => _x( $singular, "taxonomy singular name"),
			'search_items' =>  __("Search $singular"),
			'all_items' => __("All $singular"),
			'parent_item' => __("Parent $singular"),
			'parent_item_colon' => __("Parent $singular:"),
			'edit_item' => __("Edit $singular"),
			'update_item' => __("Update $singular"),
			'add_new_item' => __("Add New $singular"),
			'new_item_name' => __("New $singular Name"),
		);

		register_taxonomy(
			'team',
				array(
					'label' => __( 'Team' ),
					'public'            =>  true,
					'singular_name' => _x("Team", "post type singular name"),
		        	'publicly_queryable'=>  true,
		        	'show_ui'           =>  true, 
					'hierarchical'          => true,
					'labels'                => $labels,
					'show_ui'               => true,
					'show_admin_column'     => true,
					'sort'					=> true,
					'update_count_callback' => '_update_post_term_count',
					'query_var'             => true,
					'rewrite' => array( 'slug' => 'artist' ),
				)
			);

		// Register post type
		register_post_type('team' , array(
			'labels' => $labels,
			'public' => true,
			'has_archive' => false,
			'menu_icon' => get_template_directory_uri() . '/assets/png/people.png',
			'rewrite' => false,
			'supports' => array('title', 'editor', 'thumbnail')
		) );
	}

	add_action( 'init', 'team_init' );
	*/
?>