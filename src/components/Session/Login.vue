<template>
  <v-card
    class="col-sm-6 mx-auto"
    color="transparent"
    flat
    outlined
    max-width="400px"
  >
    <Icon width="250" class="pa-5 mb-2" height="55px" colorIcon="#8634eb" />
    <div class="mb-3 col-sm-12">
      <h2>Portal do Parceiro</h2>
      <h4 class="grey--text">Gerencie seus projetos e ajude o mundo</h4>
    </div>

    <div class>
      <div class="col-sm-12">
        <div class>
          <v-text-field
            dense
            label="Email"
            color="#8634eb"
            outlined
            name="Email"
          ></v-text-field>
        </div>
        <div class>
          <v-text-field
            dense
            color="#8634eb"
            v-model="password"
            :type="show ? 'text' : 'password'"
            :append-icon="show ? 'mdi-eye': 'mdi-eye-off'"
            @click:append="show = !show"
            outlined
            name="Senha"
            label="Senha"
          ></v-text-field>
        </div>
        <div class="my-2" >
          <b
            ><router-link style="text-decoration:none;"
              >Esqueci minha senha</router-link
            ></b
          >
        </div>
        <div class="mb-2">
          <v-btn to="/ProfileHome" depressed block medium color="#8634eb">
            <span class="white--text">Entrar</span>
          </v-btn>
        </div>
        <div>
          <h5 class="grey--text">Ainda não possui uma conta?</h5>
          <b
            ><router-link style="text-decoration:none;" to="/Register"
              >Cadastre-se</router-link
            ></b
          >
        </div>
      </div>
    </div>
  </v-card>
</template>

<script>
import Icon from "@/components/Icon.vue";
export default {
  components: {
    Icon,
  },
  data() {
    return {
     show: false
    }
  },
};
</script>

<style></style>
