<template>
    <div class="mainP mt100 mb100" id="Technology">
        <Title>{{ $t('技术优势All') }}</Title>
    </div>

    <div class="mainP flex" data-aos="zoom-in-left">
        <div class="flex flex1">
            <img src="@/assets/imgs/25.png" class="img mr20">
            <div>
                <div class="size20 gray mb10">{{ $t('区块链确权体系') }}</div>
                <div class="size14 grey lh28">{{ $t('实现体育资源权属登记与流转管理透明化、可追溯化。') }}</div>
            </div>
        </div>
        <div class="flex flex1 ml20">
            <img src="@/assets/imgs/26.png" class="img mr20">
            <div>
                <div class="size20 gray mb10">{{ $t('AI数据洞察平台') }}</div>
                <div class="size14 grey lh28">{{ $t('深度挖掘竞技表现与运营数据价值，支撑科学决策。') }}</div>
            </div>
        </div>
    </div>

    <div class="mainP flex mt40" data-aos="zoom-in-left">
        <div class="flex flex1">
            <img src="@/assets/imgs/27.png" class="img mr20">
            <div>
                <div class="size20 gray mb10">{{ $t('数字资产映射系统') }}</div>
                <div class="size14 grey lh28">{{ $t('将赛事、球员与内容资源进行标准化数字建模管理。') }}</div>
            </div>
        </div>
        <div class="flex flex1 ml20">
            <img src="@/assets/imgs/28.png" class="img mr20">
            <div>
                <div class="size20 gray mb10">{{ $t('全球服务网络') }}</div>
                <div class="size14 grey lh28">{{ $t('构建多区域协同运营体系，支持国际化业务发展。') }}</div>
            </div>
        </div>
    </div>

    <div class="mainP flex mt40" data-aos="zoom-in-left">
        <div class="flex flex1">
            <img src="@/assets/imgs/29.png" class="img mr20">
            <div>
                <div class="size20 gray mb10">{{ $t('大数据集成系统') }}</div>
                <div class="size14 grey lh28">{{ $t('统一赛事、运营、财务与用户数据管理平台。') }}</div>
            </div>
        </div>
        <div class="flex flex1 ml20">
            <img src="@/assets/imgs/30.png" class="img mr20">
            <div>
                <div class="size20 gray mb10">{{ $t('安全合规架构') }}</div>
                <div class="size14 grey lh28">{{ $t('建立多层级信息安全与风险管理体系，保障平台稳定运行') }}</div>
            </div>
        </div>
    </div>

    <div class="mainP mt100 mb100" id="Mode">
        <Title>{{ $t('运营模式All') }}</Title>
    </div>

    <div class="line"></div>
    <div class="cell mainP" data-aos="zoom-in-left">
        <div class="gap20"></div>
        <div class="flex ac">
            <img src="@/assets/imgs/31.png" class="img100 mr20 flex0">
            <div>
                <div class="size20 gray">{{ $t('平台 × 数据 × 资源 三位一体驱动体系') }}</div>
                <div class="size14 grey mt10 lh28">{{ $t('迈图体育构建“平台 + 数据 + 资源”协同发展的运营模式，通过项目孵化、资源整合、服务输出与体系建设，打通体育资源从管理到价值转化的完整路径。') }}</div>
            </div>
        </div>
        <div class="gap20"></div>
    </div>
    <div class="line"></div>
</template>

<script setup lang="ts">
import Title from '@/components/Title.vue';
</script>

<style lang="scss" scoped>
.line{
    width: 100vw;
    height: 1px;
    background: linear-gradient(to right, #0099FF00, #0099FF, #00EAFF, #0099FF, #0099FF00);
}
.cell{
    width: 100%;
    background: linear-gradient(to right, rgba(0, 106, 255, 0.2), rgba(0, 153, 255, 0.2));
}
/* 大屏幕 */
@media (min-width: 876px) {
    .img{
        width: 80px;
        height: 80px;
    }
}


/* 小屏幕 */
@media (max-width: 875px) {
    .img{
        width: 50px;
        height: 50px;
    }
}
</style>