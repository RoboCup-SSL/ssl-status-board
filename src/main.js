import Vue from 'vue'
import App from './App.vue'
import Vuex from "vuex";
import {Referee} from "./sslProto";
import TimestampFormatter from "./TimestampFormatter";
import VueNativeSock from 'vue-native-websocket'
import './assets/css/style.css'

// use a custom timestamp formatter from this project
Vue.use(TimestampFormatter);

Vue.config.productionTip = false;

Vue.use(Vuex);

const store = new Vuex.Store({
        state: {
            refereeMsg: new Referee({
                yellow: new Referee.TeamInfo({
                    name: 'Yellow',
                    score: 0
                }),
                blue: new Referee.TeamInfo({
                    name: 'Blue',
                    score: 1
                }),
                stage: 0,
                command: 0,
                stageTimeLeft: 4,
            })
        },
        mutations: {
            SOCKET_ONOPEN() {
            }
            ,
            SOCKET_ONCLOSE() {
            }
            ,
            SOCKET_ONERROR() {
            }
            ,
            SOCKET_ONMESSAGE(state, message) {
                state.refereeMsg = Referee.decode(new Uint8Array(message.data));
            }
            ,
            SOCKET_RECONNECT() {
            }
            ,
            SOCKET_RECONNECT_ERROR() {
            }
            ,
        }
    })
;

let wsAddress;
if (process.env.NODE_ENV === 'development') {
    // use the default backend port
    wsAddress = 'ws://localhost:4201/ssl-status/field-a/subscribe';
} else {
    // UI and backend are served on the same host+port on production builds
    wsAddress = 'ws://' + window.location.hostname + ':' + window.location.port + '/ssl-status/field-a/subscribe';
}

var ws = new WebSocket(wsAddress);
ws.binaryType = "arraybuffer";

// Connect to the backend with a single websocket that communicates with JSON format and is attached to the store
Vue.use(VueNativeSock, wsAddress, {
    reconnection: true,
    store,
    WebSocket: ws,
});

new Vue({
    render: h => h(App),
    store
}).$mount('#app');
