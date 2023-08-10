<script setup lang="ts">
export interface EssentialLinkProps {
  title: string;
  // caption?: string;
  link?: string;
  icon?: string;
  active?: boolean;
}
withDefaults(defineProps<EssentialLinkProps>(), {
  title: "",
  link: "#",
  icon: "",
  active: false,
});
</script>

<template>
  <q-item
    clickable
    tag="div"
    :class="active ? 'link-bloc active' : 'link-bloc'"
  >
    <q-item-section v-if="icon" avatar>
      <!-- <q-icon :name="icon" /> -->
      <Icon :name="icon" width="20" height="20" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
      <!-- <q-item-label caption>
        {{ caption }}
      </q-item-label> -->
    </q-item-section>
  </q-item>
</template>
<style scoped>
.link-bloc {
  margin: 0 15px;
  border-radius: 10px;
}
.link-bloc:hover,
.link-bloc.active,
.link-bloc:focus {
  background-color: #ed5b5b;
  color: white;
}
</style>
