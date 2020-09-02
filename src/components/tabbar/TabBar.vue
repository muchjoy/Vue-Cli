<template>
  <div id="tab_bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "tabbar",
};
</script>

<style >
#tab_bar {
  display: flex;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 49px;
  background: #f6f6f6;
  box-shadow: 0 -2px 2px rgba(100, 100, 100, 0.2);
}
</style>