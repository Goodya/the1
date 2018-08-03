<template>
    <div id="first">
        <common-header id="header" title="Music" color="orange"></common-header>
        <div class="list">
            <img :src="obj.bg" alt="" v-for="(obj,idx) in musiclist" :key="idx" @click="change(obj.id)">
        </div>
        <common-bottom id="bottom" color="orange"></common-bottom>
    </div>
</template>

<script>
    import commonHeader from '@/components/common/header'
    import commonBottom from '@/components/common/bottom'
    import axios from 'axios'
    export default {
        data () {
            return {
                musiclist:[],
            }
        },
        components:{
            commonHeader,
            commonBottom
        },
         created() {
            axios.get('./static/data/musiclist.json').then(res => {
                this.musiclist = res.data.albums;
           }).catch(res => {
               console.log('获取失败啦...')
           });
        },
        methods: {
            change(id){
                this.$router.push(`/music/musicshow/${id}`)
            }
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
    img{
        float: left;
        width: 50%;
        height: 50vw;
    }
</style>