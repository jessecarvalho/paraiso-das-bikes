<template>
  <router-view />
  <router-view name="footer" />
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>