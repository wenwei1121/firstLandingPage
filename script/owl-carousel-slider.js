$('.owl-carousel').owlCarousel({
    loop:false,
    dots:true,
    nav:true,
    slidesToShow: 1,
    slidesToScroll: 1,
    stagePadding: 60, 
    margin:30,   
    responsive:{
        0:{
            items: 1
        },
        768:{
            items: 1
        },
        900:{
            items: 2
        },
        992:{
            items: 3
        }
    }
})