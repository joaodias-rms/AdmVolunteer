<template>
  <div class="text-center">
    <v-card class="col-sm-6 mx-auto" color="transparent" flat outlined max-width="400px">
      <Icon width="250" class="pa-5 mb-5" height="55px" colorIcon="#8634eb" />
      <div class="mb-5 col-sm-12">
        <h2>Portal do Parceiro</h2>
        <h4 class="grey--text">Gerencie seus projetos e ajude o mundo</h4>
      </div>

      <div class>
        <div class="col-sm-12">
          <div class>
            <v-text-field dense label="Email" color="#8634eb" outlined name="Email"></v-text-field>
          </div>
          <div class>
            <v-text-field
              dense
              color="#8634eb"
              v-model="password"
              :type="show1 ? 'text' : 'password'"
              outlined
              name="Senha"
              label="Senha"
            ></v-text-field>
          </div>
          <div>
            <v-btn text small to="/Register" >Cadastre-se</v-btn>
          </div>
          <div class="mb-2">
            <v-btn to="/ProfileHome" depressed block medium color="#8634eb">
              <span class="white--text">Entrar</span>
            </v-btn>
          </div>
        </div>
      </div>
    </v-card>
  </div>
</template>

<script>
import Icon from "@/components/Icon.vue";
export default {
  components: {
    Icon
  }
};
</script>

<style>
</style>