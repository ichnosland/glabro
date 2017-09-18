<?php
	/// Ajax Call Example
	
	/*
	
	add_action( 'wp_ajax_f711_get_post_content', 'f711_get_post_content_callback' );
	add_action( 'wp_ajax_nopriv_f711_get_post_content', 'f711_get_post_content_callback' );

	function f711_get_post_content_callback() {
	    
	    $offset = intval($_POST['offset'] );
	    $category = $_POST['category'];
	   	
	    $args = array(
			'offset'   => intval($offset),
	    	'posts_per_page'   => intval($offset),
	    	'category_name'		=> $category
	    );

	    
	    $postCollection = get_posts( $args);

	        // check if post exists
	    if (! $postCollection ) {

	        $response['error'] = 'true';
	        $response['result'] =  'There is no post with the ID ';

	    } else {
				
			$work = array(
				'thumbnail' => '',
				'title'	=> '',
				'category' => '',
				'permalink' => ''
			 );
			$result = [];
			foreach ($postCollection as $singlePost):

				$work['data'] = 	get_field('data_realizzazione' , $singlePost->ID); 
				$work['sottotitolo'] = get_field('sottotitolo' , $singlePost->ID);
				$work['thumbnail'] = get_the_post_thumbnail_url($singlePost->ID,'large');
				$work['title'] = $singlePost->post_title;
				$work['permalink'] =  get_post_permalink($singlePost->ID);
				$work['category']  = $category;

				$result[] = $work;

			endforeach;
            
            $response['error'] = 'false';
            $response['result'] = $result;
           // $response['images'] = $thumbnail;

        }

	    wp_send_json( $response );
		
		////////////////////////////////
		javascript should be like :

		jQuery.ajax({
	        type: 'POST',
	        url: adminAjaxUrl,
	        data: {
	            'category': 'works',
	            'offset' : offset,
	            'action': 'f711_get_post_content'
	        }, success: function (result) {
				// do your stuff here!
	        }
	}*/

?>