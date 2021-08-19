<template>
  <div class="tab">
    <router-link to="/tally/labels">
      <div
        class="tab-btn"
        :class="{ tabBtnEd: childSeltype === '-' }"
        @click="changeType('-')"
      >
        支出
      </div>
    </router-link>
    <router-link to="/tally/income">
      <div
        class="tab-btn"
        :class="{ tabBtnEd: childSeltype === '+' }"
        @click="changeType('+')"
      >
        收入
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: ["seltype"],
  components: {},
  data() {
    return {
      childSeltype: this.seltype,
    };
  },
  computed: {},
  watch: {

  },
  created() {},
  methods: {
    changeType(type) {
      this.childSeltype = type;
      this.$emit('update:seltype',this.childSeltype);
     
    },
  },
};
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
@import "~@/assets/styles/reset.scss";

.tab {
  color: white;
  background: $theme-color;
  height: 8vh;
  display: flex;
  justify-content: center;
  align-items: flex-end;

  .tab-btn {
    color: white;
    width: 30vw;
    height: 10vw;
    line-height: 10vw;
    font-size: 18px;
  }
  .tabBtnEd::after {
    content: "";
    display: block;
    width: 100%;
    background: #534f3e;
    height: 1px;
  }
}
</style>