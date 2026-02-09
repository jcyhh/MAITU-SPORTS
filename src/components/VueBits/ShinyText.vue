<script setup lang="ts">
import { computed } from 'vue';

interface ShinyTextProps {
  text: string;
  disabled?: boolean;
  speed?: number;
  className?: string;
}

const props = withDefaults(defineProps<ShinyTextProps>(), {
  text: '',
  disabled: false,
  speed: 5,
  className: ''
});

const animationDuration = computed(() => `${props.speed}s`);
</script>

<template>
  <div class="shineText">
    <div class="text-bg"><span v-html="props.text"></span></div>
    <div 
      class="text-shine"
      :style="{ animationDuration: animationDuration }"
    >
      <span v-html="props.text"></span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@keyframes shine {
  0% {
    background-position: 100%;
  }
  100% {
    background-position: -100%;
  }
}

.shineText {
    display: inline-block;
    position: relative;
}

.text-bg {
    background: #FFFFFF80;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent;
}

.text-shine {
    position: absolute;
    top: 0;
    left: 0;
    background: linear-gradient(120deg, rgba(255, 255, 255, 0) 40%, rgba(255, 255, 255, 0.8) 50%, rgba(255, 255, 255, 0) 60%);
    background-size: 200% 100%;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent;
    animation: shine 5s linear infinite;
    pointer-events: none;
}
</style>
