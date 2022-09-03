<template>
  <div class="flex mt-5 justify-center">
    <div class="mt-5 md:mt-0 md:col-span-2">
      <form action="#" method="POST">
        <div class="py-3 text-xl font-medium text-center sm:px-6">會員註冊</div>
        <div class="shadow overflow-hidden sm:rounded-md">
          <div class="px-4 py-5 bg-white  sm:p-6">
            <!-- input -->
            <div class="grid grid-cols-1 grid-rows-4 gap-6">
              <Input
                type="email"
                name="account"
                title="信箱"
                placeholder="請輸入信箱"
                autocomplete="on"
              />
              <Input
                type="password"
                name="password"
                title="密碼"
                :placeholder="
                  pageType === 'signUp'
                    ? '請輸入6~12個半形英數字'
                    : '請輸入密碼'
                "
                autocomplete="on"
              />
              <Input
                v-if="pageType === 'signUp'"
                type="password"
                name="checkedPassword"
                title="確認密碼"
                placeholder="請再次輸入密碼"
                autocomplete="on"
              />
              <button
                type="submit"
                class="w-full justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-yellow-500 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                註冊
              </button>
            </div>
            <div class="py-5">
              <div class="border-t border-gray-200"></div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
  import { ref } from "vue";
  import Input from "@/conponents/Input.vue";
  const pageType = ref("signUp");
</script>
<style scoped>
  hr {
    height: 100%;
    width: 0.5vw;
    border-width: 0;
    color: rgb(61, 61, 61);
    background-color: #000;
  }
</style>
