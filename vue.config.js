//这里是用来配制别名用的,便于路径的快速配置
module.exports = {
  configureWebpack: {
    resolve: {
      // extensions: 默认配置，在某处有
      alias: {
        assets: "@/assets",
        common: "@/common",
        components: "@/components",
        network: "@/network",
        views: "@/views"
      }
    }
  }
};
