<template>
  <ReglementView name="criminel" :parentTabName="parentTabName"/>
</template>

<script lang="ts">
import ReglementView from "~/components/ReglementView/index.vue";
import {updateHead} from "~/data/update-head";
const title = "Règlement criminel • Sigma RP"
const description = "Voici le règlement criminel qu'aborde le règlement de notre server."
const route = "/reglement/illegal/criminel/"

export default {
  name: "criminel",
  head: updateHead(title, description, route),
  components: {ReglementView},
  props: {
    parentTabName: {type: String, default: null}
  }
}
</script>
