import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HeroSlider } from "@/components/home/hero-slider";
import { Features } from "@/components/home/features";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <HeroSlider />
        <Features />
      </main>
      <Footer />
    </>
  );
}
