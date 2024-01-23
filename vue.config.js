const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: "/online-store/"
})
// module.exports = {
//  publicPath: process.env.NODE_ENV === "production" ? "/online-store/" : "/",
// }