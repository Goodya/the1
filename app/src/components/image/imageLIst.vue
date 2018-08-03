<template>
    <div id="first">
        <common-header id="header" title="Photo" color="blue"></common-header>
        <div class="list">一堆图片</div>
        <common-bottom id="bottom" color="blue"></common-bottom>
    </div>
</template>

<script>
    import commonHeader from '@/components/common/header'
    import commonBottom from '@/components/common/bottom'
    export default {
        components:{
            commonHeader,
            commonBottom
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
</style>