const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: '/home'
})
// module.exports = {
//  publicPath: process.env.NODE_ENV === "production" ? "/online-store/" : "/",
// }