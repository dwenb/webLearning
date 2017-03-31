window.onload = function () {
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
};