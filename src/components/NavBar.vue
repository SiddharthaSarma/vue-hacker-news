<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Navbar</a>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item" v-for="link in links" :key="link.path">
          <router-link class="nav-link" :to="link.path">{{link.name}}</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { value } from 'vue-function-api';
import Routes from '../routesList';

export default {
  name: 'Navbar',
  setup() {
    const links = value(Routes);
    return {
      links,
    };
  },
};
</script>

<style>
</style>
