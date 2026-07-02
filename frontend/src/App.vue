<script setup lang="ts">
import { computed } from 'vue'
import { useRefereeStore } from '@/stores/referee'
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

const statusMessage = computed(() => {
  return refereeStore.refereeMsg.statusMessage
})

const statusMessageHtml = computed(() => {
  if (!statusMessage.value) return ''
  return statusMessage.value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\n/g, '<br>')
})
</script>

<template>
  <div id="app">
    <iframe
      :class="{ hidden: !showVideo }"
      :src="url || ''"
      title="Video"
      :width="showVideo ? '100%' : '0'"
      :height="showVideo ? '100%' : '0'"
      allow="autoplay"
    />
    <div v-if="showVideo && statusMessage" class="video-status-overlay" v-html="statusMessageHtml"></div>
    <StatusBoard :class="{ hidden: showVideo }" />
  </div>
</template>

<style>
#app {
  font-family: 'Roboto', serif;
  font-weight: 500;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: aliceblue;
  height: 100%;
  background-color: #353535;
}

iframe {
  border: 0;
  overflow: hidden;
  display: block;
  position: absolute;
}

.video-status-overlay {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  font-size: 3vw;
  padding: 0.3em 0.8em;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 0 0 0.3em 0.3em;
  z-index: 10;
  text-align: center;
  white-space: nowrap;
}

.hidden {
  display: none !important;
}
</style>
