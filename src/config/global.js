export default {
  global: {
    componenteFormativo: 'Presentación de productos turísticos',
    descripcionCurso:
      'Este componente tiene como finalidad dar a conocer los productos turísticos, las características principales y los elementos que abarcan, teniendo en cuenta las dinámicas de conceptualización empleadas para brindar conocimientos al sector turístico, dándole valor a la gestión de mercados, mediante la correcta presentación de dichos productos.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Actividades turísticas ',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Itinerarios',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Sostenibilidad turística',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Normatividad turística',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Indicadores de gestión turística',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Tarifas de viaje',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema7',
        icono: 'far fa-file-alt',
        numero: '7',
        titulo: 'Recursos turísticos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema8',
        icono: 'far fa-file-alt',
        numero: '8',
        titulo: 'Prestadores de servicios turísticos',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Actividades turísticas',
      referencia:
        'Martínez, V., & Blanco, R. (2013). Hacia una gestión sostenible de las actividades turísticas en los espacios rurales y naturales. <i>Revista Internacional De Organizaciones.</i> ',
      tipo: 'Artículo',
      link: 'https://doi.org/10.17345/rio10.131-155',
    },
    {
      tema: 'Itinerarios',
      referencia:
        'Ruiz, J. M., Serrano, M. L. T., & Serrano, V. G. (2014). <i>Potenciación del patrimonio natural, cultural y paisajístico con el diseño de itinerarios turísticos.</i> Cuadernos de turismo. ',
      tipo: 'Artículo',
      link: 'https://revistas.um.es/turismo/article/view/203081',
    },
    {
      tema: 'Sostenibilidad turística',
      referencia:
        'Romero Ogás, C. D. L. (2014). <i>Propuesta de herramientas y metodología de gestión integrada para el desarrollo de acuerdos de producción sustentable</i> (APS).',
      tipo: 'Documento',
      link: 'http://repositorio.udec.cl/handle/11594/4842',
    },
    {
      tema: 'Indicadores de gestión turística',
      referencia:
        'Peral, F. J. B., Lozano, M. G., Casas, F. M. G., & Lozano-Oyola, M. (2010). Indicadores sintéticos de turismo sostenible: una aplicación para los destinos turísticos de Andalucía. <i>Rect@: Revista Electrónica de Comunicaciones y Trabajos de ASEPUMA.</i> (s.f.)',
      tipo: 'Artículo',
      link: 'https://dialnet.unirioja.es/servlet/articulo?codigo=3674366',
    },
  ],
  glosario: [
    {
      termino: 'Actividad',
      significado:
        'capacidad de realizar una dinámica con un objetivo en específico.',
    },
    {
      termino: 'Circuito',
      significado:
        'puede definirse como un proceso o un recorrido, el cual cuenta con un punto de partida y un punto de llegada y en el que pueden involucrarse actividades de por medio.',
    },
    {
      termino: 'Criterio',
      significado:
        'estándar o norma que forma un juicio de valor de pensamiento propio hacia algo o alguien.',
    },
    {
      termino: 'Componente',
      significado:
        'es el conjunto de características y conceptos que conforman un elemento en específico.',
    },
    {
      termino: 'Contingencia',
      significado:
        'suceso o posibilidad de que pueda suceder algo; acción de prever una emergencia.',
    },
    {
      termino: 'Gestión',
      significado:
        'es el conjunto de acciones o trámites que se llevan a cabo para realizar una labor o actividad.',
    },
    {
      termino: 'Norma',
      significado:
        'acciones que se imponen y se adoptan de manera legal sobre conductas o procedimientos.',
    },
    {
      termino: 'Ley',
      significado:
        'acción que determina parámetros legales sobre algo o alguien.',
    },
    {
      termino: 'Prestador',
      significado: 'persona que presta algún servicio o labor.',
    },
    {
      termino: 'Planeación',
      significado:
        'proceso que lleva a cabo una secuencia de actividades con programación previa.',
    },
  ],
  referencias: [
    {
      referencia:
        'Página web | Sostenibilidad.com. (s.f.). <i>¿Sabes cuándo nace la sostenibilidad?</i> ',
      link:
        'https://www.sostenibilidad.com/desarrollo-sostenible/sabes-cuando-nace-la-sostenibilidad/?_adin=02021864894',
    },
    {
      referencia: 'Página web | UNESCO. (s.f.). <i>Desarrollo sostenible.</i>',
      link: 'https://www.unwto.org/es/desarrollo-sostenible',
    },
    {
      referencia:
        'Artículo | Andrés, J. M., & Torre, M. G. (2013). <i>Las buenas prácticas ambientales en turismo.</i>',
      link: 'http://170.210.83.98:8080/jspui/handle/123456789/189',
    },
    {
      referencia:
        'Página web | Cámara de comercio de Bogotá. (s.f.).  <i>Normatividad Registro de Entidades sin Ánimo de Lucro.</i>',
      link:
        'https://www.ccb.org.co/Inscripciones-y-renovaciones/Normativa-Registros-Publicos/Normatividad-Registro-de-Entidades-Sin-Animo-de-Lucro-ESAl',
    },
    {
      referencia:
        'Página web | Ministerio de Comercio, Industria y Turismo. (2022). <i>Normas técnicas sectoriales.</i>',
      link:
        'https://www.mincit.gov.co/minturismo/calidad-y-desarrollo-sostenible/calidad-turistica/normas-tecnicas-sectoriales',
    },
    {
      referencia:
        'Página web | Fontur. (2022). <i>Marco Normativo del Sector Turismo.</i>',
      link:
        'https://fontur.com.co/es/marco-normativo-del-sector-turismo?q=marco-normativo-del-sector-turismo',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
