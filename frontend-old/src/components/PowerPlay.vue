<template>
    <div>
        <span v-if="showPowerplay"
              :class="{'team-yellow': powerPlayTeam === 'Yellow', 'team-blue': powerPlayTeam === 'Blue'}">
            Power play ({{botsYellow}} vs {{botsBlue}})
        </span>
    </div>
</template>

<script>
    import {Referee} from "@/sslProto"

    export default {
        name: "PowerPlay",
        computed: {
            refereeMessage() {
                return this.$store.state.refereeMsg;
            },
            showPowerplay() {
                if (this.powerPlayTeam === null) {
                    return false;
                }
                switch (this.refereeMessage.command) {
                    case Referee.Command.NORMAL_START:
                    case Referee.Command.FORCE_START:
                    case Referee.Command.DIRECT_FREE_YELLOW:
                    case Referee.Command.DIRECT_FREE_BLUE:
                    case Referee.Command.INDIRECT_FREE_YELLOW:
                    case Referee.Command.INDIRECT_FREE_BLUE:
                        return true;
                }
                return false;
            },
            botsYellow() {
                return this.refereeMessage.yellow.maxAllowedBots;
            },
            botsBlue() {
                return this.refereeMessage.blue.maxAllowedBots;
            },
            powerPlayTeam() {
                if (this.botsBlue > this.botsYellow) {
                    return 'Blue';
                } else if (this.botsYellow > this.botsBlue) {
                    return 'Yellow'
                }
                return null;
            }
        }
    }
</script>

<style scoped>

</style>
