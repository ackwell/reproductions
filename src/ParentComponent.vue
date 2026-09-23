<script setup lang="ts">
import { computed, isReactive, type Component } from "vue";

const { component } = defineProps<{
  component: Component;
}>();

const componentIsReactive = computed(() => isReactive(component));
</script>

<template>
  <div id="component-is-reactive">{{ componentIsReactive }}</div>
  <component :is="component" />
</template>
