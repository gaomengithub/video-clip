<template>
    <v-container fluid>
        <v-row>
            <v-col :cols="(cols == 1) ? 12 : 7">
                <video-card title="share" sub-title="share"
                    src="https://cdn.jsdelivr.net/gh/xdlumia/files/video-play/IronMan.mp4"></video-card>
            </v-col>
            <v-col v-if="cols == 2">
                
            </v-col>
        </v-row>
    </v-container>
</template>
<script setup>
import { useDisplay } from 'vuetify';
import VideoCard from '@/components/VideoCard.vue';
import { computed } from 'vue';

const { name } = useDisplay()
const cols = computed(() => {
    switch (name.value) {
        case 'xs': return 1
        case 'sm': return 2
        case 'md': return 2
        case 'lg': return 2
        case 'xl': return 2
        case 'xxl': return 2
    }
    return 2
})
</script>