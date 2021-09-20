export default function initBuyModal(){
    const btn = document.querySelectorAll('.buy')
    let i = 0

    btn.forEach((item)=>{
        item.addEventListener('click', function(){
            this.innerText = 'COMPRADO!'
            this.classList.add('bought')
        })
    })

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
}