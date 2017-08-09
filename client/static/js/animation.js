"use strict";

function refreshAnimation(content){
    var items = $(content+' .s-animate');
    for (var i = 0; i < items.length; i++) {
        var item = items[i];
        $(item).css('visibility','hidden');
        playAnimation(item);
    }
}

function playAnimation(item){
    if($(item).attr('data-time') === undefined){
        $(item).addClass($(item).attr('data-animation')+' animated').css('visibility','visible');
    }else{
        animateTime(item);
    }
}

function animateTime(obj){
    setTimeout(function(){
        $(obj).addClass($(obj).attr('data-animation')+' animated').css('visibility','visible');
    }, parseFloat($(obj).attr('data-time'))*1000);
}

function prepareAnimation(content, index){
    var items = $(content).not(':nth-child('+(index+1)+')').find('.s-animate').not('.just_init');
    for (var i = 0; i < items.length; i++) {
        $(items[i]).removeClass('animated '+$(items[i]).attr('data-animation')).css('visibility','hidden');
    }
}

function initScroll(){
    logicScroll();
    $(window).scroll( () => {
        logicScroll();
    });
}

function logicScroll(){
    let elements = $('.s-animate.s-scroll').not('.animated');
    for (var i = 0; i < elements.length; i++) {
        let top = ($(elements[i]).css("position") != "fixed")? $(elements[i]).offset().top : elements[i].offsetTop;

        let space = $(elements[i]).attr('data-space') === undefined ? 0 :parseFloat($(elements[i]).attr('data-space'));
        space = space*$(elements[i]).height();

        let calcI = top + space;
        let calcF = top + $(elements[i]).height() - space;

        if($(window).scrollTop() <= calcI && ($(window).scrollTop() + $(window).height()) > calcF){
            playAnimation(elements[i]);
        }
    }
}