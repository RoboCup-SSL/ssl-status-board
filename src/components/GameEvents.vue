<template>
    <div>
        <div v-for="(gameEvent, index) in refereeMessage.gameEvents"
             :key="index"
             class="game-event-element">
            {{gameEvent}}
        </div>
    </div>
</template>

<script>
    export default {
        name: "GameEvents",
        computed: {
            refereeMessage() {
                return this.$store.state.refereeMsg;
            }
        }
    }
</script>

<style scoped>

    .game-event-element {
        width: 100%;
        text-align: center;
        font-size: 3vh;
    }

</style>
