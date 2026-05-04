export interface Benefit {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export const benefits: Benefit[] = [
  {
    id: 1,
    title: "Efikasitet i Lartë",
    description:
      "LED me efiçiencë të lartë ndriçimi dhe konsum minimal energjie.",
    icon: "Zap",
  },
  {
    id: 2,
    title: "Qëndrueshmëri",
    description:
      "Materiale cilësore dhe rezistente ndaj kushteve ekstreme.",
    icon: "Shield",
  },
  {
    id: 3,
    title: "Sisteme Smart",
    description:
      "Kontroll i largët, sensorë dhe menaxhim inteligjent.",
    icon: "Cpu",
  },
  {
    id: 4,
    title: "Instalim i Lehtë",
    description:
      "Dizajn i projektuar për montim të shpejtë dhe mirëmbajtje minimale.",
    icon: "Wrench",
  },
];
