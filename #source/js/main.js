
$(function () {


  //  ----- mobile menu ------  //
  $('.burger-btn').on('click', function () {
    $(this).toggleClass('active');
    $('.mobile__menu').toggleClass('active');
    $('body').toggleClass('hidden');
  });


  //  ----- graph slider ------- //

  $('.graph__inner').slick({
    slidesToShow: 7,
    slidesToScroll: 1,
    arrows: false,
    speed: 800,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5.5,
          slidesToScroll: 2,
          arrows: false,
          speed: 800,
          infinite: false,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4.5,
          slidesToScroll: 1,
          arrows: false,
          speed: 800,
          infinite: false,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3.5,
          slidesToScroll: 1,
          arrows: false,
          speed: 800,
          infinite: false,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 1,
          arrows: false,
          speed: 800,
          infinite: false,
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
          arrows: false,
          speed: 800,
          infinite: false,
        }
      }
    ]
  });


  //    -----  snimate graph -------   //

function graph(){

  var allSum = 0
  $('.graph__item').each(function () {
    var sum = $(this).find('.graph__item-summ').attr('data-summ');
    allSum += parseFloat(sum)
  });

  $('.graph__item').each(function () {
    var sum = $(this).find('.graph__item-summ').attr('data-summ');
    var persent = allSum / 100;
    var newHeight = 8 * (sum / persent);
    $(this).find('.graph__item-col').animate({
      height: newHeight + 200,
    }, 2000);
    $(this).find('.graph__item-summ').text('$ ' + sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
    console.log(newHeight)
  });

}

  // -------------- scroll to block ---------- //


  $(window).scroll(function(){
    var scrolltop = $(this).scrollTop();
    var topHeight = $('.aboutus').height();
      if( scrolltop >= topHeight) {
        graph();
      }
      
  });
  




});



AOS.init({
  duration: 1200,
  easing: 'ease-in-out-cubic'
});