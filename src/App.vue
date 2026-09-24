<script setup lang="ts">
import ParentComponent from "./ParentComponent.vue";
import ChildComponent from "./ChildComponent.vue";
import Issue1476 from "./Issue1476.vue";
import { reactive } from "vue";
</script>

<template>
  <fieldset>
    <legend>#2949</legend>
    <ParentComponent :component="ChildComponent" />
  </fieldset>

  <fieldset>
    <legend>#1746</legend>
    <fieldset>
      <legend>raw (broken)</legend>
      <Issue1476
        :available-fields="[{ name: 'Animals' }, { name: 'Cities' }]"
      />
    </fieldset>
    <fieldset>
      <legend>reactive (functional)</legend>
      <Issue1476
        :available-fields="reactive([{ name: 'Animals' }, { name: 'Cities' }])"
      />
    </fieldset>
  </fieldset>
</template>
