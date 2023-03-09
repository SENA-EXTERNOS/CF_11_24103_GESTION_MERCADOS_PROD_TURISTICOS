<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 8
      h1 Prestadores de servicios turísticos

    .row.justify-content-center.my-5
      .col-lg-5
        figure
          img(src='@/assets/curso/temas/tema8/img1.svg', alt='')      
      .col-lg-7.my-4
        p El concepto de prestador de servicio turístico agrupa muchos servicios que se brindan al turista en la actualidad, y que con el pasar del tiempo van adquiriendo un valor significativo en las experiencias de los visitantes. 
        p Hace algunos años se tenían en cuenta para los productos turísticos los prestadores de servicios básicos, quienes se encargaban de suplir las necesidades del turista. En la actualidad, las necesidades del turista han aumentado, y con ello las exigencias, convirtiendo al turismo en un sistema complejo en relación con los prestadores de servicios turísticos.

    h2.my-5 Clasificación

    .row.my-5
      .cajon.color-primario.p-4
        p La manera adecuada de clasificar a los prestadores de servicio relacionados con el turismo se basa en la identificación de las necesidades de cada turista, además de la identificación de los fines por los que se realiza el viaje. No solo se trata del cubrimiento de los servicios turísticos básicos, como lo son alimentación, alojamiento y transporte, también se trata de adecuar el servicio prestado en las diferentes actividades que se pretende realizar.

    .row.my-5
      figure
        img(src='@/assets/curso/temas/tema8/img2-.svg', alt='')     

    h2.my-5 Legislación colombiana actual

    .row.my-5
      p Teniendo en cuenta que el turismo es un sector estrictamente organizado, existen normativas que lo controlan, regulando en materia legal tanto a empresas formales como no formales dentro del territorio colombiano. El turismo se encuentra regulado por la Ley 2068 del 2020 y por otro conjunto de leyes que se encargan de los diferentes factores y aspectos turísticos. Ahora bien, para que las leyes puedan ser ejecutadas deben ser establecidas mediante decreto, el cual indica cómo deben aplicarse. Para el caso de los prestadores de servicios, existe el #[strong Decreto 1836 del 2021], el cual tiene como objeto:

    .row.justify-content-center.my-5
      TabsA.color-acento-botones
        .tarjeta.tarjeta--azul.p-5(titulo="Habilitar actividades")
          .row
            .col-lg-6
              p Habilitar las actividades de los prestadores de servicios turísticos.
            .col-lg-6
              figure
                img(src='@/assets/curso/temas/tema8/img3.svg', alt='')               

        .tarjeta.tarjeta--azul.p-5(titulo="Dar publicidad")
          .row
            .col-lg-6
              p Dar publicidad a los actos de inscripción, actualización, renovación, cancelación, suspensión o reactivación de la inscripción.
            .col-lg-6
              figure
                img(src='@/assets/curso/temas/tema8/img4.svg', alt='')               

        .tarjeta.tarjeta--azul.p-5(titulo="Sistema de información")
          .row
            .col-lg-6
              p Establecer un sistema de información sobre el sector turístico.
            .col-lg-6
              figure
                img(src='@/assets/curso/temas/tema8/img5.svg', alt='')               

    h2.my-5 Proveedores

    .row.my-5
      p La ley colombiana le exige a la mayoría de los prestadores de servicios turísticos que cumplan con estándares de calidad básicos, dependiendo de cómo se encuentren constituidos. Generalmente, los proveedores de servicios turísticos que deben cumplir con los más altos estándares de calidad son las agencias de viajes que se encuentran regidas por mayores exigencias.


    .row.justify-content-center.my-5
      .col-lg-5.mb-3
        .tarjeta.tarjeta-slide.arriba.tarjeta--rosa5(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-5
              h4 Proveedores legalmente constituidos
              p Los proveedores de las agencias de viajes deben cumplir las obligaciones planteadas desde el gremio, como por ejemplo, estar legalmente constituidos, contar con una razón social y un número de identificación tributaria (NIT).
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema8/img6.svg')})`}")

      .col-lg-5.mb-3
        .tarjeta.tarjeta-slide.arriba.tarjeta--rosa5(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-5
              h4 Información Actualizada
              p Los proveedores deben mantener actualizada la información de sus productos, así como sus tarifas y precios. También tienen la obligación de mantener soporte de la prueba de relación comercial, entre otras exigencias. 
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema8/img7.svg')})`}")

    .row.my-5
      .cajon.color-primario.p-4
        p Recuerde explorar los demás recursos que se encuentran disponibles en este componente formativo, como son la síntesis, la actividad didáctica, material complementario, entre otros.


</template>

<script>
export default {
  name: 'Tema8',
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
