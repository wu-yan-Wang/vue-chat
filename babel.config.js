const IS_PROD = ['production', 'prod'].includes(process.env.NODE_ENV)

const plugins = []
// 打包时清除console
if (IS_PROD) {
  plugins.push('transform-remove-console')
}

// 按需引入antd
plugins.push(['import', {
  'libraryName': 'ant-design-vue',
  'libraryDirectory': 'es',
  'style': true // `style: true` 会加载 less 文件
}])

module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
    [
      '@babel/preset-env',
      {
        // 引入浏览器不兼容的 polyfill
        'useBuiltIns': 'entry',
        'corejs': 3
      }
    ]
  ],
  plugins
}
