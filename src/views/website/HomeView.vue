<template>
    <main>
        <the-banner />

        <section id="store">
            <img src="@/assets/logo.png" alt="Logo" class="logo">
            <h2>As melhores bicicletas motorizadas da região de SP</h2>
            <p>Descubra a <b>liberdade</b> de pilotar pelas ruas de São Paulo de uma forma completamente nova com o <b>
                    conforto </b>
                das
                <b> bicicletas motorizadas da Paraíso das Bikes. </b> Trabalhamos com peças de qualidade e oferecemos a
                melhor
                opcão
                de custo-benefício para nossos clientes. Entre em contato e faça um orçamento.
            </p>
            <a href="https://wa.me/5511972645352?text=Olá, vim do site e quero saber mais sobre bicicletas motorizadas"
                target="_blank" class="button wpp-button">
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                        <path
                            d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                    </svg>
                    Conheça o Paraíso das Bikes
                </button>
            </a>

            <!-- <Splide :options="{
                rewind: true,
                type: 'loop',
                perPage: 3,
                gap: 50,
                pagination: false,
                breakpoints: {
                    768: {
                        perPage: 1
                    }
                }
            }" aria-label="My Favorite Images" id="gallery-image">
                <SplideSlide>
                    <div class="image-gallery" id="gallery-image-1"></div>
                </SplideSlide>
                <SplideSlide>
                    <div class="image-gallery" id="gallery-image-2"></div>
                </SplideSlide>
                <SplideSlide>
                    <div class="image-gallery" id="gallery-image-3"></div>
                </SplideSlide>
            </Splide> -->

        </section>

        <section id="advantages">
            <div class="box">
                <div class="row">
                    <div class="col">
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                            <path
                                d="M78.6 5C69.1-2.4 55.6-1.5 47 7L7 47c-8.5 8.5-9.4 22-2.1 31.6l80 104c4.5 5.9 11.6 9.4 19 9.4h54.1l109 109c-14.7 29-10 65.4 14.3 89.6l112 112c12.5 12.5 32.8 12.5 45.3 0l64-64c12.5-12.5 12.5-32.8 0-45.3l-112-112c-24.2-24.2-60.6-29-89.6-14.3l-109-109V104c0-7.5-3.5-14.5-9.4-19L78.6 5zM19.9 396.1C7.2 408.8 0 426.1 0 444.1C0 481.6 30.4 512 67.9 512c18 0 35.3-7.2 48-19.9L233.7 374.3c-7.8-20.9-9-43.6-3.6-65.1l-61.7-61.7L19.9 396.1zM512 144c0-10.5-1.1-20.7-3.2-30.5c-2.4-11.2-16.1-14.1-24.2-6l-63.9 63.9c-3 3-7.1 4.7-11.3 4.7H352c-8.8 0-16-7.2-16-16V102.6c0-4.2 1.7-8.3 4.7-11.3l63.9-63.9c8.1-8.1 5.2-21.8-6-24.2C388.7 1.1 378.5 0 368 0C288.5 0 224 64.5 224 144l0 .8 85.3 85.3c36-9.1 75.8 .5 104 28.7L429 274.5c49-23 83-72.8 83-130.5zM56 432a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" />
                        </svg>
                        <h2>Construção impecável</h2>
                        <p>Somos especialistas, todas nossas bicicletas tem construção de alto padrão, com peças de
                            altissima qualidade e feitas pensadas em você.</p>
                    </div>
                    <div class="col">
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
                            <path
                                d="M112 112c0 35.3-28.7 64-64 64V336c35.3 0 64 28.7 64 64H464c0-35.3 28.7-64 64-64V176c-35.3 0-64-28.7-64-64H112zM0 128C0 92.7 28.7 64 64 64H512c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM176 256a112 112 0 1 1 224 0 112 112 0 1 1 -224 0zm80-48c0 8.8 7.2 16 16 16v64h-8c-8.8 0-16 7.2-16 16s7.2 16 16 16h24 24c8.8 0 16-7.2 16-16s-7.2-16-16-16h-8V208c0-8.8-7.2-16-16-16H272c-8.8 0-16 7.2-16 16z" />
                        </svg>
                        <h2>Preços Justos</h2>
                        <p>Todas nossas bicicletas são criadas pensadas no melhor custo benefício para nossos clientes,
                            oferecemos preço acessível por uma bicicleta de alto padrão.</p>
                    </div>
                    <div class="col">
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                            <path
                                d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm177.6 62.1C192.8 334.5 218.8 352 256 352s63.2-17.5 78.4-33.9c9-9.7 24.2-10.4 33.9-1.4s10.4 24.2 1.4 33.9c-22 23.8-60 49.4-113.6 49.4s-91.7-25.5-113.6-49.4c-9-9.7-8.4-24.9 1.4-33.9s24.9-8.4 33.9 1.4zm40-89.3l0 0 0 0-.2-.2c-.2-.2-.4-.5-.7-.9c-.6-.8-1.6-2-2.8-3.4c-2.5-2.8-6-6.6-10.2-10.3c-8.8-7.8-18.8-14-27.7-14s-18.9 6.2-27.7 14c-4.2 3.7-7.7 7.5-10.2 10.3c-1.2 1.4-2.2 2.6-2.8 3.4c-.3 .4-.6 .7-.7 .9l-.2 .2 0 0 0 0 0 0c-2.1 2.8-5.7 3.9-8.9 2.8s-5.5-4.1-5.5-7.6c0-17.9 6.7-35.6 16.6-48.8c9.8-13 23.9-23.2 39.4-23.2s29.6 10.2 39.4 23.2c9.9 13.2 16.6 30.9 16.6 48.8c0 3.4-2.2 6.5-5.5 7.6s-6.9 0-8.9-2.8l0 0 0 0zm160 0l0 0-.2-.2c-.2-.2-.4-.5-.7-.9c-.6-.8-1.6-2-2.8-3.4c-2.5-2.8-6-6.6-10.2-10.3c-8.8-7.8-18.8-14-27.7-14s-18.9 6.2-27.7 14c-4.2 3.7-7.7 7.5-10.2 10.3c-1.2 1.4-2.2 2.6-2.8 3.4c-.3 .4-.6 .7-.7 .9l-.2 .2 0 0 0 0 0 0c-2.1 2.8-5.7 3.9-8.9 2.8s-5.5-4.1-5.5-7.6c0-17.9 6.7-35.6 16.6-48.8c9.8-13 23.9-23.2 39.4-23.2s29.6 10.2 39.4 23.2c9.9 13.2 16.6 30.9 16.6 48.8c0 3.4-2.2 6.5-5.5 7.6s-6.9 0-8.9-2.8l0 0 0 0 0 0z" />
                        </svg>
                        <h2>Suporte</h2>
                        <p>Diferente de outros vendedores, também damos total suporte e oferecemos manutenção completa para
                            as bicicletas de nossos clientes.</p>
                    </div>
                </div>
                <a href="https://wa.me/5511972645352?text=Olá, vim do site e quero saber mais sobre bicicletas motorizadas"
                    target="_blank" class="button __invert wpp-button">

                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                            <path
                                d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                        </svg>
                        Entre em contato
                    </button>
                </a>
            </div>
        </section>

        <section id="construction">
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                <path
                    d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z" />
            </svg>
            <h2>Construção</h2>
            <p>Todas nossas bicicletas são feitas com o padrão de qualidade da imagem, também aceitamos personalizações
                podendo deixar ela mais reforçada ou com menos recursos e mais barata</p>
            <img src="@/assets/img/bicicleta.png" alt="Bicicleta">
            <div class="price">
                <h3>Tudo isso por apenas</h3>
                <h4>R$ 2.399,00</h4>
                <p>Aceitamos pagamentos via <b>PIX</b>, <b>dinheiro a vista</b> e também <br> todos os <b>cartões</b> de
                    crédito
                    e débito
                    e <b>parcelamos</b> em até <b>12x</b>.</p>
            </div>
            <a href="https://wa.me/5511972645352?text=Olá, vim do site e quero saber mais sobre bicicletas motorizadas"
                target="_blank" class="button wpp-button">
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                        <path
                            d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                    </svg>
                    Comprar agora
                </button>
            </a>
        </section>

        <section id="testimonials">
            <h2>Depoímentos</h2>
            <h3>De clientes que compraram conosco e aprovam nosso trabalho</h3>
            <Splide :options="{
                rewind: true,
                type: 'loop',
                perPage: 3,
                gap: 50,
                pagination: false,
                breakpoints: {
                    768: {
                        perPage: 1
                    }
                }
            }" aria-label="My Favorite Images">
                <SplideSlide>
                    <div class="item">
                        <img src="@/assets/img/clientes/paulo.png" alt="Foto da cliente Fabinho Junior">
                        <h4>Fabio Mendes da Silva</h4>
                        <p>Bicicletas são excelentes, o preço é justo, e o atendimento é muito atencioso muito feliz em
                            comprar com paraiso das bikes
                        </p>
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div class="item">
                        <img src="@/assets/img/clientes/tamara.png" alt="Foto da cliente Tamara">
                        <h4>Tamara Chaves</h4>
                        <p>Dono muito atencioso , negociei tudo com ele através do WhatsApp uma bicicleta para meu filho . E
                            ele
                            prontamente entregou tudo certinho no prazo e no horário combinado.Ficou linda a bicicleta do
                            meu
                            filho ele vai amar. Vamos dar de presente. Muito obrigada paraíso das Bikes.</p>
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div class="item">
                        <img src="@/assets/img/clientes/rita.jpg" alt="Foto da cliente Rita">
                        <h4>Rita Marques</h4>
                        <p>Excelente atendimento, preço justo, honestidade e responsabilidade com o cliente! Jerson sempre
                            me
                            atendeu em todas as dúvidas na hora de escolher a melhor bike!
                            Super recomendo a todos!</p>
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div class="item">
                        <img src="@/assets/img/clientes/Ravena.png" alt="Foto da cliente Ravena">
                        <h4>Ravena Gonçalves</h4>
                        <p>Gente M E L H O O R oficina da região para compras venda trocas e concertos de bicicleta comuns e
                            motorizadas. Super indico galera.</p>
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div class="item">
                        <img src="@/assets/img/clientes/thiago.png" alt="Foto do cliente Thiago">
                        <h4>Thiago Ramos</h4>
                        <p>Melhores bikes e bikes motorizadas a região!</p>
                    </div>
                </SplideSlide>
            </Splide>
        </section>

        <section id="localization">
            <div class="box">
                <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
                    <path
                        d="M408 120c0 54.6-73.1 151.9-105.2 192c-7.7 9.6-22 9.6-29.6 0C241.1 271.9 168 174.6 168 120C168 53.7 221.7 0 288 0s120 53.7 120 120zm8 80.4c3.5-6.9 6.7-13.8 9.6-20.6c.5-1.2 1-2.5 1.5-3.7l116-46.4C558.9 123.4 576 135 576 152V422.8c0 9.8-6 18.6-15.1 22.3L416 503V200.4zM137.6 138.3c2.4 14.1 7.2 28.3 12.8 41.5c2.9 6.8 6.1 13.7 9.6 20.6V451.8L32.9 502.7C17.1 509 0 497.4 0 480.4V209.6c0-9.8 6-18.6 15.1-22.3l122.6-49zM327.8 332c13.9-17.4 35.7-45.7 56.2-77V504.3L192 449.4V255c20.5 31.3 42.3 59.6 56.2 77c20.5 25.6 59.1 25.6 79.6 0zM288 152a40 40 0 1 0 0-80 40 40 0 1 0 0 80z" />
                </svg>
                <h2>Onde estamos localizados</h2>
                <div id="map">
                    <iframe width="100%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"
                        id="gmap_canvas"
                        src="https://maps.google.com/maps?width=520&amp;height=600&amp;hl=en&amp;q=RuaSantaMargaridaVilaParaisoGuarulhosParaisoDasBikes&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>

                </div>
                <a href="https://wa.me/5511972645352?text=Olá, vim do site e quero saber mais sobre bicicletas motorizadas"
                    target="_blank" class="button __invert wpp-button">
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                            <path
                                d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                        </svg>
                        Entre em contato
                    </button>
                </a>
            </div>
        </section>

        <float-button />
    </main>
</template>

  
<script setup lang="ts">
import TheBanner from "../../components/website/TheBanner.vue";
import TheMiniBanner from "../../components/website/TheMiniBanner.vue";
import FloatButton from "../../components/website/_shared/FloatButton.vue";
import { Splide, SplideSlide } from '@splidejs/vue-splide';

</script>
  
<script lang="ts">
</script>
  