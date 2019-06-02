<template>
    <div class="match-status">
        <div>
            <div class="stage">{{stage}}</div>

            <div class="command" :class="{'team-yellow': commandForYellow, 'team-blue': commandForBlue}">
                {{gameState}}
                <span v-if="isBallPlacement">
                (<span v-format-us-duration="remainingTime"></span>)
            </span>
            </div>

            <span class="score">
                {{refereeMessage.yellow.score}} : {{refereeMessage.blue.score}}
            </span>

            <hr class="separator"/>

            <PowerPlay/>

        </div>
        <div class="time-container"
             v-format-us-duration="refereeMessage.stageTimeLeft"
             :class="{'time-positive': refereeMessage.stageTimeLeft >= 0, 'time-negative': refereeMessage.stageTimeLeft < 0}">
        </div>
    </div>
</template>

<script>
    import {Referee} from "@/sslProto"
    import {mapStageToText, mapCommandToText} from "@/texts";
    import PowerPlay from "./PowerPlay";

    export default {
        name: "MatchStatus",
        components: {PowerPlay},
        computed: {
            refereeMessage() {
                return this.$store.state.refereeMsg;
            },
            stage() {
                return mapStageToText(this.refereeMessage.stage);
            },
            gameState() {
                return mapCommandToText(this.refereeMessage.command);
            },
            isBallPlacement() {
                return this.refereeMessage.command === Referee.Command.BALL_PLACEMENT_BLUE ||
                    this.refereeMessage.command === Referee.Command.BALL_PLACEMENT_YELLOW;
            },
            remainingTime() {
                return this.refereeMessage.currentActionTimeRemaining;
            },
            commandForBlue() {
                switch (this.refereeMessage.command) {
                    case Referee.Command.PREPARE_KICKOFF_BLUE:
                    case Referee.Command.PREPARE_PENALTY_BLUE:
                    case Referee.Command.DIRECT_FREE_BLUE:
                    case Referee.Command.INDIRECT_FREE_BLUE:
                    case Referee.Command.TIMEOUT_BLUE:
                    case Referee.Command.GOAL_BLUE:
                    case Referee.Command.BALL_PLACEMENT_BLUE:
                        return true;
                }
                return false;
            },
            commandForYellow() {
                switch (this.refereeMessage.command) {
                    case Referee.Command.PREPARE_KICKOFF_YELLOW:
                    case Referee.Command.PREPARE_PENALTY_YELLOW:
                    case Referee.Command.DIRECT_FREE_YELLOW:
                    case Referee.Command.INDIRECT_FREE_YELLOW:
                    case Referee.Command.TIMEOUT_YELLOW:
                    case Referee.Command.GOAL_YELLOW:
                    case Referee.Command.BALL_PLACEMENT_YELLOW:
                        return true;
                }
                return false;
            }
        }
    }
</script>

<style scoped>

    .match-status {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
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

    .separator {
        margin: 0.2em;
        width: 100%;
    }

    .score {
        white-space: nowrap;
        width: 100%;
        font-size: 3em;
    }

    .stage {
        margin-top: 1vh;
    }

    .command {
        margin-top: 3vmin;
    }

</style>
