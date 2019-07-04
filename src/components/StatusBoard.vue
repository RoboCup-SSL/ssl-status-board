<template>
    <div class="status-board">
        <div class="upper-container">
            <TeamStatus class="team-status" color="yellow" :team="refereeMessage.yellow"/>

            <div class="match-status-container">
                <MatchStatus/>
            </div>

            <TeamStatus class="team-status" color="blue" :team="refereeMessage.blue"/>
        </div>

        <hr class="upper-lower-separator">

        <GameEvents class="lower-container"/>
    </div>
</template>

<script>
    import TeamStatus from "./TeamStatus";
    import MatchStatus from "./MatchStatus";
    import GameEvents from "./GameEvents";

    export default {
        name: "StatusBoard",
        components: {GameEvents, MatchStatus, TeamStatus},
        computed: {
            refereeMessage() {
                return this.$store.state.refereeMsg;
            },
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
        align-items: center;
        height: 62%
    }

    .lower-container {
        height: 35%;
    }

    .upper-lower-separator {
        margin-top: 0.2em;
        margin-bottom: 0.2em;
        display: block;
    }

    .match-status-container {
        align-items: center;
        display: inline;
        width: 40%;
        height: 100%;
        float: left;
    }

    .team-status {
        width: 30%;
        float: left;
    }

</style>
