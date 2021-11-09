<template>
  <a
  class="btn-floating waves-effect waves-light"
  :class="hasFilter(props.label)?' purple':'red' "
  @click="store.commit('toggleFilter', props.label)"
  >
      <i class="material-icons">{{ props.icon }}</i>
  </a>
</template>

<script setup>
import { defineProps } from 'vue';
import { useStore } from 'vuex';

const props = defineProps({
  label: String,
  icon: String,
});

const store = useStore();

function hasFilter(f) {
  if (store.state.filters.includes(f)
    || store.state.filters.length === 0) {
    return true;
  }
  return false;
}
</script>

<style>

</style>
