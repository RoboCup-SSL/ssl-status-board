<template>
    <div class="game-events">
        <table class="table-striped">
            <tbody>
            <tr v-for="(gameEvent, index) in gameEvents.slice(0,8)"
                :key="index"
                :style="{'font-size': rowHeight}">
                <td v-html="formatGameEvent(gameEvent)"></td>
                <td class="autoRefIndicator" v-html="autoRefIndicator(gameEvent)"></td>
            </tr>
            </tbody>
        </table>
        <div class="more-game-events" v-if="gameEvents.length > 8"> + {{gameEvents.length - 8}} more game events </div>
    </div>
</template>

<script>
    import {mapGameEventToText} from "@/texts";

    const maxUnscaledItems = 5.5;

    export default {
        name: "GameEvents",
        computed: {
            refereeMessage() {
                return this.$store.state.refereeMsg;
            },
            gameEvents() {
                return this.refereeMessage.gameEvents;
            },
            rowHeight() {
                let n = Math.min(8, this.gameEvents.length)
                let rel = 1 - (Math.max(0, n - maxUnscaledItems) / maxUnscaledItems);
                return rel + 'em';
            },
        },
        methods: {
            formatGameEvent(gameEvent) {
                return mapGameEventToText(gameEvent);
            },

            autoRefIndicator(gameEvent) {
                if(gameEvent.origin === "")
                {
                    return "GameController";
                } else {
                    return gameEvent.origin.join(', ');
                }
            }
        }
    }
</script>

<style scoped>

    .game-events {
        text-align: left;
        font-size: 0.7em;
    }

    .table-striped {
        width: 100%;
        padding-left: 0.1em;
        padding-right: 0.1em;
    }

    .table-striped tbody tr:nth-of-type(odd) {
        background-color: #222;
    }

    .table-striped tbody tr:nth-of-type(even) {
        background-color: #444
    }

    .table-striped td {
        vertical-align: baseline;
        padding: 2px 2px 2px 10px;
    }

    .more-game-events {
        font-size: 1em;
        text-align: center;
        margin-top: 10px;
        font-weight: bold;
        color: #fff;
    }
</style>
