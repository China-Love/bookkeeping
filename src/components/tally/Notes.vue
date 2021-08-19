<template>
    <div class="notes">
        <SvgIcon class="noteIcon" name="notes"></SvgIcon>
        <label for="">备注:</label>
        <input type="text" placeholder="请输入备注" />
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

.notes {
  border-top: 1px solid #dfe3e6;
  border-bottom: 1px solid #dfe3e6;
  display: flex;
  font-size: 16px;
  align-items: center;

  input {
    outline-style: none;
    height: 6vh;
    border: none;
    flex-grow: 1;
    padding: 0 10px;
  }
  .noteIcon {
    font-size: 16px;
    margin: 0 5px 0 10px;
  }
}
</style>