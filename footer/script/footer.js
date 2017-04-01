window.onload = function () {
    //容器对象
    var mainContainer=document.getElementById("mainContainer");
    mainContainer.style.left = (document.body.clientWidth - mainContainer.clientWidth)/2 +"px";

    //容器对象
    var box = document.getElementById("sliderDoor");

    //获得图片nodeList集合
    var imgArr = box.getElementsByTagName("img");

    //单张图片的宽度
    var imgWidth = imgArr[0].offsetWidth;

    //门体漏出的宽度
    var exposeWidth = 100;

    //盒子的总宽度
    var boxWidth = imgWidth + exposeWidth * (imgArr.length-1);
    box.style.width = boxWidth + "px";

    //设置每道门的位置
    function setImgsPos() {
        for(var i=1, len=imgArr.length; i<len; i++){
            imgArr[i].style.left = imgWidth + exposeWidth * (i - 1) + "px";
        }
    }
    setImgsPos();

    //计算每到门打开时应移动的距离
    var translate = imgWidth - exposeWidth;

    for(var i=0, len = imgArr.length; i<len; i++){
        (function (i) {
            imgArr[i].onmouseover = function () {
                setImgsPos();
                for(var j = 1; j<=i; j++){
                    imgArr[j].style.left = parseInt(imgArr[j].style.left, 10) - translate + "px";
                }
            }
        })(i)
    }

    //获取右上角user bar中会员元素
    var userBar = document.getElementById("com_userbar");
    var vipMemberBox = userBar.getElementsByTagName("li");

    //获取会员列表选项
    var vipList = document.getElementById("vip_list");
    var listbox = vipList.getElementsByTagName("li");
    vipMemberBox[5].onmouseover = function () {
        vipList.style.display = "block";
        vipMemberBox[5].style.height =  "110px";
        for(var i=0; i<listbox.length; i++){
            (function (i) {
               listbox[i].onmouseover = function(){
                   listbox[i].style.backgroundColor="blue";
               }
               listbox[i].onmouseout = function () {
                   listbox[i].style.backgroundColor="white";
               }
           })(i)
        }
    };
    vipMemberBox[5].onmouseout = function () {
        vipList.style.display = "none";
        vipMemberBox[5].style.height =  "auto";
    }
};