<template>
    <div id="app">
        <StatusBoard/>
    </div>
</template>

<script>
    import StatusBoard from "./components/StatusBoard";

    export default {
        name: 'app',
        components: {
            StatusBoard,
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
