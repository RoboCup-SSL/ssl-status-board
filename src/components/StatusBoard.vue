<template>
    <div class="status-board">
        <div class="upper-container">
            <div class="team-container">
                <TeamStatus color="yellow" :team="refereeMessage.yellow"/>
            </div>

            <div class="center-container">
                <span class="score">
                    {{refereeMessage.yellow.score}} : {{refereeMessage.blue.score}}
                </span>

                <div class="stage">{{refereeMessage.stage}}</div>

                <div class="command">{{refereeMessage.command}}</div>

                <hr class="separator"/>

                <div v-if="refereeMessage.stageTimeLeft >= 0" class="time-container time-positive">
                    {{refereeMessage.stageTimeLeft}}
                </div>
                <div v-if="refereeMessage.stageTimeLeft < 0" class="time-container time-negative">
                    {{refereeMessage.stageTimeLeft}}
                </div>
            </div>

            <div class="team-container">
                <TeamStatus color="blue" :team="refereeMessage.blue"/>
            </div>
        </div>

        <hr class="upper-lower-separator">

        <div class="lower-container">
            <div style="height:80%">
                <div class="game-event-container">
                    <div v-for="(gameEvent, index) in refereeMessage.gameEvents"
                         :key="index"
                         class="game-event-element">
                        {{gameEvent}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import TeamStatus from "./TeamStatus";

    export default {
        name: "StatusBoard",
        components: {TeamStatus},
        computed: {
            refereeMessage() {
                return this.$store.state.refereeMsg;
            }
        }
    }
</script>

<style scoped>
    .status-board {
        text-align: center;
        height: 100%;
        max-height: 100%;
        font-size: 6vh;
    }

    .upper-container {
        width: 100%;
        height: 58%;
        align-items: center;
    }

    .lower-container {
        width: 99%;
        height: 39%;
    }

    .center-container {
        align-items: center;
        display: inline;
        width: 40%;
        height: 100%;
        float: left;
        justify-content: center;
    }

    .team-container {
        width: 30%;
        float: left;
    }

    .time-container {
        border-style: dashed;
        display: inline-block;
        padding: 8px;
    }

    .time-positive {
        border-color: green;
    }

    .time-negative {
        border-color: red;
    }

    .game-event-container {
        width: 100%;
        height: 100%;
        font-size: 6vmin;
        font-weight: 700;
    }

    .game-event-element {
        width: 100%;
        text-align: center;
    }

    .separator {
        margin: 3vmin;
    }

    .upper-lower-separator {
        margin-top: 1%;
        margin-bottom: 1%;
    }

    .score {
        white-space: nowrap;
        width: 100%;
        font-size: 3em;
    }

    .stage {
        font-size: 3vmin
    }

    .command {
        margin-top: 3vmin;
        font-size: 6vmin;
    }

</style>
