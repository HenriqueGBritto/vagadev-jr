export default function initSlider(){
    const bannerProps = [
        {game: 'MORTAL KOMBAT X'},
        {game: 'RED DEAD 2'}
     ]
     $(()=>{
        $('.banners').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: $('.nav-previous'),
            nextArrow: $('.nav-next'),
            autoplay: true,
            autoplaySpeed: 2500
        })
        
        //função para mudar o slide ativo. e com a mudança do slide ativo, mudar também o texto com preço e descrição do jogo, e o número da página da barra de navegação lateral
        $('.banners').on('afterChange', (event, slick, currentSlide)=>{
            $('.banner-info').toggleClass('active')
            currentSlide == 0 ? $('.nav-game-name').text(bannerProps[0].game) : $('.nav-game-name').text(bannerProps[1].game)
            $(".nav-num").text(currentSlide + 1)
        })
    
    })
}