import { t } from '@/locale';
import copy from 'copy-to-clipboard';
import { ElNotification } from 'element-plus'

interface RippleHTMLElement extends HTMLElement {
    _copyValue: string
}

export default {
    mounted(el: RippleHTMLElement, binding: any) {
        el.addEventListener('click', () => {
            let valueToCopy = el._copyValue || binding.value
            const result = copy(valueToCopy);
            ElNotification({
                title: result ? t('成功') : t('失败'),
                message: result ? t('复制成功') : t('复制失败'),
                type: result ? 'success' : 'error'
            })
        });
    },
    updated(el: RippleHTMLElement, binding: any) {
        el._copyValue = binding.value;
    }
};