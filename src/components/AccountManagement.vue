<template>
  <v-container>
    <v-row align="center">
      <v-col>
        <v-row align="center" style="gap: 10px; margin: 0">
          <h1>Учётная запись</h1>
          <v-btn class="text-left">
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

    <v-row style="opacity: 0.5">
      <v-col cols="3">Метки</v-col>
      <v-col cols="3">Тип записи</v-col>
      <v-col cols="3">Логин</v-col>
      <v-col cols="2">Пароль</v-col>
      <v-col cols="1"></v-col>
    </v-row>
  </v-container>
</template>


<script setup lang="ts">
import {defineComponent} from "vue";

defineComponent({
  name: "AccountManagement",
})
</script>