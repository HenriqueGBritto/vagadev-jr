const btn = document.querySelectorAll('.buy')

const addClass = function(){
    this.innerText = 'COMPRADO!'
    this.classList.add('bought')
}


btn.forEach((item)=>{
    item.addEventListener('click', addClass)
})

const banners = document.querySelectorAll('.banner-info')

$(()=>{
    $('.banners').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: $('.nav-previous'),
        nextArrow: $('.nav-next')
    })

    $('.banners').on('afterChange', ()=>{
        $('.banner-info').toggleClass('active')
        $('.nav-game-name').text('RED DEAD 2')
    })

})