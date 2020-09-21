$(function(){
    changeNum()
    function changeNum(){
        var number=0;
        var money=0
        $('#good>.cnm>div:first-child>input').each(function(){
            if($(this).prop('checked')){
                number+=parseInt($(this).parent().siblings('.text1').find('input').val())
                money+=parseInt($(this).parent().siblings('.subtotal').html())
            }
        })
        $('.allnumber').val(number)
        $('.allsubtotal').val(money+'.00')
    }



// 点击全选
$('.count1').click(function(){
    if($(this).prop('checked')==true){
        $('#good>.cnm>div:first-child>input').prop('checked','checked')
        $('.count7').prop("checked", "checked")
    }
    else{
        $('#good>.cnm>div:first-child>input').prop('checked','')
        $('.count7').prop("checked", "")
    }
    changeNum();
})
// 下方全选
$('.count7').click(function(){
    if($(this).prop('checked')==true){
        $('#good>.cnm>div:first-child>input').prop('checked','checked')
        $('.count1').prop("checked", "checked")
    }
    else{
        $('#good>.cnm>div:first-child>input').prop('checked','')
        $('.count1').prop("checked", "")
    }
    changeNum();
})
//一个没选中全选取消
$('#good>.cnm>div:first-child>input').click(function () {
    var flag = true;
    $('#good>.cnm>div:first-child>input').each(function (index, n) {
        let bool = $(n).prop("checked")
        if (!bool) {
            flag = false
        }
    })
    $(".count1").prop("checked", flag)
    $(".count7").prop("checked", flag)
    changeNum();
})


/* 点击加号 数量+1  点击减号 数量-1 */
    $(".cut").click(function () {
        let t = $(this).next().prop("value")
        t -= 1;
        if (t < 0) {
            t = 0
        }
        $(this).next().prop("value", t)
        var unit=$(this).parent().prev().html()
        var money=unit*t
        $(this).parent().next().html(money+".00")
        changeNum();
    })
    /* 点击加号 数量+1 */
    $(".add").click(function () {
        let t = $(this).prev().prop("value")
        t = parseInt(t)
        t += 1;
        $(this).prev().prop("value", t)
        var unit=$(this).parent().prev().html()
        var money=t*unit
        $(this).parent().next().html(money+".00")
        changeNum();
    })

     /* input框失焦事件 */
     $(".text1>input").blur(function(){
        // 过滤非数字的输入
        // 获取到当前的输入
        let str = $(this).val();
        //console.log(str);
       
             // 判断是否为合法的输入
        if (!isNaN(str)) {
            // 报错删除
            $(this).html("");
            // 判断正常输入的是纯数字，做下一步筛选
            // 把当前获取的的输入内容强制转换为整数
            str = parseInt(str);
            if (str < 1) {
                // 报错告知输入不合法
                $(this).html("请输入大于等于1！");
            } else {
                // 将正确输入的数字显示到页面上
                $(this).val(str);
                // 报错删除
                $(this).parent().parent().next().html("");
                // 获取当前对应的单价
                let price = parseFloat($(this).parent().prev().html());
                // 计算小计
                let money = str * price;
                // 将计算好的小计替换原来的显示
                $(this).parent().next().html(money);
                // 调用总价和总数量的修改函数
                changeNum();
            }
        } else {
            // 报错告知输入不合法
            alert("请不要输入数字以外的内容！");
            $(this).val('1')
        }
    })
// 删除选中商品
    $(".del").click(function () {
        //console.log($(this).parents(".single"));
        $(this).parents(".cnm").remove()
        changeNum();
    })


/* 点击选中删除 删除选中的内容的内容 */
$(".count").click(function () {
    $('#good>.cnm>div:first-child>input').each(function () {
        if ($(this).prop("checked")) {
            $(this).parents(".cnm").remove();
        }
    })
    changeNum();
})
})
