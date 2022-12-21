<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Tarifas de viaje

    .row.justify-content-center.my-5
      .col-lg-7
        .cajon.color-primario.p-4
          p Las tarifas de viaje son los elementos más importantes del sector turístico, ya que de estos se deriva todo el desarrollo económico que se ha tenido. Adicionalmente, también se ha logrado una evolución frente a esta actividad; como es frecuente, el desarrollo se encuentra ligado a todas las estancias y circunstancias que generan dinero. 
      .col-lg-5
        figure
          img(src='@/assets/curso/temas/tema6/img1.svg', alt='')      

    .row.justify-content-center.my-5
      TabsA.color-acento-botones
        .tarjeta.tarjeta-azul2.p-5(titulo="Los costos y tarifas")
          p Los costos y tarifas se encuentran ligados a todos los servicios prestados para los turistas. Usualmente, estos pueden variar dependiendo de factores económicos y sociales que se encuentran determinados por el público objetivo al que se dirijan los prestadores de servicio.

        .tarjeta.tarjeta-azul2.p-5(titulo="Los costos turísticos")
          p Los costos turísticos se encuentran evidenciados en las actividades turísticas, en el ingreso de los recursos turísticos y en todos los servicios prestados para el turismo. 

        .tarjeta.tarjeta-azul2.p-5(titulo="Precios de un viaje")
          p Para determinar los precios o tarifas de un viaje, es necesario que las empresas turísticas cuenten con los medios para financiar los costos de infraestructura y los costos operacionales; de igual manera, también se deben determinar las comisiones y ganancias para los operadores turísticos.

    separador

    #t_6_1    
    .titulo-segundo.color-acento-contenido(data-aos="fade-up-right")
      h2 6.1 Clases y soportes

    .row.my-5
      p En los costos y tarifas que se encuentran en un viaje se pueden identificar los factores y elementos que se deben tener en cuenta a la hora de estandarizar costos y presupuestos. Ahora bien, la clasificación y los soportes en el turismo dependen de la formalidad de los prestadores de servicio, al igual que las tarifas que se brindan en cada uno de estos:

    .row.my-5
      ul.lista-ul--color
        li 
          i.fas.fa-square.color-vineta
          h4 Soportes en el turismo

    .row.my-5
      .tarjeta--amarilla3.p-5
        .row.justify-content-center
          .col-lg-6
            ImagenInfografica
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/temas/tema6/img2.svg', alt='') 

              .tarjeta.tarjeta-azul3.p-3(x="8%" y="21%" numero="")
                h4.mb-2 Las agencias de viaje
                p En las agencias de viajes las tarifas de los paquetes o servicios ofrecidos tienen gran influencia en su tipología, más aún en las agencias que manejan costos y presupuestos tarifarios al por mayor y al detal, los cuales incluyen impuestos y puntos específicos para cada producto turístico. Las diferentes agencias, ya sean de viajes y turismo, de viajes operativos y de viajes mayoristas, tienen diferentes tarifas de venta, al igual que distintos públicos objetivo.

              .tarjeta.tarjeta-azul3.p-3(x="92%" y="21%" numero="")
                h4.mb-2 Las aerolíneas y empresas de transportes
                p Tanto las aerolíneas como las empresas de transporte manejan diferentes clases tarifarias, que varían dependiendo de los aspectos a determinar. Primero, se determina la trayectoria de viaje para definir la clasificación de puesto, siendo las de clase económica o ejecutiva las más comunes en la actualidad. En el caso de los viajes aéreos o ferroviarios, se tienen en cuenta los viajes privados o #[i charter], cuyas tarifas son más elevadas debido a su exclusividad. También se tienen presentes las comodidades brindadas y los servicios adicionales que alteran la tarifa, como temporadas vacacionales y eventos masivos.

              .tarjeta.tarjeta-azul3.p-3(x="92%" y="92%" numero="")
                h4.mb-2 Servicios de alimentación y restaurantes
                p En estos servicios las tarifas varían dependiendo de diferentes factores; primordialmente, las certificaciones tienen un efecto en las tarifas de los establecimientos, además de la infraestructura y el servicio en sí (chefs profesionales, comidas tradicionales o exóticas, etc.). El enfoque por clase determina al público objetivo y la tarifa establecida por los prestadores del servicio.

              .tarjeta.tarjeta-azul3.p-3(x="8%" y="92%" numero="")
                h4.mb-2 Los destinos 
                p Los destinos cumplen tendencias cuya implicación se encuentra derivada del posicionamiento del lugar; las tarifas de los lugares dependen de la estacionalidad, al igual que la moda del destino. La monetización de cada país y sus variaciones pueden afectar las tarifas establecidas en los productos turísticos, la cual suele medirse conforme a la valuación o devaluación del dólar. 

    separador

    #t_6_2 
    .titulo-segundo.color-acento-contenido(data-aos="fade-up-right")
      h2 6.2 Normativas y procedimientos

    .row.justify-content-center.my-5
      .col-lg-7
        p Las normativas y procedimientos que se establecen para el sector turístico están basadas en las leyes turísticas de cada país. En Colombia existen normativas turísticas que brindan apoyos económicos a asociaciones relacionadas con el turismo; también existen medidas y decretos que aportan al fomento turístico de aquellos destinos que han sufrido calamidades e impactos negativos por desastres naturales, violencia armada, etc. 
        p Un gran ejemplo de esto es el decreto 1031 del 2021, por medio del cual: 
        .bloque-texto-b.color-acento-contenido.p-4
          .bloque-texto-b__texto
            i.fas.fa-quote-left.color-vineta
            h4 Se reglamenta el numeral 1 del artículo 53 de la Ley 2068 de 2020, referente a los auxilios, subsidios o apoyos que se brinden a los prestadores de servicios turísticos afectados por declaratoria de estado de emergencia o situación de desastre del orden nacional, departamental o municipal.
            br
            span - Según (Fontur, 2022, p. 1)
            i.fas.fa-quote-right.color-vineta.ps-5

      .col-lg-5
        figure
          img(src='@/assets/curso/temas/tema6/img3.png', alt='')      

    separador

    #t_6_3
    .titulo-segundo.color-acento-contenido(data-aos="fade-up-right")
      h2 6.3 Plan de acción

    .row.my-5
      .cajon.color-primario.p-4
        .row.justify-content-center
          .col-5.col-lg-1
            figure
              img(src='@/assets/curso/temas/tema6/img4.svg', alt='')
          .col-lg-10.mt-3
            p Los planes de acción en las tarifas de los prestadores de servicio en el sector son utilizados para el mantenimiento y sostenimiento del sector turístico de Colombia. Estos planes contribuyen al fortalecimiento que tienen los entes gubernamentales frente a la industria turística. Con los planes de acción, frente a los costos y presupuesto del sector turístico, se busca maximizar el mercado, responder a la oferta y la demanda turística actual, ampliar la infraestructura turística y promocionar el turismo con altos estándares de calidad.




</template>

<script>
export default {
  name: 'Tema6',
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
