<script setup>
const columns = ref([
  {
    name: "index",
    required: true,
    label: "#",
    align: "center",
    field: "index",
    // format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: "course",
    align: "left",
    label: "Cours",
    field: "course",
    sortable: true,
  },
  {
    name: "teacher_name",
    align: "left",
    label: "Enseignant",
    field: "teacher_name",
    sortable: true,
  },
  {
    name: "days",
    align: "center",
    label: "Jours",
    field: "days",
    sortable: true,
  },
]);

const rows = ref([
  {
    index: "01",
    course: "Anglais",
    teacher_name: null,
    days: 1,
    badge_bg_color: "#F0F9FF",
    badge_border_color: "#0095FF",
  },
  {
    index: "02",
    course: "Mathématique",
    teacher_name: null,
    days: 2,
    badge_bg_color: "#F0FDF4",
    badge_border_color: "#00E58F",
  },
  {
    index: "03",
    course: "Chimie",
    teacher_name: null,
    days: 2,
    badge_bg_color: "#FBF1FF",
    badge_border_color: "#884DFF",
  },

  {
    index: "04",
    course: "Français",
    teacher_name: "",
    days: 2,
    badge_bg_color: "#FEF6E6",
    badge_border_color: "#FF8900",
  },
]);
</script>
<template>
  <q-page class="page">
    <!-- <p class="text-h6 q-pt-md">Plugin Showcase</p>
    <q-list>
      <q-item v-for="(button, idx) in buttons" :key="idx">
        <q-btn color="primary" v-bind="button" />
      </q-item>
      <q-item>
        <q-toggle
          :model-value="dark.isActive"
          checked-icon="dark_mode"
          unchecked-icon="light_mode"
          size="3rem"
          @update:model-value="(val) => dark.set(val)"
        />
      </q-item>
    </q-list>
    <p class="text-h6 q-pt-md">Directive Showcase</p>
    <q-list bordered separator style="max-width: 318px">
      <q-item v-ripple clickable>
        <q-item-section>Ripple</q-item-section>
      </q-item>
    </q-list> -->
    <q-btn class="bg-white add_course"> Ajouter un cours </q-btn>
    <q-table
      table-header-style="color:grey; font-size:1.5em;"
      table-style="padding:0 45px"
      title="Liste des cours"
      title-class="q-ml-xl"
      :rows="rows"
      :columns="columns"
      hide-bottom
      row-key="index"
      style="
        box-shadow: 0px 4px 20px 0px #eeeeee80, 0px -4px 20px #eeeeee80 !important;
      "
    >
      <template #body-cell-days="props">
        <q-td :props="props">
          <q-badge
            rounded
            :style="`background:${props.row.badge_bg_color};color:${props.row.badge_border_color};border:1px solid ${props.row.badge_border_color}`"
            class="days_badge"
            :label="props.value"
          />
        </q-td>
      </template>
    </q-table>
  </q-page>
</template>
<style scoped>
.page {
  padding: 46px;
}
.add_course {
  display: flex;
  justify-content: flex-end;
  color: red;
  align-self: flex-end;
  margin-left: auto;
  margin-bottom: 35px;
  padding: 5px 35px;
  text-transform: lowercase;
}
.days_badge {
  padding: 5px 20px;
}
.table-title {
  margin-left: 100px !important;
}
</style>
