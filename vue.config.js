const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  
  // 定义页面名字
  chainWebpack: config =>
  {
    config.plugin('html')
        .tap(args => {
          args[0].title = "学生管理系统";
          return args;
        })
      }
})
