import heroLago from "@/assets/hero-lago-tota.jpg";
import playaBlanca from "@/assets/playa-blanca.jpg";
import paramo from "@/assets/paramo.jpg";
import fauna from "@/assets/fauna.jpg";
import cultivos from "@/assets/cultivos-cebolla.jpg";
import kayak from "@/assets/kayak.jpg";
import pueblo from "@/assets/pueblo.jpg";
import muisca from "@/assets/muisca.jpg";
import colonial from "@/assets/colonial.jpg";
import artesanias from "@/assets/artesanias.jpg";
import cultura from "@/assets/cultura.jpg";
import mirador from "@/assets/mirador.jpg";
import gastroTaller from "@/assets/gastro-taller.jpg";
import gastroRafaelo from "@/assets/gastro-rafaelo.jpg";
import gastroLucho from "@/assets/gastro-lucho.jpg";
import gastroBarbacoa from "@/assets/gastro-barbacoa.jpg";

export const img = {
  heroLago,
  playaBlanca,
  paramo,
  fauna,
  cultivos,
  kayak,
  pueblo,
  muisca,
  colonial,
  artesanias,
  cultura,
  mirador,
  gastroTaller,
  gastroRafaelo,
  gastroLucho,
  gastroBarbacoa,
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
      "Mucho antes de la llegada de los europeos, las tierras que hoy forman Aquitania se conocían como Guáquira. Las comunidades que habitaban las orillas del Lago de Tota vivían de la pesca, la caza y el cultivo en las laderas. El lago era considerado un lugar sagrado, morada de fuerzas naturales y escenario de rituales.",
    image: muisca,
  },
  {
    id: "muisca",
    year: "Siglos X–XV",
    title: "Cultura muisca",
    summary: "El pueblo muisca teje mitos y economía alrededor del lago.",
    detail:
      "Los muiscas integraron el Lago de Tota a su cosmovisión. La leyenda del Monstruo Negro del lago, los relatos sobre Bachué y las ofrendas en las aguas hacen parte de una tradición oral que aún se conserva. Su organización social, el trabajo de la tierra y el intercambio de sal, mantas y alimentos marcaron la región.",
    image: cultura,
  },
  {
    id: "espanoles",
    year: "Siglo XVI",
    title: "Llegada de los españoles",
    summary: "La conquista transforma el territorio y sus formas de vida.",
    detail:
      "Con la llegada de los españoles al altiplano boyacense se imponen nuevas formas de propiedad, religión y organización del trabajo. Se levantan capillas, se reparten tierras y las comunidades indígenas son reorganizadas en encomiendas y resguardos alrededor del lago.",
    image: colonial,
  },
  {
    id: "puebloviejo",
    year: "Época colonial",
    title: "Puebloviejo",
    summary: "El primer asentamiento formal del municipio.",
    detail:
      "El poblado original recibió el nombre de Puebloviejo. Allí se concentraron las primeras casas, la iglesia y el mercado. Las condiciones del terreno y las crecientes del lago llevaron con el tiempo a reubicar y reorganizar el caserío hacia el lugar que hoy ocupa la cabecera municipal.",
    image: pueblo,
  },
  {
    id: "avella",
    year: "Siglo XIX",
    title: "Ramón Ignacio Avella",
    summary: "Una figura clave en la consolidación del municipio.",
    detail:
      "Ramón Ignacio Avella es recordado por su papel en la organización y el impulso del municipio. Su gestión quedó ligada a la construcción de espacios comunitarios y al ordenamiento del pueblo, y su nombre hace parte de la memoria local de Aquitania.",
    image: pueblo,
  },
  {
    id: "aquitania",
    year: "1777 – siglo XIX",
    title: "Cambio de nombre a Aquitania",
    summary: "El municipio adopta el nombre que conserva hasta hoy.",
    detail:
      "El antiguo Puebloviejo pasó a llamarse Aquitania, nombre de resonancia europea que reemplazó las denominaciones anteriores. Con el cambio de nombre se afianzó la identidad del municipio dentro de la provincia de Sugamuxi, en el departamento de Boyacá.",
    image: colonial,
  },
  {
    id: "hoy",
    year: "Actualidad",
    title: "Aquitania hoy",
    summary: "Capital cebollera de Colombia y destino turístico del Lago de Tota.",
    detail:
      "Hoy Aquitania es reconocida como la capital cebollera de Colombia y como puerta de entrada al Lago de Tota, el lago natural más grande del país. Turismo, agricultura y conservación conviven en un municipio que recibe visitantes de todo el mundo en Playa Blanca, sus miradores y sus páramos.",
    image: cultivos,
  },
];

export type Experiencia = {
  id: string;
  nombre: string;
  categoria: "Naturaleza" | "Aventura" | "Cultura" | "Turismo ecológico" | "Familia";
  corta: string;
  detalle: string;
  duracion: string;
  dificultad: string;
  image: string;
};

export const experiencias: Experiencia[] = [
  {
    id: "playa-blanca",
    nombre: "Día en Playa Blanca",
    categoria: "Familia",
    corta: "Arena blanca y aguas turquesa a 3.015 metros sobre el nivel del mar.",
    detalle:
      "Playa Blanca es la postal más conocida del Lago de Tota: una playa de arena blanca en pleno altiplano andino. Ideal para pasar el día en familia, caminar por la orilla, tomar fotografías y disfrutar de los kioscos de comida cercanos. Se recomienda llevar bloqueador solar, chaqueta para la tarde y calzado cómodo.",
    duracion: "Medio día o día completo",
    dificultad: "Baja",
    image: playaBlanca,
  },
  {
    id: "kayak",
    nombre: "Kayak en el Lago de Tota",
    categoria: "Aventura",
    corta: "Rema sobre el lago natural más grande de Colombia.",
    detalle:
      "Recorridos guiados en kayak por las bahías del lago. La actividad incluye chaleco salvavidas, breve instrucción y acompañamiento. Las primeras horas de la mañana ofrecen aguas más tranquilas y mejores condiciones para la fotografía.",
    duracion: "1 a 2 horas",
    dificultad: "Media",
    image: kayak,
  },
  {
    id: "paramo",
    nombre: "Caminata al páramo",
    categoria: "Turismo ecológico",
    corta: "Frailejones, neblina y nacimientos de agua.",
    detalle:
      "Una caminata guiada por los páramos que rodean Aquitania, ecosistemas estratégicos que regulan el agua de la región. Durante el recorrido se explican la función de los frailejones, la fauna de altura y las estrategias de conservación del territorio.",
    duracion: "3 a 5 horas",
    dificultad: "Media-alta",
    image: paramo,
  },
  {
    id: "cebolla",
    nombre: "Ruta de la cebolla larga",
    categoria: "Cultura",
    corta: "Conoce el cultivo que define la identidad de Aquitania.",
    detalle:
      "Visita a cultivos familiares donde los campesinos explican el proceso de siembra, corte, lavado y empaque de la cebolla larga que abastece a buena parte del país. Una experiencia cercana a la vida cotidiana del municipio.",
    duracion: "2 a 3 horas",
    dificultad: "Baja",
    image: cultivos,
  },
  {
    id: "mirador",
    nombre: "Miradores del lago",
    categoria: "Naturaleza",
    corta: "Atardeceres panorámicos sobre el Lago de Tota.",
    detalle:
      "Los miradores en la vía que bordea el lago ofrecen vistas completas del espejo de agua, las islas y las montañas. Es el mejor lugar para ver el atardecer y entender la dimensión real del Lago de Tota.",
    duracion: "1 hora",
    dificultad: "Baja",
    image: mirador,
  },
  {
    id: "pueblo",
    nombre: "Recorrido por el casco urbano",
    categoria: "Cultura",
    corta: "Plaza principal, iglesia, mercado y memoria local.",
    detalle:
      "Un recorrido a pie por la cabecera municipal: la plaza principal, la iglesia, el mercado campesino y los talleres de artesanos. Un buen punto de partida para comprender la historia del municipio antes de salir al lago.",
    duracion: "1 a 2 horas",
    dificultad: "Baja",
    image: pueblo,
  },
  {
    id: "aves",
    nombre: "Avistamiento de aves",
    categoria: "Naturaleza",
    corta: "Especies acuáticas y de páramo en su hábitat.",
    detalle:
      "Salidas tempranas a los humedales y orillas del lago para observar patos andinos, tinguas, garzas y aves de páramo. Se recomienda llevar binoculares y ropa de colores neutros.",
    duracion: "2 a 3 horas",
    dificultad: "Baja",
    image: fauna,
  },
  {
    id: "artesanias",
    nombre: "Taller de artesanías",
    categoria: "Familia",
    corta: "Tejidos en lana y trabajo artesanal boyacense.",
    detalle:
      "Talleres donde artesanas locales enseñan técnicas de tejido en lana virgen: ruanas, mochilas y accesorios. Una actividad ideal para hacer en familia y llevarse un recuerdo hecho a mano.",
    duracion: "2 horas",
    dificultad: "Baja",
    image: artesanias,
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
};

export const restaurantes: Restaurante[] = [
  {
    id: "bocado",
    nombre: "Taller De Bocado en Bocado",
    tipo: "Experiencia cultural",
    descripcion: "Un taller gastronómico donde cocinar hace parte del recorrido turístico.",
    detalle:
      "Más que un restaurante, es una experiencia: los visitantes participan en la preparación de platos con ingredientes de la región, aprenden sobre la trucha del Lago de Tota y la cebolla larga, y comparten la mesa con los anfitriones. Espacio ideal para grupos y visitantes que quieren entender la cocina boyacense desde adentro.",
    ubicacion: "Casco urbano de Aquitania, cerca de la plaza principal",
    precio: "$35.000 – $60.000 por persona",
    telefono: "+57 320 000 0001",
    image: gastroTaller,
  },
  {
    id: "rafaelo",
    nombre: "Rafaelo – Cocina de Autor",
    tipo: "Cocina de autor",
    descripcion: "Propuesta contemporánea con productos locales y montaje cuidado.",
    detalle:
      "Cocina de autor que reinterpreta los sabores de Boyacá con técnicas contemporáneas. Su carta cambia según los productos disponibles y destaca la trucha, los tubérculos andinos y las hierbas locales. Ambiente tranquilo, ideal para una cena especial.",
    ubicacion: "Vía al Lago de Tota, Aquitania",
    precio: "$45.000 – $85.000 por persona",
    telefono: "+57 320 000 0002",
    image: gastroRafaelo,
  },
  {
    id: "lucho",
    nombre: "Restaurante Lucho",
    tipo: "Tradicional",
    descripcion: "Comida casera boyacense, generosa y de sabor familiar.",
    detalle:
      "Un clásico de Aquitania. Trucha en distintas preparaciones, cuchuco, caldos, papa criolla y platos abundantes servidos con la calidez de la cocina de casa. Es la opción preferida por quienes buscan sabor tradicional a buen precio.",
    ubicacion: "Centro de Aquitania",
    precio: "$20.000 – $40.000 por persona",
    telefono: "+57 320 000 0003",
    image: gastroLucho,
  },
  {
    id: "barbacoa",
    nombre: "Barbacoa Boyacense",
    tipo: "Parrilla",
    descripcion: "Carnes a la brasa y parrilla al estilo boyacense.",
    detalle:
      "Especialistas en carnes a la brasa, longaniza, costilla y acompañamientos típicos de la región. Un lugar pensado para compartir en grupo después de un día de caminata o de lago.",
    ubicacion: "Salida hacia el lago, Aquitania",
    precio: "$30.000 – $55.000 por persona",
    telefono: "+57 320 000 0004",
    image: gastroBarbacoa,
  },
];

export const filtrosGastro = [
  "Todos",
  "Tradicional",
  "Cocina de autor",
  "Parrilla",
  "Experiencia cultural",
] as const;

export type Foto = {
  id: string;
  src: string;
  titulo: string;
  descripcion: string;
  categoria: "Paisajes" | "Lago de Tota" | "Cultura" | "Gastronomía" | "Artesanías" | "Naturaleza";
};

export const galeria: Foto[] = [
  {
    id: "g1",
    src: heroLago,
    titulo: "Lago de Tota desde el aire",
    descripcion: "El lago natural más grande de Colombia, a más de 3.000 metros de altura.",
    categoria: "Lago de Tota",
  },
  {
    id: "g2",
    src: playaBlanca,
    titulo: "Playa Blanca",
    descripcion: "Arena blanca y agua turquesa en pleno altiplano andino.",
    categoria: "Lago de Tota",
  },
  {
    id: "g3",
    src: paramo,
    titulo: "Páramo y frailejones",
    descripcion: "Los ecosistemas de altura que regulan el agua de la región.",
    categoria: "Naturaleza",
  },
  {
    id: "g4",
    src: fauna,
    titulo: "Aves del lago",
    descripcion: "Especies acuáticas que habitan las orillas y humedales.",
    categoria: "Naturaleza",
  },
  {
    id: "g5",
    src: cultivos,
    titulo: "Cultivos de cebolla larga",
    descripcion: "El paisaje agrícola que hizo de Aquitania la capital cebollera.",
    categoria: "Paisajes",
  },
  {
    id: "g6",
    src: mirador,
    titulo: "Atardecer desde el mirador",
    descripcion: "La vista panorámica más buscada por los visitantes.",
    categoria: "Paisajes",
  },
  {
    id: "g7",
    src: pueblo,
    titulo: "Plaza principal",
    descripcion: "El corazón urbano de Aquitania y su iglesia.",
    categoria: "Cultura",
  },
  {
    id: "g8",
    src: cultura,
    titulo: "Fiestas y tradición",
    descripcion: "Danzas y trajes típicos que mantienen viva la identidad boyacense.",
    categoria: "Cultura",
  },
  {
    id: "g9",
    src: artesanias,
    titulo: "Tejidos en lana",
    descripcion: "Ruanas y mochilas elaboradas por artesanas del municipio.",
    categoria: "Artesanías",
  },
  {
    id: "g10",
    src: gastroTaller,
    titulo: "Trucha del lago",
    descripcion: "El producto estrella de la cocina local.",
    categoria: "Gastronomía",
  },
  {
    id: "g11",
    src: gastroLucho,
    titulo: "Mesa boyacense",
    descripcion: "Platos tradicionales servidos al estilo de casa.",
    categoria: "Gastronomía",
  },
  {
    id: "g12",
    src: muisca,
    titulo: "Herencia muisca",
    descripcion: "Piezas y memoria de los pueblos originarios del territorio.",
    categoria: "Cultura",
  },
];

export const categoriasGaleria = [
  "Todas",
  "Paisajes",
  "Lago de Tota",
  "Cultura",
  "Gastronomía",
  "Artesanías",
  "Naturaleza",
] as const;

export type Lugar = {
  id: string;
  nombre: string;
  descripcion: string;
  ubicacion: string;
  image: string;
  /** posición porcentual sobre el mapa ilustrado */
  x: number;
  y: number;
};

export const lugares: Lugar[] = [
  {
    id: "playa",
    nombre: "Playa Blanca",
    descripcion: "Playa de arena blanca sobre el Lago de Tota, el punto turístico más visitado.",
    ubicacion: "Vereda Playa Blanca, 12 km del casco urbano",
    image: playaBlanca,
    x: 32,
    y: 58,
  },
  {
    id: "casco",
    nombre: "Casco urbano de Aquitania",
    descripcion: "Plaza principal, iglesia, mercado campesino y talleres artesanales.",
    ubicacion: "Centro del municipio",
    image: pueblo,
    x: 62,
    y: 34,
  },
  {
    id: "mirador",
    nombre: "Mirador del Lago",
    descripcion: "Vista panorámica del lago y sus islas, ideal al atardecer.",
    ubicacion: "Vía Sogamoso – Aquitania",
    image: mirador,
    x: 74,
    y: 62,
  },
  {
    id: "paramo",
    nombre: "Páramo de Tota",
    descripcion: "Ecosistema de frailejones y nacimientos de agua que alimentan el lago.",
    ubicacion: "Zona alta del municipio",
    image: paramo,
    x: 46,
    y: 18,
  },
  {
    id: "cultivos",
    nombre: "Cultivos de cebolla",
    descripcion: "Laderas sembradas de cebolla larga, símbolo económico de Aquitania.",
    ubicacion: "Veredas del costado oriental del lago",
    image: cultivos,
    x: 20,
    y: 30,
  },
  {
    id: "humedal",
    nombre: "Humedales y avistamiento",
    descripcion: "Orillas con juncos donde se observan aves acuáticas de altura.",
    ubicacion: "Bahías del norte del lago",
    image: fauna,
    x: 52,
    y: 76,
  },
];

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
      "Playa Blanca es impresionante. No imaginaba encontrar una playa así en pleno páramo. El agua está helada pero vale totalmente la pena.",
    fecha: "hace 2 semanas",
  },
  {
    id: "o2",
    nombre: "Jorge A.",
    estrellas: 5,
    comentario:
      "La trucha de Aquitania es la mejor que he probado. Comimos en un restaurante del centro y la atención fue excelente.",
    fecha: "hace 1 mes",
  },
  {
    id: "o3",
    nombre: "Familia醒 Pérez",
    estrellas: 4,
    comentario:
      "Fuimos con niños y disfrutaron mucho el día en el lago. Recomiendo llevar ropa abrigada porque en la tarde baja mucho la temperatura.",
    fecha: "hace 1 mes",
  },
  {
    id: "o4",
    nombre: "Laura M.",
    estrellas: 5,
    comentario:
      "La caminata al páramo fue una experiencia distinta. Los guías explican muy bien la importancia de los frailejones.",
    fecha: "hace 2 meses",
  },
];
