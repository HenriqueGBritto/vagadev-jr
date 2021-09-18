//DECLARAÇÕES VARIÁVEIS ESCOPO GLOBAL

const banners = document.querySelectorAll('.banner-info')

const btn = document.querySelectorAll('.buy')

const bannerProps = [
    {game: 'MORTAL KOMBAT X'},
    {game: 'RED DEAD 2'}
 ]


//função para adicionar classe de 'comprado' no botão


const addClass = function(){
    this.innerText = 'COMPRADO!'
    this.classList.add('bought')
} // incluir dentro de $('.btn-comprar').on('click'


btn.forEach((item)=>{
    item.addEventListener('click', addClass)
})

// Caroulsels 
$(()=>{
    $('.banners').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: $('.nav-previous'),
        nextArrow: $('.nav-next')
    })
    
    $('.banners').on('afterChange', (event, slick, currentSlide)=>{
        $('.banner-info').toggleClass('active')
        currentSlide == 0 ? $('.nav-game-name').text(bannerProps[0].game) : $('.nav-game-name').text(bannerProps[1].game)
        $(".nav-num").text(currentSlide + 1)
    })

})

// $('.buy').each(()=>{
//     $('.modal-container').addClass('active')
//     $('.modal-container').fadeIn()
//     $('.bag-items').text('' + 1)
// })
let i = 0
$('.buy').on('click', function(){
    const gameName = $(this).parent().find('.product-name').text()
    $('.bag-game').text(gameName)
    i++
    $('.modal-container').fadeIn(500)
    $('.bag-items').text('' + i)
})

$('.close').on('click', ()=> {
    $('.modal-container').fadeOut(500)
})

$('.dropdown').on('mouseover', ()=>{
    $('.dropdown-menu').fadeIn(150).css('display', 'flex')
})
$('.dropdown').on('mouseleave', ()=>{
    $('.dropdown-menu').fadeOut(150)
})

$('.zelda').on('mouseover', ()=>{
    $('.z-name').css('display', 'none')
    $('.z-blue-bar').css('animation', 'fill-right .5s forwards').text('COMPRAR +')
})
$('.zelda').on('mouseleave', ()=>{
    $('.z-name').css('display', '')
    $('.z-blue-bar').css('animation', 'fill-return .5s').text('')
})
$('.sekiro').on('mouseover', ()=>{
    $('.s-name').css('display', 'none')
    $('.s-blue-bar').css('animation', 'fill-right .5s forwards').text('COMPRAR +')
})
$('.sekiro').on('mouseleave', ()=>{
    $('.s-name').css('display', '')
    $('.s-blue-bar').css('animation', 'fill-return .5s').text('')
})

$('.contact').parent().on('mouseover', ()=>{
    $('.contact-dropdown').fadeIn(150).css('display', 'flex')
})
$('.contact').parent().on('mouseleave', ()=>{
    $('.contact-dropdown').fadeOut(150)
})

// add class afterScroll

$(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 400) {
            $(".nav-container").addClass("afterScroll");
        } else {
            //remove the background property so it comes transparent again (defined in your css)
           $(".nav-container").removeClass("afterScroll");
        }
    });
});