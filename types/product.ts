export type Product = {
  id: string;
  slug: string;
  title: string;
  category: string;
  image: string;
  shortDescription: string;
  description: string;
  power?: string;
  efficiency?: string;
  lifetime?: string;
  applications: string[];
  features: string[];
  specifications: {
    label: string;
    value: string;
  }[];
};
