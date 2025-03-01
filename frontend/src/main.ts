import {createApp} from 'vue'
import App from './App.vue'
import router from './router';
import TimestampFormatter from "./TimestampFormatter";


createApp(App)
    .use(router)
    .use(TimestampFormatter)
    .mount('#app')
