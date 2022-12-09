<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 7
      h1 Recursos turísticos

    .row.my-5
      p Los recursos turísticos son la base de todos las actividades y servicios en la industria, y en conjunto, se convierten en atractivos. Estos recursos se clasifican en naturales y culturales: los recursos naturales se subdividen por sus aspectos geomorfológicos, biogeográficos y mixtos, mientras que los culturales incluyen los aspectos contemporáneos e históricos, y a su vez, los aspectos contemporáneos se subdividen en comerciales o no comerciales. 

    .row.justify-content-center.my-5
      .col-lg-10
        figure
          img(src='@/assets/curso/temas/tema7/img1.svg', alt='')




</template>

<script>
export default {
  name: 'Tema7',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
