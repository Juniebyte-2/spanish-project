import { DestinationArticle } from '../types';

export const DESTINATION_ARTICLES: DestinationArticle[] = [
  {
    id: 'argentina',
    slug: 'argentina',
    countryName: {
      'es-MX': 'Argentina',
      'es-ES': 'Argentina',
      'en-US_UK': 'Argentina',
    },
    title: {
      'es-MX': 'Guía Definitiva de Argentina: Glaciares, Peñas Norteñas y el Encanto Porteño',
      'es-ES': 'Guía Esencial de Argentina: Glaciares, Peñas del Norte y la Magia de Buenos Aires',
      'en-US_UK': 'The Ultimate Argentina Guide: Glaciers, Northern Peñas & Buenos Aires Charm',
    },
    subtitle: {
      'es-MX': 'Desde las milongas y asados de Buenos Aires hasta el Fitz Roy y los viñedos de Cafayate. Una travesía inolvidable por el sur del continente.',
      'es-ES': 'De los cafés de Buenos Aires a las cumbres del Fitz Roy y los viñedos de Cafayate. Una travesía completa diseñada por Sunny Travels.',
      'en-US_UK': 'From Buenos Aires tango cafes to Fitz Roy peaks and Cafayate vineyards. An unforgettable South American voyage designed by Sunny Travels.',
    },
    author: {
      name: 'Valeria Rincón',
      role: {
        'es-MX': 'Especialista en Sudamérica, Sunny Travels CDMX',
        'es-ES': 'Especialista en Sudamérica, Sunny Travels',
        'en-US_UK': 'South America Specialist, Sunny Travels Mexico',
      },
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
    },
    readTimeMin: 9,
    publishedDate: '2026-08-12',
    heroImage: 'https://images.unsplash.com/photo-1589802829985-817e51171b92?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1612450622116-2917e7bfb9a7?auto=format&fit=crop&w=800&q=80', // Fitz Roy / Patagonia
      'https://images.unsplash.com/photo-1589802829985-817e51171b92?auto=format&fit=crop&w=800&q=80', // Perito Moreno
      'https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=800&q=80', // Iguazu falls
      'https://images.unsplash.com/photo-1589556264800-08ae9e129a8c?auto=format&fit=crop&w=800&q=80', // Buenos Aires Caminito
    ],
    quickStats: {
      capital: {
        'es-MX': 'Buenos Aires',
        'es-ES': 'Buenos Aires',
        'en-US_UK': 'Buenos Aires',
      },
      flightTimeFromCDMX: {
        'es-MX': '9h 15m (Vuelo directo Aeroméxico MEX - EZE)',
        'es-ES': '9h 15m desde México / 12h directo desde Madrid',
        'en-US_UK': '9h 15m direct from Mexico City (MEX to EZE)',
      },
      bestSeason: {
        'es-MX': 'Octubre a Abril (Primavera y Verano austral)',
        'es-ES': 'Octubre a Abril (Primavera y Verano austral)',
        'en-US_UK': 'October to April (Southern Spring & Summer)',
      },
      visaForMexicans: {
        'es-MX': 'Sin visa requerida para mexicanos (hasta 90 días como turista)',
        'es-ES': 'Sin visado para ciudadanos de la UE y México (90 días)',
        'en-US_UK': 'No tourist visa required for Mexican, US or UK citizens (90 days)',
      },
      languageSpoken: {
        'es-MX': 'Español (con voseo rioplatense característico)',
        'es-ES': 'Español (con voseo rioplatense)',
        'en-US_UK': 'Spanish (distinctive Rioplatense accent)',
      },
      averageDailyBudgetUSD: 75,
    },
    overview: {
      'es-MX': 'Argentina es una tierra de contrastes colosales que roba el aliento desde el primer instante. En Sunny Travels hemos diseñado esta guía para que descubras tanto los íconos ineludibles como las joyas ocultas del norte andino, la pasión de Buenos Aires y el extremo sur patagónico.',
      'es-ES': 'Argentina es una tierra de contrastes descomunales capaz de fascinar a cualquier viajero. Presentamos una guía completa que aúna las capitales culturales con la inmensidad del norte andino y la Patagonia austral.',
      'en-US_UK': 'Argentina is an immense tapestry of sublime landscapes, spirited hospitality, and world-renowned gastronomy. Sunny Travels presents this comprehensive guide covering northern Andean wonders, Patagonian ice fields, and Buenos Aires culture.',
    },
    curatedReasons: [
      {
        title: {
          'es-MX': 'Vivir una Peña Tradicional en el Norte',
          'es-ES': 'Disfrutar de una Peña Tradicional en el Norte',
          'en-US_UK': 'Experience a Traditional Folk Peña in the North',
        },
        description: {
          'es-MX': 'Una peña folclórica en Salta o Jujuy es una velada mágica de guitarras, zambas, empanadas jugosas al horno de barro y vino de la región compartida con gente hospitalaria.',
          'es-ES': 'Una peña en Salta o Jujuy supone una velada inolvidable de folclore, guitarras, empanadas artesanales y vino local entre gentes acogedoras.',
          'en-US_UK': 'An authentic peña in Salta offers an unforgettable evening of live folk guitar, regional wines, piping-hot empanadas, and warm camaraderie.',
        },
        iconName: 'Music',
      },
      {
        title: {
          'es-MX': 'Enamorarse de la Ciudad de Salta y la Quebrada de Humahuaca',
          'es-ES': 'Fascinarse con Salta y la Quebrada de Humahuaca',
          'en-US_UK': 'Fall in Love with Salta & Humahuaca Gorge',
        },
        description: {
          'es-MX': 'La arquitectura colonial de "Salta la Linda", el Museo MAAM con los Niños del Llullaillaco, y el Cerro de los Siete Colores en Purmamarca (Patrimonio de la UNESCO).',
          'es-ES': 'La arquitectura colonial de Salta, el museo MAAM y el Cerro de los Siete Colores en Purmamarca, en plena Quebrada de Humahuaca (UNESCO).',
          'en-US_UK': 'Colonial elegance in Salta, the world-famous MAAM museum high-altitude mummies, and the UNESCO-listed Quebrada de Humahuaca with its Seven Colors Hill.',
        },
        iconName: 'Mountain',
      },
      {
        title: {
          'es-MX': 'Cata de Vinos de Altura Más Allá del Malbec',
          'es-ES': 'Vinos de Altura Más Allá del Malbec',
          'en-US_UK': 'World-Class Wine Beyond Malbec (Torrontés)',
        },
        description: {
          'es-MX': 'En Cafayate, los viñedos a más de 1,700 metros producen el aromático Torrontés blanco, una experiencia enológica única que complementa los afamados tintos de Mendoza.',
          'es-ES': 'En Cafayate, los viñedos a gran altitud elaboran el afamado blanco Torrontés, una experiencia enológica singular que complementa a los tintos mendocinos.',
          'en-US_UK': 'Taste beyond Malbec: head to high-altitude Cafayate for crisp, fragrant Torrontés grown at over 1,700 meters above sea level.',
        },
        iconName: 'Wine',
      },
      {
        title: {
          'es-MX': 'Asombrarse ante el Monte Fitz Roy en El Chaltén',
          'es-ES': 'Contemplar el Monte Fitz Roy en El Chaltén',
          'en-US_UK': 'Gaze in Awe at Mount Fitz Roy in El Chaltén',
        },
        description: {
          'es-MX': 'La capital nacional del trekking en Argentina regala senderos de clase mundial hacia la Laguna de los Tres con la silueta granítica del Fitz Roy recortada contra el cielo.',
          'es-ES': 'La capital nacional del senderismo argentino ofrece rutas memorables hacia la Laguna de los Tres bajo las agujas de granito del Fitz Roy.',
          'en-US_UK': 'Argentina’s trekking capital delivers world-class trail routes to Laguna de los Tres under the dramatic granite spires of Mount Fitz Roy.',
        },
        iconName: 'Compass',
      },
      {
        title: {
          'es-MX': 'Caminar sobre el Hielo del Glaciar Perito Moreno',
          'es-ES': 'Caminar sobre el Hielo del Glaciar Perito Moreno',
          'en-US_UK': 'Trek Across the Living Ice of Perito Moreno Glacier',
        },
        description: {
          'es-MX': 'El mini-trekking con crampones sobre el Perito Moreno es una de las vivencias más intensas del planeta: hielo azul profundo, grietas milenarias y estruendosos desprendimientos.',
          'es-ES': 'El minitrekking con crampones sobre el Perito Moreno brinda una de las sensaciones más puras de la naturaleza austral entre lagunas azules y rugidos glaciares.',
          'en-US_UK': 'Strap on crampons and hike directly atop the glacier’s shimmering blue crevasses and seracs, listening to the roaring thunders of calving ice walls.',
        },
        iconName: 'Sparkles',
      },
      {
        title: {
          'es-MX': 'Navegar el Canal Beagle y Visitar Pingüinos en Tierra del Fuego',
          'es-ES': 'Navegar el Canal Beagle y Ver Pingüinos en Tierra del Fuego',
          'en-US_UK': 'Sail the Beagle Channel & Walk with Penguins',
        },
        description: {
          'es-MX': 'En Ushuaia, la ciudad del Fin del Mundo, la navegación pasa junto al emblemático Faro Les Éclaireurs y permite desembarcar para observar pingüinos magallánicos y papúa en Isla Martillo.',
          'es-ES': 'En Ushuaia, la ciudad del fin del mundo, navega junto al Faro Les Éclaireurs y contempla colonias de pingüinos de Magallanes y papúa en la Isla Martillo.',
          'en-US_UK': 'In Ushuaia, cruise past the iconic Les Éclaireurs lighthouse and observe vibrant colonies of Magellanic and gentoo penguins at Isla Martillo.',
        },
        iconName: 'Anchor',
      },
      {
        title: {
          'es-MX': 'La Energía Cosmopolita de Buenos Aires y su Cultura',
          'es-ES': 'La Energía Cosmopolita de Buenos Aires',
          'en-US_UK': 'The Cosmopolitan Soul & Culture of Buenos Aires',
        },
        description: {
          'es-MX': 'Sus barrios bohemios (San Telmo, Palermo, Recoleta), sus librerías teatrales como El Ateneo, los cafés históricos y la elegancia del tango porteño.',
          'es-ES': 'Barrios con gran personalidad como San Telmo, Palermo y Recoleta, librerías teatrales como El Ateneo y cafés con solera histórica.',
          'en-US_UK': 'Tree-lined Palermo streets, antique markets in San Telmo, El Ateneo Grand Splendid theater bookstore, and late-night culinary excellence.',
        },
        iconName: 'Coffee',
      },
      {
        title: {
          'es-MX': 'La Grandeza Indómita de las Cataratas del Iguazú',
          'es-ES': 'La Majestuosidad de las Cataratas del Iguazú',
          'en-US_UK': 'The Untamed Wonder of Iguazu Falls',
        },
        description: {
          'es-MX': 'Consideradas una de las Siete Maravillas Naturales del Mundo, las más de 275 caídas de agua y el rugido de la Garganta del Diablo rodeada de selva subtropical son inolvidables.',
          'es-ES': 'Con más de 275 saltos de agua en plena selva paranaense, el sobrecogedor rugido de la Garganta del Diablo constituye un espectáculo irrepetible.',
          'en-US_UK': 'One of the world’s most jaw-dropping natural wonders, with over 275 cascading waterfalls surrounded by lush jungle and rainbow-lit mist at the Devil’s Throat.',
        },
        iconName: 'Droplets',
      },
      {
        title: {
          'es-MX': 'El Asado Argentino y la Calidez de su Gente',
          'es-ES': 'El Tradicional Asado y la Calidez Humana',
          'en-US_UK': 'The Argentine Asado & Heartfelt Hospitality',
        },
        description: {
          'es-MX': 'Más allá de los paisajes, son los argentinos con su pasión desbordante, charlas interminables de sobremesa y el culto al asado lo que hace volver una y otra vez.',
          'es-ES': 'Junto a la geografía, es el calor de la gente, sus conversaciones entusiastas y el ritual del asado con chimichurri lo que cautiva.',
          'en-US_UK': 'The true heartbeat of Argentina is its people: deeply passionate, warm, engaging, and dedicated to the sacred culinary ritual of the weekend asado.',
        },
        iconName: 'HeartHandshake',
      },
    ],
    sections: [
      {
        id: 'introduccion',
        title: {
          'es-MX': '¿Por Qué Viajar a Argentina con Sunny Travels?',
          'es-ES': '¿Por Qué Elegir Argentina para tu Próximo Viaje?',
          'en-US_UK': 'Why Visit Argentina with Sunny Travels Mexico?',
        },
        content: {
          'es-MX': 'Para el viajero mexicano, Argentina ofrece una afinidad cultural inmediata pero con paisajes que parecen sacados de otro planeta. La vasta geografía argentina se extiende desde la selva subtropical de Misiones hasta el hielo milenario de la Antártida. Ya sea que busques trekking exigente, alta gastronomía, vinos galardonados o espectáculos de tango en rincones históricos, este país lo tiene todo.',
          'es-ES': 'Argentina despliega una variedad paisajística y cultural extraordinaria. Desde la selva húmeda de Iguazú hasta los témpanos antárticos de la Patagonia, cada región ofrece una personalidad marcada: ciudades vibrantes, gastronomía exquisita y senderos naturales de prestigio internacional.',
          'en-US_UK': 'Argentina is a land of staggering diversity. From thunderous subtropical waterfalls and sun-drenched vineyards to jagged Patagonian peaks and dramatic glacial tongues, it offers one of the most rewarding adventures in the Americas.',
        },
        quote: {
          text: {
            'es-MX': 'Argentina es uno de los países más diversos de Sudamérica. Tiene de todo: montañas nevadas, cataratas atronadoras, paisajes casi lunares, regiones vinícolas excepcionales y personas sumamente amables.',
            'es-ES': 'Argentina es uno de los países más diversos de Sudamérica. Lo tiene todo: cumbres nevadas, cascadas atronadoras, paisajes casi lunares, regiones vinícolas extraordinarias y gente de una amabilidad inolvidable.',
            'en-US_UK': 'Argentina is one of the most diverse countries in South America. It has world-class hiking, stunning natural wonders, snow-capped mountains, rushing waterfalls, delicious wine regions, and deeply welcoming people.',
          },
          author: 'Sunny Travels',
          source: 'Consejo Editorial',
        },
      },
      {
        id: 'norte-andino',
        title: {
          'es-MX': 'El Norte Revelado: Salta, Jujuy y el Legado Andino',
          'es-ES': 'El Norte Andino: Salta, Jujuy y Tradición Viva',
          'en-US_UK': 'The Andean North: Salta, Jujuy & Authentic Peñas',
        },
        content: {
          'es-MX': 'Muchos viajeros cometen el error de limitarse únicamente a Buenos Aires y Bariloche. El norte argentino es una joya deslumbrante. En Salta, las fachadas neoclásicas cobijan el Museo de Arqueología de Alta Montaña (MAAM), donde descansan con solemne respeto los Niños del Llullaillaco, ofrenda inca preservada de manera asombrosa durante más de 500 años.',
          'es-ES': 'Limitarse a Buenos Aires y Bariloche supone perderse el alma del norte argentino. En Salta, la arquitectura colonial convive con el imprescindible Museo MAAM, hogar de los Niños del Llullaillaco, testimonio incaico de valor incalculable.',
          'en-US_UK': 'Many travelers focus strictly on Buenos Aires and Patagonia, completely missing the extraordinary Andean north. In Salta, colonial plazas host the MAAM Museum, preserving the Llullaillaco children—Inca mummies discovered atop a 6,700-meter volcanic peak.',
        },
        subsections: [
          {
            subtitle: {
              'es-MX': 'La Magia de la Quebrada de Humahuaca',
              'es-ES': 'La Quebrada de Humahuaca y Purmamarca',
              'en-US_UK': 'The Splendor of Humahuaca Gorge',
            },
            text: {
              'es-MX': 'Declarada Patrimonio de la Humanidad por la UNESCO, la Quebrada deslumbra con el Cerro de los Siete Colores en Purmamarca y las Serranías del Hornocal (el cerro de 14 colores). En Cafayate, los viñedos de altura desafían los sentidos con la uva Torrontés, fresca y frutal, ideal para acompañar tamales norteños.',
              'es-ES': 'Patrimonio de la Humanidad por la UNESCO, esta quebrada cautiva con el Cerro de los Siete Colores en Purmamarca y el Hornocal. En Cafayate, las bodegas producen el singular Torrontés blanco, maridaje perfecto para la gastronomía tradicional.',
              'en-US_UK': 'A UNESCO World Heritage gorge featuring the Seven Colors Hill in Purmamarca and the 14-colored Serranía del Hornocal. Down in Cafayate, boutique bodegas craft high-altitude Torrontés wine, a vibrant white that pairs exquisitely with regional fare.',
            },
          },
        ],
      },
      {
        id: 'patagonia-austral',
        title: {
          'es-MX': 'Patagonia Mítica: El Chaltén, El Calafate y Ushuaia',
          'es-ES': 'La Patagonia Austral: Glaciares y Rutas del Fin del Mundo',
          'en-US_UK': 'Epic Patagonia: El Chaltén, Perito Moreno & Ushuaia',
        },
        content: {
          'es-MX': 'En la Patagonia profunda, la inmensidad se vuelve palpable. En El Chaltén, senderos autoguiados de ensueño conducen hasta el pie del Fitz Roy y el Cerro Torre. Más al sur, en El Calafate, el glaciar Perito Moreno avanza imponente sobre el Lago Argentino; caminar con crampones sobre sus lomos de hielo azul es una experiencia transformadora.',
          'es-ES': 'En El Chaltén, los senderos discurren hasta la base del Fitz Roy y el Cerro Torre. Más al sur, en El Calafate, el Perito Moreno se alza como una muralla de hielo viva; calzarse los crampones para caminar por sus grietas resulta una experiencia inolvidable.',
          'en-US_UK': 'Patagonia delivers raw, untamed wilderness. El Chaltén is revered as the hiking capital, with legendary day treks to Laguna de los Tres facing Mount Fitz Roy. In El Calafate, the mighty Perito Moreno glacier offers thrilling mini-ice treks across its blue seracs.',
        },
        subsections: [
          {
            subtitle: {
              'es-MX': 'El Fin del Mundo y la Fauna Austral',
              'es-ES': 'Ushuaia y el Canal Beagle',
              'en-US_UK': 'The End of the World at Beagle Channel',
            },
            text: {
              'es-MX': 'Ushuaia ofrece una navegación irrepetible por el Canal Beagle hacia el Faro Les Éclaireurs y la visita a las colonias de pingüinos en Isla Martillo, culminando con una cena de centolla fueguina fresca frente a la bahía.',
              'es-ES': 'Ushuaia permite navegar por el Canal Beagle hacia el Faro Les Éclaireurs y acercarse a las colonias de pingüinos magallánicos y papúa en la Isla Martillo, degustando después la célebre centolla patagónica.',
              'en-US_UK': 'Sailing the Beagle Channel past sea lions, cormorants, and the iconic lighthouse, followed by walking alongside gentoo and Magellanic penguins on Isla Martillo, makes Ushuaia an unmissable destination.',
            },
          },
        ],
      },
      {
        id: 'buenos-aires-cultura',
        title: {
          'es-MX': 'Buenos Aires: La Capital que Nunca Duerme',
          'es-ES': 'Buenos Aires: Pasión Urbana y Cultura',
          'en-US_UK': 'Buenos Aires: Passion, Tango & Urban Splendor',
        },
        content: {
          'es-MX': 'Buenos Aires es una metrópoli vibrante llena de romanticismo y vitalidad. Caminar por la Avenida de Mayo, contemplar el Palacio Barolo inspirado en la Divina Comedia, hojear un libro en El Ateneo Grand Splendid (antiguo teatro de ópera) o perderse los domingos en la feria de antigüedades de San Telmo mientras resuena un bandoneón es pura poesía.',
          'es-ES': 'Buenos Aires se presenta como una metrópoli elegante y llena de vitalidad. Recorrer la Avenida de Mayo, visitar el Palacio Barolo, admirar la librería El Ateneo Grand Splendid en su antiguo teatro o pasear por San Telmo un domingo evoca una magia especial.',
          'en-US_UK': 'Buenos Aires reveals an endlessly fascinating capital. Highlights include the Italianate palaces, antique stalls of San Telmo, leafy jacaranda avenues in Recoleta, and El Ateneo Grand Splendid—consistently ranked among the world’s most beautiful bookstores.',
        },
      },
    ],
    itinerary: [
      {
        days: 'Días 1-3',
        title: {
          'es-MX': 'Buenos Aires: San Telmo, Palermo y Noche de Tango',
          'es-ES': 'Buenos Aires: Barrios Emblemáticos y Espectáculo de Tango',
          'en-US_UK': 'Buenos Aires: Iconic Barrios & Milonga Experience',
        },
        description: {
          'es-MX': 'Llegada desde CDMX a Ezeiza. Paseo por Recoleta y su histórico cementerio, café con medialunas en San Telmo y cena show de tango en una milonga tradicional de Palermo.',
          'es-ES': 'Llegada a Buenos Aires. Visita a Recoleta, San Telmo, la librería El Ateneo y espectáculo de tango en Palermo.',
          'en-US_UK': 'Arrival in Buenos Aires. Explore Recoleta, San Telmo antique markets, El Ateneo bookstore, and attend an authentic tango dinner show.',
        },
        highlightLocation: 'Buenos Aires',
      },
      {
        days: 'Días 4-6',
        title: {
          'es-MX': 'Norte Andino: Salta la Linda, Peñas y Cafayate',
          'es-ES': 'Norte: Salta Colonial, Peñas y Vinos de Cafayate',
          'en-US_UK': 'Northern Splendor: Salta, Folk Peñas & Cafayate Wines',
        },
        description: {
          'es-MX': 'Vuelo a Salta. Visita al MAAM, recorrido por la Quebrada de las Conchas, degustación de Torrontés en Cafayate y noche en una tradicional peña folclórica.',
          'es-ES': 'Vuelo a Salta. Recorrido por el MAAM, Quebrada de las Conchas, bodegas de Cafayate y velada en una peña norteña.',
          'en-US_UK': 'Fly to Salta. Tour MAAM museum, drive through Quebrada de las Conchas canyon, taste crisp Torrontés in Cafayate, and spend the night at a lively peña.',
        },
        highlightLocation: 'Salta & Cafayate',
      },
      {
        days: 'Días 7-10',
        title: {
          'es-MX': 'Patagonia: Perito Moreno y Trekking en El Chaltén',
          'es-ES': 'Patagonia: Glaciar Perito Moreno y El Chaltén',
          'en-US_UK': 'Patagonia: Perito Moreno Glacier & Fitz Roy Trails',
        },
        description: {
          'es-MX': 'Vuelo a El Calafate. Caminata sobre el glaciar Perito Moreno con crampones. Traslado a El Chaltén para el trekking a Laguna de los Tres frente al Fitz Roy.',
          'es-ES': 'Vuelo a El Calafate. Minitrekking en el Perito Moreno y ruta a pie en El Chaltén bajo las torres del Fitz Roy.',
          'en-US_UK': 'Fly south to El Calafate. Ice-trek on Perito Moreno glacier. Continue to El Chaltén for the iconic day-hike to Laguna de los Tres facing Mount Fitz Roy.',
        },
        highlightLocation: 'El Calafate & El Chaltén',
      },
      {
        days: 'Días 11-13',
        title: {
          'es-MX': 'Cataratas del Iguazú: Lado Argentino y Brasileño',
          'es-ES': 'Cataratas del Iguazú: Garganta del Diablo y Selva',
          'en-US_UK': 'Iguazu Falls: Devil’s Throat & Subtropical Jungle',
        },
        description: {
          'es-MX': 'Vuelo a Puerto Iguazú. Pasarelas sobre la Garganta del Diablo, paseo náutico bajo los saltos de agua y avistamiento de tucanes y coatíes.',
          'es-ES': 'Visita al Parque Nacional Iguazú, pasarelas de la Garganta del Diablo y excursión en lancha bajo las cascadas.',
          'en-US_UK': 'Fly to Puerto Iguazú. Walk the catwalks directly above the thunderous Devil’s Throat and take a boat safari beneath the cascading falls.',
        },
        highlightLocation: 'Puerto Iguazú',
      },
    ],
    packages: [
      {
        id: 'arg-classic-10d',
        title: {
          'es-MX': 'Argentina Esencial & Glaciares (10 Días)',
          'es-ES': 'Argentina Esencial y Glaciares (10 Días)',
          'en-US_UK': 'Essential Argentina & Glaciers (10 Days)',
        },
        durationDays: 10,
        basePriceUSD: 2450,
        description: {
          'es-MX': 'Buenos Aires, Glaciar Perito Moreno y Cataratas del Iguazú con vuelos internos, hoteles 4 estrellas y seguro de viajero.',
          'es-ES': 'Buenos Aires, Perito Moreno y Cataratas del Iguazú con vuelos domésticos incluidos y hoteles seleccionados.',
          'en-US_UK': 'Buenos Aires, Perito Moreno Glacier, and Iguazu Falls including domestic flights, 4-star boutique hotels, and guides.',
        },
        highlights: {
          'es-MX': [
            'Vuelo directo MEX - EZE y vuelos internos incluidos',
            'Trekking con crampones en Perito Moreno',
            'Paseo en lancha bajo las Cataratas del Iguazú',
            'Cena tango en San Telmo con maridaje de Malbec',
          ],
          'es-ES': [
            'Vuelos internos incluidos',
            'Excursión con crampones en Perito Moreno',
            'Paseo náutico en las Cataratas del Iguazú',
            'Cena con espectáculo de tango en San Telmo',
          ],
          'en-US_UK': [
            'Roundtrip flights and domestic Argentine airfare included',
            'Guided crampon ice trek on Perito Moreno',
            'Safari boat beneath Iguazu Falls',
            'Tango dinner performance with fine Argentine wine',
          ],
        },
        includesFlightFromMexico: true,
      },
      {
        id: 'arg-full-15d',
        title: {
          'es-MX': 'Gran Expedición Argentina: Norte, Patagonia & Vinos (15 Días)',
          'es-ES': 'Gran Expedición Argentina: Norte, Patagonia y Vinos (15 Días)',
          'en-US_UK': 'Grand Argentina Expedition: North, Patagonia & Wines (15 Days)',
        },
        durationDays: 15,
        basePriceUSD: 3680,
        description: {
          'es-MX': 'La ruta insignia de Sunny Travels: Buenos Aires, Salta, Cafayate, Chaltén, Calafate e Iguazú.',
          'es-ES': 'La ruta más completa: Buenos Aires, Salta, Cafayate, El Chaltén, El Calafate e Iguazú con asesoría personalizada.',
          'en-US_UK': 'The complete explorer itinerary: Buenos Aires, Salta, Cafayate wine valleys, El Chaltén trekking, Calafate, and Iguazu.',
        },
        highlights: {
          'es-MX': [
            'Peña folclórica tradicional en Salta y visita al MAAM',
            'Cata de vinos Torrontés de altura en Cafayate',
            'Trekking guiado a Laguna de los Tres en El Chaltén',
            'Mini-trekking en Perito Moreno y navegación por el Canal Beagle',
          ],
          'es-ES': [
            'Peña folclórica en Salta y Museo MAAM',
            'Cata de vinos de altura en Cafayate',
            'Ruta guiada a Laguna de los Tres en El Chaltén',
            'Excursión a Perito Moreno y Canal Beagle',
          ],
          'en-US_UK': [
            'Traditional folk peña in Salta & MAAM Inca mummies museum',
            'High-altitude Torrontés wine tasting in Cafayate',
            'Guided Fitz Roy hike in El Chaltén',
            'Perito Moreno glacier trek and Beagle Channel cruise',
          ],
        },
        includesFlightFromMexico: true,
      },
    ],
    mexicoTravelerTips: {
      'es-MX': [
        'Vuelo directo Aeroméxico desde CDMX (Terminal 2) a Buenos Aires Ezeiza sin escalas.',
        'No requieres visa como ciudadano mexicano; solo pasaporte vigente por al menos 6 meses.',
        'El tipo de cambio es muy favorable pagando con tarjetas bancarias internacionales (tarifa MEP oficial).',
        'En los restaurantes argentinos, la carne se pide "a punto" si te gusta término medio, o "cocida" si prefieres bien cocida.',
        'Empaca por capas: mientras en Iguazú hay calor húmedo tropical, en El Calafate el viento patagónico requiere rompevientos y ropa térmica.',
      ],
      'es-ES': [
        'Vuelos directos diarios desde Madrid a Buenos Aires (Iberia / Air Europa).',
        'No se precisa visado para estancias turísticas de hasta 90 días.',
        'El pago con tarjeta aplica el tipo de cambio oficial para turistas (MEP), altamente ventajoso.',
        'La gastronomía argentina es abundante; un bife de chorizo suele ser ideal para compartir.',
        'Indispensable equipamiento cortavientos y calzado de trekking impermeable para la Patagonia.',
      ],
      'en-US_UK': [
        'Direct flights operate from major North American hubs and Mexico City directly into Buenos Aires Ezeiza.',
        'Visa-free entry for up to 90 days for Mexican, US, and UK passport holders.',
        'Foreign credit cards automatically receive the favorable tourist exchange rate (MEP rate).',
        'Tipping culture: 10% is customary in restaurants and cafes.',
        'Pack versatile layers: you may transition from humid tropical waterfalls in Iguazu to frigid winds in Patagonia within 48 hours.',
      ],
    },
  },
  {
    id: 'brazil',
    slug: 'brazil',
    countryName: {
      'es-MX': 'Brasil',
      'es-ES': 'Brasil',
      'en-US_UK': 'Brazil',
    },
    title: {
      'es-MX': 'Brasil Monumental: Ritmo Carioca, Selva Amazónica y Playas Paradisíacas',
      'es-ES': 'Brasil Inolvidable: Río de Janeiro, el Amazonas y la Bahía de Todos los Santos',
      'en-US_UK': 'Monumental Brazil: Carioca Rhythms, Amazon Rainforest & Tropical Coast',
    },
    subtitle: {
      'es-MX': 'De las alturas del Cristo Redentor y las costas de Ipanema hasta el corazón verde del Amazonas y Salvador de Bahía.',
      'es-ES': 'Del Cristo Redentor en Río a la inmensidad del Amazonas y el legado afrobrasileño de Salvador de Bahía.',
      'en-US_UK': 'From Christ the Redeemer and Ipanema beaches to deep Amazon jungle biodiversity and vibrant Bahia.',
    },
    author: {
      name: 'Mateo Sandoval',
      role: {
        'es-MX': 'Guía Senior de Destinos Tropicales, Sunny Travels',
        'es-ES': 'Especialista en Destinos Tropicales, Sunny Travels',
        'en-US_UK': 'Tropical Expeditions Lead, Sunny Travels Mexico',
      },
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
    },
    readTimeMin: 8,
    publishedDate: '2026-08-18',
    heroImage: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=1600&q=80', // Rio
    galleryImages: [
      'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=800&q=80', // Rio
      'https://images.unsplash.com/photo-1516306580123-e6e52b1b7b5f?auto=format&fit=crop&w=800&q=80', // Amazon
      'https://images.unsplash.com/photo-1544984243-ec57ea16fe25?auto=format&fit=crop&w=800&q=80', // Salvador
      'https://images.unsplash.com/photo-1578637387939-43c525550085?auto=format&fit=crop&w=800&q=80', // Beach
    ],
    quickStats: {
      capital: {
        'es-MX': 'Brasilia (Metrópolis clave: Río de Janeiro y São Paulo)',
        'es-ES': 'Brasilia (Ciudades principales: Río y São Paulo)',
        'en-US_UK': 'Brasília (Key cities: Rio de Janeiro & São Paulo)',
      },
      flightTimeFromCDMX: {
        'es-MX': '9h 30m (Vuelos diarios CDMX a São Paulo con conexión a Río)',
        'es-ES': '10h desde Madrid / 9h 30m desde México',
        'en-US_UK': '9h 30m from Mexico City to São Paulo / Rio',
      },
      bestSeason: {
        'es-MX': 'Diciembre a Marzo para verano y Carnaval; Mayo a Octubre para el Amazonas',
        'es-ES': 'Diciembre a Marzo (verano/Carnaval); Mayo a Octubre para el Amazonas',
        'en-US_UK': 'December to March for beach & Carnival; May to October for the Amazon',
      },
      visaForMexicans: {
        'es-MX': 'Sin visa de turismo para mexicanos por hasta 90 días',
        'es-ES': 'Sin visado para estancias de turismo hasta 90 días',
        'en-US_UK': 'Visa-free for tourist stays up to 90 days for Mexican & EU citizens',
      },
      languageSpoken: {
        'es-MX': 'Portugués brasileño (muy musical y acogedor)',
        'es-ES': 'Portugués brasileño',
        'en-US_UK': 'Brazilian Portuguese',
      },
      averageDailyBudgetUSD: 70,
    },
    overview: {
      'es-MX': 'Brasil es pura energía vital. La calidez de su gente, la melodía de la bossa nova en los atardeceres de Arpoador, la magnificencia del Pan de Azúcar y la inmensidad del río Amazonas crean un destino magnético para los viajeros que buscan naturaleza exuberante y alegría contagiosa.',
      'es-ES': 'Brasil deslumbra por su vitalidad inagotable. Playas doradas, selvas primigenias y una fusión cultural fascinante hacen de este país un destino irresistible para cualquier amante de los grandes viajes.',
      'en-US_UK': 'Brazil is pure sensory ecstasy: the rhythmic pulse of samba, emerald rainforests sheltering pink river dolphins, and golden Atlantic beaches lined with coconut palms and barefoot caipirinha stands.',
    },
    curatedReasons: [
      {
        title: {
          'es-MX': 'El Panorama Legendario de Río de Janeiro',
          'es-ES': 'Las Vistas Incomparables de Río de Janeiro',
          'en-US_UK': 'The Legendary Vistas of Rio de Janeiro',
        },
        description: {
          'es-MX': 'Subir en tren cremallera por el bosque de Tijuca hasta el Cristo Redentor y tomar el teleférico del Pan de Azúcar para ver el atardecer sobre la Bahía de Guanabara.',
          'es-ES': 'Ascender al Cristo Redentor y coronar el Pan de Azúcar en teleférico contemplando la bahía de Guanabara al ocaso.',
          'en-US_UK': 'Ascend through the Tijuca jungle to Christ the Redeemer atop Corcovado and take the cable car to Sugarloaf Mountain for sunset.',
        },
        iconName: 'Sun',
      },
      {
        title: {
          'es-MX': 'Expedición a los Ecosistemas del Amazonas',
          'es-ES': 'Aventura en la Selva del Amazonas',
          'en-US_UK': 'Deep Amazon Rainforest Expeditions',
        },
        description: {
          'es-MX': 'Desde Manaos, navegar el Encuentro de las Aguas (Río Negro y Solimões) y hospedarse en un ecolodge flotante con avistamiento de delfines rosados y caminatas nocturnas.',
          'es-ES': 'Navegar el Encuentro de las Aguas en Manaos y pernoctar en un ecolodge en plena selva con observación de fauna.',
          'en-US_UK': 'Cruise the Encontro das Águas where two rivers collide without mixing, and stay in an eco-lodge searching for pink river dolphins and night wildlife.',
        },
        iconName: 'Compass',
      },
      {
        title: {
          'es-MX': 'La Herencia Afrobrasileña de Salvador de Bahía',
          'es-ES': 'El Encanto Histórico de Salvador de Bahía',
          'en-US_UK': 'Afro-Brazilian Soul in Salvador da Bahia',
        },
        description: {
          'es-MX': 'Las calles empedradas del Pelourinho, los tambores de Olodum, la capoeira en las plazas y los platillos sazonados con aceite de dendê como el acarajé y la moqueca.',
          'es-ES': 'Las coloridas calles del Pelourinho, la música de percusión afrobrasileña y la cocina bahiana como la moqueca y el acarajé.',
          'en-US_UK': 'Cobblestone streets of Pelourinho, thunderous drumbeats of Olodum, acrobatics of capoeira, and fragrance of seafood moqueca.',
        },
        iconName: 'HeartHandshake',
      },
    ],
    sections: [
      {
        id: 'rio-magia',
        title: {
          'es-MX': 'Río de Janeiro: La Ciudad Maravillosa',
          'es-ES': 'Río de Janeiro: Paisaje y Estilo de Vida',
          'en-US_UK': 'Rio de Janeiro: The Marvelous City',
        },
        content: {
          'es-MX': 'Pocas ciudades en el mundo combinan una topografía tan dramática con una cultura de playa tan relajada. En Copacabana e Ipanema, los cariocas practican futvoley, beben agua de coco fría y disfrutan del sol. El barrio bohemio de Santa Teresa, con sus mansiones del siglo XIX y galerías de arte, ofrece un refugio encantador con vistas privilegiadas.',
          'es-ES': 'Río fusiona naturaleza desbordante y vida cosmopolita. Ipanema y Copacabana son el epicentro social, mientras Santa Teresa y Lapa concentran la bohemia y los clubes de samba tradicional.',
          'en-US_UK': 'Rio’s iconic topography blends jungle-clad granite mountains with azure ocean shores. Beyond the famed sands of Ipanema and Copacabana lies bohemian Santa Teresa and the pulsating samba halls of Lapa.',
        },
      },
      {
        id: 'gastronomia-brasil',
        title: {
          'es-MX': 'Gastronomía: Del Rodizio a la Moqueca',
          'es-ES': 'Gastronomía Brasileña: Sabores Tropicales',
          'en-US_UK': 'Brazilian Culinary Treasures: From Churrasco to Moqueca',
        },
        content: {
          'es-MX': 'La cocina brasileña es un banquete constante. Para los amantes de la carne, una auténtica churrascaria rodizio ofrece cortes exquisitos como la picanha sazonada con sal gruesa. En el nordeste, la moqueca de camarón cocinada en cazuela de barro con leche de coco y pimientos es una delicia incomparable.',
          'es-ES': 'La cocina de Brasil es variada y sabrosa. Destacan los rodizios de churrasco con cortes selectos de picanha, y la moqueca de pescado y mariscos con leche de coco típica de Bahía.',
          'en-US_UK': 'Indulge in authentic churrascarias serving tender picanha carved tableside, savory feijoada stews, and Bahian moqueca stew simmered in clay pots with coconut milk and dendê palm oil.',
        },
      },
    ],
    itinerary: [
      {
        days: 'Días 1-4',
        title: {
          'es-MX': 'Río de Janeiro: Cristo Redentor, Ipanema y Lapa',
          'es-ES': 'Río de Janeiro: Playas y Lugares Clásicos',
          'en-US_UK': 'Rio de Janeiro: Beaches, Icons & Samba Nights',
        },
        description: {
          'es-MX': 'Llegada a Río. Visita al Corcovado, Pan de Azúcar, paseo en bicicleta por Ipanema y noche de samba en Lapa.',
          'es-ES': 'Llegada y estancia en Río. Subida al Cristo, Pan de Azúcar y paseo por Ipanema y Leblon.',
          'en-US_UK': 'Explore Corcovado, Sugarloaf, bike along Leblon & Ipanema, and experience live samba in historic Lapa.',
        },
        highlightLocation: 'Río de Janeiro',
      },
      {
        days: 'Días 5-7',
        title: {
          'es-MX': 'Salvador de Bahía: Pelourinho y Cultura Afro',
          'es-ES': 'Salvador de Bahía: Patrimonio y Música',
          'en-US_UK': 'Salvador da Bahia: Afro-Brazilian Heritage',
        },
        description: {
          'es-MX': 'Vuelo a Salvador. Recorrido colonial por el Pelourinho, show folclórico del Balé Folclórico da Bahia y degustación de cocina bahiana.',
          'es-ES': 'Vuelo a Salvador. Paseo por el casco histórico, templos dorados y música tradicional en directo.',
          'en-US_UK': 'Fly to Salvador. Walk colorful colonial streets, admire gilded church interiors, and witness Afro-Brazilian drumming circles.',
        },
        highlightLocation: 'Salvador da Bahia',
      },
      {
        days: 'Días 8-11',
        title: {
          'es-MX': 'Selva Amazónica: Lodge Flotante en Manaos',
          'es-ES': 'Amazonas: Inmersión en la Selva de Manaos',
          'en-US_UK': 'Amazon Basin: Jungle Lodge & River Safaris',
        },
        description: {
          'es-MX': 'Vuelo a Manaos. Encuentro de las Aguas, safari en canoa por igapós en busca de fauna y noche bajo el cielo estrellado de la Amazonia.',
          'es-ES': 'Vuelo a Manaos y navegación hacia el ecolodge amazónico con salidas de observación de fauna.',
          'en-US_UK': 'Fly to Manaus and boat into the rainforest. Canoe through flooded forests, spot wildlife, and hear the sounds of the jungle.',
        },
        highlightLocation: 'Manaos / Amazonas',
      },
    ],
    packages: [
      {
        id: 'brazil-classic-9d',
        title: {
          'es-MX': 'Brasil Soñado: Río de Janeiro e Iguazú (9 Días)',
          'es-ES': 'Brasil Esencial: Río e Iguazú (9 Días)',
          'en-US_UK': 'Dreaming Brazil: Rio & Iguassu (9 Days)',
        },
        durationDays: 9,
        basePriceUSD: 2190,
        description: {
          'es-MX': 'Lo mejor de Río con vistas privadas del Cristo Redentor y la perspectiva panorámica de las Cataratas del Iguazú desde el lado brasileño.',
          'es-ES': 'Recorrido por Río de Janeiro y estancia en las Cataratas de Iguazú con vuelos y visitas guiadas.',
          'en-US_UK': 'Combine vibrant Rio de Janeiro with the panoramic Brazilian vistas of Iguassu National Park.',
        },
        highlights: {
          'es-MX': [
            'Hotel boutique frente al mar en Ipanema',
            'Subida al Corcovado y Pan de Azúcar con guía privado',
            'Vuelo panorámico o paseo en lancha en Iguazú',
            'Desayuno buffet tropical diario',
          ],
          'es-ES': [
            'Alojamiento selecto en Ipanema',
            'Guía exclusivo para Corcovado y Pan de Azúcar',
            'Visita completa al Parque Nacional de Iguazú',
            'Traslados privados en todas las etapas',
          ],
          'en-US_UK': [
            'Beachfront boutique stay in Ipanema',
            'Private sunrise access to Corcovado',
            'Helicopter flight or Macuco safari boat at Iguassu',
            'All airport transfers and internal flights',
          ],
        },
        includesFlightFromMexico: true,
      },
    ],
    mexicoTravelerTips: {
      'es-MX': [
        'Los mexicanos no necesitan visa para estancias turísticas menores a 90 días.',
        'Se recomienda contar con vacuna contra la fiebre amarilla si visitas la zona del Amazonas.',
        'En Río, usa la aplicación de Uber o taxis oficiales de cooperativa en los aeropuertos Galeão (GIG) y Santos Dumont.',
        'Prueba el pan de queso (pão de queijo) calientito por las mañanas con café con leche.',
      ],
      'es-ES': [
        'Exención de visado para ciudadanos españoles en viajes de ocio.',
        'Vacuna de fiebre amarilla recomendada para estancias en zonas de selva.',
        'Uso habitual de tarjetas de débito/crédito sin contacto en todo el país.',
      ],
      'en-US_UK': [
        'No visa required for Mexican, UK, or EU leisure travelers.',
        'Yellow fever vaccination certificate is recommended for Amazon travel.',
        'Tap water is not recommended for drinking; stick to bottled mineral water (água mineral com/sem gás).',
      ],
    },
  },
  {
    id: 'spain',
    slug: 'spain',
    countryName: {
      'es-MX': 'España',
      'es-ES': 'España',
      'en-US_UK': 'Spain',
    },
    title: {
      'es-MX': 'España Eterna: Palacios Reales, Joyas de Gaudí y el Flamenco de Andalucía',
      'es-ES': 'España Inolvidable: Arte, Arquitectura y Rutas Gastronómicas',
      'en-US_UK': 'Timeless Spain: Royal Palaces, Gaudí Treasures & Andalusian Soul',
    },
    subtitle: {
      'es-MX': 'De los museos de Madrid y el modernismo de Barcelona a la Alhambra de Granada y las tapas de Sevilla.',
      'es-ES': 'De los museos de Madrid a la Sagrada Familia de Barcelona y el esplendor andaluz.',
      'en-US_UK': 'From Madrid’s Prado and Barcelona’s modernist icons to Granada’s Alhambra and Seville’s tapas alleys.',
    },
    author: {
      name: 'Sofía Morales',
      role: {
        'es-MX': 'Directora de Rutas Europeas, Sunny Travels',
        'es-ES': 'Especialista en Destinos Europeos, Sunny Travels',
        'en-US_UK': 'European Tours Director, Sunny Travels Mexico',
      },
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80',
    },
    readTimeMin: 8,
    publishedDate: '2026-08-22',
    heroImage: 'https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=1600&q=80', // Madrid / Spain
    galleryImages: [
      'https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=800&q=80', // Madrid
      'https://images.unsplash.com/photo-1583422409516-2895a77efded?auto=format&fit=crop&w=800&q=80', // Barcelona Sagrada Familia
      'https://images.unsplash.com/photo-1566838318109-a8bffb91d082?auto=format&fit=crop&w=800&q=80', // Alhambra Granada
      'https://images.unsplash.com/photo-1558642084-fd07fae5282e?auto=format&fit=crop&w=800&q=80', // Seville
    ],
    quickStats: {
      capital: {
        'es-MX': 'Madrid',
        'es-ES': 'Madrid',
        'en-US_UK': 'Madrid',
      },
      flightTimeFromCDMX: {
        'es-MX': '10h 30m (Vuelos directos diarios Aeroméxico / Iberia MEX - MAD)',
        'es-ES': 'Vuelo directo intercontinental desde México (10h 30m)',
        'en-US_UK': '10h 30m direct from Mexico City to Madrid (MAD)',
      },
      bestSeason: {
        'es-MX': 'Primavera (Abril a Junio) y Otoño (Septiembre a Noviembre)',
        'es-ES': 'Primavera y Otoño para climas templados',
        'en-US_UK': 'Spring (April-June) and Autumn (September-November)',
      },
      visaForMexicans: {
        'es-MX': 'Espacio Schengen: 90 días sin visa para mexicanos (ETIAS cuando aplique)',
        'es-ES': 'Espacio Schengen europeo',
        'en-US_UK': 'Schengen Area: 90 days visa-free for Mexican, US, and UK citizens',
      },
      languageSpoken: {
        'es-MX': 'Español (Castellano), Catalán, Gallego, Euskera',
        'es-ES': 'Español (Castellano), Catalán, Gallego, Euskera',
        'en-US_UK': 'Spanish (Castilian), Catalan, Galician, Basque',
      },
      averageDailyBudgetUSD: 110,
    },
    overview: {
      'es-MX': 'España es uno de los destinos predilectos de los viajeros mexicanos por la profunda conexión histórica y la inagotable riqueza cultural. La gastronomía de vanguardia convive con tabernas centenarias, trenes de alta velocidad (AVE) que conectan capitales en un par de horas, y monumentos declarados Patrimonio de la Humanidad en cada provincia.',
      'es-ES': 'España ofrece un compendio monumental inigualable: ciudades cosmopolitas, pueblos medievales, costa mediterránea y una cultura culinaria reconocida como una de las mejores del mundo.',
      'en-US_UK': 'Spain is an intoxicating sensory blend of sun-drenched plazas, flamenco rhythms, world-renowned avant-garde gastronomy, and architectural wonders spanning Islamic palaces, Gothic cathedrals, and Gaudí dreamscapes.',
    },
    curatedReasons: [
      {
        title: {
          'es-MX': 'El Triángulo del Arte y Paseo del Prado en Madrid',
          'es-ES': 'El Paseo del Arte en Madrid',
          'en-US_UK': 'Madrid’s Golden Triangle of Art',
        },
        description: {
          'es-MX': 'Las Meninas de Velázquez en el Museo del Prado, el Guernica de Picasso en el Reina Sofía y el Parque del Retiro declarado Patrimonio de la Humanidad.',
          'es-ES': 'El Museo del Prado, el Reina Sofía y el Thyssen-Bornemisza junto al histórico Parque de El Retiro.',
          'en-US_UK': 'Marvel at Velázquez’s Las Meninas in the Prado, Picasso’s Guernica at the Reina Sofía, and stroll the UNESCO-listed Retiro park.',
        },
        iconName: 'Sparkles',
      },
      {
        title: {
          'es-MX': 'La Fantasía Arquitectónica de Gaudí en Barcelona',
          'es-ES': 'El Legado Modernista de Gaudí en Barcelona',
          'en-US_UK': 'Gaudí’s Architectural Marvels in Barcelona',
        },
        description: {
          'es-MX': 'La imponente Basílica de la Sagrada Familia, el colorido Park Güell y las onduladas fachadas de Casa Batlló frente al Mediterráneo.',
          'es-ES': 'La Sagrada Familia, el Park Güell y el Paseo de Gracia con las casas modernistas Batlló y Milà.',
          'en-US_UK': 'Gaze upon the towering spires of the Sagrada Família, wander mosaic benches in Park Güell, and explore the Gothic Quarter.',
        },
        iconName: 'Compass',
      },
      {
        title: {
          'es-MX': 'La Alhambra de Granada y la Pasión Andaluza',
          'es-ES': 'La Alhambra y el Alma de Andalucía',
          'en-US_UK': 'The Alhambra of Granada & Andalusian Passion',
        },
        description: {
          'es-MX': 'Los Palacios Nazaríes con sus arabescos y fuentes de agua, la Mezquita-Catedral de Córdoba y el tapeo en el barrio de Santa Cruz en Sevilla.',
          'es-ES': 'Los Palacios Nazaríes de Granada, la Mezquita de Córdoba y el barrio de Santa Cruz en Sevilla al son del flamenco.',
          'en-US_UK': 'Walk the fragrant courtyards of the Alhambra palaces, marvel at the arches of Córdoba’s Mezquita, and savor tapas in Seville.',
        },
        iconName: 'Sun',
      },
    ],
    sections: [
      {
        id: 'madrid-corazon',
        title: {
          'es-MX': 'Madrid: Elegancia, Plazas y Vida Nocturna',
          'es-ES': 'Madrid: La Gran Capital',
          'en-US_UK': 'Madrid: Royalty, Grand Plazas & Endless Nightlife',
        },
        content: {
          'es-MX': 'Madrid recibe a los mexicanos con los brazos abiertos. Desde un bocadillo de calamares en la Plaza Mayor hasta un vermut en La Latina o una cena en el Barrio de Salamanca, la ciudad contagia vitalidad. En tren de alta velocidad, excursiones a Toledo o Segovia permiten tocar dos milenios de historia en una sola jornada.',
          'es-ES': 'Madrid deslumbra por su atmósfera abierta y cosmopolita. La Gran Vía, el Palacio Real y los paseos por Chueca, Malasaña y Salamanca muestran la diversidad y ritmo de la capital.',
          'en-US_UK': 'Madrid greets visitors with regal elegance and effervescent hospitality. Enjoy morning churros con chocolate at San Ginés, explore the Royal Palace, and embark on day trips to medieval Toledo and Segovia.',
        },
      },
      {
        id: 'tapas-gastronomia',
        title: {
          'es-MX': 'La Cultura del Tapeo y la Gastronomía Ibérica',
          'es-ES': 'Tapeo y Vanguardia Culinaria',
          'en-US_UK': 'The Art of Tapas & World-Class Iberian Cuisine',
        },
        content: {
          'es-MX': 'Comer en España no es solo alimentarse; es una ceremonia social. El jamón ibérico de bellota 100%, la tortilla de patatas jugosa, las gambas al ajillo y los vinos de La Rioja o Ribera del Duero forman parte de una experiencia culinaria inolvidable.',
          'es-ES': 'La gastronomía es pilar esencial del viaje: desde los afamados pintxos del norte y los arroces del Levante hasta el jamón de bellota y los vinos de Denominación de Origen.',
          'en-US_UK': 'From melt-in-the-mouth acorn-fed jamón ibérico to crispy patatas bravas, Basque pintxos, and bold Ribera del Duero vintages, dining in Spain is a celebrated cultural ritual.',
        },
      },
    ],
    itinerary: [
      {
        days: 'Días 1-4',
        title: {
          'es-MX': 'Madrid & Excursión a Toledo',
          'es-ES': 'Madrid y Toledo Histórico',
          'en-US_UK': 'Madrid Highlights & Medieval Toledo',
        },
        description: {
          'es-MX': 'Llegada a Madrid en vuelo directo desde CDMX. Museo del Prado, Palacio Real, Barrio de las Letras y excursión de un día en AVE a Toledo.',
          'es-ES': 'Estancia en Madrid con visitas culturales y escapada en tren rápido a Toledo.',
          'en-US_UK': 'Arrival in Madrid. Explore the Prado, Royal Palace, Retiro Park, and take the 30-minute high-speed train to Toledo.',
        },
        highlightLocation: 'Madrid & Toledo',
      },
      {
        days: 'Días 5-8',
        title: {
          'es-MX': 'Andalucía: Córdoba, Sevilla y Granada',
          'es-ES': 'Andalucía Monumental: Sevilla, Córdoba y Granada',
          'en-US_UK': 'Andalusia: Córdoba, Seville & The Alhambra',
        },
        description: {
          'es-MX': 'AVE a Córdoba para ver la Mezquita. Continuación a Sevilla (Plaza de España y Real Alcázar) y traslado a Granada para visitar la Alhambra.',
          'es-ES': 'Ruta andaluza en tren de alta velocidad: Mezquita de Córdoba, Alcázar de Sevilla y Palacios Nazaríes en Granada.',
          'en-US_UK': 'High-speed AVE to Córdoba’s Mezquita, romantic Seville carriage tours, and private evening access to the Alhambra.',
        },
        highlightLocation: 'Sevilla & Granada',
      },
      {
        days: 'Días 9-12',
        title: {
          'es-MX': 'Barcelona: Gaudí y Costa Mediterránea',
          'es-ES': 'Barcelona Modernista y Mediterránea',
          'en-US_UK': 'Barcelona: Gaudí & Mediterranean Charm',
        },
        description: {
          'es-MX': 'AVE a Barcelona. Entrada sin filas a la Sagrada Familia, paseo por el Barrio Gótico, vistas desde Montjuïc y cena de paella marinera en la Barceloneta.',
          'es-ES': 'Llegada a Barcelona. Sagrada Familia, Park Güell, Barrio Gótico y gastronomía mediterránea.',
          'en-US_UK': 'High-speed rail to Barcelona. Skip-the-line Sagrada Família tour, stroll Park Güell, and enjoy seafood paella by the marina.',
        },
        highlightLocation: 'Barcelona',
      },
    ],
    packages: [
      {
        id: 'spain-triad-11d',
        title: {
          'es-MX': 'Ruta de Reyes: Madrid, Andalucía y Barcelona (11 Días)',
          'es-ES': 'España Imperial y Mediterránea (11 Días)',
          'en-US_UK': 'Royal Spain: Madrid, Andalusia & Barcelona (11 Days)',
        },
        durationDays: 11,
        basePriceUSD: 2890,
        description: {
          'es-MX': 'Vuelos directos desde CDMX, hoteles boutique céntricos, billetes de tren AVE preferente y entradas VIP sin filas a la Alhambra y Sagrada Familia.',
          'es-ES': 'Circuito en trenes AVE con hoteles céntricos y accesos preferentes a los grandes monumentos.',
          'en-US_UK': 'Includes transatlantic flights, boutique 4-star hotels, high-speed rail passes, and skip-the-line Alhambra & Sagrada Família passes.',
        },
        highlights: {
          'es-MX': [
            'Vuelo directo Aeroméxico o Iberia MEX - MAD',
            'Boletos de tren AVE de alta velocidad incluidos',
            'Acceso prioritario a la Alhambra de Granada',
            'Visita guiada a la Sagrada Familia en Barcelona',
          ],
          'es-ES': [
            'Trenes de alta velocidad AVE en clase confort',
            'Entrada preferente a la Alhambra y Sagrada Familia',
            'Hoteles boutique en el centro histórico',
            'Seguro de viaje internacional de cobertura total',
          ],
          'en-US_UK': [
            'Direct flights from Mexico City to Madrid',
            'First-class AVE high-speed train tickets',
            'Skip-the-line VIP access to the Alhambra & Sagrada Família',
            'Curated tapas walking tours in Seville and Madrid',
          ],
        },
        includesFlightFromMexico: true,
      },
    ],
    mexicoTravelerTips: {
      'es-MX': [
        'Conexión aérea inmejorable con hasta 5 vuelos directos diarios desde CDMX y Cancún a Madrid Barajas.',
        'Los horarios de comida en España son más tardíos: el almuerzo suele ser entre 14:00 y 16:00, y la cena a partir de las 21:00.',
        'La red de trenes de alta velocidad (AVE / Iryo) es comodísima; te ahorra horas de aeropuertos.',
        'En Sunny Travels incluimos siempre el seguro médico internacional exigido para viajar al espacio Schengen.',
      ],
      'es-ES': [
        'Excelente infraestructura de transporte ferroviario de alta velocidad entre las principales ciudades.',
        'Horarios comerciales amplios y excelente seguridad ciudadana en los centros urbanos.',
      ],
      'en-US_UK': [
        'Frequent nonstop flights connect Mexico City and North America with Madrid and Barcelona.',
        'Spaniards dine late: lunch typically runs 2:00 PM - 4:00 PM, while dinner starts after 9:00 PM.',
        'High-speed trains (AVE) link downtown Madrid to Barcelona in just 2.5 hours.',
      ],
    },
  },
  {
    id: 'japan',
    slug: 'japan',
    countryName: {
      'es-MX': 'Japón',
      'es-ES': 'Japón',
      'en-US_UK': 'Japan',
    },
    title: {
      'es-MX': 'Japón Fascinante: Neón Futurista, Templos Milenarios y el Monte Fuji',
      'es-ES': 'Japón al Detalle: Tradición Milenaria y Vanguardia Tecnológica',
      'en-US_UK': 'Fascinating Japan: Neon Metropolis, Ancient Shrines & Mount Fuji',
    },
    subtitle: {
      'es-MX': 'De los rascacielos de Tokio y los trenes bala Shinkansen a los bosques de bambú de Kioto y los onsen de Hakone.',
      'es-ES': 'De los distritos de Tokio al silencio de los templos de Kioto y los baños termales de Hakone.',
      'en-US_UK': 'From Tokyo’s electric skyline and bullet trains to Kyoto’s bamboo groves, geisha districts, and hot springs.',
    },
    author: {
      name: 'Kenji Takahashi',
      role: {
        'es-MX': 'Especialista en Asia Oriental, Sunny Travels',
        'es-ES': 'Especialista en Asia Oriental, Sunny Travels',
        'en-US_UK': 'East Asia Travel Specialist, Sunny Travels Mexico',
      },
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80',
    },
    readTimeMin: 9,
    publishedDate: '2026-08-25',
    heroImage: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1600&q=80', // Japan pagoda Fuji
    galleryImages: [
      'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80', // Kyoto
      'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=800&q=80', // Tokyo neon
      'https://images.unsplash.com/photo-1578637387939-43c525550085?auto=format&fit=crop&w=800&q=80', // Mount Fuji
      'https://images.unsplash.com/photo-1492571350019-22de08371fd3?auto=format&fit=crop&w=800&q=80', // Torii
    ],
    quickStats: {
      capital: {
        'es-MX': 'Tokio',
        'es-ES': 'Tokio',
        'en-US_UK': 'Tokyo',
      },
      flightTimeFromCDMX: {
        'es-MX': '14h 45m (Vuelo directo transpacífico ANA / Aeroméxico MEX - NRT)',
        'es-ES': 'Vuelo directo desde CDMX a Tokio Narita / Conexión europea',
        'en-US_UK': '14h 45m nonstop from Mexico City to Tokyo Narita (NRT)',
      },
      bestSeason: {
        'es-MX': 'Primavera (Cerezos en flor / Sakura, marzo-mayo) y Otoño (Koyo, octubre-noviembre)',
        'es-ES': 'Primavera (Sakura) y Otoño (Koyo) para temperaturas ideales',
        'en-US_UK': 'Spring (Cherry Blossoms / Sakura) and Autumn (Koyo foliage)',
      },
      visaForMexicans: {
        'es-MX': 'Sin visa requerida para mexicanos (hasta 90 días con pasaporte vigente)',
        'es-ES': 'Exención de visado para estancias de turismo hasta 90 días',
        'en-US_UK': 'Visa-free for up to 90 days for Mexican, US, and UK passport holders',
      },
      languageSpoken: {
        'es-MX': 'Japonés (señalización bilingüe en inglés en transporte y estaciones)',
        'es-ES': 'Japonés (rotulación en inglés en estaciones y puntos clave)',
        'en-US_UK': 'Japanese (broad English signage across rail stations and hotels)',
      },
      averageDailyBudgetUSD: 120,
    },
    overview: {
      'es-MX': 'Japón parece un viaje al futuro y al pasado simultáneamente. En Tokio cruzas el paso peatonal más concurrido del mundo en Shibuya y minutos después te adentras en el sosiego milenario del santuario Meiji. La puntualidad milimétrica del Shinkansen, la delicadeza del kaiseki tradicional y la reverencia japonesa por la hospitalidad (Omotenashi) hacen de este viaje algo sublime.',
      'es-ES': 'Japón seduce por el equilibrio perfecto entre innovación tecnológica y devoción por sus costumbres ancestrales. Santuarios sintoístas, jardines zen y rascacielos vanguardistas conviven en armonía absoluta.',
      'en-US_UK': 'Japan seamlessly bridges the hyper-futuristic and the deeply sacred. Cross the pulsating Shibuya Scramble, ride the ultra-smooth Shinkansen bullet train past snow-capped Mount Fuji, and soak in volcanic onsens surrounded by cedar forests.',
    },
    curatedReasons: [
      {
        title: {
          'es-MX': 'Los Mil Torii Rojos de Fushimi Inari en Kioto',
          'es-ES': 'El Santuario Fushimi Inari en Kioto',
          'en-US_UK': 'The Thousand Vermilion Torii Gates of Fushimi Inari',
        },
        description: {
          'es-MX': 'Un sendero hipnótico de miles de puertas torii bermellón serpenteando por la montaña sagrada, seguido por el bosque de bambú de Arashiyama y el pabellón dorado Kinkaku-ji.',
          'es-ES': 'Un laberinto de toriis que asciende por la ladera de la colina en Kioto, complementado por el Kinkaku-ji y el bosque de bambú.',
          'en-US_UK': 'Hike through thousands of vibrant orange torii gates snaking up sacred Mount Inari, then explore the serene bamboo grove of Arashiyama.',
        },
        iconName: 'Compass',
      },
      {
        title: {
          'es-MX': 'La Experiencia de un Ryokan Tradicional con Onsen',
          'es-ES': 'El Sosiego de un Ryokan con Aguas Termales',
          'en-US_UK': 'Traditional Ryokan Stay & Healing Onsens',
        },
        description: {
          'es-MX': 'Dormir sobre tatami en un ryokan de madera en Hakone, vestir un yukata, cenar varios tiempos de gastronomía kaiseki y sumergirse en aguas termales con vista al Monte Fuji.',
          'es-ES': 'Alojarse sobre tatami en Hakone, deleitarse con un menú degustación kaiseki y relajarse en baños termales onsen.',
          'en-US_UK': 'Sleep on tatami mats at a boutique Hakone ryokan, dress in a comfortable cotton yukata, indulge in a multi-course kaiseki feast, and soak in outdoor hot springs.',
        },
        iconName: 'Sparkles',
      },
      {
        title: {
          'es-MX': 'El Tokio de los Contrastes: Akihabara, Shinjuku y Ginza',
          'es-ES': 'Los Distritos de Tokio: Vanguardia y Tradición',
          'en-US_UK': 'Tokyo’s Contrasting Neighborhoods',
        },
        description: {
          'es-MX': 'De la cultura anime y tecnológica en Akihabara a las tiendas de lujo de Ginza, los callejones con farolillos rojos de Omoide Yokocho y la tranquilidad de Asakusa.',
          'es-ES': 'De la tecnología de Akihabara a la distinción de Ginza y el templo Senso-ji en Asakusa.',
          'en-US_UK': 'From neon-lit anime shops in Akihabara to luxury flagships in Ginza and tiny yakitori bars tucked along Omoide Yokocho in Shinjuku.',
        },
        iconName: 'Sun',
      },
    ],
    sections: [
      {
        id: 'tokyo-kioto',
        title: {
          'es-MX': 'La Dualidad Tokio - Kioto en Tren Bala',
          'es-ES': 'Tokio y Kioto: Dos Rostros de Japón',
          'en-US_UK': 'The Tokyo-Kyoto Axis via Shinkansen',
        },
        content: {
          'es-MX': 'El Shinkansen conecta la hiperactividad de Tokio con la calma espiritual de Kioto en apenas 2 horas y 15 minutos a más de 300 km/h. En Kioto se conservan más de 2,000 templos y santuarios budistas y sintoístas, así como el histórico distrito de Gion donde aún es posible avistar a las aprendices de geisha (maiko).',
          'es-ES': 'El tren bala une en poco más de dos horas la modernidad de Tokio con el corazón histórico de Kioto, hogar de más de dos mil templos y de los tradicionales callejones de Gion.',
          'en-US_UK': 'The Shinkansen links the neon excitement of Tokyo with Kyoto’s tranquil cedar forests in just over two hours. Kyoto preserves thousands of ancient temples, tranquil stone rock gardens, and historic tea houses in Gion.',
        },
      },
    ],
    itinerary: [
      {
        days: 'Días 1-4',
        title: {
          'es-MX': 'Tokio: Shibuya, Shinjuku, Asakusa y Akihabara',
          'es-ES': 'Tokio: Distritos Principales',
          'en-US_UK': 'Tokyo: Shrines, Skytrees & Iconic Crossings',
        },
        description: {
          'es-MX': 'Llegada en vuelo directo a Narita. Templo Senso-ji en Asakusa, cruce de Shibuya, vistas desde Shibuya Sky y cena de ramen artesanal en Shinjuku.',
          'es-ES': 'Llegada a Tokio. Templo Senso-ji, cruce de Shibuya, vistas panorámicas y gastronomía local.',
          'en-US_UK': 'Arrive in Tokyo. Visit Senso-ji temple in Asakusa, witness the Shibuya Scramble, take in panoramic views from Shibuya Sky, and savor tonkotsu ramen.',
        },
        highlightLocation: 'Tokio',
      },
      {
        days: 'Días 5-6',
        title: {
          'es-MX': 'Hakone: Monte Fuji y Aguas Termales Onsen',
          'es-ES': 'Hakone: Vistas del Fuji y Ryokan',
          'en-US_UK': 'Hakone: Mount Fuji Views & Volcanic Springs',
        },
        description: {
          'es-MX': 'Traslado panorámico a Hakone. Navegación en el Lago Ashi, teleférico sobre el valle volcánico de Owakudani y noche en un ryokan con onsen.',
          'es-ES': 'Excursión a Hakone. Paseo en barco por el lago Ashi y alojamiento en un ryokan con cena kaiseki.',
          'en-US_UK': 'Travel to Hakone. Cruise Lake Ashi with views of Mount Fuji, ride the Owakudani ropeway, and unwind in thermal onsen baths.',
        },
        highlightLocation: 'Hakone & Fuji',
      },
      {
        days: 'Días 7-10',
        title: {
          'es-MX': 'Kioto, Nara y Osaka: Templos y Comida Callejera',
          'es-ES': 'Kioto y Kansai: Patrimonio y Gastronomía',
          'en-US_UK': 'Kyoto, Nara Deer Park & Osaka Food Scene',
        },
        description: {
          'es-MX': 'Shinkansen a Kioto. Fushimi Inari, bosque de Arashiyama, ciervos sagrados en el parque de Nara y los mejores puestos de takoyaki en Dotonbori (Osaka).',
          'es-ES': 'Estancia en Kioto y escapada a Nara y Osaka para probar la cocina callejera en Dotonbori.',
          'en-US_UK': 'Shinkansen to Kyoto. Walk through Fushimi Inari, feed the sacred bow-legged deer of Nara, and feast on street-side okonomiyaki in Osaka’s Dotonbori.',
        },
        highlightLocation: 'Kioto & Osaka',
      },
    ],
    packages: [
      {
        id: 'japan-classic-11d',
        title: {
          'es-MX': 'Japón Dorado: Tokio, Monte Fuji, Kioto y Osaka (11 Días)',
          'es-ES': 'Japón Dorado: Tokio, Fuji, Kioto y Osaka (11 Días)',
          'en-US_UK': 'Golden Route Japan: Tokyo, Fuji, Kyoto & Osaka (11 Days)',
        },
        durationDays: 11,
        basePriceUSD: 3450,
        description: {
          'es-MX': 'Vuelos directos transpacíficos desde México, pase JR de tren bala Shinkansen, noche en ryokan tradicional con cena kaiseki y pocket WiFi ilimitado.',
          'es-ES': 'Circuito clásico con trenes Shinkansen, estancia en ryokan con onsen y hoteles 4 estrellas céntricos.',
          'en-US_UK': 'Complete classic journey featuring nonstop airfare, Japan Rail Pass, authentic hot-spring ryokan stay, and pocket WiFi.',
        },
        highlights: {
          'es-MX': [
            'Vuelo directo MEX - NRT sin escalas',
            'Pase de tren bala Shinkansen incluido',
            'Noche en Ryokan de lujo con aguas termales onsen y cena kaiseki',
            'Pocket WiFi 4G ilimitado durante todo el viaje',
          ],
          'es-ES': [
            'Billetes para el tren bala Shinkansen',
            'Estancia en ryokan con baños termales',
            'Asistente de viaje en español a la llegada',
            'Dispositivo WiFi portátil ilimitado',
          ],
          'en-US_UK': [
            'Nonstop flights from Mexico City to Tokyo',
            'Unlimited JR Pass for high-speed bullet trains',
            'Luxury Ryokan stay with private onsen & kaiseki dinner',
            'Complimentary pocket WiFi unit for 24/7 connectivity',
          ],
        },
        includesFlightFromMexico: true,
      },
    ],
    mexicoTravelerTips: {
      'es-MX': [
        '¡Los ciudadanos mexicanos no necesitamos visa para entrar a Japón como turistas!',
        'El vuelo directo MEX - NRT cruza el Océano Pacífico en casi 15 horas; te recomendamos llevar ropa cómoda y reservar asiento con anticipación.',
        'En Japón la propina NO es habitual; de hecho, puede causar confusión o rechazo porque consideran que el mejor servicio está siempre incluido.',
        'La tarjeta de transporte recargable (Suica o Pasmo en tu teléfono) sirve para trenes, metros y tiendas de conveniencia (Konbini como 7-Eleven y Lawson).',
      ],
      'es-ES': [
        'No se precisa visado para estancias de turismo de hasta 90 días.',
        'Cultura sin propinas: el servicio impecable se da por sentado.',
        'Tarjetas Suica/Pasmo digitales para transporte urbano y pequeños pagos.',
      ],
      'en-US_UK': [
        'Mexican, US, and UK citizens enjoy visa-free entry for tourism up to 90 days.',
        'No tipping culture: tipping is not practiced and may even cause polite confusion.',
        'Load a digital Suica or Pasmo card directly into your phone wallet for subway rides and convenience store snacks.',
      ],
    },
  },
  {
    id: 'canada',
    slug: 'canada',
    countryName: {
      'es-MX': 'Canadá',
      'es-ES': 'Canadá',
      'en-US_UK': 'Canada',
    },
    title: {
      'es-MX': 'Canadá Salvaje: Lagos Turquesa de las Rocosas, Vancouver y Quebec',
      'es-ES': 'Canadá Salvaje: Las Montañas Rocosas, Vancouver y Quebec',
      'en-US_UK': 'Wild Canada: Turquoise Rocky Mountain Lakes, Vancouver & Quebec',
    },
    subtitle: {
      'es-MX': 'La majestuosidad de Banff y Jasper, el verdor costero del Pacífico y el encanto europeo del Viejo Quebec.',
      'es-ES': 'De los lagos de Banff y Jasper al Viejo Quebec y las costas del Pacífico en Vancouver.',
      'en-US_UK': 'Glacial wonderlands of Banff and Jasper, coastal Pacific rainforests in Vancouver, and the European historic charm of Quebec City.',
    },
    author: {
      name: 'Carlos Alatorre',
      role: {
        'es-MX': 'Especialista en Norteamérica, Sunny Travels',
        'es-ES': 'Especialista en Norteamérica, Sunny Travels',
        'en-US_UK': 'North America Expedition Lead, Sunny Travels Mexico',
      },
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80',
    },
    readTimeMin: 8,
    publishedDate: '2026-08-28',
    heroImage: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=1600&q=80', // Canada Moraine Lake
    galleryImages: [
      'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=800&q=80', // Banff Lake Louise
      'https://images.unsplash.com/photo-1559511260-66a65e09b245?auto=format&fit=crop&w=800&q=80', // Vancouver
      'https://images.unsplash.com/photo-1517935703635-27c94665421d?auto=format&fit=crop&w=800&q=80', // Quebec City
      'https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=800&q=80', // Niagara
    ],
    quickStats: {
      capital: {
        'es-MX': 'Ottawa (Ciudades clave: Toronto, Montreal, Vancouver)',
        'es-ES': 'Ottawa (Ciudades destacadas: Toronto, Montreal, Vancouver)',
        'en-US_UK': 'Ottawa (Key hubs: Vancouver, Toronto, Montreal, Calgary)',
      },
      flightTimeFromCDMX: {
        'es-MX': '4h 45m a Vancouver; 4h 30m a Toronto o Montreal (Vuelos directos Aeroméxico / Air Canada)',
        'es-ES': '4h 30m desde México / 7h directo desde Europa',
        'en-US_UK': '4h 45m nonstop from Mexico City to Vancouver or Toronto',
      },
      bestSeason: {
        'es-MX': 'Verano (Junio a Septiembre) para lagos y senderismo; Diciembre a Marzo para esquí en Whistler o Banff',
        'es-ES': 'Junio a Septiembre para senderismo; Invierno para deportes de nieve',
        'en-US_UK': 'June to September for hiking & lakes; December to March for world-class skiing',
      },
      visaForMexicans: {
        'es-MX': 'eTA canadiense (si tienes visa de EE.UU. o previa canadiense) o Visa de visitante',
        'es-ES': 'Autorización electrónica eTA para estancias turísticas',
        'en-US_UK': 'eTA required for eligible travelers (or standard tourist visa)',
      },
      languageSpoken: {
        'es-MX': 'Inglés y Francés (ambos idiomas oficiales)',
        'es-ES': 'Inglés y Francés',
        'en-US_UK': 'English & French (both official languages)',
      },
      averageDailyBudgetUSD: 130,
    },
    overview: {
      'es-MX': 'Canadá es el gran santuario natural del hemisferio norte. Lagos de un color turquesa casi irreal alimentados por glaciares, densos bosques habitados por alces y osos pardos, e imponentes cordilleras que conviven con ciudades cosmopolitas y seguras donde la calidad de vida es legendaria.',
      'es-ES': 'Canadá cautiva por la inmensidad de sus espacios protegidos: parques nacionales con lagos glaciares, fiordos en el Pacífico y el encanto afrancesado de Quebec.',
      'en-US_UK': 'Canada is nature rendered on a truly epic scale. Glacial melt creates turquoise waters at Moraine Lake and Lake Louise, while the Canadian Rockies offer dramatic wildlife viewing and pristine alpine hiking.',
    },
    curatedReasons: [
      {
        title: {
          'es-MX': 'Los Lagos Moraine y Louise en el Parque Nacional Banff',
          'es-ES': 'Lagos Glaciares de Banff: Moraine y Louise',
          'en-US_UK': 'Moraine Lake & Lake Louise in Banff National Park',
        },
        description: {
          'es-MX': 'Remar en una canoa roja sobre aguas turquesa rodeado por los diez picos nevados del Valle de los Diez Picos es una estampa grabada en la memoria.',
          'es-ES': 'Navegar en canoa por lagos de origen glaciar custodiados por murallas de roca alpina.',
          'en-US_UK': 'Paddle a classic red canoe across radiant turquoise waters beneath the dramatic jagged crests of the Valley of the Ten Peaks.',
        },
        iconName: 'Compass',
      },
      {
        title: {
          'es-MX': 'La Carretera de los Campos de Hielo (Icefields Parkway)',
          'es-ES': 'La Mítica Carretera Icefields Parkway',
          'en-US_UK': 'Driving the Legendary Icefields Parkway',
        },
        description: {
          'es-MX': 'Considerada una de las rutas escénicas más bellas del planeta, conecta Banff y Jasper pasando junto al Glaciar Athabasca y cañones rugientes.',
          'es-ES': 'Una de las carreteras paisajísticas más espectaculares del planeta, uniendo Banff y Jasper entre glaciares y cascadas.',
          'en-US_UK': 'Consistently voted one of the world’s most scenic drives, winding past ancient hanging glaciers, roaring waterfalls, and grazing elk.',
        },
        iconName: 'Mountain',
      },
      {
        title: {
          'es-MX': 'El Viejo Quebec y la Elegancia Francesa',
          'es-ES': 'El Casco Histórico del Viejo Quebec',
          'en-US_UK': 'Historic Old Quebec & Château Frontenac',
        },
        description: {
          'es-MX': 'La única ciudad amurallada al norte de México, con calles empedradas, bistrós que sirven poutine y fondue, y el majestuoso hotel Château Frontenac.',
          'es-ES': 'Ciudad amurallada con calles de piedra, arquitectura del siglo XVII y el icónico Château Frontenac.',
          'en-US_UK': 'The only fortified city north of Mexico, filled with French-speaking bistros, cobblestone lanes, and the fairytale Château Frontenac.',
        },
        iconName: 'Sparkles',
      },
    ],
    sections: [
      {
        id: 'rocosas-naturaleza',
        title: {
          'es-MX': 'Aventura en las Rocosas Canadienses',
          'es-ES': 'Las Rocosas Canadienses: Naturaleza Pura',
          'en-US_UK': 'The Canadian Rockies: Pristine Alpine Glory',
        },
        content: {
          'es-MX': 'Desde Calgary, un trayecto de poco más de una hora te transporta a Banff, un pintoresco pueblo de montaña enmarcado por el Monte Rundle. Los senderos hacia el Lago Agnes Tea House o el cañón Johnston ofrecen cascadas congeladas o puentes colgantes suspendidos sobre cañones kársticos.',
          'es-ES': 'Banff y Jasper representan el corazón del sistema montañoso canadiense. Los senderos señalizados, paseos en barco por lagos cristalinos y paseos en teleférico permiten un contacto íntimo con la naturaleza.',
          'en-US_UK': 'Banff and Jasper are international benchmarks for outdoor recreation. Hike up to the Lake Agnes historic Tea House, take the Banff Gondola for sweeping summit vistas, and ride specially designed Ice Explorer vehicles directly onto the Athabasca Glacier.',
        },
      },
    ],
    itinerary: [
      {
        days: 'Días 1-3',
        title: {
          'es-MX': 'Vancouver: Stanley Park y Puente Colgante Capilano',
          'es-ES': 'Vancouver y la Costa del Pacífico',
          'en-US_UK': 'Vancouver: Coastal Rainforests & Gastown',
        },
        description: {
          'es-MX': 'Vuelo directo desde CDMX a Vancouver. Recorrido en bicicleta por el malecón de Stanley Park, cruce del puente Capilano y cena en Gastown.',
          'es-ES': 'Llegada a Vancouver. Visita a Stanley Park, Capilano Suspension Bridge y mercado de Granville Island.',
          'en-US_UK': 'Nonstop flight to Vancouver. Cycle the seawall around Stanley Park, brave the Capilano Suspension Bridge, and explore Granville Island Market.',
        },
        highlightLocation: 'Vancouver',
      },
      {
        days: 'Días 4-8',
        title: {
          'es-MX': 'Rocosas Canadienses: Banff, Lake Louise y Jasper',
          'es-ES': 'Parques Nacionales de Banff y Jasper',
          'en-US_UK': 'Banff, Lake Louise & Jasper National Parks',
        },
        description: {
          'es-MX': 'Vuelo a Calgary. Traslado a Banff, paseo en canoa por Lake Louise, conducción por la Icefields Parkway y caminata sobre el glaciar Athabasca.',
          'es-ES': 'Llegada a Banff, visita a Lake Louise y recorrido hacia Jasper por la carretera de los glaciares.',
          'en-US_UK': 'Fly to Calgary. Explore Banff, canoe on turquoise Lake Louise, drive the Icefields Parkway, and step onto the Athabasca Glacier.',
        },
        highlightLocation: 'Banff & Jasper',
      },
    ],
    packages: [
      {
        id: 'canada-rockies-8d',
        title: {
          'es-MX': 'Rocosas Canadienses de Ensueño (8 Días)',
          'es-ES': 'Rocosas Canadienses de Ensueño (8 Días)',
          'en-US_UK': 'Dream Canadian Rockies (8 Days)',
        },
        durationDays: 8,
        basePriceUSD: 2650,
        description: {
          'es-MX': 'Calgary, Banff, Lago Louise, Jasper y la Icefields Parkway con vehículo SUV o traslados en autobús panorámico y hoteles de montaña.',
          'es-ES': 'Recorrido por Banff y Jasper con alojamiento en lodges de montaña y excursiones guiadas.',
          'en-US_UK': 'Calgary, Banff, Lake Louise, and Jasper with alpine lodges, park passes, and glacier walking tours included.',
        },
        highlights: {
          'es-MX': [
            'Vuelos desde CDMX o Cancún incluidos',
            'Pase del Parque Nacional Parks Canada',
            'Excursión guiada en el Glaciar Athabasca (Ice Explorer)',
            'Paseo en canoa reservado en Lago Louise',
          ],
          'es-ES': [
            'Pase de acceso a Parques Nacionales incluido',
            'Excursión en vehículo especial por el Glaciar Athabasca',
            'Lodges alpinos seleccionados',
          ],
          'en-US_UK': [
            'Flights from Mexico City or direct international hubs',
            'Parks Canada National Park Discovery Pass included',
            'Columbia Icefield Glacier Discovery experience',
            'Boutique mountain lodge accommodations',
          ],
        },
        includesFlightFromMexico: true,
      },
    ],
    mexicoTravelerTips: {
      'es-MX': [
        'Los viajeros mexicanos que cuenten con visa válida de EE.UU. o hayan tenido visa canadiense en los últimos 10 años pueden tramitar una autorización electrónica (eTA) fácil y rápida en línea.',
        'Vuelos directos diarios operados por Aeroméxico y Air Canada conectan CDMX, Cancún y Guadalajara con Toronto, Montreal y Vancouver.',
        'La propina estándar en restaurantes es del 15% al 18% antes de impuestos.',
        'En los parques nacionales se respeta estrictamente la distancia con la fauna: nunca te acerques a un oso o alce ni dejes alimentos desatendidos.',
      ],
      'es-ES': [
        'Trámite de eTA rápido por internet previo al viaje.',
        'Clima variable en montaña: imprescindible ropa técnica de abrigo incluso en meses de verano.',
      ],
      'en-US_UK': [
        'Check your eTA or visa eligibility prior to departure; approvals for eTA are typically instant.',
        'Tipping culture: 15% to 20% in sit-down restaurants is customary.',
        'Wildlife safety rules are strictly enforced in National Parks: maintain at least 30 meters from elk and 100 meters from bears.',
      ],
    },
  },
  {
    id: 'portugal',
    slug: 'portugal',
    countryName: {
      'es-MX': 'Portugal',
      'es-ES': 'Portugal',
      'en-US_UK': 'Portugal',
    },
    title: {
      'es-MX': 'Portugal Encantador: Azulejos de Lisboa, Oporto y los Acantilados del Algarve',
      'es-ES': 'Portugal al Completo: Lisboa, Oporto y el Sur del Algarve',
      'en-US_UK': 'Charming Portugal: Lisbon Azulejos, Port Wine & Algarve Cliffs',
    },
    subtitle: {
      'es-MX': 'Del tranvía 28 y los pasteles de Belém en Lisboa a los viñedos del Valle del Duero y los palacios de cuento en Sintra.',
      'es-ES': 'De los miradores de Lisboa y las bodegas de Oporto a las calas doradas del Algarve.',
      'en-US_UK': 'From Lisbon’s historic Tram 28 and fairytale Sintra palaces to Douro Valley terraced vineyards and golden Algarve grottos.',
    },
    author: {
      name: 'Beatriz Fonseca',
      role: {
        'es-MX': 'Asesora de Viajes Mediterráneos, Sunny Travels',
        'es-ES': 'Asesora de Viajes, Sunny Travels',
        'en-US_UK': 'Mediterranean Travel Advisor, Sunny Travels Mexico',
      },
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80',
    },
    readTimeMin: 7,
    publishedDate: '2026-09-02',
    heroImage: 'https://images.unsplash.com/photo-1509840841025-9088ba78a826?auto=format&fit=crop&w=1600&q=80', // Lisbon
    galleryImages: [
      'https://images.unsplash.com/photo-1509840841025-9088ba78a826?auto=format&fit=crop&w=800&q=80', // Lisbon
      'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=800&q=80', // Porto Douro
      'https://images.unsplash.com/photo-1588614959060-4d144f28b207?auto=format&fit=crop&w=800&q=80', // Sintra Pena palace
      'https://images.unsplash.com/photo-1513326738677-b964603b136d?auto=format&fit=crop&w=800&q=80', // Algarve
    ],
    quickStats: {
      capital: {
        'es-MX': 'Lisboa',
        'es-ES': 'Lisboa',
        'en-US_UK': 'Lisbon',
      },
      flightTimeFromCDMX: {
        'es-MX': '11h 30m (Vía Madrid con Iberia/Aeroméxico o vía Cancún directo TAP Portugal)',
        'es-ES': '1h 15m desde Madrid / Conexión desde México',
        'en-US_UK': '11h 30m with easy connections from Mexico City or direct from Cancun (CUN - LIS)',
      },
      bestSeason: {
        'es-MX': 'Abril a Octubre (Clima soleado, veranos cálidos y aguas templadas en el Algarve)',
        'es-ES': 'Abril a Octubre para disfrutar de costa y ciudades',
        'en-US_UK': 'April to October (warm sunshine, blooming jacarandas, and beach weather)',
      },
      visaForMexicans: {
        'es-MX': 'Espacio Schengen: 90 días sin visa para mexicanos como turistas',
        'es-ES': 'Ciudadanos de la Unión Europea y exención de 90 días para turistas mexicanos',
        'en-US_UK': 'Schengen Area: 90 days visa-free for Mexican, US, and UK citizens',
      },
      languageSpoken: {
        'es-MX': 'Portugués (gran comprensión y gentileza con hispanohablantes)',
        'es-ES': 'Portugués',
        'en-US_UK': 'Portuguese (English widely and warmly spoken)',
      },
      averageDailyBudgetUSD: 90,
    },
    overview: {
      'es-MX': 'Portugal es pura poesía visual. Sus fachadas vestidas de azulejos pintados a mano, los acordes nostálgicos del fado en una tasca de Alfama, los castillos románticos entre la niebla de Sintra y los viñedos en terrazas a orillas del río Duero convierten a este rincón ibérico en un destino íntimo y fascinante.',
      'es-ES': 'Portugal conquista por su hospitalidad y su patrimonio. Desde las colinas luminosas de Lisboa hasta las bodegas históricas de Vila Nova de Gaia en Oporto y los acantilados de caliza en el Algarve.',
      'en-US_UK': 'Portugal enchants with sun-drenched miradouro viewpoints, melancholic fado ballads in Alfama taverns, fairytale palatial architecture in Sintra, and world-class culinary treasures like pastéis de nata and bacalhau.',
    },
    curatedReasons: [
      {
        title: {
          'es-MX': 'El Palacio da Pena y los Misterios de Sintra',
          'es-ES': 'Los Palacios y Bosques de Sintra',
          'en-US_UK': 'Pena Palace & Fairytale Sintra',
        },
        description: {
          'es-MX': 'Encaramado sobre la sierra de Sintra, los colores vivos amarillo y rojo del Palacio da Pena y los pasadizos masónicos de la Quinta da Regaleira parecen de cuento de hadas.',
          'es-ES': 'El Palacio Nacional da Pena con sus colores vibrantes y la enigmática Quinta da Regaleira en la sierra de Sintra.',
          'en-US_UK': 'Perched atop misty forested hills, the vivid yellow and terracotta domes of Pena Palace look straight out of a fairytale, matched by Quinta da Regaleira’s initiation wells.',
        },
        iconName: 'Sparkles',
      },
      {
        title: {
          'es-MX': 'Oporto y el Paisaje Vinícola del Valle del Duero',
          'es-ES': 'Oporto y los Viñedos del Duero',
          'en-US_UK': 'Porto & The Terraced Douro Wine Valley',
        },
        description: {
          'es-MX': 'Cruzar el Puente Don Luis I, visitar las históricas bodegas de vino de Oporto en Gaia y navegar en barco rabelo entre terrazas de viñedos declaradas Patrimonio de la UNESCO.',
          'es-ES': 'El puente Don Luis I, las bodegas centenarias de vino de Oporto y los cruceros en rabelo por el río Duero.',
          'en-US_UK': 'Cross the Eiffel-inspired Dom Luís I bridge, tour century-old port cellars in Vila Nova de Gaia, and cruise past steeply terraced Douro vineyards on a traditional wooden rabelo.',
        },
        iconName: 'Wine',
      },
      {
        title: {
          'es-MX': 'Las Grutas y Playas Doradas del Algarve',
          'es-ES': 'Acantilados y Calas del Algarve',
          'en-US_UK': 'Golden Sea Caves & Cliffs of the Algarve',
        },
        description: {
          'es-MX': 'La emblemática cueva de Benagil con su claraboya natural abierta al cielo, la Ponta da Piedade en Lagos y pueblos de pescadores de casas encaladas.',
          'es-ES': 'La célebre cueva marina de Benagil, las formaciones rocosas de Ponta da Piedade y las calas del sur portugués.',
          'en-US_UK': 'Marvel at the sea cave cathedral of Benagil, explore hidden sandy coves, and cruise beneath the limestone sea stacks of Ponta da Piedade in Lagos.',
        },
        iconName: 'Sun',
      },
    ],
    sections: [
      {
        id: 'lisboa-alfama',
        title: {
          'es-MX': 'Lisboa: La Ciudad de las Siete Colinas',
          'es-ES': 'Lisboa: Luz, Miradores y Azulejos',
          'en-US_UK': 'Lisbon: Light, Seven Hills & Timeless Trams',
        },
        content: {
          'es-MX': 'Subir en el clásico tranvía amarillo número 28 por las empinadas callejuelas del barrio de Alfama es una experiencia mítica. Al llegar al mirador de Santa Luzia o de Nuestra Señora del Monte, la luz dorada del río Tajo ilumina los tejados de terracota. En Belém, la Torre de Belém y el Monasterio de los Jerónimos recuerdan la era dorada de los descubridores portugueses.',
          'es-ES': 'Lisboa cautiva con su luz atlántica reflejada en las fachadas de azulejos. El tranvía 28, los miradores panorámicos de Alfama y los monumentos manuelinos de Belém sintetizan su belleza.',
          'en-US_UK': 'Riding the rickety yellow Tram 28 through the steep, winding alleys of Alfama feels like traveling back in time. Sip bica espresso alongside warm cinnamon-dusted pastéis de nata fresh from the oven in Belém.',
        },
      },
    ],
    itinerary: [
      {
        days: 'Días 1-4',
        title: {
          'es-MX': 'Lisboa, Belém y Excursión a Sintra',
          'es-ES': 'Lisboa, Belém y Palacio da Pena en Sintra',
          'en-US_UK': 'Lisbon, Historic Belém & Sintra Day Tour',
        },
        description: {
          'es-MX': 'Llegada a Lisboa. Paseo por Baixa y Chiado, cata de pasteles de Belém, noche de fado en Alfama y excursión al Palacio da Pena en Sintra.',
          'es-ES': 'Llegada a Lisboa. Visita de los barrios históricos, cata de pastéis y excursión a los palacios de Sintra.',
          'en-US_UK': 'Arrive in Lisbon. Walk through Chiado and Alfama, taste genuine Pastéis de Belém, attend a soulful fado performance, and take a day trip to Sintra’s Pena Palace.',
        },
        highlightLocation: 'Lisboa & Sintra',
      },
      {
        days: 'Días 5-8',
        title: {
          'es-MX': 'Oporto y Navegación en el Valle del Duero',
          'es-ES': 'Oporto y el Valle del Duero',
          'en-US_UK': 'Porto & Douro Valley Wine Tasting',
        },
        description: {
          'es-MX': 'Tren a Oporto. Visita a la Librería Lello, cata en bodegas de vino de Oporto en Gaia y crucero de día completo por el Río Duero con almuerzo típico.',
          'es-ES': 'Tren a Oporto. Recorrido por el centro histórico, bodegas de Gaia y crucero fluvial por el Duero.',
          'en-US_UK': 'Train north to Porto. Tour Livraria Lello, cross Dom Luís I bridge to Vila Nova de Gaia cellars, and embark on a scenic Douro Valley river cruise.',
        },
        highlightLocation: 'Oporto & Valle del Duero',
      },
    ],
    packages: [
      {
        id: 'portugal-highlights-8d',
        title: {
          'es-MX': 'Esencia Portuguesa: Lisboa, Sintra y Oporto (8 Días)',
          'es-ES': 'Esencia Portuguesa: Lisboa, Sintra y Oporto (8 Días)',
          'en-US_UK': 'Essence of Portugal: Lisbon, Sintra & Porto (8 Days)',
        },
        durationDays: 8,
        basePriceUSD: 1980,
        description: {
          'es-MX': 'Hoteles boutique con encanto, billetes de tren Alfa Pendular entre Lisboa y Oporto, tour guiado en Sintra y cata de vino en Gaia.',
          'es-ES': 'Alojamiento céntrico seleccionado, tren rápido entre Lisboa y Oporto y visitas guiadas a los puntos clave.',
          'en-US_UK': 'Boutique historic stays, high-speed rail between Lisbon and Porto, private Sintra palace tour, and cellar tastings.',
        },
        highlights: {
          'es-MX': [
            'Vuelos desde México con escala cómoda en Madrid o directo desde Cancún',
            'Tren de alta velocidad Alfa Pendular Lisboa - Oporto',
            'Entrada preferente al Palacio da Pena en Sintra',
            'Cata de vinos y maridaje en bodega tradicional de Oporto',
          ],
          'es-ES': [
            'Tren Alfa Pendular en clase confort',
            'Entrada reservada al Palacio da Pena',
            'Cata de vinos de Oporto en bodegas centenarias',
          ],
          'en-US_UK': [
            'Roundtrip flights with convenient connections',
            'First-class Alfa Pendular high-speed rail pass',
            'Reserved entry to Pena Palace in Sintra',
            'Exclusive port wine cellar tour and tasting in Gaia',
          ],
        },
        includesFlightFromMexico: true,
      },
    ],
    mexicoTravelerTips: {
      'es-MX': [
        'Los mexicanos viajan sin visa a Portugal para estancias de turismo de hasta 90 días.',
        'La amabilidad portuguesa hacia los mexicanos es proverbial: agradecen que intentes decir "Obrigado" (o "Obrigada"), aunque el "portuñol" fluye con calidez.',
        'Las calçadas portuguesas (los adoquines blancos y negros) son preciosas pero pueden ser resbaladizas; lleva calzado cómodo con buen agarre.',
        'TAP Portugal ofrece vuelos directos desde Cancún (CUN) a Lisboa (LIS), una excelente opción si estás en el sureste o prefieres vuelo directo.',
      ],
      'es-ES': [
        'Tránsito fronterizo libre dentro del espacio de la Unión Europea.',
        'Calzado antideslizante muy recomendable para recorrer las empinadas aceras adoquinadas.',
      ],
      'en-US_UK': [
        'Visa-free access for Mexican, US, and UK citizens up to 90 days.',
        'Wear comfortable flat shoes with good rubber grip for navigating Lisbon’s polished cobblestone calcada streets.',
        'Tipping in Portugal is customary for great service (round up or 5-10% in sit-down restaurants).',
      ],
    },
  },
  {
    id: 'south-korea',
    slug: 'south-korea',
    countryName: {
      'es-MX': 'República de Corea',
      'es-ES': 'República de Corea',
      'en-US_UK': 'Republic of Korea',
    },
    title: {
      'es-MX': 'República de Corea: Rascacielos de Seúl, Palacios Reales y la Isla Volcánica de Jeju',
      'es-ES': 'República de Corea: Dinamismo de Seúl, Historia Imperial e Isla de Jeju',
      'en-US_UK': 'Republic of Korea: Seoul Skylines, Royal Dynasties & Volcanic Jeju',
    },
    subtitle: {
      'es-MX': 'De las ceremonias de cambio de guardia en Gyeongbokgung a la gastronomía callejera en Gwangjang y las playas de Busan.',
      'es-ES': 'Del palacio imperial de Gyeongbokgung al bullicio de Busan y los conos volcánicos de Jeju.',
      'en-US_UK': 'From the changing of the royal guard at Gyeongbokgung Palace to bustling Gwangjang market street food and Busan beaches.',
    },
    author: {
      name: 'Ji-hoon Park',
      role: {
        'es-MX': 'Especialista en Corea y K-Culture, Sunny Travels',
        'es-ES': 'Especialista en Corea, Sunny Travels',
        'en-US_UK': 'Korean Peninsula Travel Specialist, Sunny Travels Mexico',
      },
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
    },
    readTimeMin: 9,
    publishedDate: '2026-09-06',
    heroImage: 'https://images.unsplash.com/photo-1538485399081-7191377e8241?auto=format&fit=crop&w=1600&q=80', // Seoul Gyeongbokgung
    galleryImages: [
      'https://images.unsplash.com/photo-1538485399081-7191377e8241?auto=format&fit=crop&w=800&q=80', // Seoul Palace
      'https://images.unsplash.com/photo-1578637387939-43c525550085?auto=format&fit=crop&w=800&q=80', // Seoul night
      'https://images.unsplash.com/photo-1546874177-9e664107314e?auto=format&fit=crop&w=800&q=80', // Busan
      'https://images.unsplash.com/photo-1548115184-bc6544d06a58?auto=format&fit=crop&w=800&q=80', // Jeju
    ],
    quickStats: {
      capital: {
        'es-MX': 'Seúl',
        'es-ES': 'Seúl',
        'en-US_UK': 'Seoul',
      },
      flightTimeFromCDMX: {
        'es-MX': '15h 15m (Vuelo directo transpacífico Aeroméxico MEX - ICN Seúl Incheon)',
        'es-ES': 'Vuelo directo intercontinental desde México / Conexión europea a Seúl',
        'en-US_UK': '15h 15m direct nonstop flight from Mexico City (MEX to ICN)',
      },
      bestSeason: {
        'es-MX': 'Otoño (Septiembre a Noviembre para follaje carmesí) y Primavera (Abril a Mayo para cerezos)',
        'es-ES': 'Otoño y Primavera para temperaturas suaves y festivales culturales',
        'en-US_UK': 'Autumn (September to November) for crisp skies and maple foliage, or Spring (April to May)',
      },
      visaForMexicans: {
        'es-MX': 'K-ETA (Autorización Electrónica de Viaje a Corea para mexicanos)',
        'es-ES': 'Autorización K-ETA previa para estancias turísticas',
        'en-US_UK': 'K-ETA (Korea Electronic Travel Authorization) required for eligible travelers',
      },
      languageSpoken: {
        'es-MX': 'Coreano (Hangul; excelente señalización en inglés en transporte público)',
        'es-ES': 'Coreano (con rotulación en inglés en transportes y zonas turísticas)',
        'en-US_UK': 'Korean (Hangul alphabet; clean English wayfinding in all subways)',
      },
      averageDailyBudgetUSD: 105,
    },
    overview: {
      'es-MX': 'La República de Corea vive un momento de fascinación global sin precedentes. Desde su liderazgo en tecnología, diseño y la ola cultural Hallyu (K-Pop, K-Dramas y cine oscarizado) hasta sus palacios dinásticos de la era Joseon, Seúl es una metrópoli electrizante. En el sur, la costera Busan y la isla volcánica de Jeju ofrecen playas, acantilados de basalto y una gastronomía marina inigualable.',
      'es-ES': 'La República de Corea deslumbra por su modernidad arrolladora y su respeto escrupuloso por las tradiciones. Desde los rascacielos de Seúl hasta los acantilados volcánicos de la isla de Jeju, cada etapa ofrece sorpresas.',
      'en-US_UK': 'The Republic of Korea is one of the world’s most dynamic travel destinations. Centuries-old Joseon royal palaces sit flanked by gleaming modern architecture, while 24-hour food markets, mountain hiking trails, and volcanic wonders make it endlessly engaging.',
    },
    curatedReasons: [
      {
        title: {
          'es-MX': 'El Palacio Real Gyeongbokgung y la Aldea Bukchon Hanok',
          'es-ES': 'Palacio Gyeongbokgung y Aldea Tradicional de Bukchon',
          'en-US_UK': 'Gyeongbokgung Royal Palace & Bukchon Hanok Village',
        },
        description: {
          'es-MX': 'Alquilar un traje tradicional Hanbok para ingresar gratis al palacio imperial, presenciar el solemne relevo de guardia y recorrer las casas de madera tradicionales en Bukchon.',
          'es-ES': 'Visitar el palacio real de la dinastía Joseon y pasear entre las casas de madera tradicionales de Bukchon Hanok.',
          'en-US_UK': 'Wear a colorful silk Hanbok for free entrance to the imperial Joseon palace, watch the royal guard ceremony, and stroll traditional clay-tiled alleys in Bukchon.',
        },
        iconName: 'Sparkles',
      },
      {
        title: {
          'es-MX': 'La Fiesta Culinaria en el Mercado Gwangjang',
          'es-ES': 'Comida Callejera en el Mercado de Gwangjang',
          'en-US_UK': 'Street Food Feasting at Gwangjang Market',
        },
        description: {
          'es-MX': 'Pancakes de frijol mungo recién dorados (bindaetteok), rollos de gimbap, tteokbokki picante y el famoso Korean BBQ con decenas de platillos de acompañamiento (banchan).',
          'es-ES': 'Puestos humeantes de bindaetteok, gimbap, dumplings y barbacoa coreana con variedad infinita de banchan.',
          'en-US_UK': 'Sit on heated benches at steaming stalls tasting freshly fried crispy bindaetteok (mung bean pancakes), knife-cut noodles, spicy rice cakes, and smoky Korean BBQ.',
        },
        iconName: 'Coffee',
      },
      {
        title: {
          'es-MX': 'La Isla Volcánica de Jeju (Patrimonio de la Humanidad UNESCO)',
          'es-ES': 'La Naturaleza Volcánica de la Isla de Jeju',
          'en-US_UK': 'Volcanic Wonders of Jeju Island (UNESCO)',
        },
        description: {
          'es-MX': 'El cráter Seongsan Ilchulbong sobre el océano, tubos de lava subterráneos de Manjanggul y la legendaria tradición de las buceadoras Haenyeo que pescan a pulmón.',
          'es-ES': 'El cráter de Seongsan al amanecer, las formaciones de lava y la admirable tradición de las buceadoras Haenyeo.',
          'en-US_UK': 'Climb the dramatic tuff cone of Seongsan Ilchulbong, venture inside Manjanggul lava tubes, and witness the resilient Haenyeo female free-divers.',
        },
        iconName: 'Mountain',
      },
    ],
    sections: [
      {
        id: 'seul-dinamismo',
        title: {
          'es-MX': 'Seúl: Tradición Imperial y Vanguardia Tecnológica',
          'es-ES': 'Seúl: Entre la Dinastía Joseon y el Futuro',
          'en-US_UK': 'Seoul: Imperial Heritage Meets Next-Gen Future',
        },
        content: {
          'es-MX': 'Seúl es una ciudad ultra-segura, conectada y llena de vida las 24 horas. Los distritos tienen identidades fascinantes: Hongdae destaca por su energía juvenil y música callejera; Gangnam por el diseño, rascacielos y tiendas boutique; Myeongdong por la cosmética coreana y comida al paso; e Insadong por sus casas de té tradicionales.',
          'es-ES': 'Seúl sorprende por su dinamismo y seguridad. Barrios como Hongdae, Gangnam e Insadong ofrecen una inmersión completa en la cultura pop, el arte y el bienestar oriental.',
          'en-US_UK': 'Seoul is one of the planet’s most seamlessly functioning metropolises. Explore cutting-edge fashion in Gangnam, vibrant student energy in Hongdae, and historic herbal teahouses nestled along cobblestone alleys in Insadong.',
        },
      },
      {
        id: 'busan-costa',
        title: {
          'es-MX': 'Busan: Playas, Templos Costeros y Mercados Marinos',
          'es-ES': 'Busan: Puerto Pesquero y Templos frente al Mar',
          'en-US_UK': 'Busan: Maritime Culture, Beaches & Clifftop Temples',
        },
        content: {
          'es-MX': 'El tren bala coreano KTX te lleva de Seúl a Busan en solo 2 horas y media. Allí te espera el templo Haedong Yonggungsa construido sobre las rocas del mar, el pintoresco pueblo cultural de Gamcheon con sus casas multicolores en terrazas, y el gigantesco mercado de pescados de Jagalchi.',
          'es-ES': 'A dos horas y media en tren de alta velocidad KTX, Busan acoge el famoso templo Haedong Yonggungsa frente al oleaje, la aldea artística de Gamcheon y el mercado de Jagalchi.',
          'en-US_UK': 'Reachable in just 2.5 hours via high-speed KTX rail, Busan boasts clifftop shrines like Haedong Yonggungsa overlooking crashing waves, Gamcheon Culture Village’s colorful hillside residences, and fresh seafood at Jagalchi Market.',
        },
      },
    ],
    itinerary: [
      {
        days: 'Días 1-4',
        title: {
          'es-MX': 'Seúl: Palacios Joseon, N Seoul Tower y Mercados',
          'es-ES': 'Seúl: Palacios y Cultura Urbana',
          'en-US_UK': 'Seoul: Royal Palaces, Skyline Views & Night Markets',
        },
        description: {
          'es-MX': 'Llegada en vuelo directo desde CDMX a Incheon. Palacio Gyeongbokgung con vestimenta Hanbok, paseo por Bukchon Hanok, compras en Myeongdong y atardecer desde la N Seoul Tower.',
          'es-ES': 'Llegada a Seúl. Palacio imperial, aldea de Bukchon, mirador de N Seoul Tower y gastronomía en el mercado Gwangjang.',
          'en-US_UK': 'Direct flight arrival at Incheon. Tour Gyeongbokgung in traditional Hanbok, explore Bukchon Hanok village, take in sunset at N Seoul Tower, and graze through Gwangjang market.',
        },
        highlightLocation: 'Seúl',
      },
      {
        days: 'Días 5-7',
        title: {
          'es-MX': 'Busan: Tren Bala KTX, Templo Marino y Gamcheon',
          'es-ES': 'Busan: Tren KTX y Costa del Sur',
          'en-US_UK': 'Busan: KTX Bullet Train, Coastal Temple & Gamcheon',
        },
        description: {
          'es-MX': 'Tren bala KTX a Busan. Visita al templo Haedong Yonggungsa sobre los acantilados marinos, recorrido por el colorido Gamcheon Culture Village y cena frente a la playa Haeundae.',
          'es-ES': 'Tren bala a Busan. Templo frente al mar, aldea de Gamcheon y paseo marítimo de Haeundae.',
          'en-US_UK': 'Take the high-speed KTX train to Busan. Marvel at clifftop Haedong Yonggungsa temple, wander artistic Gamcheon village, and dine along Haeundae beach.',
        },
        highlightLocation: 'Busan',
      },
      {
        days: 'Días 8-10',
        title: {
          'es-MX': 'Isla de Jeju: Cráter Seongsan y Naturaleza Volcánica',
          'es-ES': 'Isla de Jeju: Belleza Volcánica y Costera',
          'en-US_UK': 'Jeju Island: Volcanic Cráter & Coastal Beauty',
        },
        description: {
          'es-MX': 'Vuelo corto a la Isla de Jeju. Ascenso al cono volcánico Seongsan Ilchulbong para el amanecer, cascadas de Cheonjiyeon y demostración de buceo de las Haenyeo.',
          'es-ES': 'Vuelo a Jeju. Ascenso a Seongsan, cascadas tropicales y observación de las buceadoras Haenyeo.',
          'en-US_UK': 'Quick domestic flight to Jeju Island. Hike the Seongsan Ilchulbong sunrise peak, visit waterfalls, and learn about the UNESCO-recognized Haenyeo diving heritage.',
        },
        highlightLocation: 'Isla de Jeju',
      },
    ],
    packages: [
      {
        id: 'korea-splendor-10d',
        title: {
          'es-MX': 'Corea del Sur Inolvidable: Seúl, Busan y Jeju (10 Días)',
          'es-ES': 'Corea Esencial: Seúl, Busan y Jeju (10 Días)',
          'en-US_UK': 'Unforgettable Korea: Seoul, Busan & Jeju (10 Days)',
        },
        durationDays: 10,
        basePriceUSD: 2980,
        description: {
          'es-MX': 'Vuelo directo transpacífico desde CDMX, tren bala KTX Seúl - Busan, vuelo interno a la Isla de Jeju, hoteles 4 estrellas superiores y tarjeta T-Money incluida.',
          'es-ES': 'Circuito con tren de alta velocidad KTX y vuelo a la Isla de Jeju con hoteles seleccionados y visitas guiadas.',
          'en-US_UK': 'Includes direct flights, KTX bullet train passes, domestic Jeju flight, 4-star boutique hotels, and pre-loaded T-Money transit cards.',
        },
        highlights: {
          'es-MX': [
            'Vuelo directo Aeroméxico MEX - ICN sin escalas',
            'Boleto de tren bala KTX Seúl - Busan en clase primera',
            'Vuelo interno redondo a la Isla de Jeju con traslados',
            'Tarjeta de transporte T-Money recargada y tarjeta SIM/eSIM 5G',
          ],
          'es-ES': [
            'Billetes para el tren bala KTX',
            'Vuelos internos a la Isla de Jeju',
            'Hoteles 4 estrellas céntricos',
            'Asistencia local en español y tarjeta de transporte',
          ],
          'en-US_UK': [
            'Direct flights from Mexico City to Seoul Incheon',
            'First-class KTX high-speed rail ticket to Busan',
            'Roundtrip domestic flights to Jeju Island with private tours',
            'Complimentary 5G eSIM and loaded T-Money transit cards',
          ],
        },
        includesFlightFromMexico: true,
      },
    ],
    mexicoTravelerTips: {
      'es-MX': [
        '¡Gran noticia para viajeros mexicanos!: Existe vuelo directo sin escalas entre la Ciudad de México (MEX) y Seúl Incheon (ICN) operado por Aeroméxico.',
        'Debes tramitar la autorización electrónica K-ETA en línea antes de abordar (en Sunny Travels te asistimos paso a paso).',
        'La tarjeta T-Money se usa para el metro, autobuses e incluso taxis y tiendas de conveniencia; en nuestros paquetes te la entregamos precargada.',
        'La gastronomía coreana tiene toques picantes (gochujang y kimchi) que a los mexicanos nos encantan, pero si prefieres sin picante solo di "an-mep-ge hae-ju-se-yo".',
      ],
      'es-ES': [
        'Trámite K-ETA online obligatorio antes del viaje.',
        'Excelente red de transporte público puntual y segura.',
      ],
      'en-US_UK': [
        'Nonstop flights operate between Mexico City and Seoul Incheon with Aeroméxico.',
        'Submit your K-ETA online authorization prior to departure.',
        'T-Money rechargeable cards function across subways, buses, taxis, and convenience stores.',
      ],
    },
  },
];
