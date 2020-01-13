module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ], plugins: [
    [
      'import',
      {
        libraryName: 'ant-design-vue',
        libraryDirectory: 'es',
        // 为true 启用less
        style: true
      }
    ]
  ]
}
