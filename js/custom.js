/*
	Custom jQuery & Javascript Functions
	Author: Pritam Pebam
	Version: 1.0.1
	Email: ptamzz@gmail.com
 */

// JavaScript Document

var page, //preset url hash value for home
	view = false,	//false if loading for the first time
	viewPane,
	hover = false,	//pointer ouside .main-nav
	mouseX, mouseY = 0;

$(function() {

	var winHeight = $(window).height(),
		winWidth = $(window).width();

	//Initial URL handling
	page = getPage(window.location.hash); //return page from url

	//page =  window.location.hash.substr(2);
	if(page != '') {
		viewPane = $("." + page+"-pane");	//Set current viewPane when loaded with hash URL
	} else {
		viewPane = $('.home-pane');	//initial pane in view
	}

	loadPage(page); //Load New Page
	doMagicTransition(viewPane);	//Show ViewPane

	//HashBang handling without the "Bang" of course
	$(window).bind('hashchange', function() {
		view = true;	//true if loading for the 2nd & subsequent times
		page =  getPage(window.location.hash);	//Get URL hash value "#/hashvalue" & remove "#/" 	

		var e = $("."+page+"-pane");	//Get New viewPane
		doMagicTransition(e);

		loadPage(page); //Load New Page
	});

	//Setting viewport heights
	$('.st-menu, .main-nav').css({ height: winHeight });
	$('.content').css({  'width' : winWidth, 'height': winHeight });

	$('.logo-container, .body-bar').css({ 'top' : (winHeight/2) - 200 })

	//Transition animation
	$('.main-nav').hover( hoverIn, hoverOut);

	$('.main-nav').click(function(e){ mouseY = e.clientY; });	//Set mouse-click coords - used to determine pointer move distance

	//If pointer moves more than 20px, call hoverIn
	$('.main-nav').mousemove(function(e){
      if (Math.abs(mouseY - e.clientY) > 20 ){
      	hoverIn();
      	mouseY = e.clientY; //reset mouse pointer 
      }
   });

	//Assign cur-nav class to nav item
	$(".main-nav ul li").click(function(){
		$(".main-nav ul li").removeClass("cur-nav");
		$(this).addClass("cur-nav");
	});

	$('.workshops-pane').on("click", ".workshop", function() {
		$('.content').animate({
	        scrollTop: $("#"+$(this).data('id')).offset().top
	    }, 200);
	});


	//Playing bg video in slow motion
	document.getElementById("bg-video").playbackRate=0.5;


/* To fixed page-aside - check back later

	$('.content').scroll(function() {
	  console.log("Scrolled: " + $(this).scrollTop());

	  if($(this).scrollTop() > 250 ){
	  	$('.page-aside').css({
	  		'position' : 'fixed',
			'right': '50px',
			'top': '350px'
	  	});
	  }
	});
*/

}); // jQuery $(funtion() ends


//Effect for Nav MouseIn
function hoverIn(){
	//Mouseover
	$('.st-menu').css({ 
		'-webkit-transform' : 'translate3d(0, 0, 0)',
		'-moz-transform' : 'translate3d(0, 0, 0)',
		'-ms-transform' : 'translate3d(0, 0, 0)',
		'-o-transform' : 'translate3d(0, 0, 0)' 
	});

	//Magic webkit 3D pan-tilt in
	$('#st-container').addClass("st-menu-open");
	$('.st-pusher').removeClass('reverse-magic').addClass('magic');
	$(".main-nav ul").animate({ 'width'  : 250 }, 450);

	//pointer inside .main-nav
	hover = true;
}


//Effect for Nav MouseOut
function hoverOut(){
    //Mouseout
    $(".main-nav ul").finish();

    $('.st-menu').css({ 
    	'-webkit-transform' : 'translate3d(-200px, 0, 0)',
    	'-moz-transform' : 'translate3d(-200px, 0, 0)',
    	'-ms-transform' : 'translate3d(-200px, 0, 0)',
    	'-o-transform' : 'translate3d(-200px, 0, 0)'
    });

    //Magic webkit 3D pan-tilt out
	$('#st-container').removeClass("st-menu-open");
	$('.st-pusher').removeClass('magic').addClass('reverse-magic');

	//Scroll to top-left
	$.scrollTo({top: 0, left:0});

	$(".main-nav ul").animate({ 'width'  : 50 }, 150);

	//pointer outside .main-nav
	hover = false;
}


//Main Page Transition to new viewPane
function doMagicTransition(e){
	console.log("doMagicTransition");
	//Show the pane to be flown in
	e.show();
	var dom = $('body, html');
	dom.css({ 'overflow' : 'auto' });
	dom.scrollTop(viewPane.offset().top);	//Set scroll position to the current viewPane

	dom.animate({
        scrollTop: e.offset().top
    }, 500, function(){
    	
    	hoverOut();

    	if(view){
    		viewPane.hide(10, function(){
	    		viewPane = e; //Reset current pane in view
	    		dom.css({ 'overflow' : 'hidden' });
	    	});
    	}
    });
}

function loadPage(p){
	console.log("LoadPage Called");

	$.ajax({
		type: "POST",
		url: "php/loadPage.php",
		data: { "page" : encodeURIComponent(p) },
		cache: false,
		error: function(xhr){
			if(xhr.status == 403){
				$('.content').html("<section class='page'>It seems you are using IE. Due to some IE Bug, the place can not be displayed properly. Kindly consider using another browser.</section>");
			}
		},
		success: function(html){
			console.log("LoadPage Returned");
			$(".content").html(html);
			$(".content").fadeIn();	
		}
	});
}


function getPage(hash){
	var url;
	if (hash.charAt(1) == "/" ){
		var url = hash.substr(2);		//To handle new URL  (format '#/page-name')
	} else {
		var url = hash.substr(1);		//To handle old url, format '#/page-name'
	}

	return url;
}	


