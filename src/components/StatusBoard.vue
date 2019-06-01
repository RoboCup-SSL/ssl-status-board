<template>
    <div class="referee-container">
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
    import {Referee} from "@/sslProto"
    import TeamStatus from "./TeamStatus";

    export default {
        name: "StatusBoard",
        components: {TeamStatus},
        computed: {
            refereeMessage() {
                return new Referee({
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
                });
            }
        }
    }
</script>

<style scoped>
    .referee-container {
        text-align: center;
        height: 100%;
        max-height: 100%;
        font-size: 6vmin;
    }

    .upper-container {
        width: 100%;
        height: 60%;
        align-items: center;
    }

    .lower-container {
        width: 100%;
        height: 40%;
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

    .score-container {
        width: 40%;
        height: 100%;
        float: left;
        font-size: 3em;
        justify-content: center;
        align-items: center;
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

    .command-container {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        border-top-style: dashed;
        border-top-color: white;
    }

    .separator {
        margin: 3vmin;
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
