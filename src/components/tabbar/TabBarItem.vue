<template>
  <div class="tab_bar_item" @click="itemClick">
    <div v-if="!isActive">
      <slot name="tabbar-icon"></slot>
    </div>
    <div v-else>
      <slot name="tabbar-icon-active"></slot>
    </div>
    <div :style="isActiveColor">
      <slot name="tabbar-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  //父传子
  props: {
    //设置接受path的类型
    path: String,
    activeColor: {
      type: String,
      default: "deeppink",
    },
  },
  data() {
    return {
      // isActive: true,
    };
  },
  methods: {
    itemClick() {
      return this.$router.push(this.path);
    },
  },
  computed: {
    isActive() {
      //通过判断当前活跃的路由地址和path进行比较是否相等    当不等-1时 表示相等
      return this.$route.path.indexOf(this.path) !== -1;
    },
    isActiveColor() {
      return this.isActive ? { color: this.activeColor } : {};
    },
  },
};
</script>
<style>
.tab_bar_item {
  flex: 1;
  text-align: center;
}
.tab_bar_item img {
  width: 24px;
  height: 24px;
  vertical-align: middle;
  margin-top: 3px;
}
</style>