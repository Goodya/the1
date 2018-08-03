<template>
    <div id="first">
        <common-header id="header" title="Movie" color="black"></common-header>
        <div class="center">
            <ul>
                <li v-for="(obj,index) in movieList" :key="index" v-if="obj.isshow">
                    <img :src="obj.avatarurl" alt="">
                    <span>{{obj.time}} </span>
                    <div id="content">{{obj.content}} </div>
                    
                </li>
            </ul>
        </div>
        <common-bottom id="bottom" color="black"></common-bottom>
    </div>
</template>

<script>
    import commonHeader from '@/components/common/header'
    import commonBottom from '@/components/common/bottom'
    import store from '@/vuex/store.js'
    import {mapState} from 'vuex'
    // import Vue from 'vue'
    import axios from 'axios'
    export default {
        store,
        data () {
            return {
                movieList:[],
            }
        },
        computed: {
            ...mapState(['Id']),
        },
        components:{
            commonHeader,
            commonBottom
        },
        methods: {
            load(){
                axios.get('./static/data/moviedetail.json').then(res => {
                this.movieList = res.data.data.movie.hcmts;
                console.log(this.movieList);
                this.movieList.forEach(element => {
                    if(element.id == this.Id){
                        element.isshow = true;
                        console.log(element,element.isshow)
                    }
                });
           }).catch(res => {
               console.log('获取失败啦...')
           });
            }
        },
        created() {
            this.load();
        },
    }
</script>

<style scoped>
    #first{
        height: 100%;
    }
    .center{
        margin: 1rem 0;
        overflow: hidden;
    }
</style>