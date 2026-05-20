import Header from "@/components/Header";
import ProductsSection from "@/components/ProductsSection";
import Footer from "@/components/Footer";

export default function ProduktetPage() {
  return (
    <main className="text-(--color-foreground) overflow-hidden">
      <Header />
      <div className="pt-24">
        <ProductsSection />
      </div>
      <Footer />
    </main>
  );
}
