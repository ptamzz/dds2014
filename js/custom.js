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




}); // jQuery $(funtion() ends


//Effect for Nav MouseIn
function hoverIn(){
	//Mouseover
	$('.st-menu').css({ '-webkit-transform' : 'translate3d(0, 0, 0)' });

	//Magic webkit 3D pan-tilt in
	$('#st-container').addClass("st-menu-open");
	$('.st-pusher').removeClass('reverse-magic').addClass('magic');
	$(".main-nav ul").animate({ 'width'  : 250 }, 450);

	//pointer inside .main-nav
	hover = true;

	console.log("Hover In");
}


//Effect for Nav MouseOut
function hoverOut(){
    //Mouseout

    $(".main-nav ul").animate({ 'width'  : 50 }, 200);

    $('.st-menu').css({ '-webkit-transform' : 'translate3d(-200px, 0, 0)' });

    ////Magic webkit 3D pan-tilt out
	$('#st-container').removeClass("st-menu-open");
	$('.st-pusher').removeClass('magic').addClass('reverse-magic');

	//pointer outside .main-nav
	hover = false;
}


//Main Page Transition to new viewPane
function doMagicTransition(e){
	//Show the pane to be flown in
	e.show();
	$('html, body').scrollTop(viewPane.offset().top)	//Set scroll position to the current viewPane

	$('html, body').animate({
        scrollTop: e.offset().top
    }, 500, function(){
    	console.log("Hover out");
    	hoverOut();

    	if(view){
    		viewPane.hide(10, function(){
	    		viewPane = e; //Reset current pane in view
	    	});
    	}
  		//viewPane.hide();
  		//viewPane = e;
    });


	//loadPage(page);
}
		

function loadPage(page){
	$('.ajax-loader').show();
	$("#cWrap").hide();
	$.scrollTo({top: 0, left:0});
	
	if (page.indexOf('!') == 1 ){
		var data = page.substr(3);		//To handle old URL initially used (format '#!/page-name')
	} else {
		var data = page.substr(2);		//To handle new url, format '#/page-name'
	}
	
	 //window.scrollTo(100,500)
	$.ajax({
		type: "POST",
		url: "proc/loadPage.php",
		data: { "page" : encodeURIComponent(data) },
		cache: false,
		error: function(xhr){
			if(xhr.status == 403){
				$('#cWrap').html("<section class='page'>It seems you are using IE. Due to some IE Bug, the place can not be displayed properly. Kindly consider using another browser.</section>");
			}
		},
		success: function(html){
			$('.ajax-loader').hide();
			$("#cWrap").html(html);
			$("#cWrap").fadeIn(100, function(){
				$('#fun').css({ 'height' : $('.page').height() });
				setTimeout("setHeight()",1000*3);
				if($(".page>h1").length > 0){
					$("title").html("Pritam Pebam: " + $(".page>h1").html());
				} else if($("#y-u-no").length > 0){
					$("title").html("Pritam Pebam: " + $("#y-u-no").data('title'));
				}
			});	
		}
	});
}
