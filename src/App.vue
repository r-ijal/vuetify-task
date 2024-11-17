<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer">
      <v-list-item title="Rijal Fadhila" class="my-3" prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg">
        <template #subtitle>
          email.user@email.com
        </template>
      </v-list-item>
      <v-divider></v-divider>
      <v-list density="compact" nav>
        <template v-for="item in items">
          <v-list-item
            :prepend-icon="item.icon"
            :title="item.title"
            :value="item.title.toLowerCase()"
            :to="item.to"
          ></v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
        color="teal-darken-4"
        image="https://picsum.photos/1920/1080?random"
      >
        <template v-slot:image>
          <v-img
            gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"
          ></v-img>
        </template>
        <template v-slot:prepend>
          <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        </template>

        <v-app-bar-title>Fosan Task <br> <small class="text-disabled">made with <a href="http://vuetifyjs.com" target="_blank" rel="noopener noreferrer" style="text-decoration: none;">Vuetify</a></small></v-app-bar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-heart</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
    <AppFooter />
  </v-app>
</template>

<script setup>
import { reactive, ref } from "vue";
import AppFooter from "./components/AppFooter.vue";

const drawer = ref(null);
const items = reactive([
  { title: "Task", icon: "mdi-format-list-checks", to: "/" },
  { title: "About", icon: "mdi-help-box", to: "/about" },
  { title: "Counter", icon: "mdi-calculator", to: "/counter" },
]);
</script>

<script>
export default {
  data: () => ({ drawer: null }),
};
</script>
