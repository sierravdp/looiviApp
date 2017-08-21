"use strict";

var flag = true;

function onInit(){
	$('.preload').fadeToggle();

	initScroll();
	logicUiInputs();

	$(window).scroll( () => {
		headerScrollAnimation();
	});

	$('.btnRhombus-campaign').mouseover(function(){
		$('.btnRhombusActive-campaign').removeClass("btnRhombusActive-campaign");
		$(this).addClass("btnRhombusActive-campaign");

		$('.logoSimbolLooivi-campaign').addClass("fadeOut");
					
		$('.centerContainer-campaign:not(.fadeOut)').addClass("fadeOut");
		let contentId = $(this).data('id');
		$('#'+contentId+'').removeClass("fadeOut");
	});

	$('.btnRhombus-services').mouseover(function(){
		$('.btnRhombusActive-services').removeClass("btnRhombusActive-services");
		$(this).addClass("btnRhombusActive-services");

		$('.logoSimbolLooivi-services').addClass("fadeOut");
					
		$('.centerContainer-services:not(.fadeOut)').addClass("fadeOut");
			let contentId = $(this).data('id');
		$('#'+contentId+'').removeClass("fadeOut");
	});
}

function openLogin(){
	if($('.login').css('display') == 'none'){
		$('.login, .msg-login').slideToggle();
		let top = ($('#login').css("position") != "fixed")? $('#login').offset().top : $('#login')[0].offsetTop;
		console.log(top);
		$('body, html').animate({
			scrollTop: (top)+'px'
		}, 800);
		
	}
}

function btnMenuBehavior(){
	let btnMenu = $('#hamburger-menu');
	if(btnMenu.hasClass('open')){
		btnMenu.removeClass('open');
		$('#menu').removeClass('open-menu');
		$('.filter-menu').fadeToggle();
	}else{
		btnMenu.addClass('open');
		$('#menu').addClass('open-menu');
		$('.filter-menu').fadeToggle();
	}
}

function headerScrollAnimation(){
	var navHeight = $(window).height();
<<<<<<< HEAD
        if ($(window).scrollTop() > navHeight) {
        	$('header').css('background-color', "rgba(194,194,194, "+0+")" );
        	$('header').css('position','fixed');
=======
	var temp = 1.0;
        if ($(window).scrollTop() > navHeight) {
        	$('header').css('background-color', "rgba(194,194,194, "+0+")" );
>>>>>>> 376cc5db5f3cd684314c2e6bcb1ecab2081891c5
			$('header').addClass('bg-h');
			$('header').css('display','block');
			if($('#logo .logo_2').css('display') == 'none'){
				$('#logo img').fadeToggle();
				$('header').css('border-bottom','1px solid #fff');
				$('header').css('color','#f5495d');
<<<<<<< HEAD
			} 
        }
        else {
        	$('header').removeClass('bg-h');
        	$('header').css('position','absolute');
        	$('header').css('display','block');
			$('header').css('border-bottom','0px solid #fff');
			$('header').css('color','#fff');
			$('header').css('background-color', "rgba(194,194,194, "+0+")" );
			$('.header2').css('background-color', "rgba(85,85,85, "+1+")" );
=======
			}         
        }
        else {
        	temp = temp - 0.05;
        	$('header').removeClass('bg-h');
        	$('header').css('display','none');
			$('header').css('border-bottom','0px solid #fff');
			$('header').css('color','#fff');
			$('header').css('background-color', "rgba(194,194,194, "+1+")" );
			let caclO = 0;
>>>>>>> 376cc5db5f3cd684314c2e6bcb1ecab2081891c5
			//$('header').css('background-color', "rgba(194,194,194, "+caclO/2+")" );
			if($('#logo .logo_1').css('display') == 'none'){
				$('#logo img').fadeToggle();
			}     
    	}
}

function calcSizeBanner(){
	$('.swiper-container-loovi').height($(window).height()-20);
}

function addBlurSlide(obj){
	let parentSlider = $(obj).parents('.swiper-slide');
	let contentBlur = parentSlider.find('.contentBlur');
	contentBlur.addClass('_blur');
}

function removeBlurSlider(obj){
	let contentBlur = $(obj).parents('.swiper-slide').find('.contentBlur');
	contentBlur.removeClass('_blur');
}

function goToSection(obj){
	$('header li.active').removeClass('active');
	obj = $(obj).hasClass('item-f')? $('header #menu li[data-id="'+$(obj).attr('data-id')+'"]') : obj;
	$(obj).addClass('active');
	let id = $(obj).attr('data-id');
	let target = $('#'+id);
	let top = (target.css("position") != "fixed")? target.offset().top : target[0].offsetTop;
	flag = false;
	$('body, html').animate({
		scrollTop: (top-$('header').height())+'px'
	}, 800, ()=>{
		flag =  true;
	});

	if($(window)[0].innerWidth <= 768){
		btnMenuBehavior();
	}
}

function refreshPositionSection(){
	if(flag){
		let targets = $('header li').not('.btn-not');
		for (var i = 0; i < targets.length; i++) {
			let target = $('#'+ $(targets[i]).attr('data-id'));
			let top = ($(target).css("position") != "fixed")? $(target).offset().top : target.offsetTop;
			let calcI = top;
	        let calcF = top + $(target).height();
			if($(window).scrollTop() >= calcI && $(window).scrollTop() < (calcF-$('header').height())){
				$('header li.active').removeClass('active');
				$(targets[i]).addClass('active');
				return;
			}
		}
	}
}

/**
 * Logic of behavior inputs
 */
function logicUiInputs(){
	$('._form-group input, ._form-group textarea').keyup(function(e){
		validateBehavior(e.target);
	}).change(function(e){
		validateBehavior(e.target);
	});
}

/**
 * Validate benavior input
 *
 * @param {type} target - input field
 *
 */
function validateBehavior(target){
	if($(target).val() != "" && !$(target).parent('._form-group').hasClass('control-label-not-empty')){
		$(target).parent('._form-group').addClass('control-label-not-empty');
	}else if($(target).val() == "" && $(target).parent('._form-group').hasClass('control-label-not-empty')){
		$(target).parent('._form-group').removeClass('control-label-not-empty');
	}
}

$('#draggable-point').draggable({
  axis: 'x',
  containment: "#audio-progress"
});

$('#draggable-point').draggable({
  drag: function() {
    var offset = $(this).offset();
    var xPos = (100 * parseFloat($(this).css("left"))) / (parseFloat($(this).parent().css("width"))) + "%";
   
    $('#audio-progress-bar').css({
      'width': xPos
    });
  }
});
