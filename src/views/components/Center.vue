<template>
    <div class="mainP mt200 mb100" id="Center">
        <Title>{{ $t('核心业务板块') }}</Title>
    </div>

    <van-swipe class="center" :loop="false" :show-indicators="false" :width="330" data-aos="fade-left">
        <van-swipe-item>
            <div class="item"></div>
            <div class="flex col ac">
                <div class="title size18 flex jc ac tc">{{ $t('体育投资') }}</div>
                <img src="@/assets/imgs/18.png" class="itemImg mt50 rel">
                <div class="mask"></div>
                <div class="content flex jc ac">
                    <div class="desc flex jc ac grey size14 lh28">
                        {{ $t('布局职业俱乐部、赛事IP、联盟权益及青训体系，构建多元化体育资源组合，推动产业长期发展。') }}
                    </div>
                </div>
            </div>
        </van-swipe-item>
        <van-swipe-item>
            <div class="item"></div>
            <div class="flex col ac">
                <div class="title size18 flex jc ac tc">{{ $t('赛事运营') }}</div>
                <img src="@/assets/imgs/19.png" class="itemImg mt50 rel">
                <div class="mask"></div>
                <div class="content flex jc ac">
                    <div class="desc flex jc ac grey size14 lh28">
                        {{ $t('打造标准化、可复制的赛事体系，提升品牌合作、媒体传播与票务服务能力，实现赛事价值持续释放。') }}
                    </div>
                </div>
            </div>
        </van-swipe-item>
        <van-swipe-item>
            <div class="item"></div>
            <div class="flex col ac">
                <div class="title size18 flex jc ac tc">{{ $t('数字体育') }}</div>
                <img src="@/assets/imgs/20.png" class="itemImg mt50 rel">
                <div class="mask"></div>
                <div class="content flex jc ac">
                    <div class="desc flex jc ac grey size14 lh28">
                        {{ $t('依托人工智能与大数据技术，实现竞技管理、训练优化与运营决策智能化升级。') }}
                    </div>
                </div>
            </div>
        </van-swipe-item>
        <van-swipe-item>
            <div class="item"></div>
            <div class="flex col ac">
                <div class="title size18 flex jc ac tc">{{ $t('体育娱乐传媒') }}</div>
                <img src="@/assets/imgs/21.png" class="itemImg mt50 rel">
                <div class="mask"></div>
                <div class="content flex jc ac">
                    <div class="desc flex jc ac grey size14 lh28">
                        {{ $t('构建内容制作、IP孵化与全球传播体系，扩大体育品牌影响力与用户覆盖面。') }}
                    </div>
                </div>
            </div>
        </van-swipe-item>
        <van-swipe-item>
            <div class="item"></div>
            <div class="flex col ac">
                <div class="title size18 flex jc ac tc">{{ $t('体育资产管理') }}</div>
                <img src="@/assets/imgs/22.png" class="itemImg mt50 rel">
                <div class="mask"></div>
                <div class="content flex jc ac">
                    <div class="desc flex jc ac grey size14 lh28">
                        {{ $t('围绕数字登记、价值评估与结构优化，推动体育资源规范化管理与有序流通。') }}
                    </div>
                </div>
            </div>
        </van-swipe-item>
        <van-swipe-item>
            <div class="item"></div>
            <div class="flex col ac">
                <div class="title size18 flex jc ac tc">{{ $t('全球合规服务') }}</div>
                <img src="@/assets/imgs/23.png" class="itemImg mt50 rel">
                <div class="mask"></div>
                <div class="content flex jc ac">
                    <div class="desc flex jc ac grey size14 lh28">
                        {{ $t('提供跨境合规咨询、运营架构设计与风险管理支持，保障业务稳健发展。') }}
                    </div>
                </div>
            </div>
        </van-swipe-item>
    </van-swipe>
</template>

<script setup lang="ts">
import Title from '@/components/Title.vue';
</script>

<style lang="scss" scoped>
.center{
    height: 500PX;
}
.item{
    width: 100%;
    height: 20PX;
    background: linear-gradient(#0044881A, #004488);
    position: absolute;
    top: 0;
    left: 0;
}
.title{
    width: 200PX;
    aspect-ratio: 300 / 57;
    background-image: url("@/assets/imgs/13.png");
    background-size: 100% 100%;
    position: relative;
    z-index: 1;
    top: 8PX;
}
.itemImg{
    width: 180PX;
    height: 180PX;
}
.mask{
    background: linear-gradient(#0044881A, #004488);
    height: 100PX;
    width: 100%;
    position: absolute;
    top: 180PX;
}
.content{
    width: 100%;
    height: 200PX;
    background: linear-gradient(#002B56, #050C21);
    position: relative;
    z-index: 1;
    padding-top: 30PX;
    margin-top: 20PX;
    .desc{
        width: 250PX;
        aspect-ratio: 380 / 238;
        background-image: url("@/assets/imgs/24.png");
        background-size: 100% 100%;
        padding: 10PX 25PX;
    }
}
</style>