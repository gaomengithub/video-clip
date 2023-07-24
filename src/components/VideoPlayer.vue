<template>
  <div>
    <video ref="videoPlayer" class="video-js vjs-16-9" style="width: 100%;"></video>
  </div>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import videojs from "video.js"
import "video.js/dist/video-js.css"
const videoPlayer = ref(null)
const Player = ref(null)

const props = defineProps({
  src: {
    type: String,
    required: true
  }
})

onMounted(() => {
  Player.value = videojs(videoPlayer.value, {
    controls: true,
    sources: [
      {
        src: props.src,
        type: 'video/mp4',
      }
    ],
    controlBar: {
      remainingTimeDisplay: {
        displayNegative: false
      }
    },
    playbackRates: [0.5, 1, 1.5, 2]
  })
})

onUnmounted(() => {
  if (Player.value) {
    Player.value.dispose()
  }
})
</script>
<style scoped></style>
