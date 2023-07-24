<template>
  <v-card>
    <v-tabs v-model="tab" color="deep-purple-accent-4" align-tabs="center" grow>
      <v-tab :value="0">平面</v-tab>
      <v-tab :value="1">三维动画</v-tab>
      <v-tab :value="2">2.5D动画</v-tab>
      <v-tab :value="3">MG动画</v-tab>
    </v-tabs>
    <v-window v-model="tab">
      <v-window-item value="0">
        <v-container fluid>
          <v-row v-for="row in Math.ceil(plane.length / cols)" :key="row">
            <v-col v-for="col in cols" :key="col" :cols="12 / cols">
              <video-card v-if="((row - 1) * cols + (col - 1)) < plane.length"
                :title="plane[(row - 1) * cols + (col - 1)].title"
                :subTitle="plane[(row - 1) * cols + (col - 1)].subTitle" 
                :tags="plane[(row - 1) * cols + (col - 1)].tags"
                :src="plane[(row - 1) * cols + (col - 1)].src"></video-card>
            </v-col>
          </v-row>
        </v-container>
      </v-window-item>

      <v-window-item value="1">
        <!-- <video-card tag="three" /> -->
      </v-window-item>

      <v-window-item value="2">
        <!-- <video-card tag="isometric" /> -->
      </v-window-item>
      <v-window-item value="3">
        <!-- <video-card tag="motion" /> -->
      </v-window-item>
    </v-window>
  </v-card>
</template>
<script setup>
import VideoCard from '@/components/VideoCard.vue'
import { ref, computed } from 'vue';
import { useDisplay } from 'vuetify'
import { useAppStore } from '@/store/app';
import { storeToRefs } from 'pinia'

const store = useAppStore()
const { plane, three, isometric, motion } = storeToRefs(store)
const tab = ref(0)

const { name } = useDisplay()

const cols = computed(() => {
  switch (name.value) {
    case 'xs': return 1
    case 'sm': return 2
    case 'md': return 3
    case 'lg': return 3
    case 'xl': return 4
    case 'xxl': return 4
  }
  return 2
})



</script>
<style scoped></style>
