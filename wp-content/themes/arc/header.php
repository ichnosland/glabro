<!DOCTYPE html>
<html>
<head>
	<title><?php bloginfo('title'); ?></title>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta name="description" content="<?php bloginfo('description'); ?>" />	
	<link rel="stylesheet" type="text/css" href="<?php bloginfo('stylesheet_url'); ?>">
	
	<?php wp_enqueue_script("jquery"); ?>
	<?php wp_head(); ?>

	<?php

		//add analytics track code here
		
	?>

</head>
<body>
<header>

	<button class="hamburger hamburger--collapse" type="button">
	  <span class="hamburger-box">
	    <span class="hamburger-inner"></span>
	  </span>
	</button>

	<div class="logo">
		<a href="<?php echo get_home_url(); ?>" title="<?php echo _e("Glabro.it - Homepage","glabro"); ?>">
			<img src="<?php echo get_template_directory_uri() . '/assets/png/glabro.png'; ?>">
		</a>
	</div>
	<div class="navigation">
		<nav>
			<!-- insert menu -->
			<?php 
				wp_nav_menu( array( 
					'theme_location' => 'header-menu',
					'link_before'     => '<span data-hover="">',
  					'link_after'      => '</span>',

				)); 
			?>
		</nav>
	</div>

	<div class="search">
		<?php get_search_form(); ?>
		<div class="search-icon" id="searchBtn"></div>
		<!-- insert serach form -->
	</div>
</header>