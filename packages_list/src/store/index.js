import Vue from "vue";
import Vuex from "vuex";
import { findPackage } from "@/api/getPackagesList";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    paginationPages: 0,
    searchingValue: "",
    responseData: null,
    lastSeenItem: null,
  },

  mutations: {
    SET_PACKAGES_LIST(state, data) {
      state.packages = data;
    },
    SET_PAGINATION_PAGES(state, count) {
      state.paginationPages = count;
    },
    SET_SEARCHING_VALUE(state, value) {
      state.searchingValue = value;
    },
    SET_RESPONSE_DATA(state, data) {
      state.responseData = data;
    },
    SET_LAST_SEEN(state, item) {
      state.lastSeenItem = item;
    },
  },

  actions: {
    getPackages({ commit }, options) {
      if (!options.value) {
        this.state.responseData = null;
        this.state.paginationPages = 0;
        return;
      }
      findPackage(options).then((resp) => {
        commit("SET_RESPONSE_DATA", resp);
        commit("SET_SEARCHING_VALUE", options.value);
      });
    },

    addLastSeen({ commit }, item) {
      commit("SET_LAST_SEEN", item);
    },
  },

  getters: {
    paginationPages: (state) => {
      return state.responseData.paginationPages;
    },
    searchingValue: (state) => {
      return state.searchingValue;
    },
    getData: (state) => {
      return state.responseData;
    },
    getLastSeen: (state) => {
      return state.lastSeenItem;
    },
  },
});
