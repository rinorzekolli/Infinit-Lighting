export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "AUTOSTRADA PRISHTINË – FERIZAJ",
    description: "Ndriçim LED i autostradës",
    image: "/images/Road-01.png",
  },
  {
    id: 2,
    title: 'RRUGA "AGIM RAMADANI", PRISHTINË',
    description: "Ndriçim urban LED",
    image: "/images/Road-02.png",
  },
  {
    id: 3,
    title: 'BOULEVARDI "BILL KLINTON", PRISHTINË',
    description: "Ndriçim urban inteligjent",
    image: "/images/Road-03.png",
  },
  {
    id: 4,
    title: "RRUGA PRIZREN – SUHAREKË",
    description: "Ndriçim rrugor LED",
    image: "/images/Road-04.png",
  },
];
