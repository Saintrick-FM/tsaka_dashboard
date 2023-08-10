<template>
  <q-layout view="lHh Lpr lFf">
    <q-header
      class="bg-white flex align-center"
      style="color: black; height: 70px; display: flex"
    >
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
        <!-- <q-toolbar-title> Quasar App </q-toolbar-title> -->
        <div class="search-bloc">
          <q-input
            v-model="search_input"
            borderless
            width="100%"
            label-color="black"
            style="border-radius: 10px; padding: 0 15px 10px 15px"
            height="100%"
            color="black"
            placeholder="Recherche..."
            :stack-label="false"
          >
            <template #prepend>
              <q-icon class="pl-md text-red" name="search" />
            </template>
          </q-input>
        </div>
        <q-item style="margin: 0 20px 0 auto; cursor: pointer">
          <q-item-section avatar>
            <q-avatar>
              <img :src="profileImage" />
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label>Francy </q-item-label>
            <q-item-label caption lines="1">Malonga</q-item-label>
          </q-item-section>
          <Icon
            style="margin: 18px 0 0 15px; width: 20px; height: 20px"
            name="mdi:chevron-down"
          />
        </q-item>

        <!-- <div>Quasar v{{ $q.version }}</div> -->
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" :width="250" show-if-above>
      <q-list>
        <q-item-label header style="margin: 4px 0 20px 0">
          <q-btn class="bg-black" style="color: white; font-weight: bold"
            >TSAKA</q-btn
          ><span
            style="
              margin-left: 5px;
              color: black;
              font-weight: 500;
              font-size: 1.2em;
              position: absolute;
              top: 29.3px;
            "
            >Tutorat</span
          >
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
          class="link_container"
        />
      </q-list>
    </q-drawer>

    <q-page-container class="page_container">
      <slot />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { EssentialLinkProps } from "components/EssentialLink.vue";
import profileImage from "@/assets/images/profile_img.png";

const search_input = ref("");
const essentialLinks: EssentialLinkProps[] = [
  {
    title: "Accueil",
    // caption: "quasar.dev",
    icon: "ion:home",
    active: false,
    // link: "https://quasar.dev",
  },
  {
    title: "Mes classes",
    // caption: "github.com/quasarframework",
    icon: "ion:book-sharp",
    active: true,
    // link: "https://github.com/quasarframework",
  },
  {
    title: "Planning",
    // caption: "chat.quasar.dev",
    icon: "ion:calendar-sharp",
    active: false,
    // link: "https://chat.quasar.dev",
  },
  {
    title: "Profile",
    // caption: "forum.quasar.dev",
    icon: "mdi:account-multiple",
    active: false,
    // link: "https://forum.quasar.dev",
  },
  {
    title: "Evenement",
    // caption: "@quasarframework",
    icon: "bi:bell-fill",
    active: false,
    // link: "https://twitter.quasar.dev",
  },
  {
    title: "Compte",
    // caption: "@quasarframework",
    icon: "ic:baseline-apps",
    active: false,
    // link: "https://twitter.quasar.dev",
  },
];

const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>
<style scoped>
.link_container {
  padding: 0 10px;
}

.page_container {
  background-color: var(--page_bg);
}
.search-bloc {
  display: flex;
  width: 40.23%;
  height: 45px;
  background: var(--page_bg);
  /* box-shadow */
  border-radius: 15px;
  margin: 0 0 0 45px;
  align-items: center;
  padding-top: 9px;
}
.photo_container {
  display: flex;
  justify-content: flex-end;
  color: red;
  align-self: flex-end;
  margin-left: auto;
}
</style>
