import {fromJson, toJson} from "@bufbuild/protobuf";
import {Referee, RefereeSchema} from "@/proto/ssl_gc_referee_message_pb";

export class ApiController {
    private readonly apiPath = '/api/referee'
    private ws ?: WebSocket
    private readonly stateConsumer: ((state: Referee) => any)[] = []

    private latestState: Referee

    constructor(latestState: Referee) {
        this.latestState = latestState
        this.connect(this.determineWebSocketAddress())
    }

    public Send(request: Referee) {
        const ws = this.ws
        if (ws) {
            const json = JSON.stringify(toJson(RefereeSchema, request))
            ws.send(json)
        }
    }

    public RegisterStateConsumer(cb: ((state: Referee) => any)) {
        this.stateConsumer.push(cb)
        cb(this.latestState)
    }

    private determineWebSocketAddress() {
        const protocol = window.location.protocol === 'http:' ? 'ws:' : 'wss:';
        return protocol + '//' + window.location.hostname + ':' + window.location.port + this.apiPath
    }

    private connect(address: string) {
        const ws = new WebSocket(address);

        ws.onmessage = (e) => {
            this.latestState = fromJson(RefereeSchema, JSON.parse(e.data))
            for (const callback of this.stateConsumer) {
                callback(this.latestState)
            }
        };

        ws.onclose = () => {
            setTimeout(() => {
                this.connect(address)
            }, 1000);
        };

        ws.onerror = () => {
            ws.close()
        };

        this.ws = ws;
    }
}
