"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Logo() {
  const router = useRouter();
  function handleLogoClick() {
    router.push("/");
  }
  return (
    <div className="flex items-center justify-center gap-4 hover:cursor-pointer" onClick={() => handleLogoClick()}>
      <Image src="/mark.svg" alt="Logo" width={27} height={36} />
      <h1 className="font-bold text-3xl text-[#363430] hidden md:block">
        Creatortools.ai
      </h1>
    </div>
  );
}
