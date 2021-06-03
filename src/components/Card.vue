<template>
    <div class="card">
        <div class="card-pic" :class="{'red-card': color === 'red', 'yellow-card': color === 'yellow'}">{{ numCards }}
        </div>
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
    margin: 0.1em;
}

.card-pic {
    border-radius: 0.2em;
    width: 1.5em;
    height: 2em;
    font-size: 0.6em;
    display: table-cell;
    vertical-align: middle;
}

.yellow-card {
    background: #e9ea2a;
    color: #2c3e50;
}

.red-card {
    background: #ea1a18;
}

</style>
