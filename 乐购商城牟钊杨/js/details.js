let shoptalk=document.querySelectorAll('#introduce>.itd_title>p');
let page=document.querySelectorAll('.itd1');



for (let i = 0; i < shoptalk.length; i++) {
    shoptalk[i].addEventListener('mouseenter',function(){
        for (let j = 0; j < shoptalk.length; j++) {
            shoptalk[j].classList.remove('cur')
            page[j].classList.remove('itd2')
        }
        shoptalk[i].classList.add('cur');
        page[i].classList.add('itd2')
    })
    
} 