import Vue from 'vue'
import App from './App.vue'
import router from './router'
import myFooter from './components/myFooter'
import myHeader from './components/myHeader'
import myDialog from './components/myDialog'

Vue.config.productionTip = false

Vue.component("my-footer", myFooter);
Vue.component("my-header", myHeader);
Vue.component("my-dialog", myDialog);

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')