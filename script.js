// heading
$(document).ready(function(){
    $('.heading-slider').slick({
      arrows: false,
      dots: true,
      fade: true,
      speed: 500,
      cssEase: 'linear'
    });
  });

// news
$(document).ready(function(){
  $('.news-slider').slick({
  slidesToShow: 2.9,
  slidesToScroll: 1,
  // autoplay: true,
  autoplaySpeed: 4000,
  arrows: true,
  dots: true,
  prevArrow: $('.arrow-news-left'),
  nextArrow: $('.arrow-news-right'),
  });
});

// gallery



// contacts

