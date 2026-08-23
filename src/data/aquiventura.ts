import mirador from "@/assets/fotos/mirador-lago.jpg";
import lanchaAtardecer from "@/assets/fotos/lancha-atardecer.jpg";
import orillaOlas from "@/assets/fotos/orilla-olas.jpg";
import costaLago from "@/assets/fotos/costa-lago.jpg";
import buceo from "@/assets/fotos/buceo.jpg";
import lanchaNavegando from "@/assets/fotos/lancha-navegando.jpg";
import islaOrilla from "@/assets/fotos/isla-orilla.jpg";
import aereaIsla from "@/assets/fotos/aerea-isla.jpg";
import chalecos from "@/assets/fotos/chalecos.jpg";
import buzos from "@/assets/fotos/buzos.jpg";
import panoramica from "@/assets/fotos/panoramica-lago.jpg";
import experienciaGrupo from "@/assets/fotos/experiencia-grupo.jpg";
import caminataParamo from "@/assets/fotos/caminata-paramo.jpg";
import bosqueNiebla from "@/assets/fotos/bosque-niebla.jpg";
import frailejones from "@/assets/fotos/frailejones.jpg";
import paramoLaguna from "@/assets/fotos/paramo-laguna.jpg";
import cultivos from "@/assets/fotos/cultivos.jpg";
import tallerBocado from "@/assets/fotos/taller-bocado.jpg";
import logoRafaelo from "@/assets/fotos/logo-rafaelo.jpg";
import logoLucho from "@/assets/fotos/logo-lucho.jpg";
import logoBarbacoa from "@/assets/fotos/logo-barbacoa.jpg";

export const img = {
  mirador,
  lanchaAtardecer,
  orillaOlas,
  costaLago,
  buceo,
  lanchaNavegando,
  islaOrilla,
  aereaIsla,
  chalecos,
  buzos,
  panoramica,
  experienciaGrupo,
  caminataParamo,
  bosqueNiebla,
  frailejones,
  paramoLaguna,
  cultivos,
  tallerBocado,
  logoRafaelo,
  logoLucho,
  logoBarbacoa,
};

export const navItems = [
  { to: "/", label: "Inicio" },
  { to: "/historia", label: "Historia" },
  { to: "/experiencias", label: "Experiencias" },
  { to: "/naturaleza", label: "Naturaleza" },
  { to: "/gastronomia", label: "Gastronomía" },
  { to: "/galeria", label: "Galería" },
  { to: "/opiniones", label: "Opiniones" },
  { to: "/mapa", label: "Mapa" },
  { to: "/contacto", label: "Contacto" },
] as const;

/* ------------------------------- HISTORIA ------------------------------- */

export type TimelineItem = {
  id: string;
  year: string;
  title: string;
  summary: string;
  detail: string;
  image: string;
};

export const timeline: TimelineItem[] = [
  {
    id: "guaquira",
    year: "Antes de 1500",
    title: "Guáquira y la época prehispánica",
    summary: "El territorio se conocía como Guáquira, tierra de aguas sagradas.",
    detail:
      "Mucho antes de la llegada de los europeos, las tierras que hoy forman Aquitania se conocían como Guáquira. Las comunidades que habitaban las orillas del Lago de Tota vivían de la pesca, la caza y el cultivo en las laderas. El lago era considerado un lugar sagrado, escenario de rituales y de relatos que aún se transmiten de generación en generación.",
    image: costaLago,
  },
  {
    id: "muisca",
    year: "Siglos X–XV",
    title: "Cultura muisca",
    summary: "El pueblo muisca teje mitos y economía alrededor del lago.",
    detail:
      "Los muiscas integraron el Lago de Tota a su cosmovisión. La Isla del Zaque —hoy Isla San Pedro— conserva el nombre de la autoridad muisca, y el origen mítico del lago hace parte de la interpretación del patrimonio que se realiza en los recorridos actuales. Su organización social, el trabajo de la tierra y el intercambio marcaron el territorio.",
    image: islaOrilla,
  },
  {
    id: "espanoles",
    year: "Siglo XVI",
    title: "Llegada de los españoles",
    summary: "La conquista transforma el territorio y sus formas de vida.",
    detail:
      "Con la llegada de los españoles al altiplano boyacense se imponen nuevas formas de propiedad, religión y organización del trabajo. Se levantan capillas, se reparten tierras y las comunidades indígenas son reorganizadas alrededor del lago, en lo que hoy es la provincia de Sugamuxi.",
    image: caminataParamo,
  },
  {
    id: "puebloviejo",
    year: "Época colonial",
    title: "Puebloviejo",
    summary: "El primer asentamiento formal del municipio.",
    detail:
      "El poblado original recibió el nombre de Puebloviejo. Allí se concentraron las primeras casas, la iglesia y el mercado. Las condiciones del terreno y del lago llevaron con el tiempo a reorganizar el caserío hacia el lugar que hoy ocupa la cabecera municipal, a 32 km al sur de Sogamoso.",
    image: panoramica,
  },
  {
    id: "avella",
    year: "Siglo XIX",
    title: "Ramón Ignacio Avella",
    summary: "Una figura clave en la consolidación del municipio.",
    detail:
      "Ramón Ignacio Avella es recordado por su papel en la organización y el impulso del municipio. Su gestión quedó ligada a la construcción de espacios comunitarios y al ordenamiento del pueblo, y su nombre hace parte de la memoria local de Aquitania.",
    image: cultivos,
  },
  {
    id: "aquitania",
    year: "Siglo XIX",
    title: "Cambio de nombre a Aquitania",
    summary: "El municipio adopta el nombre que conserva hasta hoy.",
    detail:
      "El antiguo Puebloviejo pasó a llamarse Aquitania. Con el cambio de nombre se afianzó la identidad del municipio dentro de la provincia de Sugamuxi, en el departamento de Boyacá, y se consolidó su vocación agrícola alrededor del lago.",
    image: orillaOlas,
  },
  {
    id: "hoy",
    year: "Actualidad",
    title: "Aquitania hoy",
    summary: "Turismo responsable alrededor del lago más grande de Colombia.",
    detail:
      "Hoy Aquitania es la puerta de entrada al Lago de Tota, el lago más grande, alto e importante de Colombia. Operadores turísticos locales ofrecen recorridos náuticos, buceo, senderismo de alta montaña y experiencias gastronómicas, todos con permisos y guías capacitados que promueven la conservación del ecosistema.",
    image: mirador,
  },
];

/* ----------------------------- EXPERIENCIAS ----------------------------- */

export type Categoria = "Naturaleza" | "Aventura" | "Cultura" | "Turismo ecológico" | "Familia";

export type Experiencia = {
  id: string;
  nombre: string;
  operador: string;
  categoria: Categoria;
  corta: string;
  detalle: string;
  ubicacion: string;
  duracion: string;
  dificultad: string;
  participantes?: string;
  incluye?: string;
  costo: string;
  telefono: string;
  image: string;
};

export const experiencias: Experiencia[] = [
  {
    id: "isla-san-pedro-aqualago",
    nombre: 'Descubre la "Isla San Pedro"',
    operador: "AQUALAGO SAS BIC",
    categoria: "Familia",
    corta: "Recorrido náutico guiado hasta la isla más extensa del Lago de Tota.",
    detalle:
      "Navega las cristalinas aguas del manantial natural de agua dulce más grande de Colombia y el segundo más alto de Suramérica. Recorrido escénico con interpretación de mitos y leyendas, avistamiento de aves en zona AICA (Área Importante para la Conservación de las Aves) y contacto directo con el paisaje altoandino.",
    ubicacion: "Muelle La Peña – Vereda El Cajón, km 3.5 vía Aquitania – Sogamoso",
    duracion: "1 hora",
    dificultad: "Baja",
    participantes: "Desde 1 hasta 150 pasajeros, 1 guía por cada 30 personas",
    incluye: "Recorrido náutico guiado, pólizas RC y RCE, chaleco salvavidas y dos tripulantes",
    costo: "Desde $30.000 COP / 8 USD por persona en tarifa grupo",
    telefono: "310 753 7535 – 311 268 9159",
    image: lanchaNavegando,
  },
  {
    id: "lancha-caminata-camaquitours",
    nombre: "Paseo en lancha y caminata por la Isla San Pedro",
    operador: "CAMAQUITOUR'S",
    categoria: "Naturaleza",
    corta: "Navegación y caminata de 45 minutos por la isla del Zaque.",
    detalle:
      "Navegamos por las cristalinas aguas del Lago de Tota y desembarcamos en la Isla San Pedro, donde haremos una caminata de aproximadamente 45 minutos. Conoceremos la importancia histórica y cultural de este sitio y aprenderemos sobre la cultura ancestral del territorio.",
    ubicacion: "Muelle La Peña, 152427 – Aquitania, Boyacá",
    duracion: "2 horas",
    dificultad: "Baja",
    participantes: "Mínimo 2 y máximo 10 pasajeros",
    incluye: "Recorrido náutico, caminata, póliza y alquiler de chaleco salvavidas",
    costo: "$200.000 COP / 50 USD (1 a 6 pasajeros) · $40.000 COP por pasajero adicional",
    telefono: "313 833 7448",
    image: islaOrilla,
  },
  {
    id: "buceo",
    nombre: "Buceo en el Lago de Tota",
    operador: "DIVE AND TOURS",
    categoria: "Aventura",
    corta: "Explora el mundo subacuático del lago con RAID TRY DIVE.",
    detalle:
      "A partir de los 12 años y sin experiencia previa: solo necesitas toalla y vestido de baño. Incluye instrucción teórica en línea, práctica en aguas confinadas o piscina y la posibilidad de un buceo real en el Lago de Tota. Una aventura única para toda la familia.",
    ubicacion: "Aquitania",
    duracion: "3 horas",
    dificultad: "Baja",
    participantes: "Mínimo 1 y máximo 4 pasajeros · desde 12 años",
    incluye:
      "Instrucción teórica y práctica, equipo completo, refrigerio y bebidas calientes, seguro médico y reconocimiento RAID TRY DIVE",
    costo: "$360.000 COP en piscina · $540.000 COP piscina + buceo en el lago",
    telefono: "314 219 1762",
    image: buceo,
  },
  {
    id: "mamapacha-isla",
    nombre: "Recorrido en lancha por la Isla del Zaque",
    operador: "MAMAPACHA EXPERIENCE",
    categoria: "Cultura",
    corta: "El valor sagrado del lago para los primeros habitantes del territorio.",
    detalle:
      "Disfruta de un recorrido por la Isla San Pedro o Isla del Zaque, a través de la cual comprenderemos el valor del sagrado Lago de Tota para los primeros habitantes de estas tierras. Una experiencia de conexión con la naturaleza y con la memoria del territorio.",
    ubicacion: "Aquitania – Lago de Tota",
    duracion: "Recorrido náutico guiado",
    dificultad: "Baja",
    participantes: "Mínimo 1 y máximo 70 pasajeros",
    incluye: "Recorrido náutico, póliza y alquiler de chaleco salvavidas",
    costo: "$200.000 COP / 50 USD (1 a 6 personas) · $60.000 COP persona adicional",
    telefono: "320 402 9551 – 311 563 2466",
    image: aereaIsla,
  },
  {
    id: "tota-lago-tours",
    nombre: "Caminos ancestrales y cumbre panorámica",
    operador: "TOTA LAGO TOURS",
    categoria: "Turismo ecológico",
    corta: "Caminos empedrados, frailejones y la mejor vista de la vereda La Puerta.",
    detalle:
      "Caminarás los ancestrales caminos empedrados, desentrañando las historias, el legado y las enseñanzas de nuestros abuelos. A cada paso la vegetación nativa y de páramo te envolverá, revelando la majestuosidad de los frailejones y la serenidad de sus yacimientos de agua. La recompensa final es la cima de una de las montañas más altas, un mirador privilegiado sobre el lago.",
    ubicacion: "Vereda La Puerta – Aquitania",
    duracion: "Jornada de montaña",
    dificultad: "Media-alta",
    costo: "Consultar con el operador",
    telefono: "310 800 6459",
    image: caminataParamo,
  },
  {
    id: "isua-sentidos",
    nombre: "Recárgate de energía a través de los sentidos",
    operador: "ISUA",
    categoria: "Turismo ecológico",
    corta: "Baño de bosque e interpretación del patrimonio en la Isla del Zaque.",
    detalle:
      "Desde la Isla del Zaque disfrutarás de la interpretación del patrimonio natural y cultural, conocerás el origen mítico del Lago de Tota y recorrerás el sendero sintiendo el aroma de las plantas y el canto de las aves, contemplando el lago desde diferentes miradores.",
    ubicacion: "Isla del Zaque – Aquitania",
    duracion: "Día completo",
    dificultad: "Baja",
    participantes: "8 a 18 personas",
    incluye:
      "Guía de turismo, informador local, refrigerio, almuerzo, transporte fluvial, souvenir de la comunidad, tarjeta de asistencia médica y baño de bosque",
    costo: "$136.000 COP / 34 USD por persona",
    telefono: "311 578 3193",
    image: experienciaGrupo,
  },
  {
    id: "isua-santa-barbara",
    nombre: "Páramo de Santa Bárbara",
    operador: "ISUA",
    categoria: "Naturaleza",
    corta: "Caminata interpretativa con sentido por el páramo.",
    detalle:
      "Recorrido de seis horas por el Páramo de Santa Bárbara con guía especializado e informador local. Una caminata interpretativa que explica la función de los frailejones y los nacimientos de agua que alimentan el Lago de Tota.",
    ubicacion: "Vereda El Tobal – Aquitania",
    duracion: "6 horas",
    dificultad: "Media",
    participantes: "Desde 18 años",
    incluye: "Almuerzo, refrigerio típico, caminata interpretativa, guía, póliza y souvenir",
    costo: "$116.000 COP / 29 USD por persona (IVA incluido)",
    telefono: "311 578 3193",
    image: frailejones,
  },
  {
    id: "sendero-magico",
    nombre: "Sendero Mágico de Alta Montaña",
    operador: "Operadores locales",
    categoria: "Aventura",
    corta: "Bosque de niebla, musgo y alta montaña en una jornada completa.",
    detalle:
      "Un recorrido exigente de ocho horas ida y regreso por bosques de niebla cubiertos de musgo y zonas de alta montaña. Recomendado para caminantes con buena condición física, desde los 14 años y con acompañamiento para menores y adultos mayores.",
    ubicacion: "Vereda Hirba – Aquitania",
    duracion: "8 horas ida y regreso",
    dificultad: "Alta",
    participantes: "Mínimo 1 y máximo 20 personas",
    costo: "Consultar con el operador",
    telefono: "311 578 3193",
    image: bosqueNiebla,
  },
  {
    id: "curies",
    nombre: "Caminata al Páramo de los Curíes",
    operador: "MAMAPACHA EXPERIENCE",
    categoria: "Aventura",
    corta: "Senderismo de alta montaña entre frailejones y afloramientos rocosos.",
    detalle:
      "Conoce las maravillas del páramo y disfruta de la vista del Lago de Tota. Senderismo de alta montaña entre diferentes especies de frailejones que, junto a los afloramientos rocosos, ofrecen una de las mejores panorámicas del lago desde la montaña.",
    ubicacion: "Medio de Mesas – Aquitania",
    duracion: "7 horas ida y regreso",
    dificultad: "Alta",
    costo: "Consultar con el operador",
    telefono: "320 402 9551",
    image: paramoLaguna,
  },
  {
    id: "monte-tabor",
    nombre: "Caminata ecológica al Mirador del Monte Tabor",
    operador: "MAMAPACHA EXPERIENCE",
    categoria: "Naturaleza",
    corta: "La mejor vista panorámica del Lago de Tota.",
    detalle:
      "Disfruta de la mejor vista panorámica del Lago de Tota desde el mirador del Monte Tabor, por un sendero que te permitirá conectarte con la esencia campesina de Boyacá y descubrir, al llegar a la cima, la imponencia del majestuoso lago.",
    ubicacion: "Vereda El Cajón – Aquitania",
    duracion: "Media jornada",
    dificultad: "Media",
    incluye: "Seguro, hidratación y guía",
    costo: "$220.000 COP / 55 USD (1 a 5 personas) · $44.000 COP persona adicional",
    telefono: "320 402 9551 – 311 563 2466",
    image: mirador,
  },
  {
    id: "circuito-lagunas",
    nombre: "Circuito de Las Lagunas",
    operador: "MAMAPACHA EXPERIENCE",
    categoria: "Aventura",
    corta: "Travesía entre lagunas escondidas, frailejones y paisajes altoandinos.",
    detalle:
      "Una travesía de alta montaña entre lagunas escondidas, frailejones y los paisajes más impresionantes del ecosistema altoandino, pensada para aventureros que quieren descubrir el páramo en su máxima expresión.",
    ubicacion: "Medio de Mesas y El Tobal – Aquitania",
    duracion: "8 horas ida y regreso",
    dificultad: "Alta",
    participantes: "1 a 15 personas · 15 a 70 años",
    incluye: "Guianza, seguro, hidratación y transporte",
    costo: "Consultar con el operador",
    telefono: "320 402 9551",
    image: panoramica,
  },
  {
    id: "paramo-guane",
    nombre: "Páramo de Guane y cultivos tradicionales",
    operador: "Operadores locales",
    categoria: "Cultura",
    corta: "Papa, cebolla, haba y arveja en el camino hacia el páramo.",
    detalle:
      "En la caminata hacia este paraíso observaremos diversidad de cultivos tradicionales —papa, cebolla larga, haba, zanahoria y arveja—, visitaremos una reserva de plantas nativas con nacimientos de agua y tendremos la oportunidad de observar diversidad de aves.",
    ubicacion: "Aquitania – Boyacá",
    duracion: "Media jornada",
    dificultad: "Media",
    costo: "Consultar con el operador",
    telefono: "310 800 6459",
    image: cultivos,
  },
];

export const categoriasExperiencia = [
  "Todas",
  "Naturaleza",
  "Aventura",
  "Cultura",
  "Turismo ecológico",
  "Familia",
] as const;

/* ------------------------------ NATURALEZA ------------------------------ */

export const islas = [
  {
    nombre: "Isla San Pedro o Isla del Zaque",
    descripcion:
      "La más extensa de las islas, hogar de una rica flora y fauna, perfecta para el senderismo y la observación de aves.",
  },
  {
    nombre: "Isla Santa Helena",
    descripcion:
      "Un remanso de paz y tranquilidad, ideal para disfrutar de un picnic o contemplar la belleza del paisaje.",
  },
  {
    nombre: "Isla Santo Domingo",
    descripcion: "Un pequeño islote con formaciones rocosas únicas y vistas panorámicas.",
  },
  {
    nombre: "Isla de Cerro Chico",
    descripcion: "Ideal para los amantes del senderismo y la observación de aves.",
  },
  {
    nombre: "Isla de La Custodia",
    descripcion: "Una pequeña isla que ofrece contemplación y contacto directo con la naturaleza.",
  },
];

export const naturalezaBloques = [
  {
    id: "paisajes",
    boton: "Explorar paisajes",
    titulo: "Paisajes del altiplano",
    image: panoramica,
    texto:
      "El azul intenso de las aguas se fusiona con el verde de las montañas y de los cultivos en ladera. Con temperaturas entre 10 °C y 24 °C y a 32 km al sur de Sogamoso, el Lago de Tota ofrece un clima fresco ideal para escapar del bullicio de la ciudad. Miradores, penínsulas y playas componen un paisaje altoandino incomparable.",
    puntos: [
      "Lago más grande, alto e importante de Colombia",
      "Segundo manantial de agua dulce más alto de Suramérica",
      "Miradores como el Monte Tabor y la vereda La Puerta",
    ],
  },
  {
    id: "fauna",
    boton: "Conocer la fauna",
    titulo: "Fauna del lago y del páramo",
    image: chalecos,
    texto:
      "Durante los recorridos náuticos es posible avistar más de cien especies de aves, entre ellas el pato pico de oro y el cucarachero de pantano. En el agua habitan especies emblemáticas como la trucha arco iris y el pez capitán. La Isla San Pedro es zona AICA, Área Importante para la Conservación de las Aves, donde los visitantes pueden hacer ciencia ciudadana.",
    puntos: [
      "Más de 100 especies de aves registradas",
      "Pato pico de oro y cucarachero de pantano",
      "Trucha arco iris y pez capitán",
    ],
  },
  {
    id: "ecosistemas",
    boton: "Descubrir ecosistemas",
    titulo: "Páramos, bosques de niebla y humedales",
    image: frailejones,
    texto:
      "Los páramos de Santa Bárbara, los Curíes y Guane rodean el municipio con frailejones, afloramientos rocosos, lagunas escondidas y nacimientos de agua que alimentan el lago. Los bosques de niebla cubiertos de musgo y las reservas de plantas nativas completan un mosaico de ecosistemas estratégicos que se recorren siempre con guías locales.",
    puntos: [
      "Páramo de Santa Bárbara, los Curíes y Guane",
      "Bosques de niebla y reservas de plantas nativas",
      "Nacimientos de agua que abastecen el Lago de Tota",
    ],
  },
];

/* ------------------------------ GASTRONOMÍA ----------------------------- */

export type Restaurante = {
  id: string;
  nombre: string;
  tipo: "Tradicional" | "Cocina de autor" | "Parrilla" | "Experiencia cultural";
  descripcion: string;
  detalle: string;
  ubicacion: string;
  precio: string;
  telefono: string;
  image: string;
  extra?: string[];
};

export const restaurantes: Restaurante[] = [
  {
    id: "bocado",
    nombre: "Taller De Bocado en Bocado",
    tipo: "Experiencia cultural",
    descripcion:
      "Cocina boyacense, bailes y juegos tradicionales con vista al Lago de Tota.",
    detalle:
      "Una experiencia culinaria excepcional con impresionantes vistas al Lago de Tota. Los visitantes se deleitan con auténtica comida boyacense mientras participan en bailes, juegos tradicionales y actividades culturales. Un cocinero local comparte técnicas ancestrales que preservan la tradición culinaria de la región y transforman cada plato en una muestra de sabor y autenticidad.",
    ubicacion: "Km 5 vía Aquitania – Sogamoso",
    precio: "$320.000 COP (4 personas) · persona adicional $80.000 COP",
    telefono: "316 577 0326",
    image: tallerBocado,
    extra: [
      "Duración: 2 horas · Dificultad baja",
      "De 4 a 25 personas · Desde 4 años",
      "Incluye 10 muestras de gastronomía boyacense, bebidas, bailes y educación",
      "No incluye transporte",
    ],
  },
  {
    id: "rafaelo",
    nombre: "Rafaelo – Cocina de Autor",
    tipo: "Cocina de autor",
    descripcion: "Platos de autor que resaltan productos de origen regional.",
    detalle:
      "Este restaurante conceptualiza la cocina elaborando platos de autor con productos de origen regional. Su objetivo es que los comensales conozcan las historias y tradiciones que dan vida a cada plato. Una invitación a disfrutar los sabores con atención plena: comer como un acto de nutrición y apreciación, un viaje sensorial que celebra los ingredientes locales.",
    ubicacion: "Península Pozo Azul, Vereda Susacá, Aquitania",
    precio: "Desde $20.000 COP (5 USD) hasta $160.000 COP (40 USD)",
    telefono: "310 425 8505",
    image: logoRafaelo,
  },
  {
    id: "lucho",
    nombre: "Restaurante Lucho",
    tipo: "Tradicional",
    descripcion: "Más de 43 años sirviendo trucha arco iris en el corazón del pueblo.",
    detalle:
      "Desde el 1 de julio de 1980 este restaurante ofrece servicios de calidad, con precios justos en alimentos, bebidas y alojamiento, personal capacitado y un ambiente acogedor. La especialidad de la casa es la trucha arco iris en diversas preparaciones, como la trucha marinera y la crema de cebolla larga. Atiende de 8:00 a. m. a 6:00 p. m.",
    ubicacion: "Plaza Principal, Calle 6 #6-11, Aquitania",
    precio: "Desde $32.000 COP (8 USD) hasta $40.000 COP (10 USD)",
    telefono: "310 310 1931 – 311 513 0569",
    image: logoLucho,
  },
  {
    id: "barbacoa",
    nombre: "Barbacoa Boyacense",
    tipo: "Parrilla",
    descripcion: "Parrillada boyacense frente al paisaje de la Laguna de Tota.",
    detalle:
      "Una exquisita variedad de carnes de res, cerdo y pescado, además de platos a la carta y opciones típicas de la región. Entre sus especialidades se destaca la Parrillada Boyacense, disponible en presentación personal, familiar y extra grande, ideal para compartir. Todo acompañado del hermoso paisaje de la Laguna de Tota.",
    ubicacion: "Cra. 10 #5-91, Aquitania",
    precio: "Desde $28.000 COP (7 USD) hasta $44.000 COP (11 USD)",
    telefono: "320 340 0821",
    image: logoBarbacoa,
  },
];

export const filtrosGastro = [
  "Todos",
  "Tradicional",
  "Cocina de autor",
  "Parrilla",
  "Experiencia cultural",
] as const;

/* -------------------------------- GALERÍA ------------------------------- */

export type Foto = {
  id: string;
  src: string;
  titulo: string;
  descripcion: string;
  categoria: "Paisajes" | "Lago de Tota" | "Cultura" | "Gastronomía" | "Naturaleza" | "Aventura";
};

export const galeria: Foto[] = [
  {
    id: "g1",
    src: mirador,
    titulo: "Mirador sobre el lago",
    descripcion: "Vista panorámica del Lago de Tota desde la alta montaña.",
    categoria: "Paisajes",
  },
  {
    id: "g2",
    src: lanchaAtardecer,
    titulo: "Navegación al atardecer",
    descripcion: "Embarcación recorriendo el lago en las últimas horas del día.",
    categoria: "Lago de Tota",
  },
  {
    id: "g3",
    src: orillaOlas,
    titulo: "Orillas del lago",
    descripcion: "Olas y arena en las playas del Lago de Tota.",
    categoria: "Lago de Tota",
  },
  {
    id: "g4",
    src: costaLago,
    titulo: "Costa verde",
    descripcion: "Península y aguas profundas bajo un cielo de altiplano.",
    categoria: "Paisajes",
  },
  {
    id: "g5",
    src: buceo,
    titulo: "Buceo en el lago",
    descripcion: "El mundo subacuático del lago más alto de Colombia.",
    categoria: "Aventura",
  },
  {
    id: "g6",
    src: lanchaNavegando,
    titulo: "Recorrido náutico",
    descripcion: "Embarcaciones autorizadas para navegar con seguridad.",
    categoria: "Aventura",
  },
  {
    id: "g7",
    src: islaOrilla,
    titulo: "Isla San Pedro",
    descripcion: "Desembarco en la Isla del Zaque, la más extensa del lago.",
    categoria: "Lago de Tota",
  },
  {
    id: "g8",
    src: aereaIsla,
    titulo: "Vista aérea de la isla",
    descripcion: "El muelle de la isla visto desde el aire.",
    categoria: "Paisajes",
  },
  {
    id: "g9",
    src: chalecos,
    titulo: "Visitantes en el muelle",
    descripcion: "Chalecos salvavidas y recorridos guiados por personal capacitado.",
    categoria: "Cultura",
  },
  {
    id: "g10",
    src: buzos,
    titulo: "Equipo de buceo",
    descripcion: "Inmersiones guiadas con certificación RAID.",
    categoria: "Aventura",
  },
  {
    id: "g11",
    src: frailejones,
    titulo: "Frailejones del páramo",
    descripcion: "Vegetación de altura que regula el agua de la región.",
    categoria: "Naturaleza",
  },
  {
    id: "g12",
    src: paramoLaguna,
    titulo: "Lagunas escondidas",
    descripcion: "El circuito de lagunas del ecosistema altoandino.",
    categoria: "Naturaleza",
  },
  {
    id: "g13",
    src: bosqueNiebla,
    titulo: "Bosque de niebla",
    descripcion: "Musgo y humedad en el sendero mágico de alta montaña.",
    categoria: "Naturaleza",
  },
  {
    id: "g14",
    src: caminataParamo,
    titulo: "Caminata de páramo",
    descripcion: "Senderos ancestrales entre vegetación nativa.",
    categoria: "Naturaleza",
  },
  {
    id: "g15",
    src: cultivos,
    titulo: "Cultivos tradicionales",
    descripcion: "Papa, cebolla larga, haba y arveja en las laderas del municipio.",
    categoria: "Paisajes",
  },
  {
    id: "g16",
    src: experienciaGrupo,
    titulo: "Experiencia comunitaria",
    descripcion: "Visitantes compartiendo con informadores locales en la isla.",
    categoria: "Cultura",
  },
  {
    id: "g17",
    src: tallerBocado,
    titulo: "Taller De Bocado en Bocado",
    descripcion: "Cocina tradicional boyacense preparada frente a los visitantes.",
    categoria: "Gastronomía",
  },
  {
    id: "g18",
    src: panoramica,
    titulo: "Panorámica del municipio",
    descripcion: "El lago, los cultivos y las montañas de Aquitania.",
    categoria: "Paisajes",
  },
];

export const categoriasGaleria = [
  "Todas",
  "Paisajes",
  "Lago de Tota",
  "Naturaleza",
  "Aventura",
  "Cultura",
  "Gastronomía",
] as const;

/* --------------------------------- MAPA --------------------------------- */

export type Lugar = {
  id: string;
  nombre: string;
  descripcion: string;
  ubicacion: string;
  image: string;
  maps: string;
  /** posición porcentual sobre el mapa ilustrado */
  x: number;
  y: number;
};

export const lugares: Lugar[] = [
  {
    id: "muelle-la-pena",
    nombre: "Muelle La Peña",
    descripcion:
      "Punto de partida de los recorridos náuticos hacia la Isla San Pedro y las demás islas del lago.",
    ubicacion: "Vereda El Cajón, km 3.5 vía Aquitania – Sogamoso",
    image: lanchaNavegando,
    maps: "https://maps.app.goo.gl/J3145ScVZoUesF8Q8",
    x: 30,
    y: 40,
  },
  {
    id: "isla-san-pedro",
    nombre: "Isla San Pedro (Isla del Zaque)",
    descripcion:
      "La isla más extensa del lago: senderos, avistamiento de aves y el origen mítico del territorio.",
    ubicacion: "Centro del Lago de Tota",
    image: islaOrilla,
    maps: "https://maps.app.goo.gl/DcPBPXAoopLjAtrKA",
    x: 48,
    y: 55,
  },
  {
    id: "monte-tabor",
    nombre: "Mirador del Monte Tabor",
    descripcion: "La mejor vista panorámica del Lago de Tota, en la vereda El Cajón.",
    ubicacion: "Vereda El Cajón – Aquitania",
    image: mirador,
    maps: "https://maps.app.goo.gl/DcPBPXAoopLjAtrKA",
    x: 70,
    y: 30,
  },
  {
    id: "santa-barbara",
    nombre: "Páramo de Santa Bárbara",
    descripcion: "Frailejones, nacimientos de agua y caminatas interpretativas con guía local.",
    ubicacion: "Vereda El Tobal – Aquitania",
    image: frailejones,
    maps: "https://maps.app.goo.gl/c92Dz85W2KmTpWAX8",
    x: 22,
    y: 72,
  },
  {
    id: "curies",
    nombre: "Páramo de los Curíes",
    descripcion: "Senderismo de alta montaña entre afloramientos rocosos y lagunas escondidas.",
    ubicacion: "Medio de Mesas – Aquitania",
    image: paramoLaguna,
    maps: "https://maps.app.goo.gl/DcPBPXAoopLjAtrKA",
    x: 58,
    y: 80,
  },
  {
    id: "casco-urbano",
    nombre: "Plaza principal de Aquitania",
    descripcion:
      "Corazón del municipio: iglesia, comercio y restaurantes tradicionales como Lucho y Barbacoa Boyacense.",
    ubicacion: "Calle 6 #6-11 y Cra. 10 #5-91, Aquitania",
    image: experienciaGrupo,
    maps: "https://maps.app.goo.gl/yKCwzHzacAeP4nZ66",
    x: 78,
    y: 62,
  },
  {
    id: "pozo-azul",
    nombre: "Península Pozo Azul",
    descripcion: "Vereda Susacá, sede de la cocina de autor de Rafaelo frente al lago.",
    ubicacion: "Vereda Susacá – Aquitania",
    image: costaLago,
    maps: "https://maps.app.goo.gl/DnrzmXpDsJQvdYH19",
    x: 40,
    y: 18,
  },
];

/* ------------------------------- OPINIONES ------------------------------ */

export type Opinion = {
  id: string;
  nombre: string;
  estrellas: number;
  comentario: string;
  fecha: string;
};

export const opinionesIniciales: Opinion[] = [
  {
    id: "o1",
    nombre: "Camila R.",
    estrellas: 5,
    comentario:
      "El recorrido a la Isla San Pedro fue lo mejor del viaje. El guía explicó los mitos del lago y alcanzamos a ver varias aves. Totalmente recomendado.",
    fecha: "hace 2 semanas",
  },
  {
    id: "o2",
    nombre: "Jorge A.",
    estrellas: 5,
    comentario:
      "La trucha arco iris del Restaurante Lucho es espectacular y el precio muy justo. Volveríamos solo por eso.",
    fecha: "hace 1 mes",
  },
  {
    id: "o3",
    nombre: "Familia Pérez",
    estrellas: 4,
    comentario:
      "Hicimos el taller De Bocado en Bocado con los niños: bailes, comida típica y muy buena atención. Lleven ropa abrigada porque en la tarde refresca.",
    fecha: "hace 1 mes",
  },
  {
    id: "o4",
    nombre: "Laura M.",
    estrellas: 5,
    comentario:
      "La caminata al Páramo de Santa Bárbara fue exigente pero valió la pena. Los frailejones y los nacimientos de agua son impresionantes.",
    fecha: "hace 2 meses",
  },
];
