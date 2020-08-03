<template>
  <div>
    <v-navigation-drawer height="600px" permanent expand-on-hover>
      <v-list>
        <v-list-item class="px-2">
          <v-list-item-avatar>
            <v-img height="50px" width="50px" src="../assets/ong1.png"></v-img>
          </v-list-item-avatar>
        </v-list-item>
        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title class="title">Ong Saramandaia</v-list-item-title>
            <v-list-item-subtitle>atendimento@saram.ong.br</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list nav dense>
        <v-list-item link>
          <v-list-icon>
            <v-icon>mdi-account-star</v-icon>
          </v-list-icon>
          <v-list-item-title>Meus projetos</v-list-item-title>
        </v-list-item>
        <v-list-item link>
          <v-list-icon>
            <v-icon>mdi-email</v-icon>
          </v-list-icon>
          <v-list-item-title>Contatos</v-list-item-title>
        </v-list-item>
        <v-list-item link>
          <v-list-icon>
            <v-icon>mdi-cog</v-icon>
          </v-list-icon>
          <v-list-item-title>Configurações</v-list-item-title>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item link>
          <v-list-icon>
            <v-icon>mdi-logout</v-icon>
          </v-list-icon>
          <v-list-item-title>Sair</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>