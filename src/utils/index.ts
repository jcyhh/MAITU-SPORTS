/**
 * 普通数字乘法精度计算
 * @param {Number|String} a - 第一个数字 
 * @param {Number|String} b - 第二个数字
 * @returns {Number} a * b
 */
export function computedMul(a:number|string, b:number|string) {
    var c = 0,
        d = Number(a).toString(),
        e = Number(b).toString();
    try {
        c += d.split(".")[1].length
    } catch (f) { }
    try {
        c += e.split(".")[1].length
    } catch (f) { }
    return Number(d.replace(".", "")) * Number(e.replace(".", "")) / Math.pow(10, c)
}

/**
 * 普通数字除法精度计算
 * @param {Number|String} a - 第一个数字 
 * @param {Number|String} b - 第二个数字
 * @returns {Number} a / b 保留两位小数
 */
export function computedDiv(a:number|string, b:number|string) {
    var c, d, e = 0,
        f = 0;
    try {
        e = Number(a).toString().split(".")[1].length
    } catch (g) { }
    try {
        f = Number(b).toString().split(".")[1].length
    } catch (g) { }
    return c = Number(Number(a).toString().replace(".", "")), d = Number(Number(b).toString().replace(".", "")), computedMul(c /
        d, Math.pow(10, f - e))
}

/**
 * 普通数字加法精度计算
 * @param {Number|String} a - 第一个数字 
 * @param {Number|String} b - 第二个数字
 * @returns {Number} a + b
 */
export function computedAdd(a:number|string, b:number|string) {
    var c, d, e;
    try {
        c = Number(a).toString().split(".")[1].length
    } catch (f) {
        c = 0
    }
    try {
        d = Number(a).toString().split(".")[1].length
    } catch (f) {
        d = 0
    }
    return e = Math.pow(10, Math.max(c, d)), (computedMul(a, e) + computedMul(b, e)) / e
}

/**
 * 普通数字减法精度计算
 * @param {Number|String} a - 第一个数字 
 * @param {Number|String} b - 第二个数字
 * @returns {Number} a - b
 */
export function computedSub(a:number|string, b:number|string) {
    var c, d, e;
    try {
        c = Number(a).toString().split(".")[1].length
    } catch (f) {
        c = 0
    }
    try {
        d = Number(a).toString().split(".")[1].length
    } catch (f) {
        d = 0
    }
    return e = Math.pow(10, Math.max(c, d)), (computedMul(a, e) - computedMul(b, e)) / e
}

export function isIOS() {
    const ua = navigator.userAgent;
    const isIPhone = /iPhone/i.test(ua);
    const isIPad = /iPad/i.test(ua) || (/Macintosh/i.test(ua) && navigator.maxTouchPoints > 1);
    return isIPhone || isIPad || /iPod/i.test(ua);
}

// 格式化数字
export function initNumber(value:number | bigint){
    let text:string = ''
    if(value){
        const num = Math.floor(parseFloat(`${value}`) * 1e6) / 1e6
        let numFormat = new Intl.NumberFormat('en-US',{
            maximumFractionDigits: 6
        }).format(num)
        text = numFormat == '0'?'0.00':numFormat
    }else{
        text = '0.00'
    }
    return text
}

// 隐藏手机号中间信息
export function initPhone(value:string){
    if(!value)return '--'
    return value.slice(0, 3) + "****" + value.slice(value.length - 4)
}

// 隐藏钱包地址中间信息
export function initAddress(value:string){
    if(!value)return '--'
    return value.slice(0, 5) + '****' + value.slice(value.length - 4)
}
// 09/28 9:28
export function initTime(timestamp:string){
    if(!timestamp)return '--'
    const date = new Date(timestamp);
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${month}/${day}/${year} ${hours}:${minutes}`
}

// 09/28
export function initDate(timestamp:string){
    if(!timestamp)return '--'
    const date = new Date(timestamp);
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${month}/${day}`
}

// 是否是今天
export function isToday(dateString: string): boolean {
    if (!dateString) return false;
    const inputDate = new Date(dateString);
    const today = new Date();
    return inputDate.getFullYear() === today.getFullYear() &&
           inputDate.getMonth() === today.getMonth() &&
           inputDate.getDate() === today.getDate();
}

// 判断当前时间是否在指定时间区间内
export function isInTimeRange(startTime: string, endTime: string): boolean {
    if (!startTime || !endTime) return false;
    const now = new Date();
    const start = new Date(startTime);
    const end = new Date(endTime);
    if (isNaN(start.getTime()) || isNaN(end.getTime())) {
        console.warn('Invalid date format provided');
        return false;
    }
    if (start >= end) {
        console.warn('Start time should be earlier than end time');
        return false;
    }
    return now >= start && now <= end;
}

export function getProgress(a:string|number, b:string|number){
    const aNum = Number(a)
    if(a==0)return 0
    const bNum = Number(b)
    if(b==0)return 0
    return Math.floor(computedDiv(aNum, bNum) * 10000) / 100
}