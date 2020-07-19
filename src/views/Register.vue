<template>
  <div class="text-center">
      <Register />
    <router-view> </router-view>
  </div>
</template>

<script>
import Register from "@/components/Register.vue";
export default {
  components: {
    Register
  },
};
</script>

<style></style>
