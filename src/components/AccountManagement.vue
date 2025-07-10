<script setup lang="ts">
import { ref } from 'vue';

interface Account {
  labels: string;
  type: string;
  login: string;
  password: string | null;
}

const accounts = ref<Account[]>([
  {
    labels: '',
    type: 'Локальная',
    login: '',
    password: ''
  }
]);

const addAccount = () => {
  accounts.value.push({
    labels: '',
    type: 'Локальная',
    login: '',
    password: ''
  });
};

const removeAccount = (index: number) => {
  accounts.value.splice(index, 1);
};

</script>

<template>
  <v-container>
    <v-row align="center">
      <v-col>
        <v-row align="center" style="gap: 10px; margin: 0">
          <h1>Учётные записи</h1>
          <v-btn @click="addAccount" class="text-left">
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </v-row>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-alert color="#D3D3D3" align-item="center" dense>
          <template v-slot:prepend>
            <v-icon>mdi-help-circle</v-icon>
          </template>
          Для указания нескольких меток для одной пары логин/пароль используйте разделитель ;
        </v-alert>
      </v-col>
    </v-row>

    <v-row v-for="(account, index) in accounts" :key="index">
      <v-col cols="12">
        <v-card>
          <v-card-text>
            <v-row>
              <v-col cols="12" sm="3">
                <v-text-field
                    label="Метки"
                    placeholder="например, admin;user"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="3">
                <v-select
                    :items="['LDAP', 'Локальная']"
                    label="Тип записи"
                ></v-select>
              </v-col>
              <v-col cols="12" sm="3">
                <v-text-field label="Логин"></v-text-field>
              </v-col>
              <v-col cols="12" sm="2">
                <v-text-field label="Пароль" type="password"></v-text-field>
              </v-col>

              <v-col cols="12" sm="1" class="text-right">
                <v-btn icon @click="removeAccount(index)">
                  <v-icon>mdi-delete</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>


