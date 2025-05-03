import axios from "axios";
import { createStore } from "vuex";

export default createStore({
  state: {
    token: localStorage.getItem("token") || "",
    isAuthenticated: !!localStorage.getItem("token"),
    user: null,
    categories: null,
    products: [],
    Newproducts: [],
    Product_Details: [],
    Tags: [],
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
    setCategories(state, categories) {
      state.categories = categories;
    },
    setProducts(state, products) {
      state.products = products;
    },
    New_Products(state, Newproducts) {
      state.Newproducts = Newproducts;
    },
    SET_PRODUCT_DETAILS(state, payload) {
      state.Product_Details = payload;
    },
    SET_TAGS(state, Tags) {
      state.Tags = Tags;
    },
  },
  actions: {
    getCategories({ commit }) {
      return axios
        .get("http://127.0.0.1:8000/api/all/category")
        .then((response) => {
          commit("setCategories", response.data.categories);
        });
    },
    Get_Details({ commit }, id) {
      return axios
        .get(`http://127.0.0.1:8000/api/product/details/${id}`)
        .then((response) => {
          commit("SET_PRODUCT_DETAILS", response.data.product_details);
          commit("SET_TAGS", response.data.tags);
        });
    },
    getProducts({ commit }) {
      return axios
        .get("http://127.0.0.1:8000/api/all/product")
        .then((response) => {
          commit("setProducts", response.data.products);
        });
    },
    getNewProducts({ commit }) {
      return axios
        .get("http://127.0.0.1:8000/api/new/product")
        .then((response) => {
          commit("New_Products", response.data.new_products);
        });
    },
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
    categories: (state) => state.categories,
    products: (state) => state.products,
    newproducts: (state) => state.Newproducts,
    product_details: (state) => state.Product_Details,
    tags: (state) => state.Tags,
  },
});
