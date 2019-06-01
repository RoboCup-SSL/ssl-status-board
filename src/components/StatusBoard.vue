<template>
    <div class="status-board">
        <div class="upper-container">
            <TeamStatus class="team-status" color="yellow" :team="refereeMessage.yellow"/>

            <MatchStatus class="match-status"/>

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

    .upper-lower-separator {
        margin-top: 1%;
        margin-bottom: 1%;
    }

    .match-status {
        align-items: center;
        display: inline;
        width: 40%;
        height: 100%;
        float: left;
        justify-content: center;
    }

    .team-status {
        width: 30%;
        float: left;
    }

</style>
