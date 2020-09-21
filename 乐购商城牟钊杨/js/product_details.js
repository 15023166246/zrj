$('#banner .booksr ul li').mouseenter(function () { 
    $(this).find("div").show();
    $(this).find(".text").hide()
    $(this).siblings().find("div").hide()
    $(this).siblings().find(".text").show()
});


let legobuy=document.querySelectorAll('#discount>ul>li')
for (let i = 0; i < legobuy.length; i++) {
    legobuy[i].addEventListener('mouseenter',function(){
        this.style.backgroundColor='#f2f2f2';
        this.querySelector('p>span').style.display='block';
    })
    legobuy[i].addEventListener('mouseleave',function(){

        this.style.backgroundColor='white';
        this.querySelector('p>span').style.display='none';
    })
}


// 畅销榜
$('#rbece .booksr ul li').mouseenter(function () { 
    $(this).find("div").show();
    $(this).find(".text").hide()
    $(this).siblings().find("div").hide()
    $(this).siblings().find(".text").show()
});



// 选项卡
let chosePrv=document.querySelectorAll('.prove_l>p')
let chosediv=document.querySelectorAll('#prove>.prove_tab>div')

for (let i = 0; i < chosePrv.length; i++) {
    chosePrv[i].addEventListener('mouseenter',function(){
        for (let j = 0; j < chosePrv.length; j++) {
            chosePrv[j].classList.remove('cur')
            chosediv[j].classList.remove('provelunbo')
        }
        chosePrv[i].classList.add('cur')
        chosediv[i].classList.add('provelunbo')
    })
    
}



// 猜你喜欢
let guess=document.querySelector('#gusfav>div>p>img')
let smith=document.querySelectorAll('#gusfav>.smith')
let a=1;
    a=2;
    a=3;
guess.addEventListener('click',function(){
    if(a==3){
        smith[0].classList.remove('dspblock');
        smith[2].classList.remove('dspblock');
        smith[1].classList.add('dspblock');
        a=2
    }
    else if(a==2){
        smith[0].classList.add('dspblock');
        smith[2].classList.remove('dspblock');
        smith[1].classList.remove('dspblock');
        a=1
    }
    else if(a==1){
        smith[0].classList.remove('dspblock');
        smith[2].classList.add('dspblock');
        smith[1].classList.remove('dspblock');
        a=3
    }
})