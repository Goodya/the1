<template>
    <div id="first">
        <common-header id="header" title="Photo" color="blue"></common-header>
        <div class="list">
            <v-touch class="list1" v-on:swipeleft="next()" v-on:swiperight="back()">
                <div id="div" @click="change">
                    <img :src="photo[url].src" alt="">
                </div>
            </v-touch>
                
        </div>
        <common-bottom id="bottom" color="blue"></common-bottom>
    </div>
</template>

<script>
    import commonHeader from '@/components/common/header'
    import commonBottom from '@/components/common/bottom'
    import Axios from 'axios';
    import store from '@/vuex/store.js'
    export default {
        store,
        data () {
            return {
                photo:{},
                nowindex: this.$route.params.idx
            }
        },
        components:{
            commonHeader,
            commonBottom,
        },
        computed: {
            url(){
                return this.nowindex
            }  
        },
        created(){
            // Axios.get('./static/data/photodata.json').then(res => {
            //     this.photodata = res.data.photoData
            // }).catch(res => {

            // })
            this.photo = this.$store.state.photolist
            // console.log(this.$store.state.photolist[this.nowindex])
        },
        methods: {
            change(){
                this.$router.push('/image/imagelist')
                // this.$router.go(-1);
            },
            next(){
                this.nowindex++;
                 if(this.nowindex == this.photo.length ){
                    this.nowindex = 0;
                }
            },
            back(){
                this.nowindex--;
                 if(this.nowindex == -1 ){
                    console.log(this.photo.length)
                    this.nowindex = (this.photo.length - 1);
                }
            }
        }
    }
</script>

<style scoped>
    #first{
        height: 100%;
        overflow: hidden;
    }
    .list{
        margin: 1rem 0;
        overflow: hidden;
        height: 100%;
    }
    .list1{
        height: 100%;
    }
    #div{
        width: 100%;
        height: 100%;
        background: #000;
        position: relative;
    }
    #div img{
        width: 100%;
        position: absolute;
        top: 50%;
        left: 0;
        transform: translate(0,-80%);
    }
</style>