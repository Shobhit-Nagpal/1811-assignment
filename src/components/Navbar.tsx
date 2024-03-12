"use client";
import Image from "next/image";
import { Button } from "./ui/button";
import Logo from "./Logo";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { useEffect, useState } from "react";

type NavbarProps = {
  isAuthenticated: boolean;
};

export default function Navbar({ isAuthenticated }: NavbarProps) {
  const supabase = createClient();

  const router = useRouter();
  function handleLoginClick() {
    router.push("/login");
  }

  return (
    <div className="flex items-center justify-between w-full sm:w-5/6 my-10 px-6 sm:px-12">
      <Logo />
      {isAuthenticated ? null : (
        <div>
          <Button
            variant="outline"
            className="text-lg font-bold"
            onClick={() => handleLoginClick()}
          >
            <Image
              src="/user.svg"
              alt="User icon"
              width={20}
              height={20}
              className="mx-1"
            />
            Log in
          </Button>
        </div>
      )}
    </div>
  );
}
