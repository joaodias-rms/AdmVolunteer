<template>
  <v-card
    max-width="600"
    class="mx-auto mt-9"
    color="transparent"
    flat
    outlined
  >
    <div class="mb-3 text-left col-sm-12">
      <h2>
        Informações do responsável
      </h2>
      <h5 class="grey--text">
        Cadastre os dados do responsável legal pela ONG
      </h5>
    </div>
    <div class="">
      <v-text-field
        v-mask="['###.###.###-##']"
        x-large
        dense
        label="CPF"
        placeholder="000.000.000-00"
        color="#8634eb"
        outlined
        name="CPF"
      >
      </v-text-field>
      <b><span>Nome do responsável legal</span></b>
      <v-text-field
        dense
        class="mb-2"
        color="#8634eb"
        x-large
        hide-details
        outlined
        placeholder="Nome completo"
      >
      </v-text-field>

      <v-text-field
        dense
        class="mb-2"
        hide-details
        label="Email"
        color="#8634eb"
        outlined
        name="Email"
      >
      </v-text-field>

      <v-text-field
        label="Senha"
        dense
        color="#8634eb"
        v-model="password"
        :type="show ? 'text' : 'password'"
        :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
        @click:append="show = !show"
        outlined
        name="Senha"
      ></v-text-field>
      <v-text-field
        label="Confirmar senha"
        dense
        color="#8634eb"
        v-model="passwordconfirm"
        :type="show2 ? 'text' : 'password'"
        :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
        @click:append="show2 = !show2"
        outlined
        name="Senha"
      ></v-text-field>
      <v-row>
        <v-col>
          <v-btn depressed to="/Register" outlined medium color="#8634eb"
            >Voltar</v-btn
          >
        </v-col>
        <v-col>
          <v-btn depressed to="/OngDetails" block medium class="white--text" color="#8634eb"
            >Avançar</v-btn
          >
        </v-col>
      </v-row>
    </div>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      show2: false,
      password: null,
      passwordconfirm: null,
    };
  },
};
</script>

<style></style>
