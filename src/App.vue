
<template>
  <div class="container">
    <nav>
      <router-link to="/about">About</router-link>
      <router-link to="/quotes">Random Quotes</router-link>
      <router-link to="/contact">Contact</router-link>
    </nav>

    <router-view />

    <GoBack />
  </div>
</template>

<script setup>
import GoBack from './components/GoBack.vue'
</script>

<style scoped>
nav {
  display: flex;
  justify-content: center;
  gap: 24px;
  padding: 20px;
  flex-wrap: wrap;
}
</style>
