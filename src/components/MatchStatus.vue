<template>
    <div>
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
</template>

<script>
    export default {
        name: "MatchStatus",
        computed: {
            refereeMessage() {
                return this.$store.state.refereeMsg;
            }
        }
    }
</script>

<style scoped>

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
