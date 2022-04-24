<template>
  <section id="reglements-illegal" class="first-section">
    <h1 class="title">{{ reglement.name }}</h1>
    <span class="reglement-description" v-html="description"/>
    <span v-show="!loaded">
      <SkeletonTabs/>
    </span>
    <el-tabs class="cap" v-model="currentTabs" v-show="loaded">
      <client-only v-for="(tab, index) in tabs" :key="index">
        <el-tab-pane  :lazy="true" :label="tab.name" :name="tab.to">
          <template #label>
            <NuxtLink :aria-label="`onglet règlement ${tab.name}`" class="center w100" :to="'/reglement/' + parentTabName + '/' + tab.to">
              {{tab.name}}
            </NuxtLink>
          </template>
          <NuxtChild :defaultTab="defaultTab" :parentTabName="parentTabName"/>
        </el-tab-pane>
      </client-only>
    </el-tabs>
  </section>
</template>

<script lang="ts" src="./index.ts"/>

<style lang="scss" scoped src="../reglement.scss"/>
