<?php

	$sp = urldecode($_POST['workshop']);
	//echo "<div style='position: absolute; z-index: 100;'>" + $sp + "</div>";

?>
<?php if ($sp == "game-design") { ?>
	<div class="speaker-cover game-design" style="height: 350px;"></div>
	
	<h4 class="speaker-title">Game Design Workshop</h4>
	<h5 class="meta-one" style="margin-bottom: 15px;">Instructors: Prof. Athavankar & Prof. Girish Dalvi</h5>

	<p>Apart from understanding what games are to learning different ways they can be useful, this workshop focuses on exhibiting the use of strategic thinking and problem solving required in designing a game in order to 
bring about a right mix of fun and learning in it. It aims at explaining the Game Design process – Iterative cycles to Studying and developing player interactions to basic prototypes along with emphasizing the importance of 
feedback and testing.</p>
	<div style="margin-bottom: 40px;"></div>

	<div class="speaker-teaser left">
		<h4 class="speaker-title">Prof. Athavankar</h4>
		<p>
			An Alumnus of JJ College of Architecture, Prof. Athavankar studied 
			Industrial Design at Institute of Design, Illinois Institute of 
			Technology, Chicago. Since then, he has been dividing his time 
			between design education, design research and design related 
			consulting for companies. His current work also includes exploring 
			the role of mental imagery, spatial intelligence and visual 
			thinking in design problem solving.
		</p>
	</div>

	<div class="speaker-teaser left">
		<h4 class="speaker-title">Prof. Girish Dalvi</h4>
		<p>
			A Master’s in Design and a Ph.D. from IIT Bombay, Prof. Dalvi is an 
			inter-disciplinary faculty of Design at the 
			<span class="meta-two">Industrial Design Centre (IDC), 
			IIT Bombay</span> . He teaches subjects in the area of Visual Design, 
			Interaction Design and Design research.
		</p>
	</div>
	
<div style="clear: both;"></div>
<p class="quote">Level: <strong>Beginner to Intermediate</strong></p>
<div style="margin-bottom: 40px;"></div>

<?php } else if ($sp == "raku-pottery") { ?>	

	<div class="speaker-cover raku-pottery" style="height: 350px;"></div>
	<h4 class="speaker-title">Raku Pottery Workshop</h4>
	<h5 class="meta-one" style="margin-bottom: 15px;">Instructor: Sandeep Manchekar</h5>
	<div class="speaker-teaser left">
		<p>Raku is a method of firing and can be recognized by its rough finish, the

pattern of random ash flecks and a rugged finish. The workshop is aimed at 

explaining the formation of an article with Raku clay and firing it in 

Raku. It would introduce the participants to the concept of Raku and 

making articles by using Raku clay followed by trial glaze firing of 

Rakuware.</p>

	</div>

	<div class="speaker-teaser left">
		
		<p>Sandeep Manchekar is a Master Potter and a Master Craftsman who has a

passion for ceramics. He did his GD Art in Ceramics and Pottery from 

Sir J J School of Art and has been working in this field for over 20 years.</p>
</div>

<div style="clear: both;"></div>
<p class="quote">Level: <strong>Beginner</strong></p>
<div style="margin-bottom: 40px;"></div>

<?php } else if ($sp == "art-of-seeing") { ?>
	<div class="speaker-cover art-of-seeing" style="height: 400px;"></div>
	<h4 class="speaker-title">The Art of Seeing Workshop - On Photography</h4>
	<h5 class="meta-one" style="margin-bottom: 15px;">
		Instructor: Deepak John Mathew
	</h5>
	<div class="speaker-teaser left">
		<p>With a firm belief that a good photograph is not just a result of a good 

camera but of the eye that looks through the lens and captures it, this 

workshop tries to reason what makes a picture good. It also tries to figure 

out how can a photograph capture more than just the moment. The Art of 

Seeing is aimed at sensitizing the eye to visual aesthetics and enabling the 

participants to acquire a keen understanding of the relationship between 

the subject and composition.</p>

	</div>

	<div class="speaker-teaser left">

		<p>
			D J Mathew is an award winning photographer, academician and author 

			(Principles of Design through Photography). He is credited with developing 

			the dual postgraduate programme in Photography Design and 

			Photography Design discipline in NID. He also set up the International 

			Photography Certificate Programme in Photography in collaboration with 

			The University of Creative Arts, Farnham, UK.
		</p>
	</div>
	<div style="clear: both;"></div>
	<p class="quote">Level: <strong>Intermediate**</strong></p>
	<p class="small-meta">** Understanding of photography basics is expected.</p>
	<div style="margin-bottom: 40px;"></div>

<?php } else if ($sp == "narrative-and-storytelling") { ?>
	<div class="speaker-cover narrative-and-storytelling" style="height: 400px;"></div>
	
	<h4 class="speaker-title">Storytelling &amp; Puppetry Workshop </h4>
	<h5 class="meta-one" style="margin-bottom: 15px;">
		Instructors: Dadi Pudumjee
	</h5>
	<div class="speaker-teaser left">
		<p>
			India has one of the richest backgrounds especially in the field of 

			storytelling. Our stories have been spoken, sung and enacted. Puppetry has 

			been one of the oldest visual aids used to tell stories. The art of puppetry 

			requires the artist to capture the essence of a character both in tangible and 

			intangible ways through an inanimate object. The workshop aims to 

			amalgamate this ancient form of storytelling with contemporary stories 

			and creativity of the participants.
		</p>
		
	</div>
	<div class="speaker-teaser left">
		<p>
			Dadi Pudumjee is a leading  <span class="meta-two">puppeteer</span> in  <span class="meta-two">India</span> and the founder of The 

			Ishara Puppet Theatre Trust. He was awarded the Sangeet Natak Akademi 

			Award in 1992.

			He is currently serving his second term as the President of world-
			renowned puppetry association,  <span class="meta-two">UNIMA</span> www.unima.org and is a past 

			member of the General Council of the  <span class="meta-two">Sangeet Natak Akademi</span>.
		</p>
	</div>

	<div style="clear: both;"></div>
	<p class="quote">Level: <strong>Beginner to Intermediate</strong></p>
	<div style="margin-bottom: 40px;"></div>

<?php } else if ($sp == "interaction-design") { ?>
	<!-- <div class="speaker-cover interaction-design"></div> -->
	<h4 class="speaker-title">Interaction Design Workshop</h4>
	<div class="speaker-teaser left">
		<p>Details will be up soon.</p>
	</div>
<?php } ?>
