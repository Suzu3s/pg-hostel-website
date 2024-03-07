$(window).scroll(function() {
    if ($(this).scrollTop() > 230){  
        $('.header').addClass("header-add");
    }
    else{
        $('.header').removeClass("header-add");
    }
});

$(document).ready(function(){
   $('.menu-button').click(function(){
      $('.menu-controler').toggleClass('side-menu-active'); 
      $(this).toggleClass('menu-rotate');
   });
});

$('.rooms-slider').owlCarousel({
    loop:true,
    margin:40,
    nav:true,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})



$('.client-say-slider').owlCarousel({
    loop:true,
    margin:40,
    nav:true,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:2
        }
    }
})


$('.awesome-service-slide').owlCarousel({
    loop:true,
    margin:40,
    nav:false,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})


$('#thumbs .owl-stage-outer .owl-stage').addClass('none');