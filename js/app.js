

$(document).ready(function(){

/*  ==================================================================================
 *  $tinyMCE
 *==================================================================================*/

	tinyMCE.init({
		// General options
		content_css : "stylesheets/app.css",
		selector: ".tinymce",
		theme: "modern",
		height: 200,
		plugins: [
			"autolink link fullscreen save template paste"
		],
		valid_elements : "a[href|target=_blank],em/i,strike,strong/b,br,#p[align]",
		toolbar: "bold italic | link "
	});
/*  ==================================================================================
 *  $Ajout d'un 
 *==================================================================================*/
	$('#duplicate-btn').click(function(e){
		e.preventDefault();
		var $clone = $('#duplicate').clone().attr('id','').removeClass('hide');
		$('#duplicate').before($clone);
	})

	$('#change-btn').click(function(e){
		e.preventDefault();
		$( ".change" ).append( '<input type="file" name="appartement_img">' );
		$( '#change-btn').addClass( 'hide');
	})
	

/*  ==================================================================================
 *  $lightbox
 *==================================================================================*/

    $('.portfolio-carousel-item-btn').nivoLightbox({
		effect: 'fade',                             // The effect to use when showing the lightbox
		theme: 'default',                           // The lightbox theme to use
		keyboardNav: true,                          // Enable/Disable keyboard navigation (left/right/escape)
		clickOverlayToClose: true,                  // If false clicking the "close" button will be the only way to close the lightbox
		onInit: function(){},                       // Callback when lightbox has loaded
		beforeShowLightbox: function(){},           // Callback before the lightbox is shown
		afterShowLightbox: function(lightbox){},    // Callback after the lightbox is shown
		beforeHideLightbox: function(){},           // Callback before the lightbox is hidden
		afterHideLightbox: function(){},            // Callback after the lightbox is hidden
		onPrev: function(element){},                // Callback when the lightbox gallery goes to previous item
		onNext: function(element){},                // Callback when the lightbox gallery goes to next item
		errorMessage: 'The requested content cannot be loaded. Please try again later.' // Error message when content can't be loaded
	});

/*  ==================================================================================
 *  $dropdown bulle
 *==================================================================================*/

	// var drop_state = false;
	// var isActive = $(this).parent().hasClass('dropdown-open')	;
	// var	dropdownToogleClass = $(this).parent().toggleClass('dropdown-open');
	
	// function openDropDown(){
	// 	drop_state = true;
	// 	//dropdownToogleClass
	// }
	// function closeDropDown(){
	// 	drop_state = false;
	// 	//dropdownToogleClass
	// 	$('.dropdown').velocity('transition.slideLeftOut', {duration : 500, stagger: 250, drag: true, backwards: true });
	// }
	// $('.dropdown-toogle').click(function (e) {
	//     e.preventDefault();
	//     console.log(drop_state)
	// 	if (drop_state === false) {
	// 		openDropDown();
	// 		$(this).parent().children('.dropdown').velocity('transition.slideRightIn', {duration : 500, stagger: 250, drag: true });
	// 	}else{
	// 		closeDropDown();
	// 	};
	// });

	// $dropdown.velocity({ 
	// 		translateY: [0,-10] ,
	// 		opacity: [1,0]
	// 	}, { 
	// 		display: 'block',
	// 		duration: 500 
	// 	}); 

/*  ==================================================================================
 *  $carousel
 *==================================================================================*/

 	$('#carousel').owlCarousel({
 		autoplay: true,
 		loop: true,
 		items: 3,
 		margin: 26.25,
 		responsiveClass:true,
 		responsive:{
	        0:{
	            items:1,
	            nav: false
	        },
	        640:{
	            items:2,
	            nav: true
	        },
	        1024:{
	            items:3,
	            nav: false
	        }
	    }
	})

/*  ==================================================================================
 *  $Equalizer
 *==================================================================================*/
$('.equalizer').equalize();
/*  ==================================================================================
 *  $sidebar
 *==================================================================================*/
 	$('#icon--sidebar').click(function(e){
 		e.preventDefault();
 		$('body').toggleClass('with--sidebar');
 	});
 	$('#site-cahce').click(function(e){
 		e.preventDefault();
 		$('body').toggleClass('with--sidebar');
 	});

 /*  ==================================================================================
 *  $sidebar
 *==================================================================================*/

 	$('.navigation-list-item > ul').hide();
 	$('.navigation-list-item > a').click(function(){
 		
 		if ($(".navigation-list-item").hasClass('active--toggle')) {
 			
 			if ($(this).parent().hasClass('active--toggle')) {

 				$(this).parent().children('ul').slideToggle(200);	
		 		$(this).parent().removeClass('active--toggle');
 			
 			}else{

		 		$('.active--toggle').children('ul').slideToggle(200);
		 		$(".navigation-list-item").removeClass('active--toggle');
		 		$(this).parent().children('ul').slideToggle(200);	
		 		$(this).parent().addClass('active--toggle');

 			}
 		}
 		else{
			
			$(this).parent().children('ul').slideToggle(200);		
 			$(this).parent().addClass('active--toggle');
 		
 		}
	
	});
/*  ==================================================================================
 *  $sidebar
 *  ==================================================================================*/

	
	$('.dropdown-toogle').click(function (e) {
		e.preventDefault();
		if ($(".dropdown-wrapper").hasClass('active--dropdown')) {
			if ($(this).parent().hasClass('active--dropdown')) {
				
				$(this).parent().removeClass('active--dropdown');
				$('.dropdown').velocity('transition.slideLeftOut', {duration : 500, stagger: 250, drag: true, backwards: true });
			
			}
			else{
				
				$('.active--dropdown').children('.dropdown').velocity('transition.slideLeftOut', {duration : 500, stagger: 250, drag: true, backwards: true });
				$('.dropdown-wrapper').removeClass('active--dropdown');
				$(this).parent().addClass('active--dropdown');
				$(this).parent().children('.dropdown').velocity('transition.slideRightIn', {duration : 500, stagger: 250, drag: true });
			};
		}
		else{
			$(this).parent().addClass('active--dropdown');
			$(this).parent().children('.dropdown').velocity('transition.slideRightIn', {duration : 500, stagger: 250, drag: true });
		};
	    
	});
/* end -----------------------------------------------------*/	
});