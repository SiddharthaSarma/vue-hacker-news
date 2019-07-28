<template>
  <section>
    <ul class="list-group">
      <li
        class="list-group-item d-flex justify-content-between align-items-center"
        v-for="list in newsList"
        :key="list.id"
      >
        <a :href="list.url" target="_blank">{{list.title}}</a>
        <span class="badge badge-primary badge-pill">{{list.comments_count}}</span>
      </li>
    </ul>
  </section>
</template>

<script>
import { value, onMounted } from 'vue-function-api';

export default {
  name: 'New',
  setup() {
    const newsList = value([]);
    onMounted(async () => {
      const results = await fetch('https://api.hackernews.io/news?page=1');
      const news = await results.json();
      newsList.value = news;
    });
    return {
      newsList,
    };
  },
};
</script>

<style>
</style>
