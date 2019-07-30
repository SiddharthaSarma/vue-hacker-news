<template>
  <section>
    <ul class="list-group">
      <li
        class="list-group-item d-flex justify-content-between align-items-center"
        v-for="list in jobsList"
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
import { useActions, useState } from '@u3u/vue-hooks';
export default {
  name: 'Job',
  setup() {
    const { jobsList } = useState(['jobsList']);
    const { setNewsList } = useActions(['setNewsList']);
    onCreated(() => {
      if (!jobsList.value.length) {
        setNewsList({
          type: 'jobs',
          page: 1,
          mutation: 'addJobItems',
        });
      }
    });
    return {
      jobsList,
    };
  },
};
</script>

<style>
</style>
