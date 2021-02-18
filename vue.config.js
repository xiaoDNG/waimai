const path = require('path')
const px2rem = require('postcss-px2rem')



module.exports = {//只能写vue webpack封装的配置

  css: { // 添加postcss配置
    loaderOptions: {
      postcss: {
        plugins: [
          // 配置postcs-px2rem
          px2rem({
            remUnit: 37.5   // 设计稿等分后的rem值   375/10
          })
        ]
      }
    }
  },
  // runtimeCompiler:true,//配置vue的编译器
  lintOnSave:false, //关闭eslint警告

  configureWebpack: {//webpack 原生配置
    resolve: {
      extensions: ['.js', '.vue', '.json'], // 可以省略的后缀名
      alias: { // 路径别名(简写方式)
        // 'vue$': 'vue/dist/vue.esm.js',  // 表示精准匹配   带vue编译器
        '@': path.resolve(__dirname, 'src'),
        '@components': path.resolve(__dirname, 'src/components'),
      }
    }
  },  
  devServer: {
      proxy: {
        '/api': {
          target: 'http://localhost:4000',
          pathRewrite: {
            '^/api' : ''  // 转发请求时去除路径前面的/api
          },
        },
        '/gh': {
          target: 'https://api.github.com', // 转发的目标地址
          pathRewrite: {
            '^/gh' : ''  // 转发请求时去除路径前面的/api
          },
        changeOrigin: true, // 支持跨域, 如果协议/主机也不相同, 必须加上
      }
    }
  }
}