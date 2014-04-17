<?php

	$page = urldecode($_POST['page']);
	if($page == "") { $page = "home"; }

	include("../page/" . $page . ".php");
?>

