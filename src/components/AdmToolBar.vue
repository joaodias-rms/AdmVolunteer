<template>
  <v-app-bar color="#8634eb" class="white--text" right flat max-height="55px">
    <v-btn
      to="/"
      color="transparent"
      width="120"
      text
      class="justify-center"
      depressed
      small
    >
      <Icon Width="120" Height="25px" colorIcon="white"
    /></v-btn>
    <v-spacer></v-spacer>
    <v-btn class="mr-3" to="/Login" text color="white">Já sou parceiro</v-btn>
    <v-btn class="mr-3" text color="white">Ajuda</v-btn>
    <v-btn class="mr-3" text color="white">Medidas COVID-19</v-btn>
    <v-btn class="mr-3" to="/Register" outlined color="white">Faça parte</v-btn>
  </v-app-bar>
</template>

<script>
import Icon from "@/components/Icon.vue";
export default {
  components: {
    Icon,
  }
};
</script>

<style>
</style>
