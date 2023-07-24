<template>
  <v-card border density="compact" class="mb-2" variant="text">
    <v-card-title>
      {{ props.title }}
    </v-card-title>
    <v-card-subtitle>
      {{ props.subTitle }}
    </v-card-subtitle>
    <v-card-text>
      <video-player :src="props.src"></video-player>
    </v-card-text>
    <v-card-text class="d-flex flex-wrap ">
      <v-chip v-for="tag in props.tags" class="mr-2">
        {{ tag }}
      </v-chip>
    </v-card-text>
    <template v-slot:actions>
      <v-btn color="primary" variant="text" block>复制分享链接</v-btn>
    </template>
  </v-card>
</template>

<script setup >
import VideoPlayer from '@/components/VideoPlayer.vue'

const props = defineProps({
  title: {
    type: String,
  },
  subTitle: {
    type: String
  },
  tags: {
    type: Array
  },
  src: {
    type: String
  }
})


</script>
