module.exports = {
    plugins: {
        'postcss-pxtorem': {
            rootValue: 20, // 与--auto-font-size: 20px一致
            propList: ['*'], // 所有属性都转换
            selectorBlackList: [':root', '.el-', '.amazing-'], // 忽略的类名
            minPixelValue: 1, // 降低最小转换值，从2改为1
            exclude: /node_modules\/(?!element-plus|vue-amazing-ui)/,
            // 增加对Vue scoped样式的支持
            replace: true,
            mediaQuery: false,
            unitPrecision: 5, // 转换后的精度
            // 确保包含Vue组件的scoped样式
            include: undefined,
            // 处理Vue scoped样式中的data-v属性
            transformUnitToValue: function (unit, value) {
                return value;
            }
        }
    },
};