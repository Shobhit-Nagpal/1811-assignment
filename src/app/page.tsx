import Hero from "@/components/Hero";
import Tools from "@/components/Tools";
import SubscribeCTA from "@/components/SubscribeCTA";
import Footer from "@/components/Footer";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Navbar from "@/components/Navbar";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-3 md:p-6">
    <Navbar />
      <MaxWidthWrapper>
        <Hero />
        <Tools />
        <SubscribeCTA />
        <Footer />
      </MaxWidthWrapper>
    </main>
  );
}
