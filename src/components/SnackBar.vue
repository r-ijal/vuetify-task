<template>
  <v-snackbar
    :model-value="showSnackBar"
    :color="snackBarTask === 'add' ? 'success' : 'error'"
    variant="outlined"
  >
    {{ snackBarTitle }}
    <template v-slot:actions>
      <v-btn color="grey-darken-2" variant="text" @click="emit('closeSnackBar')" icon="mdi-close">
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script setup>
const props = defineProps(["snackBarTitle", "showSnackBar", "snackBarTask"]);
const emit = defineEmits(['closeSnackBar'])
</script>
