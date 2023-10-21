<template>
    <main>
      <section id="about">
        <div class="about-text">
            <div class="row">
                <div class="col">
                    <img src="@/assets/img/about.jpg" alt="">
                </div>
                <div class="col">
                    <h2>Quem Somos</h2>
                    <p>A Paraíso das Bikes é uma bicicletaria que existe desde 2021 e oferece uma variedade de bicicletas usadas, novas e motorizadas para todos os gostos e necessidades. Nossa missão é proporcionar aos nossos clientes uma experiência de mobilidade, lazer e saúde com qualidade, segurança e preço justo.</p><p>Em nossa loja, você encontra bicicletas de diferentes marcas, modelos, cores e tamanhos, além de acessórios, peças e serviços de manutenção. Temos também bicicletas motorizadas, que são uma ótima opção para quem busca mais praticidade, economia e sustentabilidade no dia a dia.</p><p>Venha nos visitar e conhecer nosso catálogo de produtos. Estamos localizados na Rua Santa Margarida, número 180, no bairro Vila Paraíso em Guarulhos. Nossa equipe está pronta para atendê-lo e ajudá-lo a escolher a bicicleta ideal para você. A Paraíso das Bikes é a sua melhor escolha em bicicletaria!</p>
                </div>
            </div>
        </div>

        <div id="mvv">
            <div class="row">
                <div class="col">
                    <font-awesome-icon :icon="['fas', 'bullseye']" />
                    <h2>Missão</h2>
                    <p>Promover mobilidade, lazer e saúde.</p>
                </div>
                <div class="col">
                    <font-awesome-icon :icon="['fas', 'eye']" />
                    <h2>Visão</h2>
                    <p>Ser referência em bicicletaria na região.</p>
                </div>
                <div class="col">
                    <font-awesome-icon :icon="['fas', 'star']" />
                    <h2>Valores</h2>
                    <p>Qualidade, segurança, preço justo, sustentabilidade e satisfação do cliente.</p>
                </div>
            </div>
        </div>
        
      </section>
      <float-button />
    </main>
  </template>
  
<script setup lang="ts">
import FloatButton from "../../components/website/_shared/FloatButton.vue";
</script>