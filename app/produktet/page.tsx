import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductsHero from "@/components/products/ProductsHero";
import ProductGrid from "@/components/products/ProductGrid";
import { products } from "@/data/products";

export const metadata = {
  title: "Produktet | Infinit Lighting",
  description:
    "Shfletoni gamin e plotë të ndriçuesve LED profesionalë për rrugë, autostrada, zona urbane dhe hapësira publike.",
};

export default function ProductsPage() {
  return (
    <main className="overflow-hidden">
      <Header />
      <ProductsHero />
      <ProductGrid products={products} categoriesFilter={true} />
      <Footer />
    </main>
  );
}
