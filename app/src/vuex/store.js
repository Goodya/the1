import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
    Id:0
}
const mutations = {
    change(state,result){
        state.Id = result;
    }
}





export default new Vuex.Store({
    state,
    mutations,
});