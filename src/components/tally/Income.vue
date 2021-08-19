<template>
  <div class="tags">
    <ul>
      <li>工资</li>
      <li>兼职</li>
      <li>+</li>
    </ul>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  created() {},
  methods: {},
};
</script>
<style lang='scss' scoped>
@import "~@/assets/styles/reset.scss";

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
</style>