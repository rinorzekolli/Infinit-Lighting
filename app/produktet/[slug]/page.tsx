import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductDetails from "@/components/products/ProductDetails";
import ProductGrid from "@/components/products/ProductGrid";
import { products } from "@/data/products";

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.slug === params.slug);
  if (!product) return {};

  return {
    title: `${product.title} | Infinit Lighting`,
    description: product.description,
  };
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.slug === params.slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return (
    <main className="overflow-hidden">
      <Header />
      <ProductDetails product={product} />

      {relatedProducts.length > 0 && (
        <section className="relative z-10 py-12 lg:py-16 bg-transparent border-t border-white/10">
          <div className="mx-auto max-w-310 px-5 sm:px-7 lg:px-10 mb-10">
            <h2 className="text-[24px] sm:text-[28px] lg:text-[32px] font-black text-white">
              Produktet e ngjashëm
            </h2>
          </div>
          <ProductGrid products={relatedProducts} categoriesFilter={false} />
        </section>
      )}

      <Footer />
    </main>
  );
}
