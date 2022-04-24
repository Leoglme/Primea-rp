<template>
  <ReglementView :name="defaultTab"/>
</template>

<script lang="ts">
import ReglementView from "~/components/ReglementView/index.vue";

export default {
  name: "index",
  props: {
    defaultTab: {type: String, default: ""}
  },
  components: {ReglementView}
}
</script>
