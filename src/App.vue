<template>
  <div class="min-h-full">
    <nav class="bg-gray-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <div class="flex items-center">
            <div>
              <div class="flex items-baseline space-x-4">
                <router-link
                  to="/"
                  class=" px-3 py-2 rounded-md text-sm font-medium"
                  :class="routeName==='Home'?navClass.current:navClass.normal"
             
                  >Home</router-link
                >
                <router-link
                  to="/tailwind"
                  class="px-3 py-2 rounded-md text-sm font-medium"
                  :class="routeName==='Tailwind'?navClass.current:navClass.normal"
                  >Tailwind</router-link
                >
                <router-link
                  to="/firebase"
                  class="px-3 py-2 rounded-md text-sm font-medium"
                  :class="routeName==='Firebase'?navClass.current:navClass.normal"
                  >Firebase</router-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script setup>
  import { ref, reactive, watch,computed } from "vue";
  import { useRoute } from "vue-router";
  import Home from "@/view/Home.vue";
  import Tailwind from "@/view/Tailwind.vue";
  import Firebase from "@/view/Firebase.vue";
  const route = useRoute();


// nav樣式
  const routeName = computed(()=> route.name);
  const navClass = reactive({
    current: { "bg-gray-900": true, "text-white": true },
    normal: {
      "text-gray-300": true,
      "hover:bg-gray-700": true,
      "hover:text-white": true,
    },
  });

  // watch(
  //   () => route.name,
  //   function (name) {
  //     routeName.value = name;
  //     console.log(
  //       routeName.value === "Home" ? navClass.current : navClass.normal
  //     );
  //   }
  // );
</script>

<style scoped></style>
