<template>
    <div class="bot-count">
        <div class="element">
            <img class="bot-pic" alt="bot" src="bot.png"/>
        </div>
        <div class="element bot-number">
            {{ numBots }}    
        </div>
    </div>
</template>

<script>
export default {
    name: "BotCount",
    props: {
        color: String,
        numBots: Number,
    }
}
</script>

<style scoped>

.bot-count {
    margin: 0.1em;
    font-size: 0.6em;
}

.element {
    display: table-cell;
    vertical-align: middle;
}

.bot-number {
    padding-left: 0.2em;
}

.bot-pic {
    object-fit: contain;
    width: 1.5em;
    height: 2em;
}

</style>
