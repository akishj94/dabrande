$(document).ready(function(){
    // let rand = Math.floor(Math.random() * 2) + 1;
    // console.log(rand);
    // rand > 1 ? $('body').addClass('blk-theme') : '' ;

    // Params
// let answer = prompt("Nibba what?");
// if(answer != "suckadick"){
//   window.location = "https://www.pornhub.com";
// }
    
    // Loader Animation
    let animationCounter = 1;
    let greetingList = $('.site-loader ul');
    setInterval(function(){
        greetingList.find('li').css({opacity: 0});
        setTimeout(function(){
            greetingList.find('li:nth-child('+animationCounter+')').css({opacity: 1});    
        },500);        
        if(animationCounter == 5){
            animationCounter = 0;            
        }
        animationCounter++;
    }, 3000);
let mainSliderSelector = '.main-slider',
clientSliderSelector = '.clients-slider',
    interleaveOffset = 0.5;

// Main Slider
let mainSliderOptions = {
    //   loop: true,
      speed:1000,
      // autoplay:{
      //   delay:3000
      // },
    //   loopAdditionalSlides: 10,
      grabCursor: true,
      watchSlidesProgress: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      on: {
        init: function(){
          this.autoplay.stop();
        },
        imagesReady: function(){
          this.el.classList.remove('loading');
          this.autoplay.start();
        },
        slideChangeTransitionEnd: function(){
          let swiper = this,
              captions = swiper.el.querySelectorAll('.slide-bgimg');
          for (let i = 0; i < captions.length; ++i) {
            captions[i].classList.remove('show');
          }
          swiper.slides[swiper.activeIndex].querySelector('.slide-bgimg').classList.add('show');
        },
        progress: function(){
          let swiper = this;
          for (let i = 0; i < swiper.slides.length; i++) {
            let slideProgress = swiper.slides[i].progress,
                innerOffset = swiper.width * interleaveOffset,
                innerTranslate = slideProgress * innerOffset;
           
            swiper.slides[i].querySelector(".slide-bgimg").style.transform =
              "translateX(" + innerTranslate + "px)";
          }
        },
        touchStart: function() {
          let swiper = this;
          for (let i = 0; i < swiper.slides.length; i++) {
            swiper.slides[i].style.transition = "";
          }
        },
        setTransition: function(speed) {
          let swiper = this;
          for (let i = 0; i < swiper.slides.length; i++) {
            swiper.slides[i].style.transition = speed + "ms";
            swiper.slides[i].querySelector(".slide-bgimg").style.transition =
              speed + "ms";
          }
        }
      }
    };

let mainSlider = new Swiper(mainSliderSelector, mainSliderOptions);
    
$('.recent-work .slide-controls button').on('click', function(){
    if($(this).hasClass('slider-prev')){
        $('.work-slider').slick('prev');
    }
    else{
        $('.work-slider').slick('next');
    }
});
    
    


$('.clients-slider').slick({
  // vertical: true,
  // verticalSwiping: true,
  slidesToShow: 7,
  slidesToScroll: 1,
  speed: 900,
  cssEase: 'cubic-bezier(0.74, 0.12, 0, 0.97)',
  touchThreshold: 100,
  autoplay: true,
  infinite: true,
  autoplaySpeed: 2500,
});
$('.work-slider').slick({
  variableWidth: true,
  speed: 900,
  cssEase: 'cubic-bezier(0.74, 0.12, 0, 0.97)',
  centerMode: true,
});
$("body").niceScroll({
  cursorcolor: '#000000',
  cursorwidth:"6px",
  cursorborderradius: 0,
  cursorborder: "none",
  scrollspeed: 120,
  mousescrollstep: 20,
  smoothscroll: true,
  horizrailenabled: false,
  enableobserver: true,
  autohidemode: false,
});

$('.about-landing .small-slider').slick({
  slidesToScroll: 1,
  slidesToShow: 1,
  vertical: true,
  dots: false,
  arrows: false,
  speed: 900,
  cssEase: 'cubic-bezier(0.74, 0.12, 0, 0.97)',
  touchThreshold: 100,
  autoplay: true,
  infinite: true,
  autoplaySpeed: 2500,
});

if (navigator.userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i)){
  console.log('Mobile');
  $("body").getNiceScroll().remove();
}
else{
  console.log('Desktop');
}

$('.home-contact .rounded-link').on('mouseenter', function(){
  $('.smile-emoji').addClass('happy');
}).on('mouseleave', function(){
  $('.smile-emoji').removeClass('happy');
});

$(window).on('load', function(){
  lax.setup() // init

	const updateLax = () => {
		lax.update(window.scrollY)
		window.requestAnimationFrame(updateLax)
	}

	window.requestAnimationFrame(updateLax)
});

});