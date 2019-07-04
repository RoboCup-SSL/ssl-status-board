<template>
    <div class="card-timer">
        <div class="progressBar" :style="{
            'width': `${percentage}%`
        }"> </div>
    </div>
</template>

<script>
    export default {
        name: "CardTimer",
        props: {
            cardTimer: Number,
        },

        computed: {
            percentage() {
                return this.cardTimer / 1200000
            },
        } 
    }
</script>

<style scoped>

    .card-timer {
        width: 90%;
        height: 16px;
        display: block;
        border: 1px yellow solid;
        margin-left: 5%;
        margin-right: 5%;
        margin-bottom: 8px;
    }

    .card-timer .progressBar {
        background: yellow;
        display: inline-block;
        height: 100%;
        vertical-align: top;
    }

</style>
