<script setup lang="ts">
import ParentComponent from "./ParentComponent.vue";
import ChildComponent from "./ChildComponent.vue";
</script>

<template>
  <ParentComponent :component="ChildComponent" />
</template>
