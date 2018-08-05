<template>
    <div id="first">
        <common-header id="header" title="Book" color="orangered"></common-header>
        <div class="list">
            <div id="container">
                <div class="img-box">
                    <transition-group name="tran" mode="" tag="div">
                        <img v-show="index == nowindex" v-for="(img,index) in imgs" :key="index" :src="img" alt="">
                    </transition-group>
                </div>
                <ul class="btn-box">
                    <li v-for="(x,index) in imgs.length" :key="index" :class="{selected:index == nowindex}" @click="change(index)">{{x}}</li>
                </ul>
            </div>
        </div>
        <common-bottom id="bottom" color="orangered"></common-bottom>
    </div>
</template>

<script>
    import commonHeader from '@/components/common/header'
    import commonBottom from '@/components/common/bottom'
    export default {
        data () {
            return {
                imgs:[
                    "https://img3.doubanio.com/lpic/s24468373.jpg",
                    "https://img3.doubanio.com/lpic/s27102925.jpg",
                    "https://img3.doubanio.com/lpic/s6989253.jpg",
                    "https://img3.doubanio.com/lpic/s6989253.jpg"
                ],
                nowindex:0,
            }
        },
        components:{
            commonHeader,
            commonBottom
        },
        methods: {
                change(index){
                    this.nowindex = index
                }
            },
        created () {
            setInterval(() => {
                this.nowindex++;
                if(this.nowindex == this.imgs.length){
                    this.nowindex = 0;
                }
            },2000);
        }
    }
</script>

<style scoped>
    #first{
        height: 100%;
    }
    .list{
        margin: 1rem 0;
        overflow: hidden;
    }
    .img-box img{
        width:100%;
        height:300px;   
        position: absolute;
        left:0px;
        top:0px;
    }
    #container{
        position: relative;
        height: 300px;
    }
    .btn-box{
        position: absolute;
        right: 30px;
        bottom:20px;
        list-style: none;
    }
    .btn-box li{
        float: left;
        width: 20px;
        height: 20px;
        background: #cccccc;
        text-align: center;
        line-height: 20px;
        margin-right: 5px;
    }
    .btn-box li.selected{
        background:orange;
    }
    
    .tran-enter {
        transform: translateX(100%);
    }
    .tran-enter-active{
        transition: transform 1s ;
    }
    .tran-enter-to{
        transform: translateX(0);
    }

    .tran-leave{
        transform: translateX(0);
    }
    .tran-leave-active {
        transition: transform 1s ;
    }
    .tran-leave-to {
        transform: translateX(-100%);
    }
</style>