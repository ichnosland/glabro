<div class="relatedposts">
<h3>Related posts</h3>
    <div class="relatedpost-item-contioner main-carousel" id="related">
<?php
    $orig_post = $post;
    global $post;
    $tags = wp_get_post_tags($post->ID);
    $cat = get_the_category();
    $authorID = get_the_author_meta( 'ID' );

    if ($tags || $cat) {
        $tag_ids = array();
        $cat_ids = array();
        foreach($tags as $individual_tag) $tag_ids[] = $individual_tag->term_id;
        foreach($cat as $individual_cat) $cat_ids[] = $individual_cat->term_id;
        $args=array(
        'cat__in' => $cat_ids,
        'tag__in' => $tag_ids,
        'post__not_in' => array($post->ID),
        'posts_per_page'=>4, // Number of related posts to display.
        'caller_get_posts'=>1
        );
         
        $my_query = new wp_query( $args );
       
        while( $my_query->have_posts() ) {
            $my_query->the_post();
            $post_cat = get_the_category();
?>
            <a href="<?php echo the_permalink(); ?>" title="<?php echo get_the_title(); ?>"  class='post-module carousel-cell <?php echo $class; ?>'>
				<div class='thumbnail'>	
			  		<div class='date author js-author-info' data-author="<?php echo get_the_author_meta( 'ID' );?>">
					  	<?php echo get_avatar( get_the_author_meta( 'ID' ), 48); ?> 
			  		</div>
			  		<img src="<?php echo the_post_thumbnail_url('large'); ?>">
				</div>
				
				<div class='post-content'>
			  		<div class='category'>
					<?php foreach ($post_cat as $item) {
							echo $item->name.' ';
							}  ?>
					</div>
			  		<h1 class='title'><?php echo get_the_title();?></h1>
			  		<p class='description'><?php echo get_the_excerpt();?></p>
			  		<div class='post-meta'>
						<span class='timestamp'>
						<?php echo get_the_date(); ?>
						</span>
			  		</div>
				</div>
	        </a>
         
<?php      }
    }
    $post = $orig_post;
    wp_reset_query();
?>
    </div>
</div>