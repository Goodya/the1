//数字滚动
(function () {
  var nums = 0;
  var s1 = 'js-s1';
  var s2 = 'js-s2';
  var s3 = 'js-s3';
  var s4 = 'js-s4';
  var s5 = 'js-s5';
  // 调用计时函数
  // 循环计时函数, 多次调用自身函数, nums为被传递的参数  每50ms调用一次
  function timedCount(s, nums, totalNum) {
    var count = Math.round(totalNum / 50);
    if (count == 0) {
      count = 1
    }
    nums = nums + count;
    document.getElementById(s).innerHTML = nums;
    // 设置条件使停止计时
    if (nums < totalNum) {
      setTimeout(function () {
        timedCount(s, nums, totalNum)
      }, 50);
    } else {
      document.getElementById(s).innerHTML = totalNum;
    }
  }
  var finished = true;
  $(window).scroll(function () {
    if ($(window).scrollTop() >= 900 && finished) {
      setTimeout(timedCount(s1, 0, document.getElementById(s1).innerHTML), 50);
      setTimeout(timedCount(s2, 0, document.getElementById(s2).innerHTML), 50);
      setTimeout(timedCount(s3, 0, document.getElementById(s3).innerHTML), 50);
      setTimeout(timedCount(s4, 0, document.getElementById(s4).innerHTML), 50);
      setTimeout(timedCount(s5, 0, document.getElementById(s5).innerHTML), 50);
      finished = false;
    }
  });

})();

//返回顶部按钮的方法

(function () {


  var gotop = document.getElementById("js-top");
  var timer = null;




  gotop.onclick = function () {

    //设置定时器
    timer = setInterval(function () {
      //获取滚动条距离顶部的高度
      var osTop = document.documentElement.scrollTop || document.body.scrollTop; //同时兼容了ie和Chrome浏览器

      //减小的速度
      var isSpeed = Math.floor(-osTop / 6);
      document.documentElement.scrollTop = document.body.scrollTop = osTop + isSpeed;
      //console.log( osTop + isSpeed);

      //判断，然后清除定时器
      if (osTop <= 0) {
        clearInterval(timer);
      }
    }, 15);

  };

})();

//轮播图
(function () {
  var oWapper1 = document.getElementsByClassName("fd-wapper1")
  var iNowIndex = 0;
  var time = null;
  var Width = oWapper1[1].offsetWidth;
  var bStop = true;
  var oContainer = document.getElementById("js-container");
  var oUl = document.getElementsByClassName("js-fd-ul")[0];
  var oLi = oUl.getElementsByTagName("li");
  console.log(oWapper1);
  var time1 = null;

  //给每个li设置属性为自己的索引
  for (var i = 0; i < oLi.length; i++) {
    oLi[i].index = i;
    oLi[i].onclick = function () {
      iNowIndex = this.index;
      change();
    };
  }
  //获取属性的方法。
  function getStyle(elem, attr) {
    if (elem.currentStyle) { //IE
      return elem.currentStyle[attr];
    } else {
      return getComputedStyle(elem, false)[attr];
    }
  }

  //鼠标移入时不动
  oContainer.onmouseover = function () {
    clearInterval(time1);
  };
  //鼠标移出时继续动
  oContainer.onmouseout = function () {
    play();
  };



  //轮播主方法
  function change() {
    if(iNowIndex == 5){
      for (var i = 0; i < oWapper1.length; i++) {
        oWapper1[i].style.left = i * Width + "px";
      }
      iNowIndex = 1;
    }
    //把li的class全清空
    for (var i = 0; i < oLi.length; i++) {
      oLi[i].className = '';
    }
    if (iNowIndex == 4) {
      oLi[0].className = 'fd-selected';
    } else {
      oLi[iNowIndex].className = 'fd-selected';
    }

    time = setInterval(function () {
      for (var i = 0; i < oWapper1.length; i++) {
        oWapper1[i].curr = parseInt(getStyle(oWapper1[i], "left")); //对象当前left值
        oWapper1[i].speed = ((i - iNowIndex) * Width - oWapper1[i].curr) / 8; //轮播速度控制

        oWapper1[i].style.left = oWapper1[i].speed + oWapper1[i].curr + "px"; //移动距离赋值
        if (oWapper1[i].curr != (i - iNowIndex) * Width) {
          bStop = false;
        }
        if (bStop) {
          clearInterval(time);
        }
        bStop = true;
      }


    }, 30);


  }

  function play() {

    time1 = setInterval(function () {
      iNowIndex++;
      change();
    }, 1000);
  }

  play();


})()