<template>
    <div class="rel" id="Connact">
        <img src="@/assets/imgs/32.png" class="pic32 mt200" data-aos="fade-up">
        <div class="mainP mt200 mb100">
            <Title>{{ $t('联系我们') }}</Title>
        </div>
        <div class="flex jc ac">
            <div class="item flex jc ac" v-copy="'maitusports@protonmail.com'">
                <img src="@/assets/imgs/33.png" class="pic33 aniRotate">
                <img src="@/assets/imgs/34.png" class="img58 rel">
            </div>
            <!-- <div class="item flex jc ac">
            <img src="@/assets/imgs/33.png" class="pic33">
            <img src="@/assets/imgs/35.png" class="img58 rel">
        </div>
        <div class="item flex jc ac">
            <img src="@/assets/imgs/33.png" class="pic33">
            <img src="@/assets/imgs/36.png" class="img58 rel">
        </div>
        <div class="item flex jc ac">
            <img src="@/assets/imgs/33.png" class="pic33">
            <img src="@/assets/imgs/37.png" class="img58 rel">
        </div> -->
        </div>

        <div class="copyright mt200 flex jc ac size12 gray" data-aos="fade-up">Copyright © MAITU SPORTS. All Rights Reserved.</div>
    </div>
</template>



<script setup lang="ts">
import Title from '@/components/Title.vue';
</script>

<style lang="scss" scoped>
.pic32 {
    width: 100vw;
    height: auto;
}

.item {
    width: 100px;
    height: 100px;
    position: relative;
    margin: 0 30px;
    cursor: pointer;

    .pic33 {
        width: 100px;
        height: 100px;
        position: absolute;
        top: 0;
        left: 0;
    }
}

.copyright {
    width: 100vw;
    height: 50px;
    background-color: #16223F;
}
</style>