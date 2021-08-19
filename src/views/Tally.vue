<!--  -->
<template>
  <TabSlot>
    <div class="tallyContainner">
      <Segment></Segment>
      <Labels></Labels>
      <Notes></Notes>
      <NumberPad></NumberPad>
    </div>
  </TabSlot>
</template>

<script>
import NumberPad from "@/components/tally/NumberPad.vue";
import Labels from "@/components/tally/Labels.vue";
import Notes from '@/components/tally/Notes.vue'
import Segment from '@/components/tally/Segment.vue'

export default {
  components: { NumberPad,Labels,Notes,Segment },
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

.tallyContainner {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}



</style>