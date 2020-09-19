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

let edition=document.querySelectorAll('.chosetype>span')
let yes=document.querySelectorAll('.yes')
edition[1].addEventListener('click',function(){
    this.style.borderColor='#f60'
    yes[0].style.display='block'
    yes[1].style.display='none'
    edition[2].style.borderColor='#c9c9c9'
})
edition[2].addEventListener('click',function(){
    this.style.borderColor='#f60'
    yes[1].style.display='block'
    yes[0].style.display='none'
    edition[1].style.borderColor='#c9c9c9'
})


// 购物车
let joincar=document.querySelector('.joincar')
let buynum=document.querySelector('.joincar>form>input[type=text]')
let plus=document.querySelector('div.anniu')
let reduce=document.querySelector('p.anniu')
let num=buynum.value;

plus.addEventListener('click',function(){
    num++;
    buynum.value=num;
})
reduce.addEventListener('click',function(){
    num--;
    if(num>=1){
        buynum.value=num;
    }
    else{
        buynum.value=1;
        num=1
    }
})


//放带镜
$(function() {
	var magnifierConfig = {
		magnifier : "#magnifier1",//最外层的大容器
		width : 342,//承载容器宽
		height : 342,//承载容器高
		moveWidth : null,//如果设置了移动盒子的宽度，则不计算缩放比例
		zoom : 5//缩放比例
	};
	var _magnifier = magnifier(magnifierConfig);
});