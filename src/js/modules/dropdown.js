export default function initDropdown(){
    $('.dropdown').on('mouseover', ()=>{
        $('.dropdown-menu').fadeIn(150).css('display', 'flex')
    })
    $('.dropdown').on('mouseleave', ()=>{
        $('.dropdown-menu').fadeOut(150)
    })
}