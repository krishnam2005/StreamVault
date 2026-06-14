import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Stats from "../components/Stats";
import Pricing from "../components/Pricing";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="bg-slate-950 text-white">
      <Navbar />
      <div className="mx-auto max-w-7xl px-6 pb-20 pt-8 sm:px-8 lg:pt-10">
        <Hero />
        <Features />
        <Stats />
        <Pricing />
      </div>
      <Footer />
    </main>
  );
}
