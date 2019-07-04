<template>
    <div class="game-events">
        <table class="table-striped">
            <tbody>
            <tr v-for="(gameEvent, index) in gameEvents"
                :key="index"
                :style="{'font-size': rowHeight}">
                <td v-html="formatGameEvent(gameEvent)"></td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import {mapGameEventToText} from "../texts";

    const maxUnscaledItems = 6;

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
                let rel = 1 - (Math.max(0, this.gameEvents.length - maxUnscaledItems) / maxUnscaledItems);
                return rel + 'em';
            },
        },
        methods: {
            formatGameEvent(gameEvent) {
                return mapGameEventToText(gameEvent);
            }
        }
    }
</script>

<style scoped>

    .game-events {
        text-align: left;
        font-size: 5.0vh;
    }

    .table-striped {
        width: 100%;
        padding-left: 0.2em;
        padding-right: 0.2em;
    }

    .table-striped tbody tr:nth-of-type(odd) {
        background-color: #222;
    }

    .table-striped tbody tr:nth-of-type(even) {
        background-color: #444
    }

</style>
