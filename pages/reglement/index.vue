<template>
  <section id="reglements" class="first-section">
    <h1 class="title">{{ reglement.name }}</h1>
    <span class="reglement-description" v-html="description"/>
    <div class="buttons">
      <nuxt-link aria-label="lien vers le règlement générales" :append="true" to="general">
        <button class="btn btn-sm">Règles générales <i class="el-icon-right bold"/></button>
      </nuxt-link>
      <nuxt-link aria-label="lien vers le règlement légal" :append="true" to="legal">
        <button class="btn btn-sm">Règles sur le légal <i class="el-icon-right bold"/></button>
      </nuxt-link>
      <nuxt-link aria-label="lien vers le règlement illégal" :append="true" to="illegal">
        <button class="btn btn-sm">Règles sur l'illégal <i class="el-icon-right bold"/></button>
      </nuxt-link>
    </div>
  </section>
</template>

<script lang="ts" src="./index.ts"/>

<style lang="scss" scoped src="./reglement.scss"/>
