<template>
    <div class="flex jc ac cusTitle">
        <img src="@/assets/imgs/6.png" class="picArrow" data-aos="fade-right">
        <div class="ml30 mr30 size30">
            <slot></slot>
        </div>
        <img src="@/assets/imgs/7.png" class="picArrow" data-aos="fade-left">
    </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
.cusTitle{
    background-image: url('@/assets/imgs/titleBg.png');
    background-size: 100% 100%;
    height: 100px;
    width: 100%;
}
.picArrow{
    width: 60px;
    height: auto;
}
</style>