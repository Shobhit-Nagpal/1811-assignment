import Hero from "@/components/Hero";
import Tools from "@/components/Tools";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6">
      <Hero />
      <Tools />
    </main>
  );
}
