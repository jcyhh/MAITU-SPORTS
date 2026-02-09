<template>
    <div class="header mainP flex jb ac">
        <img src="@/assets/logo.png" class="logo mr100 flex0">
        <div class="flex1 flex ac je">
            <div class="flex je ac size16 pc flex1 menus">
                <div class="mr60 tab nobr" v-for="(item,index) in menus" :key="index" @click="goHref(item.target)">{{ item.name }}</div>
            </div>
            <div class="flex0">
                <el-dropdown trigger="click" @command="onChange">
                    <div class="lang flex ac hand">
                        <img src="@/assets/imgs/1.png" class="img30">
                        <div class="size16 ml10 mr10">{{ langInfo?.name }}</div>
                        <div class="img20">
                            <ArrowDown></ArrowDown>
                        </div>
                    </div>
                    <template #dropdown>
                        <el-dropdown-menu>
                            <el-dropdown-item :command="item.lang" v-for="(item,index) in langs" :key="index">
                                <span :class="lang==item.lang?'main':''">{{ item.name }}</span>
                            </el-dropdown-item>
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ArrowDown } from '@element-plus/icons-vue'
import { langs, t } from '@/locale'
import { useAppStore } from '@/store';
import { storeToRefs } from 'pinia';
import { computed } from 'vue';

const useStore = useAppStore()
const { lang } = storeToRefs(useStore)

const langInfo = computed(()=>langs.find(item=>item.lang==lang.value))

const onChange = (lang: string) => useStore.setLocale(lang)

const menus = computed(()=>([
    {name: t('首页'), target:'#Home'},
    {name: t('关于我们'), target:'#About'},
    {name: t('核心业务'), target:'#Center'},
    {name: t('技术优势'), target:'#Technology'},
    {name: t('运营模式'), target:'#Mode'},
    {name: t('合作伙伴'), target:'#Partner'},
    {name: t('发展战略'), target:'#Plan'},
    {name: t('联系我们'), target:'#Connact'},
]))

const goHref = (url: string) => {
    const element = document.querySelector(url) as HTMLElement;
    if (element) {
        const elementPosition = element.offsetTop;
        
        window.scrollTo({
            top: Math.max(0, elementPosition), // 确保不会滚动到负值
            behavior: 'smooth'
        });
    }
}
</script>

<style lang="scss" scoped>
.header{
    width: 100vw;
    height: 100px;
    background-color: #16223F80;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    .logo{
        width: 58px;
        height: 58px;
    }
    .lang{
        background-color: #050C21;
        border: 1px solid #FFFFFF33;
        height: 44px;
        border-radius: 22px;
        padding: 0 8px;
    }
    .tab{
        cursor: pointer;
        transition: all 0.3s;
        &:hover{
            color: $main-color;
        }
    }
}
.menus{
    overflow: hidden;
    flex-shrink: 1;
}

/* 大屏幕 */
@media (min-width: 876px) {
    .header{
        padding: 0 10vw;
    }
}


/* 小屏幕 */
@media (max-width: 875px) {
    .header{
        padding: 0 30px;
    }
}
</style>