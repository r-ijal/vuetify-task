<template>
  <v-dialog :model-value="showDatePicker" width="auto">
    <v-card>
      <v-date-picker elevation="24" hide-header show-adjacent-months :model-value="selectedDate" first-day-of-week="1" @update:model-value="cek"></v-date-picker>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { ref } from 'vue';

let props = defineProps(["showDatePicker"]);
const selectedDate = ref()

const cek = (val) => {
    console.log(val);
    selectedDate.value = val
}


</script>
<style scoped></style>
