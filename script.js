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
  
  const position = { lat: 40.694449, lng: -73.8978617 };
  
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: position,
  });
 
  const marker = new google.maps.Marker({
    position,
    map,
    title: "91 Nolan Extensions Suite 670",
    icon: 'img/Pin.png',
    animation: google.maps.Animation.DROP,
  });

  const infowindow = new google.maps.InfoWindow({
    content: 'From 07:05AM to 19:30PM'
});

  google.maps.event.addListener(marker, 'click', function () {
      infowindow.open(map, marker);
  });
  
}

window.initMap = initMap;
