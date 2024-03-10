import Hero from "@/components/Hero";
import Tools from "@/components/Tools";
import SubscribeCTA from "@/components/SubscribeCTA";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6">
      <Hero />
      <Tools />
      <SubscribeCTA />
    </main>
  );
}
