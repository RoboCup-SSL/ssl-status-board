import Vue from 'vue'
import App from './App.vue'

// use a custom timestamp formatter from this project
import TimestampFormatter from "./TimestampFormatter";

Vue.use(TimestampFormatter);

Vue.config.productionTip = false;

import './assets/css/style.css'

new Vue({
  render: h => h(App),
}).$mount('#app');
