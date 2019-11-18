<script src="./jquery.min.js"></script>
//数字滚动
var nums = 0;
var s1='js-s1';
var s2='js-s2';
var s3='js-s3';
var s4='js-s4';
var s5='js-s5';
// 调用计时函数
// 循环计时函数, 多次调用自身函数, nums为被传递的参数  每50ms调用一次
function timedCount(s,nums,totalNum){
  var count = Math.round(totalNum/87);
  nums = nums+count;
  document.getElementById(s).innerHTML = nums;
  // 设置条件使停止计时
  if (nums<totalNum) {
    setTimeout(function(){timedCount(s,nums,totalNum)},100);
  }else{
    document.getElementById(s).innerHTML =totalNum;
  }
}
var finished = true;
$(window).scroll(function (){
  if ($(window).scrollTop()>=400&&finished) {
    alert("hahah")  
    setTimeout(timedCount(s1,0,document.getElementById(s1).innerHTML),50);
    setTimeout(timedCount(s2,0,document.getElementById(s2).innerHTML),50);
    setTimeout(timedCount(s3,0,document.getElementById(s3).innerHTML),50);
    setTimeout(timedCount(s4,0,document.getElementById(s4).innerHTML),50);
    setTimeout(timedCount(s5,0,document.getElementById(s5).innerHTML),50);
    finished = false;
  }
});