<template>
    <div>
        <h2>这是我的首页 </h2>

        <h3> {{count}}  {{num}}</h3>
        <button @click="$store.commit('add',20)">++</button>
        <button @click="add(20)">++</button>
        <h1>getter: {{count1}} </h1>
        <button @click="addAction(200)">++add</button>

    </div>
</template>

<script>
    import store from '@/vuex/store'
    import {mapState,mapMutations,mapGetters,mapActions} from 'vuex'
    export default {
        store,
        computed: {
            ...mapState(['count','num']),
            ...mapGetters(['count1'])
        },
        methods: {
            ...mapMutations(['add']),
            ...mapActions(['addAction'])
        }
    }
    
</script>

<style scoped>

</style>