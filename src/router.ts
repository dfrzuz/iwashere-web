import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import LocationsView from '@/views/LocationsView.vue';
import NewLocationView from '@/views/NewLocationView.vue';
import VisitRegistrationView from '@/views/VisitRegistrationView.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/locations',
      name: 'Locations',
      component: LocationsView,
    },
    {
      path: '/locations/new',
      name: 'NewLocation',
      component: NewLocationView,
    },
    {
      path: '/visit/:shortname',
      name: 'RegisterVisit',
      component: VisitRegistrationView
    }
  ],
});
