<?php
/**
 * The header for our theme.
 *
 * Displays all of the <head> section and everything up till <div id="content">
 *
 * @package Blask
 */

?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="profile" href="http://gmpg.org/xfn/11">
<script src="https://cdn.jsdelivr.net/npm/js-cookie@rc/dist/js.cookie.min.js"></script>
<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed&display=swap" rel="stylesheet">
<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">

<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<div id="page" class="hfeed site">
	<a class="skip-link screen-reader-text" href="#content"><?php esc_html_e( 'Skip to content', 'blask' ); ?></a>

		<header id="masthead" class="site-header" role="banner">
			<?php
			if ( function_exists( 'jetpack_the_site_logo' ) ) {
				jetpack_the_site_logo();
			} // endif function_exists( 'jetpack_the_site_logo' )
			?>
			
			<!-- Shows site logo. -->
			<?php csl_CustomSiteLogo_show_logo(); ?>

			<nav id="site-navigation" class="main-navigation" role="navigation">
				<button class="menu-toggle" aria-controls="primary-menu" aria-expanded="false"><?php esc_html_e( 'Menu', 'blask' ); ?></button>
				<?php wp_nav_menu( array( 'theme_location' => 'primary', 'menu_id' => 'primary-menu' ) ); ?>
			</nav><!-- #site-navigation -->
			
			<!-- Shows posts as list. -->
			<?php echo get_posts_as_list(); ?>
			
			
			<!-- shows socials and copyright. -->
			<div class="header-socials-copyright">
				<?php echo get_socials(); ?>
				<?php echo get_copyright(); ?>
			</div>

		</header><!-- #masthead -->

	<div id="content" class="site-content">
