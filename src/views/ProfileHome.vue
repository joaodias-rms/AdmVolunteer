<template>
  <div>
    <v-row>
      <v-col>
        <SideMenu />
      </v-col>
      <v-col>
        <router-view>
        </router-view>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import SideMenu from "@/components/SideMenu.vue";

export default {
  components: {
    SideMenu,
  }
};
</script>

<style>
</style>