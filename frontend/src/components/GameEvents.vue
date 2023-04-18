<template>
    <div class="game-events">
        <table class="table-striped">
            <tbody>
            <tr v-for="(gameEvent, index) in gameEvents"
                :key="index">
                <td>{{gameEvents.length - index}}</td>
                <td v-html="formatGameEvent(gameEvent)"></td>
                <td class="autoRefIndicator">
                    <img class="autoref-icon"
                         :src="tigers_autoref"
                         alt="TIGERs"
                         v-if="isOrigin(gameEvent, 'TIGERs AutoRef')"/>
                    <img class="autoref-icon"
                         :src="erforce_autoref"
                         alt="ER-Force"
                         v-if="isOrigin(gameEvent, 'ER-Force')"/>
                    <font-awesome-icon icon="user" v-if="isOrigin(gameEvent, 'UI')"/>
                    <font-awesome-icon icon="vote-yea" v-if="isOrigin(gameEvent, 'Majority')"/>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import {mapGameEventToText} from "@/texts";
    import tigers_autoref from "@/assets/icons/tigers-autoref.png"
    import erforce_autoref from "@/assets/icons/erforce-autoref.svg"

    export default {
        name: "GameEvents",
        data: function () {
            return {
                tigers_autoref: tigers_autoref,
                erforce_autoref: erforce_autoref,
            }
        },
        computed: {
            refereeMessage() {
                return this.$store.state.refereeMsg;
            },
            gameEvents() {
                return this.refereeMessage.gameEvents.map((x) => x).reverse();
            },
        },
        methods: {
            formatGameEvent(gameEvent) {
                return mapGameEventToText(gameEvent);
            },
            isOrigin(gameEvent, origin) {
                return gameEvent.origin.includes(origin);
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

    .autoref-icon {
        object-fit: contain;
        width: 1em;
    }
</style>
