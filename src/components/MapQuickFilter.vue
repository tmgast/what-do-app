<template>
  <a
    class="btn-floating waves-effect waves-light"
    :class="props.enabled ?' purple':'red' "
    >
      <i class="material-icons">{{ props.icon }}</i>
  </a>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  icon: String,
  enabled: Boolean,
});

console.log(props);
</script>

<style>

</style>
