<!--  -->
<template>
  <div class="contioner">
    <div id="content">
      <slot></slot>
    </div>
    <div id="nav">
      <Nav></Nav>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
};
</script>
<style lang='scss' scoped>
.contioner {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
#content {
  flex-grow: 1;
  overflow: auto;
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>