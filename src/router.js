import Vue from 'vue';
import Router from 'vue-router';
import Routes from './routesList';

Vue.use(Router);
const buildRoutes = () => Routes.map(e => ({
  path: e.path,
  name: e.route,
  component: () => import(/* webpackChunkName: "about" */ `./views/${e.view}.vue`),
}));
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    ...buildRoutes(),
    {
      path: '/',
      redirect: 'new',
    },
  ],
});
