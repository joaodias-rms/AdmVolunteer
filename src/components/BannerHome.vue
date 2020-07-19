<template>
  <div>
    <v-row no-guters justify="center" align="center">
      <v-col sm="5">
        <HomeImage />
      </v-col>
      <v-col sm="6">
        <h1 class="text-home white--text mb-3">
          Torne-se membro e disponibilize seus projetos
        </h1>

        <h4 class="mt-5 white--text">
          Conecte pessoas do mundo todo com seus projetos
        </h4>
        <v-btn class="mt-5 pa-4" x-large color="white">Seja membro</v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import HomeImage from "@/components/HomeImage.vue";
export default {
  components: {
    HomeImage,
  },
};
</script>

<style>
.text-home {
  font-size: 40px;
}
</style>
