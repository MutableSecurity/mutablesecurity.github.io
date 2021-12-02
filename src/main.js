import Vue from 'vue';
import App from './App.vue';
import router from './router';
import Argon from './plugins/argon-kit';
import VueScrollTo from 'vue-scrollto';
import Particles from 'particles.vue';

import '@/assets/scss/mutablesecurity/all.scss';

Vue.config.productionTip = false;
Vue.use(Argon);
Vue.use(VueScrollTo);
Vue.use(Particles);
new Vue({
    router,
    render: (h) => h(App),
}).$mount('#app');
