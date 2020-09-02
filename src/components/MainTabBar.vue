<template>
  <tab-bar>
    <tab-bar-item path="/home">
      <img slot="tabbar-icon" src="@/assets/img/tabbar/home.svg" alt />
      <img slot="tabbar-icon-active" src="@/assets/img/tabbar/home_active.svg" alt />
      <p slot="tabbar-text">首页</p>
    </tab-bar-item>
    <tab-bar-item path="/category" activeColor="blue">
      <img slot="tabbar-icon" src="@/assets/img/tabbar/category.svg" alt />
      <img slot="tabbar-icon-active" src="@/assets/img/tabbar/category_active.svg" alt />
      <p slot="tabbar-text">分类</p>
    </tab-bar-item>
    <tab-bar-item path="shopcart" activeColor="green">
      <img slot="tabbar-icon" src="@/assets/img/tabbar/shopcart.svg" alt />
      <img slot="tabbar-icon-active" src="@/assets/img/tabbar/shopcart_active.svg" alt />
      <p slot="tabbar-text">购物车</p>
    </tab-bar-item>
    <tab-bar-item path="profile" activeColor="yellow">
      <img slot="tabbar-icon" src="@/assets/img/tabbar/profile.svg" alt />
      <img slot="tabbar-icon-active" src="@/assets/img/tabbar/profile_active.svg" alt />
      <p slot="tabbar-text">我的</p>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from "components/tabbar/TabBar";
import TabBarItem from "components/tabbar/TabBarItem";
export default {
  name: "maintabbar",
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>