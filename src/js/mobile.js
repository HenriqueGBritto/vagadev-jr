
if($(window).width() <=500){
function hideItems(){
    $('.contact').text('')
    $('#buscar').removeAttr('placeholder').css('width', '5px')
}

function changeSlickImg(){
    $('.banner-1').attr('src', '/src/img/banner-mobile-01.jpg')
    $('.banner-2').attr('src', '/src/img/banner-mobile-02.jpg')
}

hideItems()
changeSlickImg()

$('.highlight-products').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: 0,
    nextArrow: 0
})

$('.filter-light-gray').on('click', function(e){
    if(($('.dropdown-menu').hasClass('ativo'))){
        $('.dropdown-menu').removeClass('ativo').fadeIn(100)
        $('.dropdown-menu').fadeOut(150)
        $('.nav-container').css('background', '')
        $('.middle-banners').css('display', 'flex')
        $('.highlights').css('display', 'flex')
        $('.footer').css('display', 'flex')
        } else {
            $('.dropdown-menu').addClass('ativo').fadeIn(100)
            $('.nav-container').css('background', 'var(--secondary-color)')
            $('.middle-banners').css('display', 'none')
            $('.highlights').css('display', 'none')
            $('.footer').css('display', 'none')
        }
})
// $('.dropdown').on('click', ()=>{
//     if($('.dropdown-menu').hasClass('ativo')){
//     $('.dropdown-menu').fadeOut(150)
//     $('.nav-container').css('background', '')
//     $('.middle-banners').css('display', 'flex')
//     $('.highlights').css('display', 'flex')
//     }
// })

}