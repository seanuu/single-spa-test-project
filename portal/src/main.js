import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import {registerApplication, start} from 'single-spa';

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');

window.__SINGLE_SPA__ = true;

registerApplication(
    'app1',
    async () => await window.System.import('http://localhost:8081/js/app.js'),
    location => location.pathname.startsWith('/app1')
);
registerApplication(
    'app2',
    async () => await window.System.import('http://localhost:8082/js/app.js'),
    location => location.pathname.startsWith('/app2')
);

start();
