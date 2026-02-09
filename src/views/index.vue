<template>
    <div class="rel">
        <Header></Header>
        <div style="position: relative;z-index: 2;">
            <Banner></Banner>
            <About></About>
            <Vision></Vision>
            <Center></Center>
            <Technology></Technology>
            <Partner></Partner>
            <Plan></Plan>
            <Connact></Connact>
        </div>
        <img src="@/assets/imgs/bg.png" class="bg">
    </div>
    <el-backtop :right="30" :bottom="100" />
</template>

<script setup lang="ts">
import {
    Header,
    Banner,
    About,
    Vision,
    Center,
    Technology,
    Partner,
    Plan,
    Connact
} from './components'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { nextTick, onMounted } from 'vue';

onMounted(() => {
    // AOS 监听 window scroll；如果用 el-scrollbar 做容器滚动，AOS 无法触发
    // 这里使用原生页面滚动，确保每个模块进入视口都能触发动画
    void nextTick(() => {
        AOS.init({
            duration: 1000,
            offset: 0,
        });
        AOS.refreshHard();
    })
})
</script>

<style lang="scss" scoped>
.bg {
    width: 100vw;
    height: auto;
    position: absolute;
    bottom: 400px;
    left: 0;
    z-index: 1;
}
</style>