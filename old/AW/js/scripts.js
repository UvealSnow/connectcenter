/* ---------------------------------------------------------------------- */
/*	LOADER
/* ---------------------------------------------------------------------- */
$(window).load(function() {
	"use strict";
	$("#loading").fadeOut("1000", function() {
	// Animation complete
		$('#loading img').css("display","none");
		$('#loading').css("display","none");
		$('#loading').css("background","none");
		$('#loading').css("width","0");
		$('#loading').css("height","0");
	});
	$("#part1").attr('class', 'fadein_1');
	$("#part2").attr('class', 'fadein_2');
	$("#part2_1").attr('class', 'fadein_2_1');
	$("#part2_2").attr('class', 'fadein_2_2');
	$("#part3").attr('class', 'fadein_3');
});

$(document).ready(function(){
	"use strict";
	/* ---------------------------------------------------------------------- */
	/*	DIV HOME POSITION
	/* ---------------------------------------------------------------------- */
	
	var windowHeight = $(window).height();
	var homepageHeight = $('#home').height();
	
	if (windowHeight >= homepageHeight){
		$('#home').css("margin-top", ((windowHeight-homepageHeight))/2);
	}	

	$(window).resize(function() {		
		var windowHeight = $(window).height();
		var homepageHeight = $('#home').height();
		
		if (windowHeight >= homepageHeight){
			$('#home').css("margin-top", ((windowHeight-homepageHeight))/2);			
		}	
	});

	var margTeam = $('#team').height() - $('#teamContent').height()
	var margFinalTeam = margTeam*0.5
	$('#teamContent').css("margin-top", margFinalTeam);

	var margInfo = $('#infoCC').height() - $('#infoCCBox').height()
	var margInfoFinal = margInfo*0.5

	$('#infoCCBox').css("margin-top", margInfoFinal)
	
	var margServices = $('#servicesDesc').height() - $('#servicesContent').height()
	var margServicesFinal = margServices*0.5
	
	$('#servicesContent').css("margin-top", margServicesFinal)
	
	/* ---------------------------------------------------------------------- */
	/*	MAP HEIGHT & CANVAS
	/* ---------------------------------------------------------------------- */
	var serCanv = $('#services').height()
	$('#canvas2').css("margin-top", '-210px');
	$('#canvas2').css("height", serCanv);

	if (windowHeight >= homepageHeight){
		$('#canvas').css("height", (windowHeight ));

	} else{
		$('#canvas').css("height", (homepageHeight ));
	}
	
	$(window).resize(function() {
		var windowHeight = $(window).height();
		var homepageHeight = $('#home').height();
		
		if (windowHeight >= homepageHeight){
			$('#canvas').css("height", (windowHeight));
			
		} else{
			$('#canvas').css("height", (homepageHeight));
		}
	});
	
	/* ---------------------------------------------------------------------- */
	/*  DIV CONTACTFORM POSITION
	/* ---------------------------------------------------------------------- */
	
	var footerHeight = $('.footer').height();
	var contactHeight = $('.contact').height();
	var windowtWidth = $(window).width();
	var contactSection = $('#contactSection').height();
	
	if (windowtWidth >= 478){
		var difference = contactSection - footerHeight;
		var differenceForm = difference - contactHeight;
		var topMarginForm = differenceForm * 0.5
		$('.contact').css("margin-top", topMarginForm);
	} else{
		$('.contact').css("margin-top", '0');
	}
	
	$(window).resize(function() {
		var footerHeight = $('.footer').height();
		var contactHeight = $('.contact').height();
		var windowtWidth = $(window).width();
		var mapContentHeight = $('.contact').height();
		
		if (windowtWidth >= 478){
			var difference = mapContentHeight - footerHeight;
			$('.contact').css("top", ((difference-contactHeight)/2));
		} else{
			$('.contact').css("top", '0');
		}
	});
	
	/* ---------------------------------------------------------------------- */
	/*	SCROLL MEET-US
	/* ---------------------------------------------------------------------- */
	
	var windowWidth = $(window).width();
	var windowHeight = $(window).height();

	if (windowWidth <= 480){
		$('.meet-us').css("height", (windowHeight-70));
	}
	
	/* ---------------------------------------------------------------------- */
	/*	SCROLL PAGE WITH EASING EFFECT
	/* ---------------------------------------------------------------------- */
    
	$('#Servicios').bind('click', function(e) {
	    e.preventDefault();
	    var target = this.hash;
	    $.scrollTo(target, 750, {
	    	easing: 'swing',
	    	axis: 'y'
	    });
	});

	$('#Inicio').bind('click', function(e) {
	    e.preventDefault();
	    var target = this.hash;
	    $.scrollTo(target, 750, {
	    	easing: 'swing',
	    	axis: 'y'
	    });
	});

	$('#Consultoria').bind('click', function(e) {
	    e.preventDefault();
	    var target = this.hash;
	    $.scrollTo(target, 750, {
	    	easing: 'swing',
	    	axis: 'y'
	    });
	});

	$('#Contacto').bind('click', function(e) {
	    e.preventDefault();
	    var target = this.hash;
	    $.scrollTo(target, 750, {
	    	easing: 'swing',
	    	axis: 'y'
	    });
	});

	$('#Nosotros').bind('click', function(e) {
	    e.preventDefault();
	    var target = this.hash;
	    $.scrollTo(target, 750, {
	    	easing: 'swing',
	    	axis: 'y'
	    });
	});

	$('#ccButton').bind('click', function(e) {
	    e.preventDefault();
	    var target = this.hash;
	    $.scrollTo(target, 750, {
	    	easing: 'swing',
	    	axis: 'y'
	    });
	});

	$('#consultoriaButton').bind('click', function(e) {
	    e.preventDefault();
	    var target = this.hash;
	    $.scrollTo(target, 750, {
	    	easing: 'swing',
	    	axis: 'y'
	    });
	});
	
	$('#home-top').bind('click', function(e) {
		e.preventDefault();
	    $.scrollTo(0, 750, {
	    	easing: 'swing',
	    	axis: 'y'
	    });
	})
	
	/* ---------------------------------------------------------------------- */
	/*	TEXT EFFECTS
	/* ---------------------------------------------------------------------- */
	
	$(window).scroll(function(){
		var windowHeight = $(window).height();
		var homepageHeight = $('#home').height();
		
		  // get the height of #wrap
		  var h = $(window).height();
		  var y = $(window).scrollTop();
		  
		  if (windowHeight >= homepageHeight){
			  var altura1 = h*.15;
		  }else{
			  var altura1 = h*.75;
		  }
		  
		  if ( y > altura1 ){
			  $("#part1").attr('class', 'fadeout_1');
			  $("#part2").attr('class', 'fadeout_2');
			  $("#part2_1").attr('class', 'fadeout_2_1');
			  $("#part2_2").attr('class', 'fadeout_2_2');
			  $("#part3").attr('class', 'fadeout_3');
		  } else{
			  $("#part1").attr('class', 'fadein_1');
			  $("#part2").attr('class', 'fadein_2');
			  $("#part2_1").attr('class', 'fadein_2_1');
			  $("#part2_2").attr('class', 'fadein_2_2');
			  $("#part3").attr('class', 'fadein_3');
		  } 
		  
		  if ( y < (h*.75) ){
			  $("#part4").attr('class', 'fadeout_4');
			  $("#part5_1").attr('class', 'fadeout_5_1');
			  $("#part5_2").attr('class', 'fadeout_5_2');
			  $("#part5_3").attr('class', 'fadeout_5_3');
			  $("#part5_4").attr('class', 'fadeout_5_4');
			  $("#part5_5").attr('class', 'fadeout_5_4');
			  $("#part5_6").attr('class', 'fadeout_5_4');
			  $("#part5_7").attr('class', 'fadeout_5_4');
			  $("#part5_8").attr('class', 'fadeout_5_4');
		  } else{
			  $("#part4").attr('class', 'fadein_4');
			  $("#part5_1").attr('class', 'fadein_5_1');
			  $("#part5_2").attr('class', 'fadein_5_2');
			  $("#part5_3").attr('class', 'fadein_5_3');
			  $("#part5_4").attr('class', 'fadein_5_4');
			  $("#part5_5").attr('class', 'fadein_5_4');
			  $("#part5_6").attr('class', 'fadein_5_4');
			  $("#part5_7").attr('class', 'fadein_5_4');
			  $("#part5_8").attr('class', 'fadein_5_4');
		  } 
		  
		  if ( y < h ){
			  $("#part6").attr('class', 'fadeout_6');
		  } else{
			  $("#part6").attr('class', 'fadein_6');
		  }
		 
	 });
		



	/* ---------------------------------------------------------------------- */
	/*	GOOGLE MAPS
	/* ---------------------------------------------------------------------- */

	/*// Needed variables
	var $map 				= $('#map'),
		$address 			= 'ENCINOS, 100, 76903, CORREGIDORA QUERETARO'; //Here, you put your adress
		
		$map.gMap({
			address: $address,
			zoom: 14,
			scrollwheel: false,
		    navigationControl: false,
		    mapTypeControl: false,
		    scaleControl: false,
		    draggable: false,
		    mapTypeId: google.maps.MapTypeId.ROADMAP
		});*/
		
	/* ---------------------------------------------------------------------- */
	/*  TOOLTIP
	/* ---------------------------------------------------------------------- */
	
	$('.footer-social a').tooltip();
			
});

	/* ---------------------------------------------------------------------- */
	/*  SLIDER TEXT
	/* ---------------------------------------------------------------------- */

var textArray = new Array("Talento humano con experiencia de más de 15 años en la industria de los centros de contacto.",
	"Confeccionamos soluciones integrales de atención a Clientes",
	"120 estaciones de trabajo con tecnología omnicanal");


var i = 0;
function changeText (){
    var head = document.getElementById("phrase");
    
    head.opacity = 0;
    head.innerHTML = textArray[i];
    head.opacity = parseFloat(head.innerHTML.opacity) + 0.1;
   

    if (i === 2){
        i=-1;
    }
    i++;

}