<template>
    <div class="card">
        <div class="card-pic" :class="{'red-card': color === 'red', 'yellow-card': color === 'yellow'}"></div>
        <div class="card-count">{{numCards}}</div>
    </div>
</template>

<script>
    export default {
        name: "Card",
        props: {
            color: String,
            numCards: Number,
        }
    }
</script>

<style scoped>

    .card {
        border-style: dotted;
        border-width: 0.4vh;
        display: inline-block;
    }

    .card-pic {
        border-radius: 0.5vmin;
        width: 3vmin;
        height: 5vmin;
        margin-left: 1vmin;
        display: inline-block;
        font-size: initial;
        /* IE 7 hack */
        *zoom: 1;
        *display: inline;
        vertical-align: middle;
    }

    .card-count {
        display: inline-block;
        vertical-align: middle;
        margin-right: 1vw;
        margin-left: 1vw;
    }

    .yellow-card {
        background: #e9ea2a;
    }

    .red-card {
        background: #ea1a18;
    }

</style>
