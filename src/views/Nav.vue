import SvgIcon from '@/views/SvgIcon.vue';
<template>
  <div class="nav-container">
    <div class="line"></div>
    <div id="nav">
      <router-link class="tab" to="/tag" active-class="selected">
        <SvgIcon name="label"></SvgIcon>
        <span>标签</span>
      </router-link>
      <router-link class="tab" to="/tally/labels" active-class="selected">
        <SvgIcon name="tally"></SvgIcon>
        <span>记账</span>
      </router-link>
      <router-link class="tab" to="/statistics" active-class="selected">
        <SvgIcon name="statistics"></SvgIcon>
        <span>统计</span>
      </router-link>
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
//@import url(); 引入公共css类
#nav {
  display: flex;
  justify-content: space-around;
  background: white;
  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.line {
  height: 1px;
  background: rgb(205, 205, 205);
}

.tab {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  > .selected {
    color: #42b983;
  }
  .icon {
    width: 1.5em;
    height: 1.5em;
  }
  span {
    display: inline-block;
    margin-top: 3px;
  }
}
</style>