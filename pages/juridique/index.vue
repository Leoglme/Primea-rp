<template>
  <main style="max-width: 100vw; overflow-y: hidden">
    <section id="juridique" class="first-section">
      <h1 class="title">{{ juridique.title }}</h1>
      <div class="links-wrapper">
        <a class="link-button btn-outlined w100" v-for="(link, index) in juridique.links" :href="link.url" :key="index">
          {{link.text}}
        </a>
      </div>
    </section>
  </main>
</template>

<script lang="ts" src="./index.ts" />

<style lang="scss" scoped>
#juridique, .links-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
#juridique {
  gap: var(--grid-gap-static-md);
  margin-top: var(--grid-gap-static-md);
  max-width: 900px;
}

.links-wrapper {
  max-width: 800px;
  gap: var(--grid-gap-static-md);
}
</style>
