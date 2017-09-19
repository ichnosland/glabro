<?php
	get_header();
?>
	
<div class="main" id="article">

<?php 

	if (have_posts()) :
		$count = 0;
    	while ( have_posts()) : the_post(); 

    		/// gathering data
			$cat = get_the_category();
		
?>
	<div class='post-module hover fullpage'>
		<div class='thumbnail'>
	  		<div class='date author'>
			  <?php echo get_avatar( get_the_author_meta( 'ID' ), 48); ?> 
	  		</div>
			  <img src="<?php echo the_post_thumbnail_url('large'); ?>">
		</div>
		
		<div class='post-content'>
	  		<div class='category'>
			<?php foreach ($cat as $item) {
					echo $item->name;
					}  ?>
			</div>
	  		<h1 class='title'><?php echo get_the_title();?></h1>
	  		<div class='post-meta'>
				<span class='timestamp'>
				<?php echo get_the_date(); ?>
				</span>
			  </div>
		</div>
	  </div>
	  <div class='content'><?php echo the_content();?></div>
	
	<?php
		
?>

<?php
		endwhile; 
    endif;
?>	
</div>
	
	
<?php
	get_footer();
?>