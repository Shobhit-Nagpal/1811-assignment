"use client";
import Image from "next/image";
import Logo from "./Logo";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function Sidebar() {
  const pathname = usePathname().split("/")[2];
  const tools = [
    {
      icon: "/highlight.svg",
      name: "Video Idea Generator",
      active: pathname === "idea-gen" ? true : false,
    },
    {
      icon: "/audiogram.svg",
      name: "Free Audiogram Generator",
      active: pathname === "audio-gen" ? true : false,
    },
    {
      icon: "/yt2Blog.svg",
      name: "YT Video to SEO Blog",
      active: pathname === "blog-gen" ? true : false,
    },
    {
      icon: "/yt2Linkedin.svg",
      name: "YT Video to LinkedIn Post",
      active: pathname === "post-gen" ? true : false,
    },
  ];
  return (
    <div className="w-1/4 h-screen p-8 flex flex-col items-start justify-start border-solid border-2 border-[#F5F5F5] gap-y-10">
      <Logo />
      <div>
        <h3 className="text-[#91908F] font-bold text-lg">ALL CREATOR TOOLS</h3>
        <div className="mt-6 flex flex-col items-start justify-center gap-y-3">
        {tools.map((tool, idx) => (
          <div key={idx} className={cn(tool.active ? "bg-[#F5F5F5] rounded-lg" : null,"py-4 px-8 flex items-center justify-start gap-x-4")}>
          <Image src={tool.icon} alt="Tool icon" width={24} height={24} />
          <h3 className={cn(tool.active ? "text-[#363430] font-semibold": "text-[#91908F] font-medium" , "text-xl")}>{tool.name}</h3>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
}
