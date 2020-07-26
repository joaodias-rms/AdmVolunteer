<template>
  <v-row>
      <v-img  height="600" width="60" src="../assets/ongs.jpg"></v-img>
    <v-col sm="6">
      <LoginScreen />
    </v-col>
  </v-row>
</template>

<script>
import LoginScreen from "@/components/LoginScreen.vue";
export default {
  components: {
    LoginScreen,
  }
};
</script>

<style>
</style>