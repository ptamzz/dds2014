<!doctype html>
<html lang="en" class="demo-2 no-js">
<head>
    <meta charset="utf-8" />
    <title>Design Degree Show 2014, IDC, IIT Bombay</title>
    
    <meta name="description" content="The Annual Design Degree Show 2014, showcasing design works by students of the Industrial Design Centre, IIT Bombay">
	<meta name="keyword" content="Design, Degree, Show, 2013, IDC, IIT, Bombay, Powai, Exhibition, Interaction, Visual, Communication, Animation, Mobility, Vehicle, Product, Industrial, Centre, Center">
    <meta name="author" content="Pritam Pebam" />
    <link rel="shortcut icon" href="img/favicon.png">

    <!-- SVG Hover Effect -->
	<link rel="stylesheet" type="text/css" href="css/component.css" />
	<script src="js/snap.svg-min.js"></script>

	<link href="//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap-glyphicons.css" rel="stylesheet">

	<script src="js/jquery-1.8.3.min.js"></script>
	<script src="js/jquery.scrollTo.min.js"></script>
	
	<script src="js/jquery-ui-blind.min.js"></script>
	
	<script src="js/custom.js"></script>
	
    <link href="css/webfonts.css" rel="stylesheet" />
    <link href="css/style.css" rel="stylesheet" />


    
</head>
<body>
	<div class="st-menu st-effect-11 nav" id="menu-11" ></div>
	<nav class="main-nav">
		<ul>
			<li class="home">
				<a href="#home">
					<i class="icon"></i>
					<span class="nav-title">DDS 2014</span>
				</a>
			</li>
			<li class="workshops">
				<a href="#workshops">
					<i class="icon"></i>
					<span class="nav-title">Workshops</span>
				</a>
			</li>
			<li class="sponsors">
				<a href="#sponsors">
					<i class="icon"></i>
					<span class="nav-title">Sponsors</span>
				</a>
			</li>
		</ul>
	</nav>
	<div id="st-container" class="home-pane st-container st-effect-11">

		<!-- content push wrapper -->
		<div class="st-pusher">

			<div class="st-content"><!-- this is the wrapper for the content -->
				<div class="st-content-inner"><!-- extra div for emulating position:fixed of the menu -->

					<div class="main clearfix">
						
						<div id="st-trigger-effects" class="column">
						 	
							<button id="drum-roll" data-effect="st-effect-11" ></button>
							<div class="content">
								<div class="logo-container">
									<img class="main-logo" src="img/dds_logo.png" alt="DDS 2014 Logo"><br/>
									<div class="home-time">
										<h5>27th - 29th June</h5>
										<h6>VMCC, IIT Bombay, Powai</h6>
										<div class="small-meta">Workshops, Exhibitions, Conference</div>
									</div>

									<div class="home-time">
										<h5>5th - 6th July</h5>
										<h6>Nehru Centre, Worli, Mumbai</h6>
										<div class="small-meta">Exhibitions</div>
									</div>
								</div>
								

								<div class="body-bar">
									<img class="small-icon" src="img/dds_main_icon.png" alt="DDS Small Logo">

									<h4 class="main-title">d.cons.truct</h4>
									<p class="quote">“Analyze the elements of a design in order to expose internal assumptions and contradictions, 
										explore the merits of their contributions, and challenge claims of significance or ideality.”
									</p>
									<p class="quote-meta">- Deconstructing Product Design, WILLIAN LIDWELL</p>

									<p>The term deconstruction was coined by the French philosopher Jacques Derrida, in his 1967 book 
										of Grammatology, and deconstruction itself grew out of semiotics theory.</p>

									<div class="social">
										<a href="https://www.facebook.com/designdegreeshow" target="_blank"><img src="img/dds_facebook.png" alt="DDS Facebook Link"></a>
										<a href="https://twitter.com/idc_iitb" target="_blank"><img src="img/dds_twitter.png" alt="DDS Facebook Link"></a>
									</div>
									<a href="mailto:contact@ddsidc.com" class="small-meta">contact@ddsidc.com</a> <span class="small-meta">|</span> 
									<a href="mailto:sponsorship@ddsidc.com" class="small-meta">sponsorship@ddsidc.com</a>
								</div>
							</div>
						</div>
					
					</div><!-- /main -->
				</div><!-- /st-content-inner -->
			</div><!-- /st-content -->
		</div><!-- /st-pusher -->
	</div><!-- /st-container -->


	<!-- Workshops -->
	<div id="st-container" class="workshops-pane st-container st-effect-11">

		<!-- content push wrapper -->
		<div class="st-pusher" style="background-color: #f4f4f4;" >

			<div class="st-content"><!-- this is the wrapper for the content -->
				<div class="st-content-inner"><!-- extra div for emulating position:fixed of the menu -->

					<div class="main clearfix">
						
						<div id="st-trigger-effects" class="column">
						 	
							<button id="drum-roll" data-effect="st-effect-11" ></button>
							<div class="content">
								<!-- content will come here -->
								<?php include("page/workshop.php"); ?>
							</div>
						</div>
					
					</div><!-- /main -->
				</div><!-- /st-content-inner -->
			</div><!-- /st-content -->
		</div><!-- /st-pusher -->
	</div><!-- /st-container -->


	<div id="st-container" class="sponsors-pane st-container st-effect-11">

		<!-- content push wrapper -->
		<div class="st-pusher">

			<div class="st-content"><!-- this is the wrapper for the content -->
				<div class="st-content-inner"><!-- extra div for emulating position:fixed of the menu -->

					<div class="main clearfix">
						
						<div id="st-trigger-effects" class="column">
						 	
							<button id="drum-roll" data-effect="st-effect-11" ></button>
							<div class="content">
								<!-- content will come here -->
								<?php include("page/sponsor.php"); ?>
							</div>
						</div>
					
					</div><!-- /main -->
				</div><!-- /st-content-inner -->
			</div><!-- /st-content -->
		</div><!-- /st-pusher -->
	</div><!-- /st-container -->

	<div id="overlay"></div>
	<div id="bg">
		<video id="bg-video" muted autoplay loop>
			<source src="video/dds_dconstruction.mp4" type="video/mp4">
			<source src="video/dds_dconstruction.webm" type="video/webm">
		</video>
	</div>
</div>
<!-- For transitions -->
<script src="js/classie.js"></script>
<script src="js/sidebarEffects.js"></script>
<!-- 
<script type="text/javascript">

	  var _gaq = _gaq || [];
	  _gaq.push(['_setAccount', 'UA-38979718-1']);
	  _gaq.push(['_trackPageview']);

	  (function() {
	    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
	    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
	    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
	  })();

</script>
-->
</body>
</html>
