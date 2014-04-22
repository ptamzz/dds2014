/*
	Custom jQuery & Javascript Functions
	Author: Pritam Pebam
	Version: 1.0.1
	Email: ptamzz@gmail.com
 */

// JavaScript Document

var e, 
	page, //preset url hash value for home
	view = false,	//false if loading for the first time
	viewPane,
	hover = false,	//pointer ouside .main-nav
	dom,
	mouseX, mouseY = 0,
	winHeight, winWidth;

$(function() {

	dom = $('body, html');
	winHeight = $(window).height();
	winWidth = $(window).width();
	setPixels(false);	//Set default width

	//Mapping horizontal to vertical scroll
	$(".content").mousewheel(function(event, delta) {
		this.scrollLeft -= (delta * 9);
    	event.preventDefault();
	});

	/*
	$(window).keypress(function(e){
		switch(e.which)
		{
			// Left Arrow
			case 37:	goLeft();
						break;	
						
			// Up Arrow
			case 38:	goLeft();
						break;
						
			// Down Arrow
			case 40:	goRight();
						break;
						
			// Right Assow
			case 39:	goRight();
						break;
						
		}
	});*/

	//Hash URL Handling
	handleURL(false);													//handles URL on first time load
	$(window).bind('hashchange', function() { handleURL(true);  });		//Handles URL on hashchange
	

	//Transition animation
	$('.main-nav').hover( hoverIn, hoverOut);
	$('.main-nav').click(function(e){ mouseY = e.clientY; });	//Set mouse-click coords - used to determine pointer move distance

	//If pointer moves more than 20px on y-axis, call hoverIn
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
	

}); // jQuery $(funtion() ends

/*
	$(window).resize(function() {
		console.log("Resized");
		setPixels();
	});
*/

function handleURL(p){
	page =  getPage(window.location.hash);	//Get URL hash value "#/hashvalue" & remove "#/" 

	//2nd and subsequent loads (hashchange)
	if(p){
		view = true;	//true if loading for the 2nd & subsequent times
		e = $("."+page+"-pane");	//Get New viewPane
		doMagicTransition(e, page);
	} else {
		//Initial URL handling
		viewPane = (page != '' ? $("." + page+"-pane") : $('.home-pane') );	
		doMagicTransition(viewPane, page);	//Show ViewPane
	}
}


//Set Heights & widths dynamicall
function setPixels(p){
	$('body').css({ 'overflow' : 'hidden' });
	if(p){
		//If true, then reset height+width
		winHeight = $(window).height();
		winWidth = $(window).width();
	}

	//Setting viewport/container attributes
	$('.st-menu, .main-nav').css({ height: winHeight });
	$('.content').css({  'width' : winWidth, 'height': winHeight });
	$('.logo-container, .body-bar').css({ 'top' : (winHeight/2) - 200 });
}


//Effect for Nav MouseIn
function hoverIn(){
	$(".content").animate({scrollLeft:0}, '500', 'swing', function(){ /* do nothing */ });
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
function doMagicTransition(e, page){
	//Show the pane to be flown in
	e.show();
	$(".content").html('');	//Remove content

	dom.css({ 'overflow' : 'auto' });
	dom.scrollTop(viewPane.offset().top);	//Set scroll position to the current viewPane

	dom.animate({
        scrollTop: e.offset().top
    }, 500, function(){
    	loadPage(page);	//Load Page content

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
			$('.content').css({ 'overflow' : 'hidden' });
			$(".content").html(html);
			$(".content").fadeIn();	

			if(p == 'd-tour' || p == 'sponsors'){
				//Setting d.tour height
				$('.each-tour').css({ 'height' : winHeight });
				$( ".each-tour" ).each(function(i) {
					var eHeight = $(this).children('.d-tour-desc').height();
					$(this).children('.d-tour-pic').css({ 'height' : 	winHeight - eHeight - 100 });
					if(i%2 == 0){ $(this).children('.d-tour-pic').css({ 'position' : 'absolute', 'bottom' : 0 }); }
				});

			} else if (p == 'contact'){
				$('#contact-map, .google-maps').css({ 'width' : winWidth - 500, 'height' : winHeight });	//450 for the right each-tour
			} 

			var $container = $('.isotope');
			$container.css({ 'height' : winHeight });
			// init Isotoppe
			$container.isotope({
			  // options
			  itemSelector: '.each-tour',
			  layoutMode: 'masonryHorizontal'
			});
		}
	});
}


function getPage(hash){
	var url = (hash.charAt(1) == "/" ? hash.substr(2) : hash.substr(1)); //To work for both #/page-name & #page-name URL structure
	return url;
}


/* 
function mobilecheck() {
	var check = false;
	(function(a){if(/(android|ipad|playbook|silk|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
	return check;
}
*/


