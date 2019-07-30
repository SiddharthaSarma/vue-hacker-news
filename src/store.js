import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    newsList: [],
    askList: [],
  },
  mutations: {
    addNewsItems(state, items) {
      state.newsList = items;
    },
    addAskItems(state, items) {
      state.askList = items;
    },
  },
  actions: {
    async setNewsList({ commit }, { type, page = 1, mutation }) {
      const results = await fetch(`https://api.hackernews.io/${type}?page=${page}`);
      const news = await results.json();
      commit(mutation, news);
    },
  },
});
