import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
// const state = {
//     value: 0
// }
export default new Vuex.Store({
    state: {
        value: 0
    },
    mutations: {
        add(state) {

            state.value++
        }
    }
})