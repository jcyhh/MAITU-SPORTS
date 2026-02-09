<template>
    <div class="gradientBox" :style="style">
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
    colors:{
        type: Array,
        default: () => ['#CC00FF', '#1B4DFF', '#3DFFF3']
    },
    angle:{
        type: String,
        default: '120deg'
    }
})

const style = computed(()=>({
    backgroundImage: `linear-gradient(${props.angle}, ${props.colors?.join(',')})`
}))
</script>

<style lang="scss" scoped>
@keyframes gradient {
    0% {
        background-position: 0% 50%;
    }

    50% {
        background-position: 100% 50%;
    }

    100% {
        background-position: 0% 50%;
    }
}
.gradientBox{
    background-size: 300% 100%;
    transition: transform 0.3s ease;
    animation: gradient 5s linear infinite;
}
</style>