<template>
  <v-list lines="two" select-strategy="leaf" class="py-0">
    <v-list-item
      v-for="item in taskItems"
      :key="item.id"
      @click="emit('doneTask', item.id)"
      :class="{ 'bg-grey-lighten-1': item.done }"
    >
      <template v-slot:prepend>
        <v-checkbox-btn :model-value="item.done">
          <!-- <template v-slot:label>
            <div :class="{ 'text-decoration-line-through': item.done }">
              {{ item.title }}
            </div>
          </template> -->
        </v-checkbox-btn>
      </template>
      <template v-slot:append>
        <!-- <p v-if="showDueDate" class="text-medium-emphasis">{{ dueDate }}</p> -->
        <div v-if="item.dueDate" class="text-medium-emphasis">
          <v-icon size="small" icon="mdi-calendar-clock-outline"></v-icon>
          <small class="ms-2">{{ item.dueDate }}</small>
        </div>
        <v-btn
          :id="'menu-activator' + item.id"
          icon="mdi-dots-vertical"
          color="grey-darken-2"
          variant="text"
        >
        </v-btn>
        <v-menu :activator="'#menu-activator' + item.id">
          <v-list>
            <v-list-item>
              <v-icon icon="mdi-pencil"></v-icon>
            </v-list-item>
          </v-list>
          <v-list>
            <v-list-item>
              <v-icon
                icon="mdi-calendar"
                @click="openDatePickerDialog"
              ></v-icon>
            </v-list-item>
          </v-list>
          <v-list>
            <v-list-item>
              <v-icon
                icon="mdi-delete"
                @click="openConfirmDialog(item.id)"
              ></v-icon>
            </v-list-item>
          </v-list>
          <v-list>
            <v-list-item>
              <v-icon
                icon="mdi-sort"
                @click="sortButtonShow = !sortButtonShow"
              ></v-icon>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-btn
          v-show="sortButtonShow"
          icon="mdi-sort"
          variant="text"
          @click="sortButtonShow = !sortButtonShow"
        ></v-btn>
      </template>

      <template v-slot:default>
        <v-container>
          <v-row>
            <v-col>
              <div :class="{ 'text-decoration-line-through': item.done }">
                {{ item.title }}
              </div>
            </v-col>
            <v-col>
              <!-- <div class="ms-auto">
                <v-icon size="small" icon="mdi-calendar-clock-outline"></v-icon>
                <small class="ms-2">{{ dueDate }}</small>
              </div> -->
            </v-col>
          </v-row>
        </v-container>
      </template>
    </v-list-item>
  </v-list>

  <DatePickerDialog :show-date-picker="showDatePicker" />
  <ConfirmDialog :show-dialog="isDialog" @emits-dialog="confirmDelete" />
</template>

<script setup>
import { ref } from "vue";
import ConfirmDialog from "./ConfirmDialog.vue";
import DatePickerDialog from "./DatePickerDialog.vue";

let props = defineProps({
  taskItems: Array,
});
const emit = defineEmits(["deleteTask", "doneTask"]);

const sortButtonShow = ref(false);
const isDialog = ref(false);
const deletedId = ref();

const openConfirmDialog = (id) => {
  isDialog.value = true;
  deletedId.value = id;
};
const confirmDelete = (p) => {
  if (p) {
    emit("deleteTask", deletedId.value);
  }
  isDialog.value = false;
};

const showDatePicker = ref(false);
const openDatePickerDialog = () => {
  showDatePicker.value = true;
};

const showDueDate = ref(true);
const dueDate = ref("08-08-2024");
</script>
<style scoped></style>
