<template>
    <div class="teamStatus" :class="{'bot-substitution-intent': botSubstitutionIntent}">
        <div :class="{'team-yellow': color === 'yellow', 'team-blue': color === 'blue'}" class="team-name">
            <div class="team-name-text">{{team.name}}</div>
        </div>

        <img :src="logoUrl" alt="team logo" class="team-logo"/>

        <div class="cards">
            <Card class="card" color="red" :num-cards="team.redCards"/>
            <Card class="card" color="yellow" :num-cards="team.yellowCards"/>
            <BotCount class="card" :num-bots="team.maxAllowedBots"/>
        </div>
        
        <div class="cardTimers">
                <span v-for="(cardTime, index) in team.yellowCardTimes.slice(0,3)" :key="index">
                <CardTimer :cardTimer="cardTime" />
                </span>
        </div>
    </div>
</template>

<script>
    import {Referee} from "@/sslProto"
    import teamLogoUrl from "@/teamLogoUrl"
    import Card from "./Card";
    import CardTimer from "./CardTimer";
    import BotCount from "@/components/BotCount";

    export default {
        name: "TeamStatus",
        components: {BotCount, Card, CardTimer},
        props: {
            color: String,
            team: Referee.ITeamInfo,
        },
        computed: {
            logoUrl() {
                return teamLogoUrl(this.team.name);
            },
            botSubstitutionIntent() {
                return this.team.botSubstitutionIntent;
            }
        }
    }
</script>

<style scoped>

    .cards {
        display: flex;
        justify-content: center;
    }

    .card {
    }

    .teamStatus {
        transition: background-color 500ms ease;
    }

    .bot-substitution-intent {
        background-color: #c2c3d0;
    }

    .team-name {
        margin-top: 12px;
        margin-bottom: 12px;
        font-size: 1em;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
    }

    .team-logo {
        max-width: 60%;
    }

    .cardTimers {
        margin-top: 6px;
        display: block;
    }

</style>
