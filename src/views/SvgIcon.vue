<template>
  <svg class="icon" @click="routerLinkClick">
    <use :xlink:href="'#' + name" />
  </svg>
</template>

<script lang="ts">
let importAll = (requireContext: __WebpackModuleApi.RequireContext) =>
  requireContext.keys().forEach(requireContext);
try {
  importAll(require.context("../assets/icons", true, /\.svg$/));
} catch (error) {
  console.log(error);
}

export default {
  name: "SvgIcon",
  props: {
    name: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      flag: false,
    };
  },
  methods: {
    routerLinkClick() {
      console.log(this);
    },
  },
};
</script>

<style scoped>
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
