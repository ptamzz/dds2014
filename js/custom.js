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
	page =  window.location.hash.substr(1);
	if(page != '') {
		viewPane = $("." + page+"-pane");	//Set current viewPane when loaded with hash URL
	} else {
		viewPane = $('.home-pane');	//initial pane in view
	}

	doMagicTransition(viewPane);	//Show ViewPane

	//HashBang handling without the "Bang" of course
	$(window).bind('hashchange', function() {
		view = true;	//true if loading for the 2nd & subsequent times
		page =  window.location.hash.substr(1);	//Get URL hash value "/hashvalue" & remove "/" 	

		var e = $("."+page+"-pane");	//Get New viewPane
		doMagicTransition(e);
	});


	//Playing bg video in slow motion
	document.getElementById("bg-video").playbackRate=0.5;

	//Setting viewport heights
	$('.st-menu, .main-nav, .st-container').css({ height: winHeight });
	$('.content').css({  'width' : winWidth, 'height': winHeight });

	$('.logo-container, .body-bar').css({ 'top' : (winHeight/2) - 200 })

	$('.page-content').css({  'width' : winWidth-425 });

	//Transition animation
	$('.main-nav').hover( hoverIn, hoverOut);

	$('.main-nav').click(function(e){ mouseY = e.clientY; });	//Set mouse-click coords - used to determine pointer move distance

	//If pointer moves more than 20px, call hoverIn
	$('.main-nav').mousemove(function(e){
      if (Math.abs(mouseY - e.clientY) > 20){
      	hoverIn();
      	mouseY = e.clientY; //reset mouse pointer 
      }
   });

	//Assign cur-nav class to nav item
	$(".main-nav ul li").click(function(){
		$(".main-nav ul li").removeClass("cur-nav");
		$(this).addClass("cur-nav");
	});


	$(".workshop").click(function(){
		$('.content').animate({
	        scrollTop: $("#"+$(this).data('id')).offset().top
	    }, 200);
	});


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

    $(".main-nav ul").animate({ 'width'  : 50 }, 50);

    $('.st-menu').css({ 
    	'-webkit-transform' : 'translate3d(-200px, 0, 0)',
    	'-moz-transform' : 'translate3d(-200px, 0, 0)',
    	'-ms-transform' : 'translate3d(-200px, 0, 0)',
    	'-o-transform' : 'translate3d(-200px, 0, 0)'
    });

    ////Magic webkit 3D pan-tilt out
	$('#st-container').removeClass("st-menu-open");
	$('.st-pusher').removeClass('magic').addClass('reverse-magic');

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
		


