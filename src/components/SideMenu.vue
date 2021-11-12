<template>
<ul ref="sidenav" id="slide-out" class="sidenav">
    <li><div class="user-view">
      <div class="background">
        <img class="responsive-img" src="@/assets/background.jpg">
      </div>
      <a href="#user"><img class="circle" src="@/assets/logo.png"></a>
      <a href="#name"><span class="white-text name">John Doe</span></a>
      <a href="#email"><span class="white-text email">jdandturk@gmail.com</span></a>
    </div></li>
    <li><a href="#!"><i class="material-icons">settings</i>Account Settings</a></li>
    <li><a href="#!">Itineraries</a></li>
    <li><div class="divider"></div></li>
    <li><a class="subheader">Friends</a></li>
    <li><a class="waves-effect" href="#!">Share</a></li>
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

onMounted(() => {
  M.Sidenav.init(sidenav.value, { edge: 'right' });
});
</script>

<style lang="scss">
</style>
