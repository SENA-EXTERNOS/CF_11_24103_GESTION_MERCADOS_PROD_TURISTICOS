<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Normatividad turística

    .row.justify-content-center.my-5
      .col-lg-7
        p La normatividad turística es el conjunto de elementos legales o jurídicos que se legislan y registran dependiendo de cada país, los cuales pueden incluir penalizaciones como consecuencia del incumplimiento. Estas normativas tienen gran influencia sobre la identidad natural y cultural de cada destino, además de que brindan protección integral para la población de los sitios turísticos. Las normativas turísticas buscan beneficiar también a los prestadores de servicios turísticos, como empresas turísticas, municipios y departamentos que tengan al turismo como motor económico.
        p En Colombia se pueden encontrar leyes, decretos, resoluciones, sentencias y circulares legalmente constituidas en el RNT (Registro Nacional del Turismo). Sin embargo, en el turismo no solo se contemplan las normas registradas por la ley, sino que también se tienen en cuenta las normas técnicas sectoriales, las cuales permiten delimitar y categorizar el mercado turístico.

      .col-lg-5
        figure
          img(src='@/assets/curso/temas/tema4/img1.svg', alt='')        

    separador

    #t_4_1    
    .titulo-segundo.color-acento-contenido(data-aos="fade-up-right")
      h2 4.1 Ley general del turismo

    .row.justify-content-center.my-5
      .col-lg-10
        .bloque-texto-g.color-acento-botones.p-3.p-sm-4.p-md-5
          .bloque-texto-g1__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema4/img2.svg')})`}"
          )
          .bloque-texto-g1__texto.p-4
            p.mb-0 En el sector turístico, al igual que en otros sectores económicos, hay una serie de leyes que son creadas y modificadas año tras año por los diferentes gobernantes; estas leyes cumplen un propósito específico frente al sector económico al cual se dirigen, ya que dichos sectores suelen ser cambiantes.

    .row.my-5
      ul.lista-ul--color
        li 
          i.fas.fa-square.color-vineta
          h4 Leyes creadas por gobernantes

    .row.justify-content-center.my-5
      .col-lg-8
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
          .row(titulo="Ley general de turismo")
            p En Colombia actualmente se han expedido cuatro leyes que son determinantes para el turismo, las cuales son:
            ul.lista-ul--color
              li 
                i.fas.fa-check
                | Ley 2068 del 2020
              li 
                i.fas.fa-check
                | Ley 1558 de 2012
              li 
                i.fas.fa-check
                | Ley 1101 del 2006
              li 
                i.fas.fa-check
                | Ley 300 de 1996 

          .row(titulo="Necesidades del sector turístico ")
            p Se puede decir que todas tienen enfoques diferentes o similares, pero cada una fue creada atendiendo a las necesidades del sector turístico en las fechas mencionadas, aportándole un proceso progresivo al país hasta la actualidad. 
          
          .row(titulo="Planificadores turísticos")
            p En la actualidad el turismo se encuentra regido por la Ley 2068 del 2020, la cual ha tenido prudentes modificaciones respecto a los parámetros turísticos que deben abordar los planificadores turísticos o las personas del sector. En esta ley se establecen lineamientos y definiciones con terminología asociada al turismo, así como criterios de capacidad de carga y capacidades turísticas.          

      .col-lg-4
        figure
          img(src='@/assets/curso/temas/tema4/img3.png', alt='')

    separador

    #t_4_2   
    .titulo-segundo.color-acento-contenido(data-aos="fade-up-right")
      h2 4.2 Normas técnicas de agencias de viajes

    .row.my-5
      p En Colombia el Ministerio de Comercio, Industria y Turismo ha planteado estrategias para los diferentes prestadores de servicio en el sector turístico, ya que es necesario realizar la implementación de normas técnicas sectoriales para la ejecución de un turismo sostenible. 

    .row.my-5
      ul.lista-ul--color
        li 
          i.fas.fa-square.color-vineta
          h4 Implementación de normas técnicas
             

    .tarjeta.slyderA_bg_01.p-4.p-lg-5
      PasosB.color-acento-botones
        .row(titulo="").justify-content-center
          .col-lg-7.mt-lg-5.mb-3
            h4 Normas técnicas sectoriales
            p Las NTS (Normas Técnicas Sectoriales) son un conjunto de requisitos y aspectos legales que los prestadores de servicio y las empresas del sector turístico buscan cumplir para obtener la certificación correspondiente. Estas NTS permiten garantizar la calidad y competitividad en el sector turístico. Algunos aspectos de las NTS para las agencias de viajes que se pueden encontrar en la página oficial del ministerio <a href="https://www.mincit.gov.co/" target="_blank"> #[strong (https://www.mincit.gov.co/)] </a> son:                    

          .col-10.col-lg-5
            figure
              img(src='@/assets/curso/temas/tema4/img4.svg', alt='')
   
        .row(titulo="").justify-content-center
          .col-lg-7.mt-lg-5.mb-3
            h4 Reservas en agencias de viajes
            ul.lista-ul--color
              li 
                i.fas.fa-check.color-vineta1
                | Norma Técnica Sectorial NTS - AV 001: Reservas en agencias de viajes, 2002. 
              li 
                i.fas.fa-check.color-vineta1
                | Norma Técnica Sectorial NTS - AV 002. Atención al cliente en agencias de viajes, 2014.
              li 
                i.fas.fa-check.color-vineta1
                | Norma Técnica Sectorial NTS - AV 003. Infraestructura en agencias de viaje, 2002.

          .col-10.col-lg-5
            figure
              img(src='@/assets/curso/temas/tema4/img5.svg', alt='')
   
        .row(titulo="").justify-content-center
          .col-lg-7.mt-lg-5.mb-3
            h4 Competencia laboral
            ul.lista-ul--color
              li 
                i.fas.fa-check.color-vineta1
                | Norma Técnica Sectorial NTS - AV 004. 
              li 
                i.fas.fa-check.color-vineta1
                | Norma Técnica Sectorial NTS - AV 005. Norma de competencia laboral. Asesoría y venta de servicios y paquetes turísticos, satisfaciendo las necesidades del cliente y contribuyendo a los rendimientos esperados por la empresa, 2004.

          .col-10.col-lg-5
            figure
              img(src='@/assets/curso/temas/tema4/img6.svg', alt='')
   
        .row(titulo="").justify-content-center
          .col-lg-7.mt-lg-5.mb-3
            h4 Norma de competencia laboral
            ul.lista-ul--color
              li 
                i.fas.fa-check.color-vineta1
                | Norma técnica Sectorial NTS - AV 006. Norma de competencia laboral. Dirigir el área comercial en agencias de viajes, 2014.             
              li 
                i.fas.fa-check.color-vineta1
                | Norma Técnica Sectorial NTS - AV 007. Norma de competencia laboral. Dirigir el área administrativa en agencias de viajes, 2014.                 
              li 
                i.fas.fa-check.color-vineta1
                | Norma Técnica Sectorial NTS - AV 008. Norma de competencia laboral. Dirigir el área financiera en agencias de viajes. Bogotá: ICONTEC, 2006.
                
          .col-10.col-lg-5
            figure
              img(src='@/assets/curso/temas/tema4/img7.svg', alt='')
   
        .row(titulo="").justify-content-center
          .col-lg-7.mt-lg-5.mb-3
            h4 Requisitos para la operación de actividades
            ul.lista-ul--color
              li 
                i.fas.fa-check.color-vineta1
                | Norma técnica Sectorial NTS - AV 009. Calidad en la prestación del servicio de transporte turístico terrestre automotor. Requisitos normativos, 2007. 
              li 
                i.fas.fa-check.color-vineta1
                | Norma Técnica Sectorial NTS - AV 010 Requisitos para la operación de actividades de Rafting en turismo de aventura. 
              li 
                i.fas.fa-check.color-vineta1
                | Norma Técnica Sectorial NTS - AV 011. Requisitos para la operación de actividades de Rapel en turismo de aventura, 2007.

          .col-10.col-lg-5
            figure
              img(src='@/assets/curso/temas/tema4/img8.svg', alt='')
   
        .row(titulo="").justify-content-center
          .col-lg-7.mt-lg-5.mb-3
            h4 Requisitos para operaciones
            ul.lista-ul--color
              li 
                i.fas.fa-check.color-vineta1
                | Norma Técnica Sectorial NTS - AV 012. Requisitos para la operación de actividades de espeleología recreativa en turismo de aventura, 2008. 
              li 
                i.fas.fa-check.color-vineta1
                | Norma Técnica Sectorial NTS - AV013. Requisitos para la operación de actividades de Parapente en turismo de aventura, 2010. 
              li 
                i.fas.fa-check.color-vineta1
                | Norma Técnica Sectorial NTS - OPC 001. Operación de Congresos, Ferias y Convenciones. Requisitos de Servicio, 2009.

          .col-10.col-lg-5
            figure
              img(src='@/assets/curso/temas/tema4/img9.svg', alt='')
   
        .row(titulo="").justify-content-center
          .col-lg-7.mt-lg-5.mb-3
            h4 Turismo de aventura
            ul.lista-ul--color
              li 
                i.fas.fa-check.color-vineta1
                p Norma Técnica Sectorial NTS - AV 014. Requisitos para la operación de actividades de cabalgata en turismo de aventura. 
              li 
                i.fas.fa-check.color-vineta1
                p Norma Técnica Sectorial NTS - AV 015. Requisitos para la operación de actividades de #[i canyoning] en turismo de aventura.

          .col-10.col-lg-5
            figure
              img(src='@/assets/curso/temas/tema4/img10.svg', alt='')

    separador

    #t_4_3   
    .titulo-segundo.color-acento-contenido(data-aos="fade-up-right")
      h2 4.3 Normas técnicas de sostenibilidad 

    .row.my-5
      p En la actualidad, las normas técnicas sectoriales relacionadas estrictamente con el turismo sostenible se encuentran publicadas en la página web del Ministerio de Comercio, Industria y Turismo <a href="https://www.mincit.gov.co/" target="_blank"> #[strong (https://www.mincit.gov.co/).] </a> Entre estas normas, aquellas que se relacionan con los atractivos y recursos naturales y culturales de un destino NTS son:

    .row.my-5
      .col-lg-1
      .col-lg-8.mb-3
        .tarjeta--rosa1.p-3
          .row
            .col-6.col-lg-2.mb-3
              figure
                img(src='@/assets/curso/temas/tema4/img11.svg', alt='').img11-a-19-t4
            .col-lg-7
              h5 Destinos turísticos
              p Norma Técnica Sectorial Colombiana NTS - TS 001-1. Destinos turísticos - Área turística. Requisitos de sostenibilidad, 2014.

        .tarjeta--rosa2.p-3
          .row
            .col-6.col-lg-2.mb-3
              figure
                img(src='@/assets/curso/temas/tema4/img12.svg', alt='').img11-a-19-t4
            .col-lg-7
              h5 Establecimientos de alojamiento
              p Norma Técnica Sectorial Colombiana NTS - TS 002. Establecimientos de alojamiento y hospedaje (EAH). Requisitos de sostenibilidad, 2014.     

        .tarjeta--rosa3.p-3
          .row
            .col-6.col-lg-2.mb-3
              figure
                img(src='@/assets/curso/temas/tema4/img13.svg', alt='').img11-a-19-t4
            .col-lg-7
              h5 Requisitos de sostenibilidad
              p Norma Técnica Sectorial Colombiana NTS - TS 003. Agencias de viajes. Requisitos de sostenibilidad (primera actualización), 2018.

        .tarjeta--rosa2.p-3
          .row
            .col-6.col-lg-2.mb-3
              figure
                img(src='@/assets/curso/temas/tema4/img14.svg', alt='').img11-a-19-t4
            .col-lg-7
              h5 Establecimientos gastronómicos
              p Norma Técnica Sectorial Colombiana NTS - TS 004. Establecimientos gastronómicos y bares. Requisitos de sostenibilidad, 2008.       

        .tarjeta--rosa3.p-3
          .row
            .col-6.col-lg-2.mb-3
              figure
                img(src='@/assets/curso/temas/tema4/img15.svg', alt='').img11-a-19-t4
            .col-lg-7
              h5 Servicio de transporte
              p Norma Técnica Colombiana NTS - TS 005. Empresas de transporte terrestre automotor especializado, empresas operadoras de chivas y otros vehículos automotores que presten servicio de transporte turístico. Requisitos de sostenibilidad, 2009. 

        .tarjeta--rosa2.p-3
          .row
            .col-6.col-lg-2.mb-3
              figure
                img(src='@/assets/curso/temas/tema4/img16.svg', alt='').img11-a-19-t4
            .col-lg-7
              h5 Playas turísticas
              p Norma Técnica Sectorial Colombiana NTS - TS 001-2. Playas turísticas. Requisitos de sostenibilidad, II actualización, 2015.       

        .tarjeta--rosa3.p-3
          .row
            .col-6.col-lg-2.mb-3
              figure
                img(src='@/assets/curso/temas/tema4/img17.svg', alt='').img11-a-19-t4
            .col-lg-7
              h5 Organizadores profesionales
              p Norma Técnica Sectorial Colombiana NTS - TS 006-1. Sistema de gestión para la sostenibilidad. Organizadores profesionales de congresos, ferias y convenciones, 2012.

        .tarjeta--rosa2.p-3
          .row
            .col-6.col-lg-2.mb-3
              figure
                img(src='@/assets/curso/temas/tema4/img18.svg', alt='').img11-a-19-t4
            .col-lg-7
              h5 Sedes para eventos
              p Norma Técnica Sectorial Colombiana NTS - TS 006-2. Sedes para eventos, congresos, ferias y convenciones. Requisitos de sostenibilidad, 2012.     

        .tarjeta--rosa4.p-3
          .row
            .col-6.col-lg-2.mb-3
              figure
                img(src='@/assets/curso/temas/tema4/img19.svg', alt='').img11-a-19-t4
            .col-lg-6
              h5 Requisitos de sostenibilidad
              p Norma Técnica Sectorial Colombiana NTS - TS 007. Empresas Comercializadoras de Esquemas de Tiempo Compartido y Multipropiedad. Requisitos de sostenibilidad, 2016.

      .col-8.col-lg-4
        figure
          img(src='@/assets/curso/temas/tema4/img20.svg', alt='').img20-tm4    






</template>

<script>
export default {
  name: 'Tema4',
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
