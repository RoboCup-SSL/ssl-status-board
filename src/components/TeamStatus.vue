<template>
    <div>
        <div :class="{'team-yellow': color === 'yellow', 'team-blue': color === 'blue'}" class="team-name">
            <div class="team-name-text">{{team.name}}</div>
        </div>

        <img :src="logoUrl" alt="team logo" class="team-logo"/>

        <hr class="logo-card-separator">

        <div class="cards">
            <Card color="red" :num-cards="team.redCards"/>
            <span> | </span>
            <Card color="yellow"
                  :class="{'marked-card': markYellowCard}"
                  :num-cards="team.yellowCards"/>
        </div>
    </div>
</template>

<script>
    import {Referee} from "@/sslProto"
    import teamLogoUrl from "@/teamLogoUrl"
    import Card from "./Card";

    export default {
        name: "TeamStatus",
        components: {Card},
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
            }
        }
    }
</script>

<style scoped>
    .team-name {
        height: 15vh;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
    }

    .team-logo {
        max-width: 20vw;
        max-height: 30vh;
    }

    .marked-card {
        border-color: yellow;
    }

    .cards {
        vertical-align: middle;
    }

    .inline {
        display: inline;
    }

    .logo-card-separator {
        margin: 0.2em;
    }

</style>
