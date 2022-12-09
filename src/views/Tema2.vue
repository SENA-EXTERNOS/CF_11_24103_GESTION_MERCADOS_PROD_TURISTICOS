<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Itinerarios

    .row.justify-content-center.my-5
      .col-lg-10
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img1.svg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Los itinerarios en el sector turístico son procesos y procedimientos de actividades secuenciales con un fin en específico; estos se encuentran ligados al cumplimiento de un cronograma de actividades planeadas para el turista. Un itinerario turístico tiene como objetivo principal describir todo lo que se realizará durante el viaje. Este debe ser realizado por planificadores o cualquier prestador turístico que tenga un cronograma de actividades planeadas para el visitante. Por lo general, están relacionados con los viajes, pero también se encuentran ligados a la actividad turística y el cubrimiento de los servicios prestados en la misma.

    separador

    #t_2_1    
    .titulo-segundo.color-acento-contenido(data-aos="fade-up-right")
      h2 2.1 Diseño

    .row.my-5
      p Para el diseño de itinerarios turísticos se debe tener en cuenta el lugar que se pretende visitar, al igual que definir el número de actividades que se pretende realizar. Existen varios tipos de itinerarios, como lo son los itinerarios de viaje, los de actividades y los turísticos. Estos últimos tienen la capacidad de abarcar los otros tipos de itinerarios existentes, ya que incluyen actividades y servicios que abarcan las necesidades del viajero. Para el diseño y desarrollo de itinerarios turísticos se deben seguir los siguientes pasos:

    .row.justify-content-center.my-5
      SlyderF(columnas="col-lg-6 col-xl-4")
        .tarjeta.tarjeta--verde.p-4
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema2/img2.svg' alt='AvatarTop')
          h4.text-center Lista de lugares a visitar
          p.text-center Realizar una lista de chequeo correspondiente a los lugares que se desee visitar.

        .tarjeta.tarjeta--amarilla.p-4
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema2/img3.svg' alt='AvatarTop')
          h4.text-center Ubicación geográfica
          p.text-center Ubicar geográficamente los atractivos y lugares que se quiere visitar.

        .tarjeta.tarjeta--verde.p-4
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema2/img4.svg' alt='AvatarTop')
          h4.text-center Fechas y horarios
          p.text-center Definir las fechas y horarios del viaje.

        .tarjeta.tarjeta--amarilla.p-4
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema2/img5.svg' alt='AvatarTop')
          h4.text-center Lista de chequeo
          p.text-center Identificar y realizar una lista de chequeo de los prestadores de servicios necesarios para el viaje.

        .tarjeta.tarjeta--verde.p-4
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema2/img6.svg' alt='AvatarTop')
          h4.text-center Rutas de actividades
          p.text-center Diseñar rutas de actividades, atractivos y prestadores de servicios turísticos que concuerden y se complementen.

        .tarjeta.tarjeta--amarilla.p-4
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema2/img7.svg' alt='AvatarTop')
          h4.text-center Orden cronológico
          p.text-center Diseñar plantilla didáctica donde se plasmen los días de viaje y los horarios de las actividades, al igual que la ubicación y el desarrollo en orden cronológico.

    separador

    #t_2_2  
    .titulo-segundo.color-acento-contenido(data-aos="fade-up-right")
      h2 2.2 Componentes  

    .row.my-5
      p Los elementos característicos con los que se desarrolla un itinerario se encuentran relacionados con su diseño, ya que no existe una plantilla específica porque todas varían dependiendo del autor. Por lo general, un itinerario contiene datos como los días de la estadía en los diferentes atractivos, los horarios establecidos para las actividades propuestas y una descripción de los lugares que se visitarán; algunos pueden contener imágenes relacionadas con los destinos. Suele ser necesario establecer franjas horarias en los itinerarios, con el propósito de garantizar la organización y el cumplimiento de lo planeado. 
      b.mt-3 A continuación se presenta un ejemplo de plantilla simple:

    .row.justify-content-center.my-5
      .col-lg-6
        figure
          img(src='@/assets/curso/temas/tema2/img8.svg', alt='')

    separador

    #t_2_3
    .titulo-segundo.color-acento-contenido(data-aos="fade-up-right")
      h2 2.3 Elaboración de circuito turístico

    .row.justify-content-center.my-5
      .col-lg-7
        .cajon.color-acento-contenido.p-4
          p Los itinerarios turísticos están conformados por elementos que también son utilizados en los circuitos turísticos. Los circuitos turísticos son rutas conformadas por actividades turísticas, destinos, días y franjas horarias, los cuales tienen la capacidad de abarcar todos los componentes utilizados para realizar itinerarios y conformarlos en una ruta específica. Las rutas turísticas son una herramienta necesaria para las organizaciones turísticas que, a diferencia de los itinerarios sencillos, presentan un mapa donde señalan y describen de manera detallada los puntos o lugares de interés.
      
      .col-lg-5.mb-3
        figure
          img(src='@/assets/curso/temas/tema2/img9.svg', alt='')        

    .row.my-5
      p A los circuitos turísticos, por lo general, se les da un enfoque temático con relación a los lugares de interés. Estos pueden ser de carácter gastronómico, en circuitos o ferias gastronómicas, al igual que pueden abordar aspectos culturales, naturales, recreativos, educativos e históricos. Para la elaboración de un circuito turístico se deben tener en cuenta los siguientes elementos:

    .row.justify-content-center.my-5
      .col-lg-8
        LineaTiempoD
          .row(numero="1" titulo="Destinos de interés").p-lg-4.p-2
            .col-md-5.mb-4.mb-md-0
              p Identificar los destinos de interés, como ciudades, pueblos y corregimientos.
          
            .col-md-7
              figure
                img(src='@/assets/curso/temas/tema2/img10.svg', alt='')  

          .row(numero="2" titulo="Atractivos y recursos").p-lg-4.p-2
            .col-md-5.mb-4.mb-md-0
              p Definir los atractivos y sitios de interés que se desee visitar durante el circuito, es decir, los atractivos o recursos que pueden tener los destinos.
          
            .col-md-7
              figure
                img(src='@/assets/curso/temas/tema2/img11.svg', alt='')  

          .row(numero="3" titulo="Componentes").p-lg-4.p-2
            .col-md-5.mb-4.mb-md-0
              p Realizar itinerarios con sus respectivos componentes.
          
            .col-md-7
              figure
                img(src='@/assets/curso/temas/tema2/img12.svg', alt='')  

          .row(numero="4" titulo="Mapa de destinos").p-lg-4.p-2
            .col-md-5.mb-4.mb-md-0
              p Ubicar en un mapa los destinos y lugares a visitar donde se realizarán las actividades previstas en el itinerario.
          
            .col-md-7
              figure
                img(src='@/assets/curso/temas/tema2/img13.svg', alt='')  

          .row(numero="5" titulo="Ruta turística").p-lg-4.p-2
            .col-md-5.mb-4.mb-md-0
              p Trazar la ruta turística en el mapa, donde se pueda ejecutar de manera cronológica la ruta planteada en el itinerario.
          
            .col-md-7
              figure
                img(src='@/assets/curso/temas/tema2/img14.svg', alt='')  

          .row(numero="6" titulo="Puntos de llegada").p-lg-4.p-2
            .col-md-5.mb-4.mb-md-0
              p Identificar los puntos de llegada y los prestadores de servicio que se tendrán en cuenta durante la ruta o el circuito turístico.
          
            .col-12.col-md-7
              figure
                img(src='@/assets/curso/temas/tema2/img15.svg', alt='')  

    separador

    #t_2_4
    .titulo-segundo.color-acento-contenido(data-aos="fade-up-right")
      h2 2.4 Plan de acción y contingencia

    .row.my-5
      .cajon.color-acento-botones.p-4
        .row.justify-content-center
          .col-5.col-lg-1.my-3
            figure
              img(src='@/assets/curso/temas/tema2/img16.svg', alt='')
          .col-lg-10
            p Los planes de acción y contingencia se relacionan mutuamente, ya que la contingencia hace referencia al conjunto de acciones que se llevan a cabo para resolver cualquier incidente o anomalía durante la actividad. Los planes de acción y contingencia le permiten al planificador turístico prever de manera efectiva cualquier imprevisto relacionado con el turista. Usualmente, estos planes se basan en procesos y procedimientos que se deben tener en cuenta en caso de que ocurra algo inesperado, su fin es evitar sucesos que puedan alterar el funcionamiento interno o externo de la organización y la actividad turística.             

    .row.justify-content-center.my-5
      .col-lg-4
        figure
          img(src='@/assets/curso/temas/tema2/img17.png', alt='')

      .col-lg-8
        p Los planes de contingencia actúan para permitir que funcione la operatividad de una actividad, itinerario o empresa turística; en estos se deben determinar las acciones a tomar en caso de un incidente, teniendo en cuenta las estrategias y metas de la actividad o de la empresa. Para la realización de un plan de acción y contingencia se deben tener en cuenta las siguientes fases:

        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
          .row(titulo="Evaluación")
            p En esta fase se debe determinar el desarrollo del plan de acción, es decir, que el plan de contingencia puede estar relacionado con una actividad turística, ruta, itinerario o producto, el cual deberá ser definido durante esta fase.
          
          .row(titulo="Planificación e identificación")
            p Una vez definido hacia dónde van enfocados los planes de acción y contingencia, se hace necesario la identificación de lo que se tiene que prever, buscando los posibles riesgos o incidentes que puedan ocurrir, además de las posibles soluciones que se les puedan dar. Se puede realizar un listado de riesgos y situaciones, dependiendo de su complejidad, gravedad y la probabilidad de que sucedan.
          
          .row(titulo="Aprobación y viabilidad")
            p Teniendo en cuenta la evaluación y planificación del plan, se debe llegar a un consenso sobre los riesgos más importantes y posibles dentro del plan, para prevenirlo de manera apropiada.
          
          .row(titulo="Ejecución")
            p En esta ya se tiene el desarrollo del plan de acción y se pretende generar un instructivo de prevención y contingencia en la planificación.
          
          .row(titulo="Restauración y recuperación")
            p Esta fase se lleva a cabo en el momento en que se deba ejecutar un plan de contingencia, donde se tienen en cuenta los impactos positivos y negativos generados por la activación y operación del plan.

    separador

    #t_2_5
    .titulo-segundo.color-acento-contenido(data-aos="fade-up-right")
      h2 2.5 Mapa

    .row.justify-content-center.my-5
      .col-lg-5
        figure
          img(src='@/assets/curso/temas/tema2/img18.svg', alt='')

      .col-lg-7
        p En los itinerarios turísticos se hace muy necesaria la utilización de mapas geográficos o dinámicos; estos le permiten al planificador o gestor turístico desarrollar sus rutas e itinerarios con base en su información. Para que los mapas sean utilizados durante un circuito o ruta turística, es necesario que contengan los elementos básicos: imagen geográfica, rosa de los vientos, simbología, título, escala y leyenda del mapa. 
        p Es de resaltar que en la actualidad se manejan herramientas tecnológicas, las cuales permiten la lectura y ubicación en un mapa de manera más ágil, por lo que ya no es muy común el uso de tales implementos.


</template>

<script>
export default {
  name: 'Tema2',
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
