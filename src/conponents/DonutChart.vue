<template>
  <div id="arcPie-contaier"></div>
</template>

<script setup>
  import { onMounted, ref, watchEffect } from "vue";
  import * as d3 from "d3";

  const props = defineProps({
    type: {
      type: String,
      require: true,
      default: "text",
    },
    name: {
      type: String,
      require: true,
      default: "text",
    },
    title: {
      type: String,
      default: null,
    },
    placeholder: {
      type: String,
      default: "請輸入...",
    },
  });

  const count = ref(0);
</script>

<style scoped></style>
