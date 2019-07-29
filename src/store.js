import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    newsList: [],
  },
  mutations: {
    addNewsItems(state, newsItems) {
      state.newsList = newsItems;
    },
  },
  actions: {
    async setNewsList({ commit }) {
      const results = await fetch('https://api.hackernews.io/news?page=1');
      const news = await results.json();
      commit('addNewsItems', news);
    },
  },
});
