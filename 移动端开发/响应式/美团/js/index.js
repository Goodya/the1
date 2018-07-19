/**
 * Created by 洋 on 2018/7/15.
 */
$('.btn-left').on('tap',function (e) {
    console.log(1);
    e.preventDefault();
});
$('.btn-right').on('tap',function (e) {
    console.log(1);
    e.preventDefault();
});
var html = '';
for(var i=0 ; i<10 ; i++){
    html = '<i>'
}
