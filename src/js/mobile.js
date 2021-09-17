
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

}