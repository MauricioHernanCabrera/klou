export default {
  data () {
    return {
      mostrarTrabajos: true,
      controlActivo: 'últimos',
      controlesDeTrabajo: [
        {
          titulo: 'últimos'
        },
        {
          titulo: 'identidad'
        },
        {
          titulo: 'editorial'
        },
        {
          titulo: 'digital'
        },
      ],
      trabajos: [
        {
          titulo: 'crear vida',
          texto: 'identidad',
          src: require('~/static/identidad/crearvida.jpg'),
          categorias: 'identidad últimos',
          id: 0
        },
        {
          titulo: 'balcones del atlántico',
          texto: 'identidad',
          src: require('~/static/identidad/balcones.jpg'),
          categorias: 'identidad últimos',
          id: 1
        },
        {
          titulo: 'la fiera',
          texto: 'identidad',
          src: require('~/static/identidad/lafiera.jpg'),
          categorias: 'identidad',
          id: 2
        },
        {
          titulo: 'estudio peornedo',
          texto: 'identidad',
          src: require('~/static/identidad/peornedo.jpg'),
          categorias: 'identidad',
          id: 3
        },
        {
          titulo: 'ática',
          texto: 'identidad',
          src: require('~/static/identidad/atica.jpg'),
          categorias: 'identidad últimos',
          id: 4
        },
        {
          titulo: 'amics',
          texto: 'identidad',
          src: require('~/static/identidad/amics.jpg'),
          categorias: 'identidad',
          id: 5
        },
        {
          titulo: 'locatelli hnos.',
          texto: 'identidad',
          src: require('~/static/identidad/locatelli.jpg'),
          categorias: 'identidad',
          id: 6
        },
        {
          titulo: 'gn broker',
          texto: 'identidad',
          src: require('~/static/identidad/gnbroker.jpg'),
          categorias: 'identidad últimos',
          id: 7
        },
        {
          titulo: 'gml group',
          texto: 'identidad',
          src: require('~/static/identidad/gml.jpg'),
          categorias: 'identidad',
          id: 8
        },
        {
          titulo: 'san marino',
          texto: 'identidad',
          src: require('~/static/identidad/sanmarino.jpg'),
          categorias: 'identidad',
          id: 9
        },
        {
          titulo: 'liquidcap',
          texto: 'identidad',
          src: require('~/static/identidad/liquidcap.jpg'),
          categorias: 'identidad',
          id: 10
        },
        {
          titulo: 'tecse',
          texto: 'identidad',
          src: require('~/static/identidad/tecse.jpg'),
          categorias: 'identidad',
          id: 11
        },
        {
          titulo: 'novocap',
          texto: 'identidad',
          src: require('~/static/identidad/novocap.jpg'),
          categorias: 'identidad',
          id: 12
        },
        {
          titulo: 'e-procure',
          texto: 'identidad',
          src: require('~/static/identidad/eprocure.jpg'),
          categorias: 'identidad',
          id: 13
        },
        {
          titulo: 'crear vida',
          texto: 'brochure',
          src: require('~/static/editorial/crearvida.jpg'),
          categorias: 'editorial últimos',
          id: 14
        },
        {
          titulo: 'la fiera',
          texto: 'flyer',
          src: require('~/static/editorial/lafiera.jpg'),
          categorias: 'editorial últimos',
          id: 15
        },
        {
          titulo: 'liquidcap',
          texto: 'brochure',
          src: require('~/static/editorial/liquidcap.jpg'),
          categorias: 'editorial últimos',
          id: 16
        },
        {
          titulo: 'locatelli hnos',
          texto: 'sistema de catálogos',
          src: require('~/static/editorial/locatelli.jpg'),
          categorias: 'editorial',
          id: 17
        },
        {
          titulo: 'eprocure',
          texto: 'brochure',
          src: require('~/static/editorial/eprocure.jpg'),
          categorias: 'editorial',
          id: 18
        },
        {
          titulo: 'grinmar',
          texto: 'brochure',
          src: require('~/static/editorial/grinmar.jpg'),
          categorias: 'editorial',
          id: 19
        },
        {
          titulo: 'inprotur',
          texto: 'brochure',
          src: require('~/static/editorial/inprotur.jpg'),
          categorias: 'editorial',
          id: 20
        },
        {
          titulo: 'lima japón bonsai',
          texto: 'flyer',
          src: require('~/static/editorial/lima.jpg'),
          categorias: 'editorial',
          id: 21
        },
        {
          titulo: 'viví pleno',
          texto: 'revista',
          src: require('~/static/editorial/vip.jpg'),
          categorias: 'editorial últimos',
          id: 22
        },
        {
          titulo: 'novocap',
          texto: 'brochure',
          src: require('~/static/editorial/novocap.jpg'),
          categorias: 'editorial',
          id: 23
        },
        {
          titulo: 'montevideo',
          texto: 'brochure',
          src: require('~/static/editorial/montevideo.jpg'),
          categorias: 'editorial',
          id: 24
        },
        {
          titulo: 'redimat',
          texto: 'sistema de catálogos',
          src: require('~/static/editorial/redimat.jpg'),
          categorias: 'editorial',
          id: 25
        },
        {
          titulo: 'quiero decir te amo',
          texto: 'flyer',
          src: require('~/static/editorial/quiero.jpg'),
          categorias: 'editorial',
          id: 26
        },
        {
          titulo: 'kiwi latino',
          texto: 'libro',
          src: require('~/static/editorial/kiwi.jpg'),
          categorias: 'editorial',
          id: 27
        },
        {
          titulo: 'handbook',
          texto: 'libro',
          src: require('~/static/editorial/handbook.jpg'),
          categorias: 'editorial',
          id: 28
        },


        {
          titulo: 'a rolar viajes',
          texto: 'sitio web institucional',
          src: require('~/static/digital/arolar.jpg'),
          categorias: 'digital últimos',
          id: 29
        },
        {
          titulo: 'locatelli hnos.',
          texto: 'sitio web institucional',
          src: require('~/static/digital/locatelli.jpg'),
          categorias: 'digital',
          id: 30
        },
        {
          titulo: 'coworking',
          texto: 'sitio web institucional',
          src: require('~/static/digital/coworking.jpg'),
          categorias: 'digital últimos',
          id: 31
        },
        {
          titulo: 'novocap',
          texto: 'sitio web institucional',
          src: require('~/static/digital/novocap.jpg'),
          categorias: 'digital',
          id: 32
        },
        {
          titulo: 'la faustina',
          texto: 'sitio web institucional',
          src: require('~/static/digital/faustina.jpg'),
          categorias: 'digital',
          id: 33
        },
        {
          titulo: 'gml group',
          texto: 'sitio web institucional',
          src: require('~/static/digital/gml.jpg'),
          categorias: 'digital',
          id: 34
        },
        {
          titulo: 'amics',
          texto: 'sitio web institucional',
          src: require('~/static/digital/amics.jpg'),
          categorias: 'digital últimos',
          id: 35
        },
        {
          titulo: 'trilogia viajes',
          texto: 'sitio web institucional',
          src: require('~/static/digital/trilogia.jpg'),
          categorias: 'digital',
          id: 36
        },
        {
          titulo: 'polo elite',
          texto: 'portal de noticias',
          src: require('~/static/digital/polo.jpg'),
          categorias: 'digital',
          id: 37
        },
        {
          titulo: 'disitribuidora merlo',
          texto: 'sitio web institucional',
          src: require('~/static/digital/merlo.jpg'),
          categorias: 'digital últimos',
          id: 38
        },
        {
          titulo: 'charmants',
          texto: 'e-commerce',
          src: require('~/static/digital/charmants.jpg'),
          categorias: 'digital',
          id: 39
        },
        {
          titulo: 'grinmar',
          texto: 'sitio web institucional',
          src: require('~/static/digital/grinmar.jpg'),
          categorias: 'digital',
          id: 40
        },
        {
          titulo: 'markey',
          texto: 'sitio web institucional',
          src: require('~/static/digital/markey.jpg'),
          categorias: 'digital',
          id: 41
        },
        {
          titulo: 'eprocure',
          texto: 'sitio web institucional',
          src: require('~/static/digital/eprocure.jpg'),
          categorias: 'digital',
          id: 42
        },
        {
          titulo: 'tecnolatina',
          texto: 'sitio web institucional',
          src: require('~/static/digital/tecnolatina.jpg'),
          categorias: 'digital',
          id: 43
        },
        {
          titulo: 'san marino',
          texto: 'sitio web institucional',
          src: require('~/static/digital/sanmarino.jpg'),
          categorias: 'digital',
          id: 44
        },
        {
          titulo: 'cohui',
          texto: 'sitio web institucional',
          src: require('~/static/digital/cohui.jpg'),
          categorias: 'digital',
          id: 45
        },
        {
          titulo: 'termoacusticas',
          texto: 'sitio web institucional',
          src: require('~/static/digital/termoacusticas.jpg'),
          categorias: 'digital',
          id: 46
        }
      ]
    }
  }
}