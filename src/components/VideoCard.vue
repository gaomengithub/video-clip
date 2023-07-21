<template>
  <v-container fluid>

    <v-row v-for="row in rows" :key="row">
      <v-col v-for="col in cols" :key="col" :cols="12 / cols">
        <v-card :id="'section-' + row" v-if="((row - 1) * cols + (col - 1)) < msg.length" border density="compact" class="mb-2"
          variant="text">
          <v-card-title>
            {{ msg[(row - 1) * cols + (col-1)].title }}
          </v-card-title>
          <video-player :video-src="msg[col].src"></video-player>
          <v-card-text>
            During my last trip to Florida, I spent 2 weeks traveling through the Everglades.
          </v-card-text>
          <template v-slot:actions>
            <v-btn color="primary" variant="text" block @click="share('section-' + idx)">复制分享链接</v-btn>
          </template>
        </v-card>
      </v-col>
    </v-row>

  </v-container>
</template>
<script setup >
import { useAppStore } from '@/store/app';
import { computed } from 'vue';
import { useDisplay } from 'vuetify'
import router from '@/router';
import VideoPlayer from '@/components/VideoPlayer.vue'
const store = useAppStore()

const props = defineProps({
  tag: {
    type: String,
    required: true
  }
})

const msg = store.msg[props.tag]


const { name } = useDisplay()
const cols = computed(() => {
  switch (name.value) {
    case 'xs': return 1
    case 'sm': return 2
    case 'md': return 3
    case 'lg': return 4
    case 'xl': return 6
    case 'xxl': return 6
  }
  return 2
})

const rows = computed(() => {
  return Math.ceil(msg.length / cols.value)
})

const perfix = 'http://182.92.6.78:8055'

function share(target) {
  const currentUrl = router.currentRoute.value.fullPath;
  const shareUrl = perfix + currentUrl + '#' + target

  console.log(shareUrl)
}

</script>
