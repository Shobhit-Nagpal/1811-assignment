import { ArrowDown } from "lucide-react";
import videoIdeaGeneratorIcon from "../../public/highlight.svg";
import freeAudiogramGeneratorIcon from "../../public/audiogram.svg";
import yt2BlogIcon from "../../public/yt2Blog.svg";
import yt2LinkedinIcon from "../../public/yt2Linkedin.svg";
import Tool from "./Tool";

export default function Tools() {
  const tools = [
    {
      icon: videoIdeaGeneratorIcon,
      name: "Video Idea Generator",
      description:
        "Generate 10 unique ideas for your next viral video. Forget the creative block",
    },
    {
      icon: freeAudiogramGeneratorIcon,
      name: "Free Audiogram Generator",
      description:
        "Generate 10 unique ideas for your next viral video. Forget the creative block",
    },
    {
      icon: yt2BlogIcon,
      name: "Youtube Video to SEO Blog Generator",
      description:
        "Generate 10 unique ideas for your next viral video. Forget the creative block",
    },
    {
      icon: yt2LinkedinIcon,
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
      <div className="flex items-center justify-center gap-x-4 mt-4">
        {tools.slice(0, 2).map((tool) => (
          <Tool
            icon={tool.icon}
            name={tool.name}
            description={tool.description}
          />
        ))}
      </div>
      <div className="flex items-center justify-center gap-x-4 mt-4">
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
