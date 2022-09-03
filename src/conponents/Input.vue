<template>
  <div>
    <label :for="props.name" class="block text-sm text-gray-700">{{
      props.title
    }}</label>
    <div class="mt-1 relative rounded-md shadow-sm">
      <input
        v-if="props.type === 'text'"
        type="text"
        :name="props.name"
        :id="props.name"
        class="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-3 pr-3 pt-1 pb-1 sm:text-sm border-gray-300 rounded-md"
        :placeholder="props.placeholder"
        autocomplete="off"
      />
      <input
        v-if="props.type === 'password'"
        type="password"
        :name="props.name"
        :id="props.name"
        class="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-3 pr-3 pt-1 pb-1 sm:text-sm border-gray-300 rounded-md"
        :placeholder="props.placeholder"
        autocomplete="off"
      />
      <input
        v-if="props.type === 'email'"
        type="email"
        :name="props.name"
        :id="props.name"
        class="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-3 pr-3 pt-1 pb-1 sm:text-sm border-gray-300 rounded-md"
        :placeholder="props.placeholder"
        autocomplete="off"
      />
    </div>
  </div>
</template>

<script setup>
  import { ref } from "vue";

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
