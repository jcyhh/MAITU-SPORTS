<template>
    <div class="mainP mt200 mb100" id="Plan">
        <Title>{{ $t('发展战略All') }}</Title>
    </div>

    <div class="plan">
        <div class="flex ast item">
            <div class="ball"></div>
            <div class="flex1" data-aos="fade-up">
                <div class="size20 main name">{{ $t('第一阶段 | 基础构建期') }}</div>
                <div class="yellow mt20">2024–2026</div>
            </div>
            <div class="line"></div>
            <div class="flex1 gray size14 lh24">
                <span class="bold">·</span> {{ $t('完善数字体育基础平台') }}<br>
                <span class="bold">·</span> {{ $t('建立核心产品体系') }}<br>
                <span class="bold">·</span> {{ $t('布局亚洲与欧洲重点市场') }}<br>
                <span class="bold">·</span> {{ $t('打造示范性项目') }}
            </div>
        </div>
        <div class="flex ast item">
            <div class="ball"></div>
            <div class="flex1" data-aos="fade-up">
                <div class="size20 main name">{{ $t('第二阶段 | 规模拓展期') }}</div>
                <div class="yellow mt20">2027–2029</div>
            </div>
            <div class="line ml20 mr20"></div>
            <div class="flex1 gray size14 lh24">
                <span class="bold">·</span> {{ $t('扩展赛事IP与产业资源') }}<br>
                <span class="bold">·</span> {{ $t('完善跨区域协同运营体系') }}<br>
                <span class="bold">·</span> {{ $t('优化商业模式结构') }}<br>
                <span class="bold">·</span> {{ $t('实现规模化发展') }}
            </div>
        </div>
        <div class="flex ast item">
            <div class="ball"></div>
            <div class="flex1" data-aos="fade-up">
                <div class="size20 main name">{{ $t('第三阶段 | 价值引领期') }}</div>
                <div class="yellow mt20">2030–2033</div>
            </div>
            <div class="line ml20 mr20"></div>
            <div class="flex1 gray size14 lh24">
                <span class="bold">·</span> {{ $t('构建全球体育价值网络') }}<br>
                <span class="bold">·</span> {{ $t('推动产业全面数字化') }}<br>
                <span class="bold">·</span> {{ $t('深化国际合作体系') }}<br>
                <span class="bold">·</span> {{ $t('打造综合体育服务平台') }}
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import Title from '@/components/Title.vue';
</script>

<style lang="scss" scoped>
.line{
    width: 1px;
    background: linear-gradient(#0099FF00, #0099FF, #0099FF00);
}
.item{
    padding: 0 30px 80px 30px;
    position: relative;
    border-left: 1px solid #FFFFFF33;
    .ball{
        width: 10px;
        height: 10px;
        border-radius: 50%;
        position: absolute;
        top: 0;
        left: -5px;
        background-color: $main-color;
    }
    .name{
        position: relative;
        top: -5px;
    }
}
/* 大屏幕 */
@media (min-width: 876px) {
    .plan{
        padding: 0 30vw;
    }
    .line{
        margin: 0 100px;
    }
}


/* 小屏幕 */
@media (max-width: 875px) {
    .plan{
        padding: 0 30px;
    }
    .line{
        margin: 0 30px;
    }
}
</style>