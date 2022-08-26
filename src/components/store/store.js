import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    isLogin:false,
  },
  mutations: {
    //------------set user is login to the system----
    setLoginStatus(state,flag){
      state.isLogin = flag;
    },
    
  },
  getters: {
    isLogin: state => state.isLogin,
  }
});
