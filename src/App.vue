<template>
  <div class="container">
    <nav-bar />
    <router-view />
  </div>
</template>
<script>
import NavBar from '@/components/NavBar.vue';

export default {
  name: 'app',
  components: {
    NavBar,
  },
};
</script>

<style>
</style>
