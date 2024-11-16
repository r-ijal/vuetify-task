<template>
  <v-container class="pa-0">
    <v-alert
      v-model="emptyTaskTitleAlert"
      border="start"
      close-label="Close Alert"
      title="Name required"
      variant="tonal"
      color="warning"
      closable
    >
      Please enter a name for the task
    </v-alert>

    <v-text-field
      v-model.trim="newTaskTitle"
      append-inner-icon="mdi-plus"
      label="Add Task"
      variant="outlined"
      class="pa-3"
      hide-details
      clearable
      @click:append-inner="addTask"
      @keyup.enter="addTask"
    ></v-text-field>

    <div v-if="taskItems.length">
      <TaskList
        :task-items="taskItems"
        @delete-task="deleteTask"
        @done-task="doneTask"
      />
    </div>

    <div v-else class="py-6 d-flex align-center justify-center">
      <v-empty-state icon="$success">
        <template v-slot:media>
          <v-icon color="surface-variant" class="my-3"></v-icon>
        </template>

        <template v-slot:title>
          <div class="text-h6 font-italic text-grey-darken-2">You're all caught up.</div>
        </template>
      </v-empty-state>
    </div>

    <SnackBar
      :snackBarTitle="snackBarTitle"
      :showSnackBar="showSnackBar"
      :snack-bar-task="snackBarTask"
      @close-snack-bar="showSnackBar = false"
    />
  </v-container>
</template>

<script setup>
import SnackBar from "@/components/SnackBar.vue";
import TaskList from "@/components/TaskList.vue";
import { reactive, ref } from "vue";

const newTaskTitle = ref("");
const taskItems = reactive([
  // {
  //   id: 1,
  //   title: "Learn Coding",
  //   done: false,
  // },
  // {
  //   id: 2,
  //   title: "Learn Vue",
  //   done: false,
  // },
  // {
  //   id: 3,
  //   title: "Finished Vuetify",
  //   done: false,
  // },
]);
// const taskSelection = reactive([]);
const doneTask = (id) => {
  // console.log(id);
  let task = taskItems.filter((t) => t.id === id)[0];
  task.done = !task.done;
};

const deleteTask = (id) => {
  const index = taskItems.findIndex((t) => t.id === id);
  if (index !== -1) {
    taskItems.splice(index, 1); // Mutates the array directly
    callSnackBar("del");
  }
};

const addTask = () => {
  console.log(newTaskTitle.value)
  if (newTaskTitle.value === '') {
    emptyTaskTitleAlert.value = true
    return
  }
  let newTask = {
    id: Date.now(),
    title: newTaskTitle.value,
    done: false,
  };

  taskItems.push(newTask);
  newTaskTitle.value = "";
  callSnackBar("add");
};

const emptyTaskTitleAlert = ref(false)

const showSnackBar = ref(false);
const snackBarTitle = ref("");
const snackBarTask = ref("");
const callSnackBar = (p) => {
  console.log(p, "--callSnackBar");

  if (p === "add") {
    snackBarTitle.value = "Task Added!";
    snackBarTask.value = p;
  }
  if (p === "del") {
    snackBarTitle.value = "Task Deleted!";
    snackBarTask.value = p;
  }
  if (showSnackBar.value) {
    showSnackBar.value = false;
  }
  showSnackBar.value = true;
  setTimeout(() => {
    showSnackBar.value = false;
  }, 5000);
};
</script>
