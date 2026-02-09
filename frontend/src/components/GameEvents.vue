<template>
  <div class="game-events">
    <table class="table-striped">
      <tbody>
        <tr v-for="(gameEvent, index) in gameEvents" :key="index">
          <td>{{ formatTimestamp(gameEvent.createdTimestamp) }}</td>
          <td v-html="formatTeamFromGameEvent(gameEvent)"></td>
          <td v-html="formatGameEvent(gameEvent)"></td>
          <td class="originIndicator">
            <img
              class="origin-icon"
              :src="tigers_autoref"
              alt="TIGERs"
              v-if="isOrigin(gameEvent, ORIGIN_TIGERS)"
            />
            <img
              class="origin-icon"
              :src="erforce_autoref"
              alt="ER-Force"
              v-if="isOrigin(gameEvent, ORIGIN_ERFORCE)"
            />
            <font-awesome-icon class="origin-icon" :icon="faUser" v-if="isOrigin(gameEvent, ORIGIN_UI)" />
            <font-awesome-icon class="origin-icon" :icon="faVoteYea" v-if="isOrigin(gameEvent, ORIGIN_MAJORITY)" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRefereeStore } from '@/stores/referee'
import {formatTeamFromGameEvent, mapGameEventToText} from '@/helpers/texts'
import tigers_autoref from '@/assets/icons/tigers-autoref.png'
import erforce_autoref from '@/assets/icons/erforce-autoref.svg'
import type { GameEvent } from '@/proto/ssl_gc_game_event_pb'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUser, faVoteYea } from '@fortawesome/free-solid-svg-icons'
import {ORIGIN_ERFORCE, ORIGIN_MAJORITY, ORIGIN_TIGERS, ORIGIN_UI} from "@/helpers/constants.ts";

const refereeStore = useRefereeStore()

const gameEvents = computed(() => {
  return refereeStore.refereeMsg.gameEvents?.map((x) => x).reverse() || []
})

const formatTimestamp = (timestamp: bigint): string => {
  if (!timestamp) return ''
  // Convert microseconds to milliseconds
  const date = new Date(Number(timestamp) / 1000)
  const hours = date.getHours().toString().padStart(2, '0')
  const minutes = date.getMinutes().toString().padStart(2, '0')
  const seconds = date.getSeconds().toString().padStart(2, '0')
  return `${hours}:${minutes}:${seconds}`
}

const formatGameEvent = (gameEvent: GameEvent): string => {
  return mapGameEventToText(gameEvent)
}

const isOrigin = (gameEvent: GameEvent, origin: string): boolean => {
  return gameEvent.origin?.some((o) => o.includes(origin)) || false
}
</script>

<style scoped>
.game-events {
  text-align: left;
  font-size: 0.7em;
}

.table-striped {
  width: 100%;
}

.table-striped tbody tr:nth-of-type(odd) {
  background-color: #222;
}

.table-striped tbody tr:nth-of-type(even) {
  background-color: #444;
}

.table-striped td {
  vertical-align: baseline;
  padding-left: 0.2em;
  padding-right: 0.2em;
  white-space: nowrap;
  width: 1%;
}

.table-striped td:nth-child(3) {
  width: auto;
  white-space: normal;
}

.originIndicator {
  text-align: right;
  vertical-align: middle;
}

.origin-icon {
  height: 0.7em;
  width: auto;
  vertical-align: middle;
  margin: 0 0.05em;
}
</style>
