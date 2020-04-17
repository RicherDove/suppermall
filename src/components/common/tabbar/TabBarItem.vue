<template>
  <div class="tab-bar-item">
    <div v-if="isActive" @click="show()">
      <slot name="item-icon"></slot>
    </div>
    <div v-else @click="show()">
      <slot name="item-icon-active"></slot>
    </div>
    <div :style="isActiveColor">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: String,
    ActiveColor: {
      type: String,
      default: "white"
    }
  },
  data() {
    return {
      // isActive: true
    };
  },
  computed: {
    isActive() {
      // 这里是用来动态决定当前点击的页面
      return this.$route.path.indexOf(this.path) != -1;
    },
    isActiveColor() {
      return this.isActive ? { color: this.ActiveColor } : {};
    }
  },
  methods: {
    show() {
      this.isActive = !this.isActive;
      console.log(this.path);
      this.$router.replace(this.path);
    }
  }
};
</script>

<style scoped>
/* 这里的flex可以保证后面开始均等分 */
.tab-bar-item {
  flex: 1;
  text-align: center;
  /* 一般这里的高度设置在移动端普适使用49px */
  height: 49px;
}

.tab-bar-item img {
  height: 24px;
  width: 24px;
  margin-top: 3px;
  /* 去除图片周围的像素 ,虽然img和div凑在一起但是由于有像素所以会有一定的距离*/
  vertical-align: middle;
}
.active {
  color: red;
}
</style>
