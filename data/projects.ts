import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "1",
    slug: "autostrada-prishtine-ferizaj",
    title: "Autostrada Prishtinë – Ferizaj",
    location: "Prishtinë - Ferizaj, Kosovë",
    image: "/images/Road-01.png",
    gallery: [
      "/images/Road-01.png",
      "/images/Road-02.png",
      "/images/Road-03.png",
    ],
    category: "Autostrada",
    shortDescription:
      "Ndriçim profesional i autostradës me sisteme smart dhe monitorim në kohë reale",
    description:
      "Projekti i ndriçimit të autostradës Prishtinë - Ferizaj përfaqëson një nga implementimet më moderne në Kosovë. Me gjatësi 45 km, ky projekt përfshin instalimin e 1,500 ndriçuesve LED me sisteme smart kontrolli.",
    solution:
      "Instalim i ndriçuesve LED X-Line me sensorë inteligjentë, sistemi i kontrollit qendror dhe monitorim në kohë reale përmes 4G LTE.",
    results: [
      "Kursim energjie 65%",
      "Reduksion i CO2 në 850 tonë në vit",
      "Siguri maksimale në rrugë",
      "Dimming automatik për kursim nate",
      "Monitorim 24/7 i të gjithë sistemeve",
    ],
    usedProducts: [
      "ndricues-autostrada-x-line",
      "sistem-smart-kontrolli-led",
    ],
  },
  {
    id: "2",
    slug: "rruga-agim-ramadani-prishtine",
    title: "Rruga Agim Ramadani, Prishtinë",
    location: "Prishtinë, Kosovë",
    image: "/images/Road-02.png",
    gallery: [
      "/images/Road-02.png",
      "/images/Road-03.png",
    ],
    category: "Rrugë urbane",
    shortDescription: "Ndriçim modern për rrugë qytetare me teknologji smart",
    description:
      "Projektimi i rrugës kryesore Agim Ramadani përfshin zëvendësimin e sistemeve të vjetra të ndriçimit me 350 ndriçues LED modern Urban Smart.",
    solution:
      "Instalim i ndriçuesve Urban Smart LED me sensorë lëvizjeje dhe kontrolli smart, duke siguruar ndriçim optimal me konsum minimal energjie.",
    results: [
      "Kursim energjie 70%",
      "Përmirësim i dukshmërisë në rrugë",
      "Reduksion i ndotjes dritore",
      "Iluminim uniform në të gjithë rrugën",
      "Përkatëshmëri me standardet EU",
    ],
    usedProducts: ["ndricues-urban-smart-led"],
  },
  {
    id: "3",
    slug: "bulevardi-bill-clinton-prishtine",
    title: "Bulevardi Bill Clinton, Prishtinë",
    location: "Prishtinë, Kosovë",
    image: "/images/Road-03.png",
    gallery: [
      "/images/Road-03.png",
      "/images/Road-01.png",
      "/images/Road-02.png",
    ],
    category: "Sheshe publike",
    shortDescription: "Ndriçim ambient për bulevardin kryesor të qytetit",
    description:
      "Projekt prestigjioz i ndriçimit ambient për bulevardin më të rëndësishëm të Prishtinës, me 500 ndriçues dhe sisteme dekorative.",
    solution:
      "Kombinim i ndriçuesve profesionalë me ndriçus dekorativ, sisteme kontrolli smart dhe efekte drite speciale për evente.",
    results: [
      "Ndriçim ambient i kontrolluar",
      "Efikasitet maksimal energjie",
      "Siguri e përmirësuar në bulevardin",
      "Atmosferë atraktive për vizitorë",
      "Fleksibilitet në efekat e ndriçimit",
    ],
    usedProducts: [
      "ndricues-urban-smart-led",
      "sistem-smart-kontrolli-led",
    ],
  },
  {
    id: "4",
    slug: "rruga-prizren-suhareke",
    title: "Rruga Prizren – Suharekë",
    location: "Prizren - Suharekë, Kosovë",
    image: "/images/Road-04.png",
    gallery: [
      "/images/Road-04.png",
      "/images/Road-01.png",
    ],
    category: "Rrugë rajonale",
    shortDescription: "Ndriçim për rrugën rajonale me infrastrukturë moderne",
    description:
      "Projekti i rrugës Prizren - Suharekë përfshin ndriçimin e 28 km rrugë me 400 ndriçues LED profesionalë dhe sisteme smart kontrolli.",
    solution:
      "Instalim i ndriçuesve rrugorë Pro Series me sensorë inteligjentë dhe sistem kontrolli qendror për optimizim energjetik.",
    results: [
      "Kursim energjie 68%",
      "Siguri maksimale në rrugë",
      "Ndriçim uniform dhe i qëndrueshëm",
      "Reduksion i aksidenteve rrugore 45%",
      "Lidhje raionale e përmirësuar",
    ],
    usedProducts: [
      "ndricues-rrugor-pro-series",
      "sistem-smart-kontrolli-led",
    ],
  },
];
