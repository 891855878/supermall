import vue from 'vue'
import vuex from 'vuex'


import mutations from './mutations'
import actions from './actions'
import getters from './getters'

vue.use(vuex)

const store=new vuex.Store({
  state: {
    shoppings:[],
    check:true
  },
  mutations,
  actions,
  getters
})

export default store
