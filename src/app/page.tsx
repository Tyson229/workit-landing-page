import Features from "@/components/features";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Person from "@/components/person";

export default function Home() {
  return (
    <main className="flex h-full w-full flex-col items-center overflow-x-hidden ">
      <Hero />
      <Features />
      <Person />
      <Footer />
    </main>
  );
}
