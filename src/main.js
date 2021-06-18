import Vue from 'vue'
import App from './App.vue'
import Vuex from "vuex";
import {Referee} from "./sslProto";
import TimestampFormatter from "./TimestampFormatter";
import VueNativeSock from 'vue-native-websocket'
import './assets/css/style.css'
import {library} from '@fortawesome/fontawesome-svg-core'
import * as fa from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

// use a custom timestamp formatter from this project
Vue.use(TimestampFormatter);

library.add(
    fa.faVoteYea,
    fa.faUser,
);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

Vue.use(Vuex);

let state;
if (process.env.NODE_ENV === 'development') {
    state = {
        refereeMsg: new Referee({
            yellow: new Referee.TeamInfo({
                name: 'Yellow',
                score: 0,
                yellowCards: 10,
                yellowCardTimes: [15000000, 61000000, 120000000, 1],
                maxAllowedBots: 11,
            }),
            blue: new Referee.TeamInfo({
                name: 'Blue',
                score: 10,
                maxAllowedBots: 6,
            }),
            stage: 6,
            command: 3,
            stageTimeLeft: 140000000,
            gameEvents: [
                {
                    origin: ['TIGERs AutoRef', 'ER-Force', 'Majority'],
                    attackerTooCloseToDefenseArea: {
                        byTeam: 1,
                        byBot: 1,
                        distance: 0.2,
                    }
                },
                {
                    origin: ['TIGERs AutoRef', 'UI'],
                    botKickedBallTooFast: {
                        byTeam: 2,
                        byBot: 1,
                        initialBallSpeed: 42.0,
                        chipped: true,
                    }
                },
                {
                    origin: ['ER-Force'],
                    ballLeftFieldTouchLine: {
                        byTeam: 1,
                        byBot: 1,
                    }
                }
            ]
        })
    };
} else {
    state = {
        refereeMsg: new Referee({
            yellow: new Referee.TeamInfo({
                name: 'Yellow',
            }),
            blue: new Referee.TeamInfo({
                name: 'Blue',
            }),
            stage: 0,
            command: 0,
            stageTimeLeft: 0,
        })
    }
}

const store = new Vuex.Store({
        state: state,
        mutations: {
            SOCKET_ONOPEN() {
                // empty
            }
            ,
            SOCKET_ONCLOSE() {
                // empty
            }
            ,
            SOCKET_ONERROR() {
                // empty
            }
            ,
            SOCKET_ONMESSAGE(state, message) {
                state.refereeMsg = Referee.decode(new Uint8Array(message.data));
            }
            ,
            SOCKET_RECONNECT() {
                // empty
            }
            ,
            SOCKET_RECONNECT_ERROR() {
                // empty
            }
            ,
        }
    })
;

let wsAddress;
if (process.env.NODE_ENV === 'development') {
    // use the default backend port
    wsAddress = 'ws://localhost:8082/api/referee';
} else {
    // UI and backend are served on the same host+port on production builds
    let protocol;
    if (window.location.protocol === 'http:') {
        protocol = 'ws:'
    } else {
        protocol = 'wss:'
    }
    wsAddress = protocol + '//' + window.location.hostname + ':' + window.location.port + '/api/referee';
}

const ws = new WebSocket(wsAddress);
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
