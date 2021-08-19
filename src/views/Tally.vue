<!--  -->
<template>
  <TabSlot>
    <div class="tallyContainner">
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
      <div class="tags">
        <ul>
          <li>衣</li>
          <li>食</li>
          <li>住</li>
          <li>行</li>
          <li>吃</li>
          <li>喝</li>
          <li>玩</li>
          <li>乐</li>

          <li>+</li>
        </ul>
      </div>
      <div class="notes">
        <SvgIcon class="noteIcon" name="notes"></SvgIcon>
        <label for="">备注:</label>
        <input type="text" placeholder="请输入备注" />
      </div>
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
    </div>
  </TabSlot>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      seltype: "-",
    };
  },
  computed: {},
  watch: {},
  //方法集合
  methods: {
    changeType(type) {
      this.seltype = type;
    },
  },
};
</script>
<style lang='scss' scoped>
@import "~@/assets/styles/reset.scss";
@import "~@/assets/styles/helper.scss";
.tallyContainner{
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content:flex-end;
}
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

.tags {
  flex-grow: 1;
  overflow: auto;
  padding: 10px;
  ul {
    display: flex;
    flex-wrap: wrap;
   
    li {
      width: 15vw;
      height: 15vw;
      margin-top: 10px;
      margin-left: 10px;
      border-radius: 7.5vw;
      background: #f2f2f2;
      line-height: 15vw;
    }
  }
}
.notes {
  border-top: 1px solid #dfe3e6;
  border-bottom: 1px solid #dfe3e6;
  display: flex;
  font-size: 16px;
  align-items: center;
  
  input{
    outline-style: none;
    height: 6vh;
    border: none;
    flex-grow: 1;
    padding: 0 10px;
  }
  .noteIcon{
   
    font-size: 16px;
    margin: 0 5px 0 10px;
  }
}

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