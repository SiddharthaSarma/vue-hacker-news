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
import { onCreated } from 'vue-function-api';
import { useState, useActions } from '@u3u/vue-hooks';

export default {
  name: 'New',
  setup() {
    const { newsList } = useState(['newsList']);
    const { setNewsList } = useActions(['setNewsList']);
    onCreated(() => {
      if (!newsList.value.length) {
        setNewsList({
          type: 'news',
          page: 1,
          mutation: 'addNewsItems',
        });
      }
    });
    return {
      newsList,
    };
  },
};
</script>

<style>
</style>
