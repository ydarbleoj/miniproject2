// $(document).ready(function($){ 
//     if(typeof jQuery !== 'undefined'){
//         console.log('jQuery Loaded');
//     } else {
//         console.log('not loaded yet');
//     }

    
//     var $carousel = $('#myCarousel');
//     var $carouselCaptions = $carousel.find('.item .carousel-caption');
//     var $carouselImages = $carousel.find('.item img');
//     var carouselTimeout;

//     $carousel.on('slid', function () {
//         var $item = $carousel.find('.item.active');
//         carouselTimeout = setTimeout(function() { // start the delay
//             carouselTimeout = false;
//             $item.find('.carousel-caption').animate({'opacity': 1}, 500);
//             $item.find('img').animate({'opacity': 0.2}, 500);
//         }, 2000);
//     }).on('slide', function () {
//         if(carouselTimeout) { // Carousel is sliding, stop pending animation if any
//             clearTimeout(carouselTimeout);
//             carouselTimeout = false;
//         }
//         // Reset styles
//         $carouselCaptions.animate({'opacity': 0}, 500);
//         $carouselImages.animate({'opacity': 1}, 500);
//     });;

//     $carousel.carousel({
//         interval: 6000,
//         cycle: true,
//     }).trigger('slid'); 
//     // Make the carousel believe that it has just been 
//     //slid so that the first item gets the animation

// });