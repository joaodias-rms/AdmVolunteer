<template>
  <div class="col-sm-12">
    <b><span>Selecione a logo da sua ONG</span></b>
    <v-image-input
      :uploadIcon="'mdi-upload'"
      v-model="imageData"
      :image-quality="0.85"
      clearable
      image-format="jpeg"
    />
  </div>
</template>

<script>
import VImageInput from "vuetify-image-input";
export default {
  components: {
    [VImageInput.name]: VImageInput,
  },
};
</script>

<style></style>
