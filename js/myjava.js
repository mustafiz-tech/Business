// --------  slick slider  ---------

$('.slideMain').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
});


// ----------  on click event  -----------


$(function(){
    $('#open').click(function(){
       $('#slideOpen').addClass('slideEffect');
    });
    $('#close').click(function(){
        $('#slideOpen').removeClass('slideEffect');
     });
})

// ----------  active class  -----------

$(function(){
    $('li a').click(function(){
        $('li a').removeClass('active');
        $(this).addClass('avtive')
    });
});