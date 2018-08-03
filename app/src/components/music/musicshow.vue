<template>
    
    <div>
        <common-header id="header" title="Music" color="orange"></common-header>
        <div class="list">
            <!-- {{$route.params.musicId}} -->
            <aplayer :list="musicdata" v-if="isShow"
                    :music="musicdata[0]"
            />
        </div>
        <common-bottom id="bottom" color="orange"></common-bottom>
    </div>

</template>

<script>
    import commonHeader from '@/components/common/header'
    import commonBottom from '@/components/common/bottom'
    import Aplayer from 'vue-aplayer'
    import axios from 'axios'
    export default {
        data () {
            return {
                musicdata:[],
                isShow:false
            }
        },
        components:{
            commonHeader,
            commonBottom,
            Aplayer
        },
        created() {
            axios.get('./static/data/musicdata.json').then(res =>{
                console.log(res.data.musicData);
                res.data.musicData.forEach(obj => {
                    this.musicdata.push({
                        src:obj.src,
                        title:obj.title,
                        artist:obj.author,
                        pic:obj.musicImgSrc,
                        lrc:obj.lrc
                    });
                });
                this.isShow = true;
            }).catch(res => {

            });
        }
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
</style>