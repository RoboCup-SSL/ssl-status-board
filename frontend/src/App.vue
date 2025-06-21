<script setup lang="ts">
import {computed} from 'vue'
import {useRefereeStore} from '@/stores/referee'
import StatusBoard from '@/components/StatusBoard.vue'

const refereeStore = useRefereeStore()

const showVideoAfter = computed(() => {
  const urlParams = new URLSearchParams(window.location.search)
  return urlParams.get('showVideoAfter')
})

const url = computed(() => {
  const urlParams = new URLSearchParams(window.location.search)
  return urlParams.get('url')
})


const showVideo = computed(() => {
  if (showVideoAfter.value && url.value) {
    const packetTimestamp = Number(refereeStore.refereeMsg.packetTimestamp)
    const commandTimestamp = Number(refereeStore.refereeMsg.commandTimestamp)
    const timeSinceLastCommand = (packetTimestamp - commandTimestamp) / 1000 / 1000
    return timeSinceLastCommand > Number(showVideoAfter.value)
  }
  return false
})
</script>

<template>
  <div id="app">
    <iframe
      :class="{hidden: !showVideo}"
      :src="url || ''"
      title="Video"
      :width="showVideo ? '100%' : '0'"
      :height="showVideo ? '100%' : '0'"
      allow="autoplay"
    />
    <StatusBoard :class="{hidden: showVideo}"/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: aliceblue;
  height: 100%;
  background-color: #353535;
}

iframe {
  border: 0;
  overflow:hidden;
  display:block;
  position: absolute;
}

.hidden {
  display: none;
}
</style>
