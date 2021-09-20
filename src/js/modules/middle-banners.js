export default function initMiddleBanners(){
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
}