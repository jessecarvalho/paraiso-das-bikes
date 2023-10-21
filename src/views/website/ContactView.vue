<template>
    <main>
      <section id="contact">
        <div class="row">
            <div class="col">
                <div id="map">
                    <iframe width="100%" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=Rua%20Santa%20Margarida%20Guarulhos+(Para%C3%ADso%20das%20Bikes)&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                </div>
            </div>
            <div class="col">
                <h2>Endereço</h2>
                <p>Rua Santa Margarida, 180, Vila paraíso, Guarulhos, São Paulo, BR</p>
                <h2>Fale Conosco</h2>
                <p>Telefone: (11) 2611-7286</p>
                <p>Whatsapp: (11) 95297-3759</p>
            </div>
        </div>

      </section>
      <float-button />
    </main>
  </template>
  

<script lang="ts">
import { defineComponent, ref } from "vue";
import FloatButton from "../../components/website/_shared/FloatButton.vue";

export default defineComponent({
    components: {
        FloatButton,
    },
    data() {
        return {
            lastUrlItem: window.location.href.split("/")[5],
            name: ref(""),
            email: ref(""),
            subject: ref(""),
            message: ref(""),
        };
    },

    methods: {
        async save() {
            //
        }
    },
});
</script>
