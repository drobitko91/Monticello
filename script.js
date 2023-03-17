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

lightGallery(document.getElementById('gallery-content'), {
  selector: '.gallery-item',
});

// contacts

function initMap() {
  
  const uluru = { lat: -25.344, lng: 131.031 };
  
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: uluru,
  });
 
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}

window.initMap = initMap;
