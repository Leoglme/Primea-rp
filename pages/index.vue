<template>
  <main style="max-width: 100vw; overflow-y: hidden">
    <HomeCarousel/>
    <CharacterSection/>
    <Captures/>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
import Captures from "~/components/Captures/index.vue";
import HomeCarousel from "~/components/Carousel/HomeCarousel/index.vue";
import CharacterSection from "~/components/CharacterSection/index.vue";

export default Vue.extend({
  name: 'IndexPage',
  components: {HomeCarousel, Captures, CharacterSection}
})
</script>
