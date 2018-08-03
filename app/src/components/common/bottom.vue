<template>
    <div :style="{'background':color}">
        <span><router-link to="/movie/movielist">电影</router-link></span>
        <span><router-link to="/music/musiclist">音乐</router-link></span>
        <span><router-link to="/book/booklist">书籍</router-link></span>
        <span id="last"><router-link to="/image/imagelist">图片</router-link></span>
    </div>
</template>

<script>
    export default {
        props: ['color'],
    }
</script>

<style scoped>
    div{
        height: 1rem;
        width: 100%;
        display: flex;
        flex-direction: row; 
        align-items: center;
        position: fixed;
        bottom: 0
    }
    span{   
        display: block;
        flex-grow: 1;
        text-align: center;
        border-right: solid 1px;
        font-weight: 600;
        border-color: #ccc;
    }
    span a{
        color: #ccc
    }
    #last{
        border: none;
    }
    .router-link-active{
        color:#fff;
    }
</style>