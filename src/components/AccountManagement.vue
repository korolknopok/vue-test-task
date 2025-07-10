<script setup lang="ts">
import {computed} from 'vue';
import {useAccountStore} from '@/store/accountStore';

const store = useAccountStore();
const accounts = computed(() => store.accounts);

const addAccount = () => {
  store.addAccount();
};

const removeAccount = (index: number) => {
  store.removeAccount(index);
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
                    v-model="account.label"
                    label="Метки"
                    placeholder="например, admin;user"
                    maxlength="50"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="3">
                <v-select
                    v-model="account.type"
                    :items="['LDAP', 'Локальная']"
                    label="Тип записи"
                    @update:modelValue="store.updateType(index, $event)"
                ></v-select>
              </v-col>
              <v-col cols="12" sm="3">
                <v-text-field
                    v-model="account.login"
                    label="Логин"
                    :rules="[() => !!account.login || 'Логин обязателен']"
                    maxlength="100"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="2">
                <v-text-field
                    v-if="account.type === 'Локальная'"
                    v-model="account.password"
                    label="Пароль"
                    type="password"
                    :rules="[() => !!account.password || 'Пароль обязателен']"
                    maxlength="100"
                ></v-text-field>
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