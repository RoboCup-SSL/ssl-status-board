<template>
    <div id="app">
        <iframe
            src="https://www.youtube.com/embed/364zEAsOclU?start=0&autoplay=1&mute=1&loop=1&playlist=364zEAsOclU"
            title="Video"
            :width="showVideo ? '100%' : '0'"
            :height="showVideo ? '100%' : '0'"
            allow="autoplay"
        />
        <StatusBoard v-if="!showVideo"/>
    </div>
</template>

<script>
    import StatusBoard from "./components/StatusBoard";

    export default {
        name: 'app',
        components: {
            StatusBoard,
        },
        computed: {
            packetTimestamp() {
                const packetTimestamp = this.$store.state.refereeMsg.packetTimestamp;
                return packetTimestamp / 1000 / 1000
            },
            showVideo() {
                if (this.showVideoAfter) {
                    const packetTimestamp = this.$store.state.refereeMsg.packetTimestamp;
                    const commandTimestamp = this.$store.state.refereeMsg.commandTimestamp;
                    const timeSinceLastCommand = (packetTimestamp - commandTimestamp) / 1000 / 1000;
                    return timeSinceLastCommand > this.showVideoAfter;
                }
                return false
            },
            showVideoAfter() {
                let urlParams = new URLSearchParams(window.location.search);
                return urlParams.get('showVideoAfter')
            },
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: aliceblue;
        height: 100%;
        background-color: #353535;
    }
</style>
