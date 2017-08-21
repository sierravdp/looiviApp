/*=============================================================
    Authour URI: www.binarytheme.com
    License: Commons Attribution 3.0

    http://creativecommons.org/licenses/by/3.0/

    100% To use For Personal And Commercial Use.
    IN EXCHANGE JUST GIVE US CREDITS AND TELL YOUR FRIENDS ABOUT US
   
    ========================================================  */


(function ($) {
    "use strict";
    var mainApp = {

        main_fun: function () {
            /*====================================
             CUSTOM LINKS SCROLLING FUNCTION 
            ======================================*/

            $('nav a[href*=#]').click(function () {
                if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
               && location.hostname == this.hostname) {
                    var $target = $(this.hash);
                    $target = $target.length && $target
                    || $('[name=' + this.hash.slice(1) + ']');
                    if ($target.length) {
                        var targetOffset = $target.offset().top;
                        $('html,body')
                        .animate({ scrollTop: targetOffset }, 800); //set scroll speed here
                        return false;
                    }
                }
            });
         

            /*====================================
                NAV SCRIPTS
            ======================================*/
            $(window).bind('scroll', function () {
                var navHeight = $(window).height();
                if ($(window).scrollTop() > navHeight) {
                    $('nav').addClass("fixed");
                    $('.signup').css("top","20%");
                    //$('.aditional_nav').css("display", "block")
                    //$('.line').addClass('fixed')
                    //$('.navbar-inverse').css("opacity", 0)
                }
                else {
                    $('nav').removeClass("fixed");
                    $('.signup').css("top","2.7%");
                    //$('.aditional_nav').css("display", "none")
                    //$('.line').removeClass('fixed')
                    //$('.navbar-inverse').css("opacity", 1)
                }
            });

            /*====================================
               WRITE YOUR SCRIPTS BELOW 
           ======================================*/
          
        },

        initialization: function () {
            mainApp.main_fun();

        }

    }
    // Initializing ///

    $(document).ready(function () {
        mainApp.main_fun();
    });

}(jQuery));


/*(function() {
  
  var Menu = (function() {
    //var menu = document.querySelector('.menu');
    //var menuList = document.querySelector('.menu__list');
    //var brand = document.querySelector('.menu__brand');
    //var menuItems = document.querySelectorAll('.menu__item');
    
    var active = false;
    
    var toggleMenu = function() {
      if (!active) {
        //menu.classList.add('menu--active');
        //menuList.classList.add('menu__list--active');
        //brand.classList.add('menu__brand--active');
        document.body.classList.add("nav-visible");
        //document.getElementsByClassName("aditional_nav")[0].css("color","#F5495D")
        //document.getElementsByClassName("aditional_nav")[0].style.backgroundColor = "#F5495D";
        document.getElementsByClassName("aditional_nav")[0].style.background = "transparent";
        //for (var i = 0, ii = menuItems.length; i < ii; i++) {
        //  menuItems[i].classList.add('menu__item--active');
        //}
        
        active = true;
      } else {
        //menu.classList.remove('menu--active');
        //menuList.classList.remove('menu__list--active');
        //brand.classList.remove('menu__brand--active');
        document.body.classList.remove('nav-visible');
        document.getElementsByClassName("aditional_nav")[0].style.backgroundColor = "#5FB09F";
        //for (var i = 0, ii = menuItems.length; i < ii; i++) {
        //  menuItems[i].classList.remove('menu__item--active');
        //}
        
        active = false;
      }
    };
    
    var bindActions = function() {
        
        document.addEventListener('click', toggleMenu, false);
    };
    
    var init = function() {
      bindActions();
    };
    
    return {
      init: init
    };
    
  }());
  
  Menu.init();
  
}());*/
