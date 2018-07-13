/*** Created by 洋 on 2018/7/12.*/
require(['dialog','jquery-1.12.4'],function (dialog) {
    $('#btn').on('click',function () {
        dialog.open({
            width:300,
            height:300,
            title:'注册',
            content:'content.html'
        });
    });
    $()
});