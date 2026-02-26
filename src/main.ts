import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

/**
 * 大数字计算配置
 */
import BigNumber from 'bignumber.js';
BigNumber.set({
    ROUNDING_MODE: BigNumber.ROUND_DOWN, // 直接裁剪，非四舍五入
    DECIMAL_PLACES: 6 // 默认六位小数
});

// Element Plus 暗黑模式
import 'element-plus/theme-chalk/dark/css-vars.css'
import 'element-plus/es/components/notification/style/css'
import '@vant/touch-emulator'; // 电脑端mouse事件转touch事件


/**
 * 公共样式
 */
import '@/styles/color.scss';
import '@/styles/index.scss';
import '@/styles/font.scss';
import '@/styles/animate.scss';
import '@/styles/auto.scss';

/**
 * 动画库
 */
import 'animate.css';

/**
 * 指令
 */
import { copy, filter, onShow } from '@/directives';
app.directive('copy', copy);
app.directive('init', filter);
app.directive('on-show', onShow);

/**
 * 多语言
 */
import { i18n } from '@/locale'
app.use(i18n)

/**
 * pinia
 */
import { setupStore } from '@/store'
setupStore(app)

/**
 * vue-router
 */
import { router } from '@/router'
app.use(router)

/**
 * Dapp
 */


/**
 * 正式环境禁用console
 */

/**
 * 启用VConsole
 */
// import VConsole from 'vconsole'
// new VConsole()

/**
 * 设置暗黑主题
 */
document.documentElement.classList.add('dark')

app.mount('#app')
