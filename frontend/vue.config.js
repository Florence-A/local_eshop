const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      'http://localhost:9000':{
        target: 'http://localhost:8080',
        ws: true,
        changeOrigin: true
      }
    }
  }
})

