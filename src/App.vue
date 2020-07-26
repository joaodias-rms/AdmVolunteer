<template>
  <v-app id="app">
    <AdmToolBar />
    <v-main>
      <router-view></router-view>
    </v-main>
    <v-footer width="100%" dark padless>
      <Footer />
    </v-footer>
  </v-app>
</template>

<script>
import AdmToolBar from "@/components/AdmToolBar.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "App",
  components: {
    AdmToolBar,
    Footer
  }
};
</script>

<style>
#app {
  font-family: Montserrat !important;
  background-color: #f7f8fa;
}
.v-btn {
  text-transform: none !important;
}
::-webkit-scrollbar {
  display: none;
}
</style>