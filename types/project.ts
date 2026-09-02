export type Project = {
  id: string;
  slug: string;
  title: string;
  location: string;
  image: string;
  gallery?: string[];
  category: string;
  shortDescription: string;
  description: string;
  solution: string;
  results: string[];
  usedProducts?: string[];
};
