let str = 'asffcfv0';
document.write(str);
let aaa = 888;
import css from "./css/index.css";
// import sass from "./css/common.scss"
// import $ from 'jquery';
$('#btn').on('click',function(){
    var oDiv = document.createElement('div');
    oDiv.innerHTML = '你点谁呢？再点一个试试';
    oDiv.style.width = '300px';
    oDiv.style.height = '200px';
    oDiv.style.background = '#ccc';
    oDiv.style.color = '#f00';
    oDiv.style.position = 'absolute';
    oDiv.style.top = '100px';
    oDiv.style.left = '100px';
    $('body').append(oDiv);
    oDiv.onclick = function(){
        oDiv.style.display = 'none';
        // $('div').remove();
    }
})