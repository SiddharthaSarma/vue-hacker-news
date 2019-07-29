import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    newsList: [],
  },
  mutations: {
    addNewsItems(state, items) {
      state.newsList = items;
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
