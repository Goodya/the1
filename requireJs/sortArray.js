/**
 * Created by apple on 18/7/12.
 */
define(['judge'],function(judge){

    function sortArray(arr){
        if(judge(arr)){
            arr.sort(function(x,y){
                return x-y;
            });
        }else{
            return '请输入数组';
        }
        return arr;
    }


    return sortArray;

});