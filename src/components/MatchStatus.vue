<template>
    <div class="match-status">
        <div>
            <div :class="{'highlight-command': true, 'stop-command': isStop, 'halt-command': isHalt}">
            <div class="stage">{{stage}}</div>

            <span class="score">
                {{refereeMessage.yellow.score}} : {{refereeMessage.blue.score}}
            </span>

            <div class="command" :class="{'team-yellow': commandForYellow, 'team-blue': commandForBlue}">
                {{gameState}}
                <span v-if="isBallPlacement && remainingTime >= 0">
                    (<span v-format-us-duration="remainingTime"></span>)
                </span>
                <span v-if="isTimeout">
                    (<span v-format-us-duration="timeoutTime"></span>)
                </span>
            </div>
            </div>

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
            isHalt() {
                return this.refereeMessage.command === Referee.Command.HALT;
            },
            isStop() {
                return this.refereeMessage.command === Referee.Command.STOP;
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
            isTimeout() {
                return this.refereeMessage.command === Referee.Command.TIMEOUT_BLUE ||
                    this.refereeMessage.command === Referee.Command.TIMEOUT_YELLOW;
            },
            timeoutTime() {
                if (this.refereeMessage.command === Referee.Command.TIMEOUT_BLUE) {
                    return this.refereeMessage.blue.timeoutTime;
                } else if (this.refereeMessage.command === Referee.Command.TIMEOUT_YELLOW) {
                    return this.refereeMessage.yellow.timeoutTime;
                }
                return 0;
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
        padding: 0.1em;
        margin: 0.1em;
    }

    .time-positive {
        border-color: green;
        background-color: rgba(0, 255, 0, 0.1);

    }

    .time-negative {
        border-color: red;
        background-color: rgba(255, 0, 0, 0.1);
    }

    .separator {
        margin: 0.2em;
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

    .highlight-command {
        transition: background-color 500ms ease;
        border-radius: .5em;
        padding: 0.2em 0.1em 0.1em;
        margin-top: 0.1em;
    }

    .highlight-command.stop-command {
        background-color: #FF7000
    }

    .highlight-command.halt-command {
        background-color: #EE0022;
    }

</style>
