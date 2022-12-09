<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-center
      .col-lg-7
        p En este recurso educativo sobre presentación de productos turísticos se describirán temáticas relacionadas con las actividades turísticas, itinerarios y circuitos turísticos. Adicionalmente, se precisan aspectos sobre la sostenibilidad turística, a partir de criterios de aplicación en servicios, buenas prácticas ambientales y programas de gestión ambiental. Por otra parte, el recurso presenta las normas aplicables a la actividad turística desde la Ley general de Turismo y las normas técnicas de las agencias de viajes. Igualmente, se detalla información sobre indicadores de gestión turística, aspectos relacionados con las tarifas de viaje, clases y soporte. Con la revisión de este recurso el aprendiz aprenderá a identificar con claridad los recursos necesarios para los prestadores de servicios, y la legislación colombiana que rige a este sector y sus proveedores. 
        b En el siguiente video conocerá, de forma general, la temática que estudiará a lo largo del componente formativo. ¡Muchos éxitos en este proceso de aprendizaje!
      .col-lg-5.mt-3
        figure
          img(src='@/assets/curso/temas/introduccion/img1.svg', alt='')

    .row.my-5(data-aos="fade-zoom")
      figure
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)





</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
