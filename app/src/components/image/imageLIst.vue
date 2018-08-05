<template>
    <div id="first">
        <common-header id="header" title="Photo" color="blue"></common-header>
        <div class="list">
            <ul>
                <li v-for="(photo,index) in photodata" :key="index" @click="change(index)">
                    <img :src="photo.src" alt="">
                </li>
            </ul>
        </div>
        <common-bottom id="bottom" color="blue"></common-bottom>
    </div>
</template>

<script>
    import commonHeader from '@/components/common/header'
    import commonBottom from '@/components/common/bottom'
    import Axios from 'axios'
    import store from '@/vuex/store.js'
    export default {
        store,
        data () {
            return {
                photodata:[]
            }
        },
        components:{
            commonHeader,
            commonBottom,
        },
        created(){
            Axios.get('./static/data/photodata.json').then(res => {
                this.photodata = res.data.photoData
                this.$store.commit('addphotos',this.photodata)
                // console.log(this.$store.state.photolist)
            }).catch(res => {

            })
        },
        methods: {
            change(index){
                this.$router.push(`/image/imageshow/${index}`)
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
    li{
        width: 50%;
        float: left;
    }
    li img{
        width: 100%;
        display: block;
    }
</style>