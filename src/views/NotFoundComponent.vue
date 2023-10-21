<template>
  <section id="notFound">
      <img src="../assets/logo.png" alt="Logo Paraíso das Bikes">
      Oops, a página foi encontrada, ela pode ter sido removida ou pode nunca ter existido.
      <a href="/">
        <button>Voltar para Home</button>
      </a>
  </section>
</template>
<script setup lang="ts">
</script>

<style>
  section#notFound {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    height: 100vh;
    justify-content: center;
  }
  section#notFound button {
    background-color: #0898FFFF;
    border: none;
    color: #fff;
    border-radius: 4px;
    padding: 10px 20px;
    cursor: pointer;
  }

</style>