/**
 * Created by 洋 on 2018/7/14.
 */
var count = 0;
var oNext = document.getElementById('next');
var oDiv1 = document.getElementById('img');
var oDiv = document.getElementById('images');
var oImg = oDiv.getElementsByTagName('img');
oDiv.style.height = oImg[0].offsetHeight + 'px';
oDiv1.style.height = oImg[0].offsetHeight + 'px';
oNext.onclick = function () {
    console.log(1);
    count++;
    if(count == 4){
        count = 1;
        oDiv.style.left = 0 + 'px'
    }
    // oDiv.style.left = oDiv.offsetLeft + 10+'px';
    // var timer = setInterval(function () {
    //     oDiv.style.left =oDiv.offsetLeft - oImg[0].offsetWidth/10 + 'px';
    //     if(oDiv.offsetLeft <= -count*oImg[0].offsetWidth){
    //         clearInterval(timer);
    //     }
    // },50);
    animate(oDiv,{
        left:-count*oImg[0].offsetWidth
    })
};