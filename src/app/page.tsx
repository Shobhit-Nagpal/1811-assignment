"use client";
import Hero from "@/components/Hero";
import Tools from "@/components/Tools";
import SubscribeCTA from "@/components/SubscribeCTA";
import Footer from "@/components/Footer";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
export default function Home() {
  
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const supabase = createClient();

  useEffect(() => {
    async function checkUserAuthenticated() {
      const { data, error } = await supabase.auth.getUser();
      if (error || !data?.user) {
      } else {
        setIsAuthenticated(true);
      }
    }
    checkUserAuthenticated();
  }, []);
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-3 md:p-6">
    <Navbar isAuthenticated={isAuthenticated}  />
      <MaxWidthWrapper>
        <Hero isAuthenticated={isAuthenticated} />
        <Tools />
        <SubscribeCTA />
        <Footer />
      </MaxWidthWrapper>
    </main>
  );
}
