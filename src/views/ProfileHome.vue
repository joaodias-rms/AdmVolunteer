<template>
  <div>
    <v-row>
      <v-col>
        <SideMenu />
      </v-col>
      <v-col>
        <Projects />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import SideMenu from "@/components/SideMenu.vue";
import Projects from "@/components/Projects.vue";
export default {
  components: {
    SideMenu,
    Projects
  }
};
</script>

<style>
</style>