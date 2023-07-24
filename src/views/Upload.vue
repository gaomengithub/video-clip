<template>
    <v-container>
        <form class="d-flex flex-column">
            <v-select class="mb-2" v-model="state.type" :items="items"
                :error-messages="v$.type.$errors.map(e => e.$message)" label="类别" required @change="v$.type.$touch"
                @blur="v$.type.$touch"></v-select>

            <v-text-field class="mb-2" v-model="state.title" :error-messages="v$.title.$errors.map(e => e.$message)"
                :counter="10" label="标题" required @input="v$.title.$touch" @blur="v$.title.$touch"></v-text-field>

            <v-text-field class="mb-2" v-model="state.subTitle" :error-messages="v$.subTitle.$errors.map(e => e.$message)"
                label="子标题" required @input="v$.subTitle.$touch" @blur="v$.subTitle.$touch"></v-text-field>

            <v-text-field class="mb-2" v-model="state.tags" :error-messages="v$.tags.$errors.map(e => e.$message)"
                label="标签" required @input="v$.tags.$touch" @blur="v$.tags.$touch"></v-text-field>

            <v-file-input show-size class="mb-2" accept="video/*" label="上传视频文件" @change="saveEvent"></v-file-input>
            <v-btn class="mb-4" @click="submit" :disabled="v$.$invalid">
                提交
            </v-btn>
            <v-btn class="mb-4" @click="clear">
                重置
            </v-btn>
        </form>
    </v-container>
</template>
<script setup>
import { reactive ,ref } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { required, helpers } from '@vuelidate/validators'


const initialState = {
    type: '',
    title: '',
    subTitle: '',
    tags: '',
}

const state = reactive({
    ...initialState,
})

const filePath = ref([])



const items = [
    '平面',
    '三维动画',
    '2.5D动画',
    'MG动画',
]

const selectedFile = ref(null)

function saveEvent(e){
    selectedFile.value = e.target.files[0]
    console.log(selectedFile.value.name)
}

const rules = {
    type: { required: helpers.withMessage('类型必须选择', required) },
    title: { required: helpers.withMessage('标题不能为空', required) },
    subTitle: { required: helpers.withMessage('子标题不能为空', required) },
    tags: { required: helpers.withMessage('标签不能为为空', required) },
}

const v$ = useVuelidate(rules, state)

function clear() {
    console.log(filePath)
    // v$.value.$reset()

    // for (const [key, value] of Object.entries(initialState)) {
    //     state[key] = value
    // }
}


function submit() {
    if (v$.value.$invalid) {
        v$.value.$touch()
    }
    else {
        fliename = 
        const base64 = btoa(encodeURIComponent(JSON.stringify(state)))
        console.log(base64)
    }
}

</script>