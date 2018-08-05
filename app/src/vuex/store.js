import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
    Id:0,
    photolist:[]
}
const mutations = {
    change(state,result){
        state.Id = result;
    },
    addphotos(state,list){
        state.photolist = list
    }
}





export default new Vuex.Store({
    state,
    mutations,
});