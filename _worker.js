const PRODUCTS_KEY = 'products';
const SESSION_COOKIE = 'admin_session';
const SESSION_TTL_SECONDS = 60 * 60 * 12;
const DEFAULT_PRODUCTS = [
  {
    nombre: "Borradores",
    categoria: "escolares",
    descripcion: "borradores de diferentes colores y formas para tus necesidades escolares.",
    precio: 10,
    precioAntes: null,
    stock: 22,
    tag: "",
    tagTipo: "",
    img: ""
  },
  {
    nombre: "Hidrante de labios",
    categoria: "cuidado",
    descripcion: "Hidratantes de labios edicion labubu para mantener tus labios suaves y humectados durante todo el dia.",
    precio: 8,
    precioAntes: null,
    stock: 1,
    tag: "",
    tagTipo: "",
    img: "https://img-73s.pages.dev/IMG-20260423-WA0048 (1).png"
  },
  {
    nombre: "Labiales",
    categoria: "maquillaje",
    descripcion: "Labiales de diferentes colores para resaltar tu sonrisa.",
    precio: 16,
    precioAntes: null,
    stock: 16,
    tag: "KaritÃ©",
    tagTipo: "rosa",
    img: ""
  },
  {
    nombre: "Kit de borlas y esponjas",
    categoria: "maquillaje",
    descripcion: "Kit de borlas y esponjas para aplicar maquillaje de manera uniforme.",
    precio: 32,
    precioAntes: 35,
    stock: 12,
    tag: "",
    tagTipo: "",
    img: ""
  },
  {
    nombre: "Perfume 35ml",
    categoria: "perfumes",
    descripcion: "Perfumes estilo palito de diferentes fragancias para cada ocasiÃ³n.",
    precio: 20,
    precioAntes: null,
    stock: 12,
    tag: "V.V.love",
    tagTipo: "sale",
    img: ""
  },
  {
    nombre: "Perfume 30ml",
    categoria: "perfumes",
    descripcion: "Perfumes unisex de diferentes fragancias para cada ocasiÃ³n.",
    precio: 20,
    precioAntes: null,
    stock: 10,
    tag: "V.V.love",
    tagTipo: "sale",
    img: ""
  },
  {
    nombre: "Set de 4 Cepillos",
    categoria: "cuidado",
    descripcion: "Set de 4 cepillos para el cuidado de tu cabello en rosa y celeste.",
    precio: 35,
    precioAntes: null,
    stock: 6,
    tag: "",
    tagTipo: "",
    img: "https://img-73s.pages.dev/IMG-20260423-WA0046.png"
  },
  {
    nombre: "Pack de 4 Perfumes",
    categoria: "perfumes",
    descripcion: "Perfume femenino que incluye 4 perfumes con fragancias variadas y duraderas.",
    precio: 50,
    precioAntes: null,
    stock: 7,
    tag: "V.V.love",
    tagTipo: "sale",
    img: ""
  },
  {
    nombre: "Block de notas",
    categoria: "escolares",
    descripcion: "Block de notas con separador en forma de osito para organizar tus apuntes.",
    precio: 10,
    precioAntes: null,
    stock: 6,
    tag: "",
    tagTipo: "",
    img: "https://img-73s.pages.dev/IMG-20260423-WA0051.png"
  },
  {
    nombre: "Delineador de ojos",
    categoria: "maquillaje",
    descripcion: "Delineador de ojos de diferentes colores para resaltar tu mirada.",
    precio: 10,
    precioAntes: null,
    stock: 6,
    tag: "KaritÃ©",
    tagTipo: "rosa",
    img: ""
  },
  {
    nombre: "Kit desmaquillante",
    categoria: "maquillaje",
    descripcion: "Kit de desmaquillante para eliminar el maquillaje de manera efectiva.",
    precio: 30,
    precioAntes: 35,
    stock: 5,
    tag: "",
    tagTipo: "",
    img: ""
  },
  {
    nombre: "Paleta Verde NeÃ³n",
    categoria: "maquillaje",
    descripcion: "Paleta de colores carnavaleros para crear looks divertidos y modernos.",
    precio: 120,
    precioAntes: null,
    stock: 1,
    tag: "Beauty Creations",
    tagTipo: "sale",
    img: "https://img-73s.pages.dev/IMG-20260424-WA0025.jpg"
  },
  {
    nombre: "Paleta Rojo NeÃ³n",
    categoria: "maquillaje",
    descripcion: "Paleta de colores carnavaleros para crear looks divertidos y modernos.",
    precio: 120,
    precioAntes: null,
    stock: 1,
    tag: "Beauty Creations",
    tagTipo: "sale",
    img: "https://img-73s.pages.dev/IMG-20260424-WA0024.jpg"
  },
  {
    nombre: "Paleta Naranja NeÃ³n",
    categoria: "maquillaje",
    descripcion: "Paleta de colores carnavaleros para crear looks divertidos y modernos.",
    precio: 120,
    precioAntes: null,
    stock: 2,
    tag: "Beauty Creations",
    tagTipo: "sale",
    img: "https://img-73s.pages.dev/IMG-20260424-WA0026.jpg"
  },
  {
    nombre: "Gloss Chicas Super Poderosas",
    categoria: "maquillaje",
    descripcion: "Estos lip oils de las Chicas Super Poderosas son el complemento perfecto para tu maquillaje, con un brillo intenso. 2 unidades celestes, 1 rosa y una verde.",
    precio: 100,
    precioAntes: null,
    stock: 4,
    tag: "Beauty Creations",
    tagTipo: "sale",
    img: ""
  },
  {
    nombre: "Sombra Compacto Bob Esponja",
    categoria: "maquillaje",
    descripcion: "Sombra compacta de la coleccion bob esponja en 3 diferentes tonos.",
    precio: 120,
    precioAntes: null,
    stock: 0,
    tag: "Beauty Creations",
    tagTipo: "sale",
    img: "https://img-73s.pages.dev/IMG-20260424-WA0022.jpg"
  },
  {
    nombre: "Aceite Limpiador Centella Neutro",
    categoria: "maquillaje",
    descripcion: "Aceite limpiador con ingredientes naturales para una limpieza profunda.",
    precio: 200,
    precioAntes: null,
    stock: 3,
    tag: "Skin 1004",
    tagTipo: "gold",
    img: "https://img-73s.pages.dev/11245543.webp"
  },
  {
    nombre: "Perfumes Medianos",
    categoria: "perfumes",
    descripcion: "Perfume unisex de diferentes fragancias para cada ocasiÃ³n.",
    precio: 50,
    precioAntes: null,
    stock: 3,
    tag: "V.V.love",
    tagTipo: "sale",
    img: ""
  },
  {
    nombre: "Paleta Peluche",
    categoria: "maquillaje",
    descripcion: "Paleta de colores inspirada en personajes de peluche para crear looks adorables.",
    precio: 140,
    precioAntes: null,
    stock: 1,
    tag: "Kevin&Coco",
    tagTipo: "gold",
    img: "https://img-73s.pages.dev/IMG-20260424-WA0002.jpg"
  },
  {
    nombre: "Paleta Peluche 2",
    categoria: "maquillaje",
    descripcion: "Paleta de colores inspirada en personajes de peluche para crear looks adorables.",
    precio: 140,
    precioAntes: null,
    stock: 1,
    tag: "Kevin&Coco",
    tagTipo: "gold",
    img: "https://img-73s.pages.dev/IMG-20260424-WA0001.jpg"
  },
  {
    nombre: "Lip Combo",
    categoria: "maquillaje",
    descripcion: "Combo de labiales con diferentes tonos para crear looks variados.",
    precio: 180,
    precioAntes: null,
    stock: 1,
    tag: "Beauty Creations",
    tagTipo: "sale",
    img: "https://img-73s.pages.dev/IMG-20260424-WA0005.jpg"
  },
  {
    nombre: "Lip Combo 2",
    categoria: "maquillaje",
    descripcion: "Combo de labiales con diferentes tonos para crear looks variados.",
    precio: 180,
    precioAntes: null,
    stock: 1,
    tag: "Beauty Creations",
    tagTipo: "sale",
    img: "https://img-73s.pages.dev/11.jpeg"
  },
  {
    nombre: "Mini Paleta",
    categoria: "maquillaje",
    descripcion: "Paleta en tonos rosa para un maquillaje rÃ¡pido y sencillo.",
    precio: 40,
    precioAntes: null,
    stock: 1,
    tag: "Kevin&Coco",
    tagTipo: "gold",
    img: "https://img-73s.pages.dev/IMG-20260424-WA0012.jpg"
  },
  {
    nombre: "Mini Paleta 2",
    categoria: "maquillaje",
    descripcion: "Paleta en tonos cafes para un maquillaje rÃ¡pido y sencillo.",
    precio: 40,
    precioAntes: null,
    stock: 1,
    tag: "Kevin&Coco",
    tagTipo: "gold",
    img: "https://img-73s.pages.dev/KC246212_10.webp"
  },
  {
    nombre: "Contorno Nice",
    categoria: "maquillaje",
    descripcion: "Contorno de ojos en tonos neutros para un maquillaje suave y natural.",
    precio: 8,
    precioAntes: null,
    stock: 2,
    tag: "Kevin&Coco",
    tagTipo: "gold",
    img: "https://img-73s.pages.dev/KC245215-6-COLORS-FACE-PALETTE.webp"
  },
  {
    nombre: "Rubor En Crema",
    categoria: "maquillaje",
    descripcion: "Rubor en crema para un maquillaje suave y natural.",
    precio: 40,
    precioAntes: null,
    stock: 2,
    tag: "Kevin&Coco",
    tagTipo: "gold",
    img: "https://img-73s.pages.dev/IMG-20260424-WA0028.png"
  },
  {
    nombre: "Crema Hidratante De Manos",
    categoria: "cuidado",
    descripcion: "Crema hidratante de manos con ingredientes naturales para mantener tus manos suaves y humectadas.",
    precio: 15,
    precioAntes: null,
    stock: 1,
    tag: "Bioaqua",
    tagTipo: "celeste",
    img: "https://img-73s.pages.dev/515b75a69ec1aedb14bda99d0459a8cd.jpg_720x720q80.jpg"
  },
  {
    nombre: "Crema Para Manos",
    categoria: "cuidado",
    descripcion: "Crema para manos con ingredientes naturales para mantener tus manos suaves y humectadas.",
    precio: 15,
    precioAntes: null,
    stock: 1,
    tag: "",
    tagTipo: "",
    img: ""
  },
  {
    nombre: "Neceser Rosa",
    categoria: "neceser",
    descripcion: "Neceser de color rosa para guardar tus productos de belleza de manera organizada y elegante.",
    precio: 70,
    precioAntes: null,
    stock: 2,
    tag: "",
    tagTipo: "",
    img: ""
  },
  {
    nombre: "Neceser CafÃ© Ecocuero",
    categoria: "neceser",
    descripcion: "Neceser de color cafÃ© hecha de ecocuero para guardar tus productos de belleza de manera organizada y elegante.",
    precio: 70,
    precioAntes: null,
    stock: 2,
    tag: "",
    tagTipo: "",
    img: ""
  },
  {
    nombre: "Protector Solar Blanco Centella",
    categoria: "cuidado",
    descripcion: "",
    precio: 130,
    precioAntes: null,
    stock: 2,
    tag: "Skin 1004",
    tagTipo: "gold",
    img: ""
  },
  {
    nombre: "Protector Solar Rosa Centella",
    categoria: "cuidado",
    descripcion: "",
    precio: 130,
    precioAntes: null,
    stock: 2,
    tag: "Skin 1004",
    tagTipo: "gold",
    img: ""
  },
  {
    nombre: "JabÃ³n Centella Neutro",
    categoria: "cuidado",
    descripcion: "",
    precio: 120,
    precioAntes: null,
    stock: 2,
    tag: "Skin 1004",
    tagTipo: "gold",
    img: ""
  },
  {
    nombre: "Contorno De Ojos Centella",
    categoria: "cuidado",
    descripcion: "Contorno de ojos con ingredientes naturales para un cuidado suave y efectivo de la piel alrededor de los ojos.",
    precio: 120,
    precioAntes: null,
    stock: 2,
    tag: "Skin 1004",
    tagTipo: "gold",
    img: "https://img-73s.pages.dev/2.webp"
  },
  {
    nombre: "Hidratante De Labios",
    categoria: "cuidado",
    descripcion: "Hidratante de labios con ingredientes naturales para mantener tus labios suaves y humectados durante todo el dia.",
    precio: 10,
    precioAntes: null,
    stock: 1,
    tag: "Bioaqua",
    tagTipo: "celeste",
    img: "https://img-73s.pages.dev/IMG-20260423-WA0050.png"
  },
  {
    nombre: "Paleta Barbie",
    categoria: "maquillaje",
    descripcion: "Paleta de colores inspirada en la icÃ³nica muÃ±eca Barbie para crear looks divertidos y femeninos.",
    precio: 400,
    precioAntes: null,
    stock: 1,
    tag: "Beauty Creations",
    tagTipo: "sale",
    img: "https://img-73s.pages.dev/10.webp"
  },
  {
    nombre: "Paleta LoterÃ­a",
    categoria: "maquillaje",
    descripcion: "Paleta de loterÃ­a para crear looks divertidos y femeninos.",
    precio: 400,
    precioAntes: null,
    stock: 1,
    tag: "Beauty Creations",
    tagTipo: "sale",
    img: "https://img-73s.pages.dev/12.webp"
  },
  {
    nombre: "Paleta Tease Me",
    categoria: "maquillaje",
    descripcion: "Paleta de colores inspirada para crear looks divertidos y femeninos.",
    precio: 350,
    precioAntes: null,
    stock: 1,
    tag: "Beauty Creations",
    tagTipo: "sale",
    img: "https://img-73s.pages.dev/7.webp"
  },
  {
    nombre: "Parches De Las Chicas Super Poderosas",
    categoria: "cuidado",
    descripcion: "Parches para el cuidado de la piel con ingredientes naturales.",
    precio: 80,
    precioAntes: null,
    stock: 1,
    tag: "Beauty Creations",
    tagTipo: "sale",
    img: ""
  },
  {
    nombre: "Set De Rubores",
    categoria: "maquillaje",
    descripcion: "Set de rubores para crear looks divertidos y femeninos.",
    precio: 90,
    precioAntes: null,
    stock: 1,
    tag: "Kevin&Coco",
    tagTipo: "gold",
    img: ""
  },
  {
    nombre: "Paleta Peluche Grande",
    categoria: "maquillaje",
    descripcion: "Paleta de colores inspirada en el peluche grande para crear looks divertidos y femeninos.",
    precio: 200,
    precioAntes: null,
    stock: 1,
    tag: "Kevin&Coco",
    tagTipo: "gold",
    img: "https://img-73s.pages.dev/IMG-20260424-WA0003.jpg"
  },
  {
    nombre: "Rubor Chicas Super Poderosas",
    categoria: "maquillaje",
    descripcion: "Rubor para crear looks divertidos y femeninos.",
    precio: 90,
    precioAntes: null,
    stock: 1,
    tag: "Beauty Creations",
    tagTipo: "sale",
    img: ""
  },
  {
    nombre: "Duo De Rubores",
    categoria: "maquillaje",
    descripcion: "Duo de rubores para crear looks divertidos y femeninos.",
    precio: 350,
    precioAntes: null,
    stock: 1,
    tag: "Beauty Creations",
    tagTipo: "sale",
    img: ""
  },
  {
    nombre: "Iluminador Gotta Glow Barbie",
    categoria: "maquillaje",
    descripcion: "Iluminador para crear looks divertidos y femeninos.",
    precio: 160,
    precioAntes: null,
    stock: 1,
    tag: "Beauty Creations",
    tagTipo: "sale",
    img: "https://img-73s.pages.dev/IMG-20260424-WA0008.jpg"
  },
  {
    nombre: "Spray De Yeri Mua",
    categoria: "cuidado",
    descripcion: "Spray para el cuidado de la piel con ingredientes naturales.",
    precio: 160,
    precioAntes: null,
    stock: 1,
    tag: "Beauty Creations",
    tagTipo: "sale",
    img: "https://img-73s.pages.dev/yerimua-unique-setting-spray-4800282.webp"
  },
  {
    nombre: "Spray Barbie",
    categoria: "cuidado",
    descripcion: "Spray para el cuidado de la piel con ingredientes naturales.",
    precio: 160,
    precioAntes: null,
    stock: 1,
    tag: "Beauty Creations",
    tagTipo: "sale",
    img: "https://img-73s.pages.dev/IMG-20260424-WA0010.jpg"
  },
  {
    nombre: "Rubor De Bob Esponja",
    categoria: "maquillaje",
    descripcion: "Rubor para crear looks divertidos y femeninos.",
    precio: 90,
    precioAntes: null,
    stock: 1,
    tag: "Beauty Creations",
    tagTipo: "sale",
    img: ""
  },
  {
    nombre: "Set De Navidad",
    categoria: "maquillaje",
    descripcion: "Set de productos con estilo navidadeÃ±o.",
    precio: 60,
    precioAntes: null,
    stock: 1,
    tag: "Kevin&Coco",
    tagTipo: "gold",
    img: "https://img-73s.pages.dev/KC1149_2.webp"
  },
  {
    nombre: "Limpia Brochas",
    categoria: "maquillaje",
    descripcion: "Limpia brochas para mantenerlas en perfectas condiciones.",
    precio: 10,
    precioAntes: null,
    stock: 1,
    tag: "",
    tagTipo: "",
    img: ""
  },
  {
    nombre: "Gloss Kevin&Coco",
    categoria: "maquillaje",
    descripcion: "Gloss para resaltar los labios.",
    precio: 25,
    precioAntes: null,
    stock: 1,
    tag: "Kevin&Coco",
    tagTipo: "gold",
    img: ""
  },
  {
    nombre: "Set Kevin&Coco",
    categoria: "maquillaje",
    descripcion: "Set de productos de la marca Kevin&Coco.",
    precio: 180,
    precioAntes: null,
    stock: 1,
    tag: "Kevin&Coco",
    tagTipo: "gold",
    img: ""
  },
  {
    nombre: "Paleta Carnival",
    categoria: "maquillaje",
    descripcion: "Paleta de colores con amplia variedad de tonos irresistibles.",
    precio: 150,
    precioAntes: null,
    stock: 1,
    tag: "BPerfect x Stacey Marie",
    tagTipo: "sale",
    img: "https://img-73s.pages.dev/IMG-20260424-WA0019.jpg"
  },
  {
    nombre: "Paleta Chicas Super Poderosas",
    categoria: "maquillaje",
    descripcion: "Paleta de colores inspirada en el universo de las Chicas Super Poderosas.",
    precio: 400,
    precioAntes: null,
    stock: 1,
    tag: "Beauty Creations",
    tagTipo: "sale",
    img: "https://img-73s.pages.dev/powerpuff-girls-paleta-de-sombras-1.webp"
  },
  {
    nombre: "Gloss Beauty Creations",
    categoria: "maquillaje",
    descripcion: "Gloss para resaltar los labios.",
    precio: 80,
    precioAntes: null,
    stock: 1,
    tag: "Beauty Creations",
    tagTipo: "sale",
    img: ""
  },
  {
    nombre: "Labial Con Llavero",
    categoria: "maquillaje",
    descripcion: "Labial con llavero para un estilo Ãºnico.",
    precio: 30,
    precioAntes: null,
    stock: 1,
    tag: "Kevin&Coco",
    tagTipo: "gold",
    img: ""
  },
  {
    nombre: "Paleta Cookies",
    categoria: "maquillaje",
    descripcion: "Paleta de colores inspirada en el mundo de las galletas.",
    precio: 90,
    precioAntes: null,
    stock: 1,
    tag: "Kevin&Coco",
    tagTipo: "gold",
    img: "https://img-73s.pages.dev/IMG-20260424-WA0030.jpg"
  },
  {
    nombre: "Jabon Facial",
    categoria: "cuidado",
    descripcion: "Jabon para el cuidado del rostro con ingredientes naturales.",
    precio: 40,
    precioAntes: 50,
    stock: 1,
    tag: "Bioaqua",
    tagTipo: "celeste",
    img: ""
  },
  {
    nombre: "Iluminador Liquido",
    categoria: "maquillaje",
    descripcion: "Iluminador lÃ­quido para un acabado brillante.",
    precio: 30,
    precioAntes: null,
    stock: 1,
    tag: "Kevin&Coco",
    tagTipo: "gold",
    img: ""
  },
  {
    nombre: "Neceser Transparente",
    categoria: "neceser",
    descripcion: "Neceser transparente para almacenar tus productos de belleza.",
    precio: 60,
    precioAntes: null,
    stock: 1,
    tag: "",
    tagTipo: "",
    img: ""
  },
  {
    nombre: "Neceser De Cuero",
    categoria: "neceser",
    descripcion: "Neceser de cuero para almacenar tus productos de belleza.",
    precio: 80,
    precioAntes: null,
    stock: 1,
    tag: "",
    tagTipo: "",
    img: ""
  },
  {
    nombre: "Dr.Althea 147",
    categoria: "cuidado",
    descripcion: "Crema facial para el cuidado de la piel con ingredientes naturales.",
    precio: 130,
    precioAntes: null,
    stock: 1,
    tag: "Dr.Althea",
    tagTipo: "gold",
    img: "https://myskingt.com/cdn/shop/files/PreciosMYSKIN-2025-06-09T113025.122.png?v=1749490262&width=1946"
  },
  {
    nombre: "Crema Mixsoon",
    categoria: "cuidado",
    descripcion: "Crema para el cuidado de la piel con ingredientes naturales.",
    precio: 150,
    precioAntes: null,
    stock: 1,
    tag: "Mixsoon",
    tagTipo: "gold",
    img: ""
  },
  {
    nombre: "Crema Tea Trica Centella",
    categoria: "cuidado",
    descripcion: "Crema para el cuidado de la piel con ingredientes naturales.",
    precio: 120,
    precioAntes: null,
    stock: 1,
    tag: "Skin 1004",
    tagTipo: "gold",
    img: "https://img-73s.pages.dev/21122.webp"
  },
  {
    nombre: "Protector Solar CafÃ© Centella",
    categoria: "cuidado",
    descripcion: "Protector solar para el cuidado de la piel con ingredientes naturales.",
    precio: 130,
    precioAntes: null,
    stock: 1,
    tag: "Skin 1004",
    tagTipo: "gold",
    img: "https://img-73s.pages.dev/1.jpg"
  },
  {
    nombre: "Crema Blanca Centella",
    categoria: "cuidado",
    descripcion: "Crema para el cuidado de la piel con ingredientes naturales.",
    precio: 130,
    precioAntes: null,
    stock: 1,
    tag: "Skin 1004",
    tagTipo: "gold",
    img: ""
  },
  {
    nombre: "Crema CafÃ© Centella",
    categoria: "cuidado",
    descripcion: "Crema para el cuidado de la piel con ingredientes naturales.",
    precio: 130,
    precioAntes: null,
    stock: 1,
    tag: "Skin 1004",
    tagTipo: "gold",
    img: ""
  },
  {
    nombre: "Jabon Facial Mixsoon",
    categoria: "cuidado",
    descripcion: "Jabon para el cuidado del rostro con ingredientes naturales.",
    precio: 130,
    precioAntes: 150,
    stock: 1,
    tag: "Mixsoon",
    tagTipo: "gold",
    img: ""
  },
  {
    nombre: "Protector Solar Mixsoon",
    categoria: "cuidado",
    descripcion: "Protector solar para el cuidado de la piel con ingredientes naturales.",
    precio: 130,
    precioAntes: null,
    stock: 1,
    tag: "Mixsoon",
    tagTipo: "gold",
    img: ""
  },
  {
    nombre: "Tonico Centella Celeste",
    categoria: "cuidado",
    descripcion: "Tonico para el cuidado de la piel con ingredientes naturales.",
    precio: 150,
    precioAntes: null,
    stock: 1,
    tag: "Skin 1004",
    tagTipo: "gold",
    img: ""
  },
  {
    nombre: "Ampolla Centella CafÃ©",
    categoria: "cuidado",
    descripcion: "Ampolla para el cuidado de la piel con ingredientes naturales.",
    precio: 150,
    precioAntes: null,
    stock: 1,
    tag: "Skin 1004",
    tagTipo: "gold",
    img: ""
  },
  {
    nombre: "Jabon Facial Centella Rosa",
    categoria: "cuidado",
    descripcion: "Jabon para el cuidado del rostro con ingredientes naturales.",
    precio: 150,
    precioAntes: null,
    stock: 1,
    tag: "Skin 1004",
    tagTipo: "gold",
    img: ""
  },
  {
    nombre: "Set De Skincare Leopardo",
    categoria: "cuidado",
    descripcion: "Set de productos para el cuidado de la piel con ingredientes naturales.",
    precio: 50,
    precioAntes: null,
    stock: 1,
    tag: "",
    tagTipo: "",
    img: ""
  }
];

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: corsHeaders() });
    }

    try {
      if (url.pathname === '/api/products' && request.method === 'GET') {
        return json({ products: await getProducts(env) });
      }

      if (url.pathname === '/api/admin/login' && request.method === 'POST') {
        return handleLogin(request, env, url);
      }

      if (url.pathname === '/api/admin/logout' && request.method === 'POST') {
        return json({ ok: true }, { headers: { 'Set-Cookie': clearCookie(url) } });
      }

      if (url.pathname === '/api/admin/session' && request.method === 'GET') {
        await requireAdmin(request, env);
        return json({ ok: true });
      }

      if (url.pathname === '/api/admin/products' && request.method === 'GET') {
        await requireAdmin(request, env);
        return json({ products: await getProducts(env) });
      }

      if (url.pathname === '/api/admin/products' && request.method === 'PUT') {
        await requireAdmin(request, env);
        const body = await request.json();
        const products = Array.isArray(body) ? body : body.products;
        if (!Array.isArray(products)) return json({ error: 'Lista de productos invalida' }, { status: 400 });
        const clean = normalizeProducts(products);
        await saveProducts(env, clean);
        return json({ products: clean });
      }

      if (url.pathname === '/api/admin/products' && request.method === 'POST') {
        await requireAdmin(request, env);
        const products = await getProducts(env);
        const product = normalizeProduct(await request.json(), products.length);
        if (!product.id || products.some((p) => p.id === product.id)) product.id = uniqueId(product.nombre, products);
        products.unshift(product);
        await saveProducts(env, products);
        return json({ product }, { status: 201 });
      }

      const itemMatch = url.pathname.match(/^\/api\/admin\/products\/([^/]+)$/);
      if (itemMatch) {
        await requireAdmin(request, env);
        const id = decodeURIComponent(itemMatch[1]);
        const products = await getProducts(env);
        const index = products.findIndex((p) => p.id === id);
        if (index === -1) return json({ error: 'Producto no encontrado' }, { status: 404 });

        if (request.method === 'PUT') {
          const next = normalizeProduct({ ...products[index], ...(await request.json()), id }, index);
          products[index] = next;
          await saveProducts(env, products);
          return json({ product: next });
        }

        if (request.method === 'DELETE') {
          const [deleted] = products.splice(index, 1);
          await saveProducts(env, products);
          return json({ product: deleted });
        }
      }
    } catch (error) {
      if (error && error.status === 401) return json({ error: 'No autorizado' }, { status: 401 });
      return json({ error: error.message || 'Error interno' }, { status: 500 });
    }

    return env.ASSETS.fetch(request);
  }
};

async function getProducts(env) {
  ensureKV(env);
  const stored = await env.PRODUCTS_KV.get(PRODUCTS_KEY, 'json');
  if (Array.isArray(stored)) return normalizeProducts(stored);
  return normalizeProducts(DEFAULT_PRODUCTS);
}

async function saveProducts(env, products) {
  ensureKV(env);
  await env.PRODUCTS_KV.put(PRODUCTS_KEY, JSON.stringify(products));
}

function ensureKV(env) {
  if (!env.PRODUCTS_KV) throw new Error('Falta vincular el namespace KV como PRODUCTS_KV');
}

async function handleLogin(request, env, url) {
  const password = env.ADMIN_PASSWORD || env.ADMIN_SECRET;
  if (!password) return json({ error: 'Falta configurar ADMIN_PASSWORD' }, { status: 500 });
  const body = await request.json().catch(() => ({}));
  if (String(body.password || '') !== String(password)) return json({ error: 'Clave incorrecta' }, { status: 401 });
  const token = await signSession(env);
  return json({ ok: true }, { headers: { 'Set-Cookie': sessionCookie(token, url) } });
}

async function requireAdmin(request, env) {
  const token = readCookie(request, SESSION_COOKIE);
  if (!token || !(await verifySession(token, env))) {
    const err = new Error('No autorizado');
    err.status = 401;
    throw err;
  }
}

async function signSession(env) {
  const now = Math.floor(Date.now() / 1000);
  const payload = base64urlEncode(JSON.stringify({ iat: now, exp: now + SESSION_TTL_SECONDS }));
  const signature = await hmac(payload, sessionSecret(env));
  return `${payload}.${signature}`;
}

async function verifySession(token, env) {
  const [payload, signature] = String(token).split('.');
  if (!payload || !signature) return false;
  const expected = await hmac(payload, sessionSecret(env));
  if (signature !== expected) return false;
  try {
    const data = JSON.parse(base64urlDecode(payload));
    return Number(data.exp || 0) > Math.floor(Date.now() / 1000);
  } catch {
    return false;
  }
}

function sessionSecret(env) {
  return String(env.ADMIN_PASSWORD || env.ADMIN_SECRET || '');
}

async function hmac(message, secret) {
  const key = await crypto.subtle.importKey('raw', new TextEncoder().encode(secret), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
  const sig = await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(message));
  return base64urlEncodeBytes(new Uint8Array(sig));
}

function readCookie(request, name) {
  const cookie = request.headers.get('Cookie') || '';
  return cookie.split(';').map((v) => v.trim()).find((v) => v.startsWith(name + '='))?.slice(name.length + 1) || '';
}

function sessionCookie(token, url) {
  const secure = url.protocol === 'https:' ? '; Secure' : '';
  return `${SESSION_COOKIE}=${token}; Path=/; Max-Age=${SESSION_TTL_SECONDS}; HttpOnly; SameSite=Lax${secure}`;
}

function clearCookie(url) {
  const secure = url.protocol === 'https:' ? '; Secure' : '';
  return `${SESSION_COOKIE}=; Path=/; Max-Age=0; HttpOnly; SameSite=Lax${secure}`;
}

function normalizeProducts(products) {
  return products.map(normalizeProduct).filter((p) => p.nombre);
}

function normalizeProduct(product, index = 0) {
  const p = product || {};
  return {
    id: String(p.id || `${slug(p.nombre || 'producto')}-${index}`),
    nombre: cleanText(p.nombre || 'Producto sin nombre'),
    categoria: cleanText(p.categoria || 'cuidado'),
    descripcion: cleanText(p.descripcion || ''),
    precio: finiteNumber(p.precio),
    precioAntes: p.precioAntes === null || p.precioAntes === '' || typeof p.precioAntes === 'undefined' ? null : finiteNumber(p.precioAntes),
    stock: Math.max(0, Math.floor(finiteNumber(p.stock))),
    tag: cleanText(p.tag || ''),
    tagTipo: cleanText(p.tagTipo || ''),
    img: cleanText(p.img || '')
  };
}

function uniqueId(name, products) {
  const base = slug(name || 'producto');
  let id = base;
  let i = 2;
  while (products.some((p) => p.id === id)) id = `${base}-${i++}`;
  return id;
}

function slug(value) {
  return String(value || 'producto').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'producto';
}

function cleanText(value) {
  return String(value || '').replace(/[<>]/g, '').trim();
}

function finiteNumber(value) {
  const n = Number(value);
  return Number.isFinite(n) ? n : 0;
}

function json(data, init = {}) {
  return new Response(JSON.stringify(data), {
    status: init.status || 200,
    headers: { 'Content-Type': 'application/json; charset=utf-8', ...corsHeaders(), ...(init.headers || {}) }
  });
}

function corsHeaders() {
  return { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS', 'Access-Control-Allow-Headers': 'Content-Type' };
}

function base64urlEncode(value) {
  return base64urlEncodeBytes(new TextEncoder().encode(value));
}

function base64urlDecode(value) {
  const padded = value.replace(/-/g, '+').replace(/_/g, '/') + '='.repeat((4 - value.length % 4) % 4);
  return new TextDecoder().decode(Uint8Array.from(atob(padded), (c) => c.charCodeAt(0)));
}

function base64urlEncodeBytes(bytes) {
  let binary = '';
  bytes.forEach((b) => { binary += String.fromCharCode(b); });
  return btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/g, '');
}
