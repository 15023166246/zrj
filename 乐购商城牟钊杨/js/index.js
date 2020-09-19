let bannerLi=document.querySelectorAll('.banner_l>ul>li')
let navContent=document.querySelector('.nav_content')
for (let i = 0; i < bannerLi.length; i++) {
    bannerLi[i].addEventListener('mouseenter',function(){
        navContent.style.display='block';
        this.style.borderBottom='1px solid #ff6600';
        this.style.borderTop='1px solid #ff6600';
        this.style.borderRight='2px solid white'

    })
    bannerLi[i].addEventListener('mouseleave',function(){
        navContent.style.display='none';
        this.style='none'
    })
}
// 选项卡
let picTab=document.querySelectorAll('#books>.booksl>.pic_head>p')
let ulTab=document.querySelectorAll('#books>.booksl>.book_mid>ul')

for (let i = 0; i < picTab.length; i++) {
    picTab[i].addEventListener('mouseenter',function(){
        for (let j = 0; j < picTab.length; j++) {
            picTab[j].classList.remove('cur')
            ulTab[j].classList.remove('carnival1')
        }
        this.classList.add('cur')
        ulTab[i].classList.add('carnival1')
    })
    
}

let clTab=document.querySelectorAll('#clothing>.clothhead>p')
let clul=document.querySelectorAll('#clothing>.clothingmain>ul')

for (let i = 0; i < clTab.length; i++) {
    clTab[i].addEventListener('mouseenter',function(){
        for (let j = 0; j < clTab.length; j++) {
            clTab[j].classList.remove('cur')
            clul[j].classList.remove('clothheadr')
        }
        this.classList.add('cur')
        clul[i].classList.add('clothheadr')
    })
    
}

let otTab=document.querySelectorAll('#outdoorsport>.clothhead>p')
let otul=document.querySelectorAll('#outdoorsport>.clothingmain>ul')

for (let i = 0; i < otTab.length; i++) {
    otTab[i].addEventListener('mouseenter',function(){
        for (let j = 0; j < otTab.length; j++) {
            otTab[j].classList.remove('cur')
            otul[j].classList.remove('clothheadr')
        }
        this.classList.add('cur')
        otul[i].classList.add('clothheadr')
    })
    
}


let chwTab=document.querySelectorAll('#childrenwear>.clothhead>p')
let chwul=document.querySelectorAll('#childrenwear>.clothingmain>ul')

for (let i = 0; i < chwTab.length; i++) {
    chwTab[i].addEventListener('mouseenter',function(){
        for (let j = 0; j < chwTab.length; j++) {
            chwTab[j].classList.remove('cur')
            chwul[j].classList.remove('clothheadr')
        }
        this.classList.add('cur')
        chwul[i].classList.add('clothheadr')
    })
    
}


let comTab=document.querySelectorAll('#commodity>.clothhead>div')
let comul=document.querySelectorAll('#commodity>ul')

for (let i = 0; i < comTab.length; i++) {
    comTab[i].addEventListener('click',function(){
        for (let j = 0; j < comTab.length; j++) {
            comTab[j].classList.remove('cur1')
            comul[j].classList.remove('comshop')
        }
        this.classList.add('cur1')
        comul[i].classList.add('comshop')
    })
    
}



// 领券中心
let ccc = document.querySelector('#ccc')
let initTop = parseInt((document.documentElement.clientHeight - ccc.offsetHeight) / 3);
setBoxInitSize()

window.addEventListener('scroll',function(){
    let sctop=document.documentElement.scrollTop;
    startMove(ccc, {top:(initTop+sctop)}, 200, "linear")
})
window.addEventListener('resize', function () {
    setBoxInitSize()
})
function setBoxInitSize() {
    initTop = parseInt((document.documentElement.clientHeight - ccc.offsetHeight) / 3);
    ccc.style.top = initTop + 'px'
}
// 摸上去显示二维码
let cccd=document.querySelector('.ccc_d');
let cccdd=document.querySelector('.ccc_dd')
cccd.addEventListener('mouseenter',function(){
    cccdd.style.display='block'
})
cccd.addEventListener('mouseleave',function(){
    cccdd.style.display='none'
})


// 畅销榜
$('#books .booksr ul li').mouseenter(function () { 
    $(this).find("div").show();
    $(this).find(".text").hide()
    $(this).siblings().find("div").hide()
    $(this).siblings().find(".text").show()
});



// 回到顶部
let backT=document.querySelector('.backtop');
backT.addEventListener('click',function(){
    let backTime = setInterval(function () {
        let st = document.documentElement.scrollTop || document.body.scrollTop;
        let newst = st - 100;
        document.documentElement.scrollTop = newst;
        document.body.scrollTop = newst;
        if (newst <= 0) {
            clearInterval(backTime)
        }
    }, 20)
})

//楼层图
let floorPlan = document.querySelector('#floor_plan')
let initTop1 = parseInt((document.documentElement.clientHeight - floorPlan.offsetHeight) / 2);
floortop()

window.addEventListener('scroll',function(){
    let sctop=document.documentElement.scrollTop;
    startMove(floorPlan, {top:(initTop1+sctop)}, 200, "linear")
})
window.addEventListener('resize', function () {
    floortop()
})
function floortop() {
    initTop1 = parseInt((document.documentElement.clientHeight - floorPlan.offsetHeight) / 2);
    floorPlan.style.top = initTop1 + 'px'
}

let floorLi=document.querySelectorAll('#floor_plan>ul>li')
let floorDiv=document.querySelectorAll('#floor_plan>ul>li>div')
let bgcolors=['#93d46f','#f65727','#bb9dee','#ff7394','#c2ec51'];
$('#floor_plan ul li').hover(function(){
    let index= $(this).index();
    $(this).css('backgroundColor',bgcolors[index]);
    $(this).find('span').css('display','block');
    $(this).find('span').css('backgroundColor',bgcolors[index]);
    $(this).css('backgroundPositionX',40);
},function(){
    $(this).css('backgroundColor','');
    $(this).find('span').css('display','none');
    $(this).css('backgroundPositionX',0);
})

$('#floor_plan>ul>li:first-child').click(function(){
    let obj=$("#books").offset() 
    
    $("html,body").stop().animate({scrollTop:obj.top},2000);

})
$('#floor_plan>ul>li:nth-child(2)').click(function(){
    let obj=$("#clothing").offset() 
   
    $("html,body").stop().animate({scrollTop:obj.top},500);
}) 
$('#floor_plan>ul>li:nth-child(3)').click(function(){
    let obj=$("#outdoorsport").offset() 
   
    $("html,body").stop().animate({scrollTop:obj.top},500);
}) 
$('#floor_plan>ul>li:nth-child(4)').click(function(){
    let obj=$("#childrenwear").offset() 
    
    $("html,body").stop().animate({scrollTop:obj.top},500);
}) 
$('#floor_plan>ul>li:nth-child(5)').click(function(){
    let obj=$("#furnishing").offset() 
    
    $("html,body").stop().animate({scrollTop:obj.top},500);
}) 

// 顶部下拉框
let dropBox=document.querySelector('#drop_box')
window.addEventListener('scroll',function(){
    let scrollTop=document.documentElement.scrollTop||document.body.scrollTop
    if(scrollTop>1200){
        dropBox.style.display='block';
    }
    else{
        dropBox.style.display='none'
    }
})