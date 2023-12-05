$(document).ready(function(){   
    $('.products-container').slick({
        infinity: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
        prevArrow:"<img class='slick-prev' src='../assets/icons/icon-prev.svg'>",
        nextArrow:"<img class='slick-next' src='../assets/icons/icon-next.svg'>",
        responsive: [
            {
                breakpoint: 767, 
                settings: {
                    slidesToShow: 2,
                }
            },
        ]
    });
  });

