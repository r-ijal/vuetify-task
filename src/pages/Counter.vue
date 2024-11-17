<template>
  <v-container id="counter" class="counter bg-surface-variant text-center">
    <v-row no-gutters justify="center">
      <v-col cols="12" sm="4">
          <div class="font-weight-bold text-h4">
            Counter Page
          </div>
          <v-img class="mb-3" height="50" src="@/assets/pinia_logo.svg" />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <div class="text-h1">{{ storeCounter.count }}</div>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="2">
        <v-btn icon="mdi-minus" @click="storeCounter.decrement"> </v-btn>
      </v-col>
      <v-col cols="2">
        <v-btn icon="mdi-plus" @click="storeCounter.increment"> </v-btn>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-divider :thickness="4" class="border-opacity-25"></v-divider>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col cols="6">
        <div class="text-end">The counter is:</div>
      </v-col>
      <v-col cols="5">
        <div class="font-weight-bold text-start">
          {{ storeCounter.oddOrEven }}
        </div>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-divider :thickness="4" class="border-opacity-25"></v-divider>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-text-field
          label="Label"
          variant="outlined"
          v-model="storeCounter.count"
          type="number"
        ></v-text-field>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { useCounterStore } from "@/stores/counter";

const storeCounter = useCounterStore();
</script>
<style scoped></style>
