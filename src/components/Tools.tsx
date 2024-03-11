import { ArrowDown } from "lucide-react";
import Tool from "./Tool";

export default function Tools() {
  const tools = [
    {
      icon: "/highlight.svg",
      name: "Video Idea Generator",
      description:
        "Generate 10 unique ideas for your next viral video. Forget the creative block",
    },
    {
      icon: "/audiogram.svg",
      name: "Free Audiogram Generator",
      description:
        "Generate 10 unique ideas for your next viral video. Forget the creative block",
    },
    {
      icon: "/yt2Blog.svg",
      name: "Youtube Video to SEO Blog Generator",
      description:
        "Generate 10 unique ideas for your next viral video. Forget the creative block",
    },
    {
      icon: "/yt2Linkedin.svg",
      name: "Youtube Video to LinkedIn Post Generator",
      description:
        "Generate 10 unique ideas for your next viral video. Forget the creative block",
    },
  ];
  return (
    <div className="flex flex-col justify-center items-center">
      <p className="text-pink mb-8 text-lg">All of our tools</p>
      <h2 className="text-5xl font-medium text-[#060B13] mb-4">
        Click on any tool below and explore
      </h2>
      <ArrowDown className="text-[#FFDEE9]" />
      <div className="w-full flex items-center justify-between gap-x-4 mt-4">
        {tools.slice(0, 2).map((tool) => (
          <Tool
            icon={tool.icon}
            name={tool.name}
            description={tool.description}
          />
        ))}
      </div>
      <div className="w-full flex items-center justify-between gap-x-4 mt-4">
        {tools.slice(2, tools.length).map((tool) => (
          <Tool
            icon={tool.icon}
            name={tool.name}
            description={tool.description}
          />
        ))}
      </div>
    </div>
  );
}
