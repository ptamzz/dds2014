<?php

	$page = urldecode($_POST['page']);
	if($page == "") { $page = "home"; }

	include("../page/" . $page . ".php");
?>

	<?php
		/* if($page == 'business-cards') {
			include("../page/" . $page . ".php");
		} else if($page == 'home' || $page == 'nama' || $page == 'swipetype' || $page == 'envy' || $page == 'nexttwist' || $page == 'dotontheglobe' || $page == 'colors' || $page == 'tigma-logo' || $page == 'printmedia' || $page == 'sketch' || $page == 'y-u-no' ){
			include("../page/" . $page . ".html");
		} else {
			include("../page/error.html");
		}
		*/
		
	?>

