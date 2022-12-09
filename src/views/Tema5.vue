<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Indicadores de gestión turística

    .row.justify-content-center.my-5
      .col-lg-7
        .bloque-texto-b1.color-secundario.p-4
          .bloque-texto-b__texto
            p Los indicadores de gestión turística son todos los aspectos y características desarrollados para un estudio de mercado o un estudio en específico. También son los encargados de evaluar los impactos generados por el turismo en los destinos, determinar la viabilidad de un proyecto turístico y medir y evaluar de manera cuantitativa y descriptiva los datos específicos. Usualmente, los indicadores son creados, desarrollados y plasmados en una matriz con una previa estructuración de conceptos e investigación del tema. Son utilizados para realizar mediciones que están ligadas a una recopilación de datos para la investigación de un mercado turístico.
      .col-lg-5
        figure
          img(src='@/assets/curso/temas/tema5/img1.svg', alt='')           

    separador

    #t_5_1    
    .titulo-segundo.color-acento-contenido(data-aos="fade-up-right")
      h2 5.1 Estructura

    .row.my-5
      p Para definir la estructura de los indicadores es indispensable realizar un enfoque conceptual; en este deberán ser determinados los datos y aspectos medidos por los indicadores. Es necesario también realizar un diagnóstico previo acerca de la finalidad del estudio o de la investigación, pues este diagnóstico definirá las variables de los indicadores. Además, es importante identificar si los indicadores a realizar son internos o externos a la organización que los realiza.  Por lo general, los indicadores se encuentran compuestos por:

    .row.justify-content-center.my-5
      .col-lg-6
        ImagenInfografica.color-acento-botones
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema5/img2.svg', alt='') 

          .tarjeta.tarjeta-azul2.p-3(x="28%" y="11%" numero="1")
            h4.mb-2 Variables
            p Es una cualidad o característica que se define de manera cuantitativa o cualitativa. Conforme al grado de complejidad, pueden ser compuestas o simples.

          .tarjeta.tarjeta-azul2.p-3(x="72%" y="11%" numero="2")
            h4.mb-2 Tipo
            p En este se define el tipo de variable, siendo cuantitativas las variables que se pueden contar y cualitativas las que se pueden describir.

          .tarjeta.tarjeta-azul2.p-3(x="94%" y="52%" numero="3")
            h4.mb-2 Escala de medición
            p Este elemento es el encargado de definir el modo en que se comportará la variable, los cuales pueden ser nominales, ordinales, razonables y mediante intervalos.

          .tarjeta.tarjeta-azul2.p-3(x="73%" y="93%" numero="4")
            h4.mb-2 Indicadores 
            p Estos deben tener nombres concisos con relación a los intervalos.

          .tarjeta.tarjeta-azul2.p-3(x="28%" y="93%" numero="5")
            h4.mb-2 Fuente de verificación
            p Este elemento se refiere a los instrumentos que se tendrán en cuenta para la toma y recopilación de información.

          .tarjeta.tarjeta-azul2.p-3(x="6%" y="52%" numero="6")
            h4.mb-2 Fórmula
            p Allí se redactarán y modificarán los datos recolectados, con relación a los datos base o datos de fuente para la obtención de resultados del indicador.

    .row.my-5
      .cajon.color-acento-botones.p-4
        p Para ampliar la información, lo invitamos a ver el #[strong Anexo 1 - Estructura de los indicadores de gestión turística.]
        .row
          .col-lg-6
            a.anexo(:href="obtenerLink('/downloads/anexo_1_Estructura_de_los_indicadores_de_gestión_turística.pdf')" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p #[strong Anexo 1.]
                p Estructura de los indicadores de gestión turística.
    
    separador

    #t_5_2
    .titulo-segundo.color-acento-contenido(data-aos="fade-up-right")
      h2 5.2 Aplicabilidad 

    .row.justify-content-center.my-5
      .col-lg-5
        figure
          img(src='@/assets/curso/temas/tema5/img3.svg', alt='')      
      .col-lg-7.my-4
        p Los indicadores de gestión turística se utilizan generalmente para controlar y dirigir la gestión de un proyecto o plan turístico. Estos se aplican para determinar la organización y el cumplimiento de los objetivos planteados por una organización. Regularmente, estos planes de gestión son ejecutados por el gerente o administrador de la organización, que buscará la manera de evaluar y adquirir resultados respecto a sus indicadores. 
        p Con el paso del tiempo, los procesos administrativos y organizacionales de las empresas turísticas han presentado transformaciones relacionadas con sus negocios.

    separador

    #t_5_3
    .titulo-segundo.color-acento-contenido(data-aos="fade-up-right")
      h2 5.3 Plan de acción 

    .row.my-5
      .cajon.color-acento-contenido.p-4
        .row.justify-content-center
          .col-5.col-lg-1
            figure
              img(src='@/assets/curso/temas/tema5/img4.svg', alt='')
          .col-lg-10.mt-3
            p Los indicadores de gestión brindan su funcionalidad a los planes de acción turística, ya que mediante estos es posible evaluar el desempeño que se tenga en los planes, al igual que la aceptabilidad de estos.

    .row.my-5
      p Los planes de acción fusionados con indicadores de medición pueden catalogarse o definirse como planes estratégicos.

    .tarjeta--container.row.mb-5
      .col-md.tarjeta.tarjeta-gris2.p-5
        .row.justify-content-center.mb-4
          .col-6.my-3
            figure
              img(src='@/assets/curso/temas/tema5/img5.svg', alt='')
          
        h3.text-center.mt-5 Indicadores de gestión
        p.text-center.mt-5 Los indicadores de gestión pueden ser utilizados para la ejecución de planes de desarrollo turístico, y así mismo, realizar la evaluación de estos planes.

      .col-md.tarjeta.tarjeta-amarilla2.p-5
        .row.justify-content-center.mb-4
          .col-6.my-3
            figure
              img(src='@/assets/curso/temas/tema5/img6.svg', alt='')
          
        h3.text-center.mt-5 Plan de acción
        p.text-center.mt-5 Se pueden desarrollar indicadores para la medición del progreso de los seguimientos a los planes de acción enfocados en la gestión y acción de las empresas turísticas.









</template>

<script>
export default {
  name: 'Tema5',
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
