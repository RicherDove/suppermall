<template>
  <div id="app">
    <router-view></router-view>
    <MainTabBar></MainTabBar>
  </div>
</template>

<script>
// 引用组件的时候要记得注册一下
import MainTabBar from "./components/content/mainTabbar/MainTabbar";
export default {
  name: "App",
  components: {
    MainTabBar
  }
};
</script>

<style>
/* 在js中引用直接用import，但是在style中要用@来引用 */
@import "./assets/css/base.css";
</style>
