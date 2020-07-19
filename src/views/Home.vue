<template>
  <div>
    <div class="home">
      <BannerHome />
    </div>
    <v-container fluid>
      <HomeSteps />
    </v-container>
  </div>
</template>

<script>
import BannerHome from "@/components/BannerHome.vue";
import HomeSteps from "@/components/HomeSteps.vue";
export default {
  components: {
    BannerHome,
    HomeSteps,
  },
};
</script>

<style>
.home {
  background-color: #8634eb;
}
</style>
