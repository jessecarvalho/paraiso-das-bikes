<template>
  <main>
    <section id="single-product">
      <div id="single-product-main">
        <div class="row">
          <div class="col">
            <Splide :options="{ rewind: true }" aria-label="Imagens do produto">
              <SplideSlide>
                <img src="@/assets/img/produtos/bicicletas/01.jpeg" alt="Bicicleta 1">
              </SplideSlide>
              <SplideSlide>
                <img src="@/assets/img/produtos/bicicletas/01.jpeg" alt="Bicicleta 2">
              </SplideSlide>
            </Splide>
          </div>
          <div class="col">
            <div id="single-product-info">
              <h1>{{ data["name"] }}</h1>
              <p v-html="data['shortDescription']"></p>
              <span id="price" v-html="data['price']"></span>
              <a href="https://api.whatsapp.com/send?phone=5511952943759&text=Olá%20me%20interessei%20pela%20bicicleta" target="_blank">
                <button>Comprar</button>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div id="single-product-description">
        <h2>Descrição</h2>
        <p v-html="data['description']"></p>
      </div>
      
    </section>
    <float-button />
  </main>
</template>


<script lang="ts">
import "@splidejs/vue-splide/css";
import FloatButton from "../../components/website/_shared/FloatButton.vue";
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import { defineComponent } from "vue";

export default defineComponent({
    data() {
        return {
            data: {
                name: "Bicicleta 1",
                shortDescription: "Bicicleta 1",
                description: "Bicicleta 1",
                price: "R$ 400,00",
            },
        };
    },
    components: {
        Splide,
        SplideSlide,
        FloatButton,
    },

});
</script>
