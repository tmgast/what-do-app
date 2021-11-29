<template>
  <a
    class="btn-floating waves-effect waves-light"
    :class="props.enabled ?' deep-purple':'red lighten-2' "
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
</script>

<style>

</style>
