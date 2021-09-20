// Faz a verificação se a width for menor ou igual a 500px, em caso de verdadeira, executa o código.
if($(window).width() <=500){
    // oculta o texto de 'contato' e remove o placeholder do input do campo de busca
function hideItems(){
    $('.contact').text('')
    $('#buscar').removeAttr('placeholder').css('width', '5px')
}

function changeSlickImg(){
    //troca a src das imagens do slick
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

// Função para ocultar os itens do corpo do site e mostrar o menu hamburger
$('.filter-light-gray').on('click', function(e){
    if(($('.dropdown-menu').hasClass('ativo'))){ // verifica se o menu dropdown ja esta com a classe ativo, remove a classe e retorna os itens do corpo do site
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

}