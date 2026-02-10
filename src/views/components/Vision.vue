<template>
    <div class="vision flex col jc">
        <img src="@/assets/imgs/9.png" class="pic9">
        <img src="@/assets/imgs/10.png" class="pic10">
        <img src="@/assets/imgs/11.png" class="pic11" data-aos="fade-up">

        <Title>{{ $t('使命与愿景') }}</Title>

        <div class="flex ast wrap mainP mt120 mb200">
            <div class="flex1 flex jc">
                <div class="card" data-aos="flip-right">
                    <div class="cardTitle flex jc ac size18 tc">{{ $t('企业使命') }}</div>
                    <div class="flex jc">
                        <img src="@/assets/imgs/14.png" class="cardImg aniFloat" style="animation-duration: 2s;">
                    </div>
                    <div class="desc size14 lh28 tc">
                        {{ $t('以数字技术推动体育产业升级') }}<br>
                        {{ $t('以专业管理提升资源配置效率') }}<br>
                        {{ $t('以长期价值管理促进产业稳健发展') }}<br>
                        {{ $t('为全球合作伙伴创造可持续发展基础') }}
                    </div>
                </div>
            </div>
            <div class="flex1 flex jc">
                <div class="card" data-aos="flip-right">
                    <div class="cardTitle flex jc ac size18 tc">{{ $t('企业愿景') }}</div>
                    <div class="flex jc">
                        <img src="@/assets/imgs/15.png" class="cardImg aniFloat">
                    </div>
                    <div class="desc size14 lh28 tc">
                        {{ $t('成为全球领先的体育产业与数字服务融合平台') }}<br>
                        {{ $t('构建覆盖全球的体育资源管理与服务网络') }}<br>
                        {{ $t('推动体育产业标准化、数字化与国际化发展') }}<br>
                        {{ $t('引领体育产业进入高质量发展新时代') }}
                    </div>
                </div>
            </div>
        </div>

        <Title>{{ $t('战略定位与核心理念') }}</Title>

        <div class="mainP">
            <div class="rel">
                <div class="box" data-aos="zoom-in"></div>
                <div class="rel boxcard">
                    <div class="tc size24 gray">{{ $t('战略定位') }}</div>
                    <div class="tc size14 grey lh28 pl mt30 content">
                        {{ $t('以体育产业为核心，整合全球赛事资源、数字技术能力与产业协同网络，构建覆盖投资管理、赛事运营、数字化升级与产业服务的一体化体系。') }}
                    </div>
                    <div class="blue tc size14 mt30">{{ $t('迈图体育定位于：') }}</div>
                    <div class="flex tags mt30 tc">
                        <div class="flex1 tag flex jc ac size14 gray hoverBig">{{ $t('体育资源投资者') }}</div>
                        <div class="flex1 tag flex jc ac size14 gray ml20 hoverBig">{{ $t('体育产业整合者') }}</div>
                    </div>
                    <div class="flex tags mt20 tc">
                        <div class="flex1 tag flex jc ac size14 gray hoverBig">{{ $t('数字体育基础设施建设者') }}</div>
                        <div class="flex1 tag flex jc ac size14 gray ml20 hoverBig">{{ $t('综合产业服务提供者') }}</div>
                    </div>
                    <div class="tc size24 gray mt40">{{ $t('核心理念') }}</div>
                    <div class="tc size14 grey lh28 pl mt30 content">{{ $t('稳健运营 · 数字驱动 · 价值导向 · 长期共赢') }}</div>
                    <div class="tc size24 gray mt40">{{ $t('塞舌尔执照') }}</div>
                    <div class="flex jc mt30">
                        <img src="@/assets/imgs/book.jpg" class="book">
                    </div>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script setup lang="ts">
import Title from '@/components/Title.vue';
</script>

<style lang="scss" scoped>
.vision{
    background: linear-gradient(#002A5B, #050C21);
    position: relative;
    .pic9{
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
    }
    .pic10{
        height: 100%;
        position: absolute;
        top: 0;
        right: 0;
        z-index: 1;
    }
    .pic11{
        width: 100%;
        height: auto;
        position: absolute;
        bottom: 0;
        left: 0;
        z-index: 1;
    }
    .card{
        aspect-ratio: 640 / 938;
        background-image: url("@/assets/imgs/12.png");
        background-size: 100% 100%;
        .cardTitle{
            aspect-ratio: 300 / 57;
            background-image: url("@/assets/imgs/13.png");
            background-size: 100% 100%;
            margin: 0 auto;
        }
        .cardImg{
            aspect-ratio: 1;
            margin-top: 15%;
        }
        .desc{
            color: #5490ED;
        }
    }

    .box{
        width: 100%;
        aspect-ratio: 1400 / 578;
        background-image: url("@/assets/imgs/16.png");
        background-size: 100% 100%;
        position: absolute;
        top: -13vw;
    }

    .tag{
        width: 100%;
        aspect-ratio: 480 / 48;
        background-image: url("@/assets/imgs/17.png");
        background-size: 100% 100%;
    }
}

.book{
    border-radius: 10px;
    height: auto;
    transition: all 0.3s;
    &:hover{
        transform: scale(1.05);
    }
}

/* 大屏幕 */
@media (min-width: 876px) {
    .vision{
        padding-bottom: 400px;
    }
    .pic9{
        width: 52px;
    }
    .pic10{
        width: 52px;
    }
    .card{
        width: 90%;
        padding-top: 1%;
        .cardTitle{
            width: 46%;
        }
        .cardImg{
            width: 40%;
        }
        .desc{
            padding: 0 60px;
            margin-top: 8%;
        }
    }
    .content{
        padding: 0 5vw;
    }
    .boxcard{
        margin-top: 10vw;
    }
    .tags{
        padding: 0 8vw;
    }
    .book{
        width: 40vw;
    }
}


/* 小屏幕 */
@media (max-width: 875px) {
    .vision{
        padding-bottom: 100px;
    }
    .pic9{
        width: 30px;
    }
    .pic10{
        width: 30px;
    }
    .card{
        width: 100%;
        .cardTitle{
            width: 66%;
        }
        .cardImg{
            width: 30%;
        }
        .desc{
            padding: 0 30px;
            margin-top: 4%;
        }
    }
    .content{
        padding: 0 50px;
    }
    .boxcard{
        margin-top: 50px
    }
    .tags{
        padding: 0 35px;
    }
    .book{
        width: 90%;
    }
}
</style>