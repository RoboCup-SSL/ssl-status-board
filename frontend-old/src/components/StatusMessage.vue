<template>
    <div>
        <span v-if="statusMessage !== null">
            {{ statusMessage }}
        </span>
    </div>
</template>

<script>
    export default {
        name: "StatusMessage",
        computed: {
            statusMessage() {
                return this.$store.state.refereeMsg.statusMessage;
            },
        }
    }
</script>

<style scoped>

</style>
