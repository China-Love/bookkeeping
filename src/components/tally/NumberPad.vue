<template>
      <div class="numberpad">
        <div class="acount">100</div>
        <ul class="number clearFix">
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>+</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
          <li>-</li>
          <li>7</li>
          <li>8</li>
          <li>9</li>
          <li>完成</li>
          <li>.</li>
          <li>0</li>
          <li><SvgIcon  name="delete"></SvgIcon></li>
        </ul>
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
//生命周期 - 创建完成
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

},
//方法集合
methods: {

}
}
</script>
<style lang='scss' scoped>
@import "~@/assets/styles/reset.scss";
@import "~@/assets/styles/helper.scss";
//@import url(); 引入公共css类
.numberpad {
 
  $w: 25vw;
  background: #f0f4f7;
  .acount {
    height: 6vh;
    font-size: 20px;
    font-weight: bold;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    padding: 10px;
  }
  .number {
    > li {
      float: left;
      font-size: 20px;
      width: $w;
      height: $w * 0.5;
      text-align: center;
      line-height: $w * 0.5;
      background: #f0f4f7;
      border-top: 1px solid #dfe3e6;
      border-right: 1px solid #dfe3e6;
    }
    > li:nth-child(12) {
      background: $theme-color;
      float: right;
      height: $w;
      line-height: $w;
      color: white;
    }
  }
}
</style>