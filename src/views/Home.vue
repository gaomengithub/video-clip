<template>
  <v-card>
    <v-tabs v-model="tab" color="deep-purple-accent-4" align-tabs="center">
      <v-tab :value="0">平面</v-tab>
      <v-tab :value="1">三维动画</v-tab>
      <v-tab :value="2">2.5D动画</v-tab>
      <v-tab :value="3">MG动画</v-tab>
    </v-tabs>
    <v-window v-model="tab">
      <v-window-item value="0">
        <video-card tag="plane" />
      </v-window-item>

      <v-window-item value="1">
        <video-card tag="three" />
      </v-window-item>

      <v-window-item value="2">
        <video-card tag="isometric" />
      </v-window-item>
      <v-window-item value="3">
        <video-card tag="motion" />
      </v-window-item>
    </v-window>
  </v-card>
</template>
<script setup>
import VideoCard from '@/components/VideoCard.vue'
import { ref } from 'vue';

const tab = ref(0)
</script>
