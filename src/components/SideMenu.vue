<template>
<ul ref="sidenav" id="slide-out" class="sidenav">
    <li><div class="user-view">
      <div class="background">
        <img src="images/office.jpg">
      </div>
      <a href="#user"><img class="circle" src="@/assets/logo.png"></a>
      <a href="#name"><span class="white-text name">John Doe</span></a>
      <a href="#email"><span class="white-text email">jdandturk@gmail.com</span></a>
    </div></li>
    <li><a href="#!"><i class="material-icons">cloud</i>First Link With Icon</a></li>
    <li><a href="#!">Second Link</a></li>
    <li><div class="divider"></div></li>
    <li><a class="subheader">Subheader</a></li>
    <li><a class="waves-effect" href="#!">Third Link With Waves</a></li>
  </ul>
  <div ref="menu" class="fixed-action-btn menu" id="menu">
    <a href="#"
      data-target="slide-out"
      class="sidenav-trigger btn-floating btn-large wave-effects waves-light deep-purple lighten-2">
      <i class="material-icons">settings</i>
    </a>
  </div>
</template>

<script setup>
import M from 'materialize-css';
import { onMounted, ref } from 'vue';

const sidenav = ref(null);
let nav = null;

onMounted(() => {
  M.Sidenav.init(sidenav.value, { edge: 'right' });
  nav = M.Sidenav.getInstance(sidenav.value);
  nav.open();
});
</script>

<style lang="scss">
</style>
