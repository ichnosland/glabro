<footer>
	<div class="copyright">
		&copy; 2017
	</div>
	<div class="logo">
		<a href="<?php echo get_home_url(); ?>" title="<?php echo _e("Glabro.it - Homepage","glabro"); ?>">
			<img src="<?php echo get_template_directory_uri() . '/assets/png/glabro.png'; ?>">
		</a>
	</div>
	<div class="privacy">
		<nav>
			<ul>
				<li><a href="">Privacy</a></li>
				<li><a href="">Cookies</a></li>
			</ul>
		</nav>
	</div>

</footer>

<script type="text/javascript">
	var adminAjaxUrl = '<?php echo admin_url('admin-ajax.php'); ?>';
</script>

<?php wp_footer(); ?>

</body>
</html>