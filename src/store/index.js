/**
 * Created by WebStorm.
 * User: 高俊东
 * Date: 7/30/21
 * Time: 3:43 PM
 */

import { createStore } from 'vuex'


const store = createStore({
    state: {
        name: '嗜'
    },
    actions: {
        changeName({commit}, name) {
            commit('CHANGE_NAME', name)
        }
    },
    mutations: {
        CHANGE_NAME(state, name) {
            state.name = name
        }
    },
    getters: {
        getName: state => state.name
    },
    modules: {

    }
})


export default store