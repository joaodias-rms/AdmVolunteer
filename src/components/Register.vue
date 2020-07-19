.<template>
  <div>
    <div class="col-sm-12">
      <v-card
        class="col-sm-6 mx-auto"
        color="transparent"
        flat
        outlined
        max-width="600px"
      >
        <div class="mb-3 text-left col-sm-12">
          <h2>
            Informações da instituição
          </h2>
          <h5 class="grey--text">
            Cadastre as informações da instituição para disponibilizar seus
            projetos
          </h5>
        </div>

        <div class="">
          <div class="">
            <h4 class="text-left">Dados da Ong</h4>
            <v-row>
              <v-col sm="6">
                <div class="">
                  <v-text-field
                    hide-details
                    dense
                    x-large
                    label="ONG"
                    color="#8634eb"
                    outlined
                    name="ONG"
                  ></v-text-field>
                </div>
              </v-col>
              <v-col sm="6">
                <div class="">
                  <v-text-field
                    hide-details
                    x-large
                    dense
                    label="CNPJ"
                    placeholder="00.000.000/0000-00"
                    color="#8634eb"
                    outlined
                    name="CNPJ"
                  ></v-text-field>
                </div>
              </v-col>
            </v-row>

            <div class="">
              <v-text-field
                hide-details
                dense
                label="Telefone"
                color="#8634eb"
                placeholder="(xx) 9 9999-9999"
                outlined
                name="Telefone"
              ></v-text-field>
            </div>
            <div class="mb-3">
              <h4 class="mt-5 text-left">Endereço da instituição</h4>
            </div>
            <div class="">
              <v-text-field
                dense
                hide-details
                label="CEP"
                color="#8634eb"
                placeholder="00000-000"
                outlined
                name="CEP"
              ></v-text-field>
            </div>
            <v-row>
              <v-col sm="6">
                <div class="">
                  <v-text-field
                    dense
                    hide-details
                    label="Cidade"
                    color="#8634eb"
                    outlined
                    name="Cidade"
                  ></v-text-field>
                </div>
              </v-col>
              <v-col sm="6">
                <div class="">
                  <v-text-field
                    dense
                    hide-details
                    label="Estado"
                    color="#8634eb"
                    outlined
                    name="Estado"
                  ></v-text-field></div
              ></v-col>
            </v-row>
            <div class="">
              <v-text-field
                dense
                label="Endereço"
                color="#8634eb"
                outlined
                hide-details
                class="mb-2"
                name="Endereço"
              ></v-text-field>
            </div>
            <div class="">
              <v-text-field
                dense
                label="Bairro"
                color="#8634eb"
                outlined
                class="mb-3"
                hide-details
                name="Bairro"
              ></v-text-field>
            </div>

            <div class="mb-2">
              <v-btn block dark dense medium color="#8634eb">Avançar</v-btn>
            </div>
          </div>
        </div>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
