const btn = document.querySelectorAll('.buy')



const addClass = function(){
    this.innerText = 'COMPRADO!'
    this.classList.add('bought')
}


btn.forEach((item)=>{
    item.addEventListener('click', addClass)
})