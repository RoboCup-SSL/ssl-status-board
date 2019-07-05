<template>
    <div class="teamStatus" :class="{'bot-substitution-intent': botSubstitutionIntent}">
        <div :class="{'team-yellow': color === 'yellow', 'team-blue': color === 'blue'}" class="team-name">
            <div class="team-name-text">{{team.name}}</div>
        </div>

        <img :src="logoUrl" alt="team logo" class="team-logo"/>

        <div class="cards">
            <Card color="red" :num-cards="team.redCards"/>
            <span class="card-separator"> | </span>
            <Card color="yellow"
                  :class="{'marked-card': markYellowCard}"
                  :num-cards="team.yellowCards"/>
            <span class="card-separator"> | </span>
            <span class="botinfo">
                <img class="boticon" src="bot.png"/>
                {{team.maxAllowedBots}}
            </span>
            <div class="cardTimers">
                <span v-for="(cardTime, index) in team.yellowCardTimes.slice(0,3)" :key="index">
                <CardTimer 
                    :cardTimer="cardTime" />
                </span>


                <div class="additional-cards" v-if="team.yellowCardTimes.length > 3"> + {{ team.yellowCardTimes.length - 3}} more </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {Referee} from "@/sslProto"
    import teamLogoUrl from "@/teamLogoUrl"
    import Card from "./Card";
    import CardTimer from "./CardTimer";

    export default {
        name: "TeamStatus",
        components: {Card, CardTimer},
        props: {
            color: String,
            team: Referee.ITeamInfo,
        },
        computed: {
            logoUrl() {
                return teamLogoUrl(this.team.name);
            },
            markYellowCard() {
                return this.team.yellowCards > 0 && this.team.yellowCards % 3 === 0;
            },
            botSubstitutionIntent() {
                return this.team.botSubstitutionIntent;
            }
        }
    }
</script>

<style scoped>

    .teamStatus {
        transition: background-color 500ms ease;

    }

    .bot-substitution-intent {
        background-color: #c2c3d0;
    }

    .team-name {
        margin-top: 12px;
        margin-bottom: 12px;
        font-size: 5vh;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
    }

    .team-logo {
        max-width: 27vw;
        max-height: 27vh;
    }

    .marked-card {
        background-color: rgba(255, 255, 0, 0.2);
    }

    .inline {
        display: inline;
    }

    .logo-card-separator {
        margin: 0.2em;
    }

    .cardTimers {
        margin-top: 6px;
        display: block;
    }


    .boticon {
        height: 4.5vmin;
        vertical-align: baseline;
    }

    .botinfo {
        display: inline-block;
        min-width: 130px;
        height: 7vmin;
        line-height: 7vmin;
        vertical-align: baseline
    }

    .additional-cards {
        font-size: 24pt;
        color: yellow;
    }

    .card-separator {
        display: inline-block;
        padding-right: 2px;
    }
</style>
