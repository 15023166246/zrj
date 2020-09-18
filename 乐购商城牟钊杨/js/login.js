
let ewm=document.querySelector('.ewm')
let ophone=document.querySelector('.ophone')
ewm.addEventListener('mouseenter',function(){
    startMove(ewm, {left:30}, 300, "linear")
    ophone.style.display='block'
})
ewm.addEventListener('mouseleave',function(){
    startMove(ewm, {left:100}, 300, "linear")
    ophone.style.display='none'
})

let loginMethodL=document.querySelector('.login_method_l')
let loginMethodR=document.querySelector('.login_method_r')
let loginPage1=document.querySelector('.login_page1')
let legologin=document.querySelector('.legologin')

loginMethodL.addEventListener('mouseenter',function(){
    legologin.style.display='none';
    loginPage1.style.display='block';
    loginMethodL.style.color='#f60';
    loginMethodR.style.color='#666666';
})
loginMethodR.addEventListener('mouseenter',function(){
    loginPage1.style.display='none';
    legologin.style.display='block';
    loginMethodL.style.color='#666';
    loginMethodR.style.color='#f60';
})



$().ready(function () {
    // 在键盘按下并释放及提交后验证提交表单
    $("#loginForm").validate({
      //验证信息
      rules: {
        username: {
          required: true,
          myUsre:true,
        },
        pwd: {
          required: true,
          myPwd:true,
        },
      },
      //提示信息
      messages: {
        username: {
          required: "请输入！",
        },
        pwd: {
          required: "请输入！",
        },
      },
    });
    jQuery.validator.addMethod(
        "myUsre",
        function (value, element) {
          var tel = /^[A-za-z0-9]{4,10}$/;
          return this.optional(element) || tel.test(value);
        },
        "请填写正确的用户名"
      );
    
      jQuery.validator.addMethod(
        "myPwd",
        function (value, element) {
          var tel = /^[A-za-z0-9]{6,16}$/;
          return this.optional(element) || tel.test(value);
        },
        "请填写正确的密码"
      );
      
    
  });