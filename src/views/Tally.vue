<template>
  <TabSlot>
      <Segment :seltype="seltype"></Segment>
      <router-view> </router-view>
      <Notes></Notes>
      <NumberPad></NumberPad>
  </TabSlot>
</template>

<script>
import NumberPad from "@/components/tally/NumberPad.vue";
import Labels from "@/components/tally/Labels.vue";
import Notes from "@/components/tally/Notes.vue";
import Segment from "@/components/tally/Segment.vue";

export default {
  components: { NumberPad, Labels, Notes, Segment },
  data() {
    return {
      seltype: "-",
    };
  },
  computed: {},
  watch: {
    seltype(val1, val2) {
      console.log("-----", val1, val2);
    },
  },
  //方法集合
  methods: {},
};
</script>
<style lang='scss' scoped>

</style>
