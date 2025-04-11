import axios from "axios";
import { createStore } from "vuex";

export default createStore({
  state: {
    token: localStorage.getItem("token") || "",
    isAuthenticated: false,
  },
  mutations: {
    // UpdateAuthenticationStatus(state, status) {
    //   state.isAuthenticated = status;
    // },
    UpdateToken(state, token) {
      state.token = token;
      localStorage.setItem("token", token);
    },
    UpdateAuthStatus(state, status) {
        state.isAuthenticated = status
        console.log("status is " + status);
        
    }
  },
  actions: {
    // CheckAuthenticatedcustomerStatus({ commit }, status) {
    //   axios
    //     .get("http://127.0.0.1:8000/api/authenticated")
    //     .then((response) => {
    //       commit("UpdateAuthenticationStatus", response.data.status);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // },

    SetAuthStatus({ commit }, status) {
      commit("UpdateAuthStatus", status);
    },

    SetCustomerToken({ commit }, token) {
      commit("UpdateToken", token);
    },
  },

    getters: {
      authStatus: state => state.isAuthenticated
    }
});