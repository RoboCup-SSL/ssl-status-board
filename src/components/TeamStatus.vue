<template>
    <div>
        <img :src="logoUrl" alt="team logo" class="team-logo"/>

        <div :class="{'team-yellow': color === 'yellow', 'team-blue': color === 'blue'}" class="team-name">
            {{team.name}}
        </div>

        <div class="team-details">
            <div class="cards">
                <div class="card">
                    <div class="card-pic red-card"></div>
                    <div class="card-count">{{team.redCards}}</div>
                </div>
                <div class="inline"> |</div>
                <div v-if="team.yellowCards > 0 && team.yellowCards % 3 === 0" class="inline">
                    <div class="marked-card">
                        <div class="card-pic yellow-card"></div>
                        <div class="card-count">{{team.yellowCards}}</div>
                    </div>
                </div>
                <div v-if="team.yellowCards === 0 || team.yellowCards % 3 !== 0" class="inline">
                    <div class="card">
                        <div class="card-pic yellow-card"></div>
                        <div class="card-count">{{team.yellowCards}}</div>
                    </div>
                </div>
                <div class="card-times">
                    <div v-for="(time, index) in team.yellowCardTimes" :key="index" class="card-time">
                        <span v-format-ns-duration="time"></span>
                        <span v-if="index !== team.yellowCardTimes.length - 1">&nbsp;|&nbsp;</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {Referee} from "@/sslProto"
    import teamLogoUrl from "@/teamLogoUrl"

    export default {
        name: "TeamStatus",
        props: {
            color: String,
            team: Referee.ITeamInfo,
        },
        computed: {
            logoUrl() {
                return teamLogoUrl(this.team.name);
            }
        }
    }
</script>

<style scoped>
    .team-name {
        margin-top: 0.1em;
    }

    .team-logo {
        max-width: 20vw;
        max-height: 25vh;
    }

    .team-logo-button {
        width: 100%;
        height: 100%;
    }

    .card {
        border-style: dotted;
        border-width: 1px;
        border-color: white;
        display: inline-block;
    }

    .marked-card {
        border-style: dashed;
        border-color: yellow;
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

    .yellow-card {
        background: #e9ea2a;
    }

    .red-card {
        background: #ea1a18;
    }

    .card-count {
        display: inline-block;
        vertical-align: middle;
        margin-right: 1vmin;
        margin-left: 1vmin;
    }

    .timeout-card {
        background: azure;
    }

    .team-details {
        font-size: 0.8em;
    }

    .cards {
        vertical-align: middle;
    }

    .card-time {
        display: inline-block;
        vertical-align: middle;
        margin-left: 1vmin;
    }

    .inline {
        display: inline;
    }

</style>
