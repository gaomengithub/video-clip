<template>
  <v-app-bar color="teal-darken-4">
    <template v-slot:image>
      <v-img gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"></v-img>
    </template>
    <v-app-bar-title class="text-center">风 和 笠 文 化</v-app-bar-title>
    <template v-slot:append>
      <v-btn icon="mdi-cloud-upload-outline" @click="toLink('Upload')"></v-btn>
    </template>
    <v-btn icon>
      <v-btn icon="mdi-home-variant-outline" @click="toLink('Home')"></v-btn>
        </v-btn>
  </v-app-bar>
</template>

<script setup>
import router from '@/router'
function toLink(path) {
  router.push({ name: path })
}

</script>
