import login from '../pages/login/index.vue';
import VueRoute from 'vue-route'
const routes = [
    {
        path: "/login",
        components: login
    }
];

export const route = new VueRoute({
    routes
});