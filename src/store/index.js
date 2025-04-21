import axios from "axios";
import { createStore } from "vuex";

export default createStore({
  state: {
    token: localStorage.getItem("token") || "",
    isAuthenticated: false,
    user: null,
  },
  mutations: {
    UpdateToken(state, token) {
      state.token = token;
      localStorage.setItem("token", token);
    },
    UpdateAuthStatus(state, status) {
      state.isAuthenticated = status;
    },
    SetUser(state, user) {
      state.user = user;
    },
    resetAuth(state) {
      state.token = "";
      state.isAuthenticated = false;
      state.user = null;
      localStorage.removeItem("token");
      delete axios.defaults.headers.common["Authorization"];
    },
  },
  actions: {
    SetAuthStatus({ commit }, status) {
      commit("UpdateAuthStatus", status);
    },
    SetCustomerToken({ commit }, token) {
      commit("UpdateToken", token);
      commit("UpdateAuthStatus", true);
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    },
    logout({ commit }) {
      commit("resetAuth");
    },
    FetchUser({ commit }) {
      return axios
        .get("http://127.0.0.1:8000/api/customer/info")
        .then((response) => {
          commit("SetUser", response.data);
          commit("UpdateAuthStatus", true);
        })
        .catch((error) => {
          console.log("User fetch error:", error);
        });
    },
  },
  getters: {
    authStatus: (state) => state.isAuthenticated,
    user: (state) => state.user,
  },
});
