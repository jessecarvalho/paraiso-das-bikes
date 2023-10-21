<template>
    <img :src="image" :alt="name">
    <span class="tag blue">{{ condition }}</span>
    <h3><span>R$</span> {{ price }}</h3>
    <h2>{{ name }}</h2>
    <p>{{ description }}</p>
    <a :href="link" target="_blank">
        <button>Ver Mais</button>
    </a>
</template>

<script>
export default {
    props: {
        price: {
            type: Number,
        },
        name: {
            type: String,
        },
        description: {
            type: String,
        },
        condition: {
            type: String,
        },
        image: {
            type: String,
        },
        link: {
            type: String,
        },
    }
};
</script>
