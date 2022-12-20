<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Sostenibilidad turística

    .row.my-5
      p En la actualidad el turismo tiene una gran demanda, por lo que ha sido necesario que se adecue a los diversos cambios del entorno social.

    .row.my-5
      TabsB.color-acento-contenido
        .py-4.py-md-5(titulo="Desarrollo científico y tecnológico" :icono="require('@/assets/curso/temas/tema3/img1.svg')")
          .row.justify-content-center
            .col-8.col-lg-2
              figure
                img(src='@/assets/curso/temas/tema3/img2.svg', alt='')
            .col-lg-7.mt-5
              p El desarrollo científico y tecnológico le ha permitido a la humanidad el avance en diversos campos económicos, pero a su vez, ha hecho que muchas personas no se interesen por el medioambiente, los aspectos naturales y socioculturales de las diferentes poblaciones. Ahora bien, la preocupación por estos aspectos llevó a que en el año 1987 se publicara el Informe Brundtland. 

        .py-4.py-md-5(titulo="Nuestro futuro en común" :icono="require('@/assets/curso/temas/tema3/img3.svg')")
          .row.justify-content-center
            .col-8.col-lg-2
              figure
                img(src='@/assets/curso/temas/tema3/img4.svg', alt='')
            .col-lg-7.mt-5
              p El Informe Brundtland, también conocido mundialmente como Nuestro Futuro en común #[i (Our Common Future)], fue elaborado por la ONU (Organización de Naciones Unidas) con el fin de desarrollar estrategias económicas y ambientales que se pudiesen impartir a nivel mundial.

        .py-4.py-md-5(titulo="Estrategias Económicas" :icono="require('@/assets/curso/temas/tema3/img5.svg')")
          .row.justify-content-center
            .col-8.col-lg-2
              figure
                img(src='@/assets/curso/temas/tema3/img6.svg', alt='')
            .col-lg-7.mt-5
              p El informe de Brundtland recibe ese nombre por la ministra noruega Gro Harlem Brundtland, artífice de la iniciativa, para quien la sostenibilidad implicaba desarrollo. El desarrollo sostenible planteado por Brundtland se centra en realizar estrategias económicas y ambientales que no tengan repercusiones a futuro, pues busca “satisfacer las necesidades de las generaciones presentes SIN comprometer lasposibilidades de las del futuro para atender sus propias necesidades” (Brundtland, 1987).

        .py-4.py-md-5(titulo="Sostenibilidad turística" :icono="require('@/assets/curso/temas/tema3/img7.svg')")
          .row.justify-content-center
            .col-8.col-lg-2
              figure
                img(src='@/assets/curso/temas/tema3/img8.svg', alt='')
            .col-lg-7.mt-5
              p La sostenibilidad turística es tomada como una herramienta o estrategia de protección empleada en diferentes sectores económicos del mercado actual. Esta tiene como origen la reunión de diferentes países en distintas fechas históricas, entre ellas la Cumbre de la Tierra, una de las más importantes, que se llevó a cabo en Río de Janeiro, Brasil, en 1992. A partir de allí se puede rastrear el origen de la preocupación por un turismo sostenible a nivel mundial.

    separador

    #t_3_1    
    .titulo-segundo.color-acento-contenido(data-aos="fade-up-right")
      h2 3.1 Criterios de aplicación en servicios turísticos

    .row.my-5
      p A continuación, se detallan los criterios necesarios para la aplicación de servicios turísticos.

    .row.my-5
      ul.lista-ul--color
        li 
          i.fas.fa-square.color-vineta
          h4 Criterios de aplicación en servicios turísticos

    .row.justify-content-center.my-5
      .tarjeta.slyderA_bg_01.p-5
        SlyderA(tipo="b")
          .row.justify-content-center
            .col-md-6.mb-4.mb-md-0.my-5
              h4 Sostenibilidad
              p En la actualidad el turismo es utilizado como motor de crecimiento en las diferentes sociedades. Esto le permite a los administradores, planificadores y gestores turísticos la empleabilidad de diversas herramientas para la ejecución turística de bajo impacto, donde la sostenibilidad juega un papel importante frente al turismo.
            
            .col-md-5.mb-3
              figure
                img(src='@/assets/curso/temas/tema3/img9.svg', alt='')  

          .row.justify-content-center
            .col-md-6.mb-4.mb-md-0.my-5
              h4 Equilibrio perfecto 
              p El turismo sostenible se basa en la agrupación adecuada de tres factores: lo social, lo ambiental y lo económico. Cuando se logra un equilibrio perfecto entre estos factores, el turismo juega a favor de la conservación y salvaguarda los recursos naturales y culturales, beneficiando económicamente a los pobladores de los sitios turísticos. 
            
            .col-md-5.mb-3
              figure
                img(src='@/assets/curso/temas/tema3/img10.svg', alt='')  

          .row.justify-content-center
            .col-md-6.mb-4.mb-md-0.my-5
              h4 Servicios turísticos 
              p Para llevar a cabo los criterios de aplicación sostenible en servicios turísticos siempre se deben tener presentes estos factores. Los prestadores de servicios turísticos tienen la labor de brindar servicios garantizando la contratación de personas o comunidades locales, lo que permite un beneficio económico mutuo y equitativo. De igual manera, las acciones sociales que involucren el entorno deben ser positivas para el medioambiente, sin que el factor económico afecte el bienestar social de los lugares turísticos. 
            
            .col-md-5.mb-3
              figure
                img(src='@/assets/curso/temas/tema3/img11.svg', alt='')  

          .row.justify-content-center
            .col-md-6.mb-4.mb-md-0.my-5
              h4 Factores económicos y ambientales
              p Para lograr un equilibrio perfecto en los servicios turísticos sostenibles no solo se debe lograr soportabilidad y equidad, sino también un equilibrio entre los factores económicos, sociales y ambientales, con el fin de brindar un servicio viable.
            
            .col-md-5.mb-3
              figure
                img(src='@/assets/curso/temas/tema3/img12.svg', alt='')  

    separador

    #t_3_2
    .titulo-segundo.color-acento-contenido(data-aos="fade-up-right")
      h2 3.2 Buenas prácticas ambientales 

    .row.justify-content-center.my-5
      .col-lg-7
        p Es correcto precisar que las BPA (Buenas Prácticas Ambientales) dentro del turismo sostenible son herramientas que ayudan a la ejecución de la actividad turística. Por lo general, estas herramientas son dinámicas, documentos o estrategias que emplean las diferentes empresas turísticas y los prestadores de servicio para garantizar la calidad de sus productos, añadiendo un valor agregado en comparación con aquellos que no realizan tales prácticas. Generalmente, las empresas que realizan BPA buscan minimizar los posibles impactos de su actividad, además de adquirir los beneficios otorgados por las entidades públicas y privadas que premian a las organizaciones que ejecutan dichos procedimientos. 
        .cajon.color-acento-contenido.p-4
          p De igual manera, algunas empresas de turismo a nivel global manejan internamente procesos y procedimientos relacionados con la gestión ambiental, como actividades y dinámicas, las cuales son necesarias para lograr certificaciones de calidad nacionales e internacionales, además de la estandarización de sus productos. Algunas de estas normas son la ISO 9001, ISO 14001, NTSH 006 y NTS-USNA 008.

      .col-lg-5
        figure
          img(src='@/assets/curso/temas/tema3/img13.svg', alt='')

    separador

    #t_3_3
    .titulo-segundo.color-acento-contenido(data-aos="fade-up-right")
      h2 3.3 Programa de gestión ambiental

    .row.my-5
      p Los programas de gestión ambiental son utilizados normalmente por las empresas turísticas formales que desean una certificación de calidad; estas empresas, por lo general, buscan beneficios convenientes para su organización. Los programas de gestión ambiental tienen como principal objetivo la integración de metodologías amigables con el ambiente, donde la conservación y preservación de recursos naturales y culturales dependa de la gestión ambiental de las organizaciones turísticas. Es de resaltar que toda empresa emplea metodologías y dinámicas diferentes en sus programas de gestión ambiental, pero en la mayoría de los casos, se deberán desarrollar las siguientes actividades:

    .row.justify-content-center.my-5
      .tarjeta.slyderA_bg_01.p-5
        SlyderA(tipo="b")
          .row.justify-content-center
            .col-md-6.mb-4.mb-md-0.my-5
              h4 Aspectos ambientales
              p Generar requisitos de aspectos ambientales basados en la ejecución de cuestionarios relacionados con las certificaciones legales de calidad.
            
            .col-md-5.mb-3
              figure
                img(src='@/assets/curso/temas/tema3/img14.svg', alt='')  

          .row.justify-content-center
            .col-md-6.mb-4.mb-md-0.my-5
              h4 Lista de chequeo
              p Realizar una lista de chequeo para la verificación del cumplimiento de los requisitos ambientales de la organización turística.
            
            .col-md-5.mb-3
              figure
                img(src='@/assets/curso/temas/tema3/img15.svg', alt='')  

          .row.justify-content-center
            .col-md-6.mb-4.mb-md-0.my-5
              h4 Aspectos ambientales
              p Realizar un diagnóstico soportado en la lista de chequeo, con los aspectos ambientales.

            .col-md-5.mb-3
              figure
                img(src='@/assets/curso/temas/tema3/img16.svg', alt='')  

          .row.justify-content-center
            .col-md-6.mb-4.mb-md-0.my-5
              h4 Formular planes
              p Formular planes de acción relacionados con los requisitos de las normas a certificar, o con requisitos que influyan en las acciones legales hacia el medioambiente.
            
            .col-md-5.mb-3
              figure
                img(src='@/assets/curso/temas/tema3/img17.svg', alt='')  

          .row.justify-content-center
            .col-md-6.mb-4.mb-md-0.my-5
              h4 Formatos
              p Generar formatos e inventarios de lugares naturales y culturales relacionados con los servicios prestados en el establecimiento. Dependiendo de la certificación, también se debe identificar la flora y fauna que se encuentre en el lugar y los alrededores.

            .col-md-5.mb-3
              figure
                img(src='@/assets/curso/temas/tema3/img18.svg', alt='')  

          .row.justify-content-center
            .col-md-6.mb-4.mb-md-0.my-5
              h4 Programas de consumo
              p Crear programas de consumo y ahorro de servicios energéticos y vitalicios para la población, como luz eléctrica, agua, gas natural, etc.
            
            .col-md-5.mb-3
              figure
                img(src='@/assets/curso/temas/tema3/img19.svg', alt='')  

          .row.justify-content-center
            .col-md-6.mb-4.mb-md-0.my-5
              h4 Planes de prevención
              p Crear planes de prevención y planes de contingencia relacionados con los productos prestados.
            
            .col-md-5.mb-3
              figure
                img(src='@/assets/curso/temas/tema3/img20.svg', alt='')  

          .row.justify-content-center
            .col-md-6.mb-4.mb-md-0.my-5
              h4 Registro de residuos
              p Desarrollar registros de residuos y planes con relación a los mismos. 
            
            .col-md-5.mb-3
              figure
                img(src='@/assets/curso/temas/tema3/img21.svg', alt='')  

          .row.justify-content-center
            .col-md-6.mb-4.mb-md-0.my-5
              h4 Crear registros
              p Crear y desarrollar planes, registros, diagnósticos y categorizaciones dependiendo de los requisitos encontrados en la lista de chequeo sobre aspectos ambientales, basados en los parámetros de la certificación.
            
            .col-md-5.mb-3
              figure
                img(src='@/assets/curso/temas/tema3/img22.svg', alt='')  











</template>

<script>
export default {
  name: 'Tema3',
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
