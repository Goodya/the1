<template>
    <div id="first">
        <common-header id="header" title="Movie" color="black"></common-header>
        <div class="list">
            <ul>
                <li class="movieList" v-for="(obj,index) in movieList" :key="index" @click="movie(obj)">
                    <div class="movie-img">
                        <img :src="obj.img" alt="">
                    </div>
                    <div class="movie-info">
                        <h3>{{obj.nm}}</h3>
                        <p>{{obj.ver}}</p>
                        <p>{{obj.star}}</p>
                        <p>{{obj.cat}}</p>
                        <p>{{obj.rt}}</p>
                    </div>
                </li>
            </ul>
            <img src="@/assets/loading.gif" alt="" v-show="isShow">
        </div>

        <common-bottom id="bottom" color="black"></common-bottom>
    </div>
</template>

<script>
    import commonHeader from '@/components/common/header'
    import commonBottom from '@/components/common/bottom'
    import store from '@/vuex/store.js'
    import {mapState,mapMutations} from 'vuex'
    // import Vue from 'vue'
    import axios from 'axios'
    export default {
        store,
        data(){
            return{
                movieList:[],
                isShow:false,
                index:0,
            }
        },
        components:{
            commonHeader,
            commonBottom
        },
        methods:{
            load(){
                axios.get('./static/data/moviedata'+this.index +'.json').then(res =>{
                this.movieList = [...this.movieList,...res.data.data.movies];
                this.index += 1;
                this.isShow = false;
            }).catch(res => {
               console.log('数据获取失败')
               this.isShow = false
               window.onscroll = null;
            });
            },
            movie(obj){
                this.$router.push('/movie/movieshow');
                this.$store.commit('change',obj.id);
            },
        },
        // created () {
        //    axios.get(Vue.config.url+'http://api.douban.com/v2/movie/top250?start=10&count=5').then(res =>{
        //        this.movieList = res.data.subjects;
        //    }).catch(res => {

        //    });
        // }
        created () {
            this.load();
            window.onscroll = () => {
                let scrolltop = document.documentElement.scrollTop || document.body.scrollTop;
                let clientheight = document.documentElement.clientHeight;
                let height = document.documentElement.scrollHeight;
                // console.log(scrolltop,clientheight,height)
                if(scrolltop + clientheight == height){
                    this.isShow = true;
                    this.load();
                }
            }
        },
        computed: {
            ...mapState(['Id']),
        },
    }
</script>

<style scoped>
    #first{
        height: 100%;
    }
    .list{
        overflow: hidden;
        margin: 1rem 0;
    }
    .movieList{
        display: flex;
        padding: 0.2rem;
        font-size: 14px;
        line-height: 1.8;
    }
    .movie-img{
        flex-grow: 1;
        margin-right: 0.1rem;
        width: 0px;
    }
    .movie-img img{
        width: 100%;
    }
    .movie-info{
        width: 0px;
        flex-grow: 2;
    }
</style>