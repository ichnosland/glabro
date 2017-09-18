<?php
	get_header();
?>

<?php
	//// GET WORKS
	$args = array(
	  'post_type'   => 'post',
	  'post_status' => 'publish',
	  'posts_per_page' => 15
	 );
	$posts = new WP_Query( $args );

?>

<div class="main" id="main">

<?php 

	if ($posts->have_posts()) :
		$count = 0;
		$class = 'fullpage';
    	while ( $posts->have_posts()) : $posts->the_post(); 
			
    		/// gathering data
			$cat = get_the_category();
		
?>
	<a href="<?php echo the_permalink(); ?>" title="<?php echo get_the_title(); ?>"  class='post-module <?php echo $class; ?>'>
	
		<div class='thumbnail'>	
	  		<div class='date author'>
			  <?php echo get_avatar( get_the_author_meta( 'ID' ), 48); ?> 
	  		</div>
	  		<img src="<?php echo the_post_thumbnail_url('large'); ?>">
		</div>
		
		<div class='post-content'>
	  		<div class='category'>
			<?php foreach ($cat as $item) {
					echo $item->name.' ';
					}  ?>
			</div>
	  		<h1 class='title'><?php echo get_the_title();?></h1>
	  		<p class='description'><?php echo get_the_excerpt();?></p>
	  		<div class='post-meta'>
				<span class='timestamp'>
				<?php echo get_the_time(); ?>
				</span>
	  		</div>
		</div>
	</a>


<?php
		$count++;
		if($count >0){$class="";}
		endwhile; 
    endif;
?>	
</div>
	
<?php
	get_footer();
?>
