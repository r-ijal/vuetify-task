<template>
  <v-dialog :model-value="showDialog" width="auto">
    <v-card
      text="Are you sure you want to delete this task?"
      title="Delete task?"
    >
      <template v-slot:actions>
        <v-btn text="Cancel" @click="emit('emitsDialog', false)"></v-btn>
        <v-btn color="danger" text="Ok" @click="emit('emitsDialog', true)"></v-btn>
      </template>
    </v-card>
  </v-dialog>
</template>

<script setup>
let props = defineProps(['useIcon', 'showDialog'])
let emit = defineEmits(['emitsDialog'])
</script>
