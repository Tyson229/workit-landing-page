import Features from "@/components/features";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <main className="flex h-full w-full flex-col items-center">
      <Hero/>
      <Features/>
      <div className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, perspiciatis quasi! Eum in magni, quas autem libero minus, eaque explicabo minima impedit, perferendis sed? Distinctio soluta sapiente incidunt praesentium aspernatur.</div>
    </main>
  );
}
