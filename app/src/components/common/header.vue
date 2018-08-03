<template>
    <div :style="{'background':color}">
        <span id="home" @click="shouye()">首页</span>
        <span id="title">{{title}} </span>
    </div>
</template>

<script>
    export default {
        props:['title','color'],
        methods:{
            shouye(){
                this.$router.push('/')
            }
        }
    }
</script>

<style scoped>
    div{
        position: fixed;
        top: 0;
        width: 100%;
        height: 1rem;
    }
    #title{
        color: #fff;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        font-size: 0.5rem;
        font-weight: 700;
    }
    #home{
        position: absolute;
        top: 50%;
        left: 0.1rem;
        color: #fff;
        transform: translate(0,-50%);
        font-size: 0.3rem
    }
</style>