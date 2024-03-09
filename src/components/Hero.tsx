import { ArrowDown, ChevronRight, Sparkle } from "lucide-react";
import { Button } from "./ui/button";

export default function Hero() {
  return (
    <div className="container mx-auto px-6 py-12 bg-white text-center flex flex-col items-center justify-center">
      <div className="mb-6 bg-[#FBFBFB] border-solid border-2 border-[#E2E2E2] rounded-full w-fit p-2 font-semibold text-[#363430] flex items-center justify-center">
        <Sparkle className="text-[#4B4B4B] fill-current" />
        <span className="mx-2">All the top creator tools in one place</span>
        <Sparkle className="text-[#4B4B4B] fill-current" />
      </div>
      <h1 className="text-3xl sm:text-5xl lg:text-7xl font-medium text-gray-800 mb-8">
        <span className="text-white font-bold font-outline-4 drop-shadow-[5px_5px_0px_rgba(228,77,128,1)]">
          Top Creator tools
        </span>{" "}
        for making those <span className="font-bold">videos go viral</span> 🚀
      </h1>
      <p className="text-[#91908F] font-medium mb-12 text-xl sm:text-2xl lg:text-3xl sm:px-16">
        We are ready to be your creator co-pilot. Generate ideas, SEO friendly
        blogs & LinkedIn posts from videos, Audiograms
      </p>
      <Button className="bg-[linear-gradient(to_bottom,#FF81AC,#FF3F80)] drop-shadow-[0px_0px_0px_rgba(169,18.69,1)] drop-shadow-[0px_4px_6px_rgba(0,0,0,0.14)] shadow-[0px_-2px_1px{rgba(0,0,0,.14)}] border-2 border-solid border-[#FF81AC] text-white p-6 text-lg rounded-lg font-bold transition-all hover:bg-pink-700 mb-6">
        Login and explore <ChevronRight />
      </Button>
      <p className="flex items-center justify-center gap-x-2 text-[#E44D80] font-semibold mb-12 text-xl px-16">
        <ArrowDown className="text-[#FFDEE9]" />
        scroll down to explore <ArrowDown className="text-[#FFDEE9]" />
      </p>
    </div>
  );
}
