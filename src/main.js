import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/store';
import './plugins/custom-plugins';
import './plugins/vue-meta';
import './plugins/vee-validate';

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');
