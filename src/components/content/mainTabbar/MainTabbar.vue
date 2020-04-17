<template>
  <div>
    <TabBar>
      <TabBarItem path="/Home" ActiveColor="blue">
        <img slot="item-icon" src="../../assets/img/shouye.svg" alt />
        <img slot="item-icon-active" src="../../assets/img/shouye1.svg" alt />
        <div slot="item-text">首页</div>
      </TabBarItem>
      <TabBarItem path="/Category" ActiveColor="blue">
        <img slot="item-icon" src="../../assets/img/leimupinleifenleileibie.svg" alt />
        <img slot="item-icon-active" src="../../assets/img/leimupinleifenleileibie1.svg" alt />
        <div slot="item-text">分类</div>
      </TabBarItem>
      <TabBarItem path="/Cart" ActiveColor="blue">
        <img slot="item-icon" src="../../assets/img/gouwuche.svg" alt />
        <img slot="item-icon-active" src="../../assets/img/gouwuche1.svg" alt />
        <div slot="item-text">购物车</div>
      </TabBarItem>
      <TabBarItem path="/Profile" ActiveColor="blue">
        <img slot="item-icon" src="../../assets/img/tubiao-.svg" alt />
        <img slot="item-icon-active" src="../../assets/img/tubiao-1.svg" alt />
        <div slot="item-text">我的</div>
      </TabBarItem>
    </TabBar>
  </div>
</template>

<script>
// 引用组件的时候要记得注册一下
import TabBar from "../tabbar/TabBar";
import TabBarItem from "../tabbar/TabBarItem";
export default {
  name: "MainTabbar",
  components: {
    TabBar,
    TabBarItem
  }
};
</script>

<style>
/* 在js中引用直接用import，但是在style中要用@来引用 */
@import "../../assets/css/base.css";
</style>