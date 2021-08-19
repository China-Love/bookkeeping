<template>
 <div class="tab">
        <div
          class="tab-btn"
          :class="{ tabBtnEd: seltype === '-' }"
          @click="changeType('-')"
        >
          支出
        </div>
        <div
          class="tab-btn"
          :class="{ tabBtnEd: seltype === '+' }"
          @click="changeType('+')"
        >
          收入
        </div>
      </div>
</template>

<script>

export default {
components: {},
data() {
  return {
  
  }
},
computed: {},
watch: {},
created() {

},
methods: {

}
}
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
@import "~@/assets/styles/reset.scss";
@import "~@/assets/styles/helper.scss";
.tab {
  color: white;
  background: $theme-color;
  height: 8vh;
  display: flex;
  justify-content: center;
  align-items: flex-end;

  .tab-btn {
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