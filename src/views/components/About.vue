<template>
    <div class="about flex col jc mainP" id="About">
        <img src="@/assets/imgs/4.png" class="pic4">
        <Title>{{ $t('关于迈图体育') }}</Title>


        <div class="mt60 size20 lh40">
            {{ $t('迈图体育集团') }}（MAITU SPORTS GROUP LTD）
            <span class="main">{{ $t('注册于塞舌尔共和国') }}</span> 
            {{ $t('，业务覆盖欧洲、亚洲及多个新兴体育市场，') }}
            <span class="main">{{ $t('是专注于体育产业与数字经济深度融合的国际化综合服务平台。') }}</span>
        </div>
        <div class="size14 lh28 mt60" style="color: #C1E1FF;">
            {{ $t('集团围绕...') }}<br>
            {{ $t('依托...') }}
        </div>

        <div class="flex jc mt120">
            <div class="media">
                <div class="title">
                    <Title>{{ $t('媒体') }}</Title>
                </div>
                <div class="flex jc mp4">
                    <video controls autoplay muted playsinline preload="auto" :src="'/h5/AboutUs.MP4'"></video>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script setup lang="ts">
import Title from '@/components/Title.vue';
</script>

<style lang="scss" scoped>
.about{
    position: relative;
    z-index: 5;
    background-image: url("@/assets/imgs/5.png");
    background-size: 100% 100%;
    .pic4{
        width: 100vw;
        height: auto;
        position: absolute;
        top: -30px;
        left: 0;
        z-index: 1;
    }
    .media{
        aspect-ratio: 1080 / 674;
        background-image: url('@/assets/imgs/8.png');
        background-size: 100% 100%;
        video{
            aspect-ratio: 800 / 450;
            border-radius: 20px;
        }
    }
}
/* 大屏幕 */
@media (min-width: 876px) {
    .about{
        padding-top: 100px;
        padding-bottom: 100px;
    }
    .media{
        width: 56vw;
        padding-top: 1%;
        .mp4{
            margin-top: 5%;
        }
        video{
            width: 42vw;
        }
    }
}


/* 小屏幕 */
@media (max-width: 875px) {
    .about{
        padding-top: 100px;
        padding-bottom: 100px;
    }
    .media{
        width: 100%;
        .title{
            transform: scale(0.7);
            margin-top: -2%;
        }
        video{
            width: 80%;
        }
    }
}
</style>