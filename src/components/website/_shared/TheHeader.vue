<template>
    <link rel="stylesheet" href="/src/assets/main.css">
    <header>
        <div>
            <img src="@/assets/logo.png" alt="Paraíso das Bikes" id="logo">
        </div>
        <button @click="toggleNavMenu">
            <icon ><MenuOutline /></icon>
        </button>
        <nav>
            <button @click="toggleNavMenu" name="navbar">
                <icon><CloseOutline /></icon>
            </button>
            <ul>
                <div id="logo-mobile">
                    <img src="@/assets/logo.png" alt="Paraíso das Bikes" id="logo">
                </div>
                <a href="/">
                    <li>Home</li>
                </a>
<!--                <a href="/loja">-->
<!--                    <li>Loja</li>-->
<!--                </a>-->
                <a href="/quem-somos">
                    <li>Quem Somos</li>
                </a>
                <a href="/contato">
                    <li>Fale Conosco</li>
                </a>
            </ul>
        </nav>
    </header>
</template>

<script lang="ts">
import {
    MenuOutline as MenuOutline,
    CloseOutline as CloseOutline,
} from "@vicons/ionicons5";
import { Icon } from "@vicons/utils";

export default {
    components: {
        Icon,
        MenuOutline,
        CloseOutline,
    }, 
    
    methods: {
        toggleNavMenu () {
            const nav = document.querySelector("nav");

            console.log(nav);

            nav?.classList.toggle("active");
        }
    }
};
</script>
