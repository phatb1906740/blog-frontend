import { createStore } from 'vuex'

const store = createStore({
  state () {
    return {
      isLogin: false,
      user: {
        id: "",
        userName: "",
      },
    }
  },
  mutations: {
    increment (state) {
      state.count++
    }
  },
  mutations: {
    setLogin(state, user) {
      state.isLogin = true;
      state.user.id = user._id;
      state.user.userName = user.userName;
    },
    setLogout(state, user) {
      state.isLogin = false;
      state.user.id = "";
      state.user.userName = "";
    }
  },
  actions: {
    userLogin({ commit }, user) {
      if(user) {
        commit('setLogin', user);
      }
    },
    userLogout({ commit }) {
        commit('setLogout');
    }
  }
})

export default store;
