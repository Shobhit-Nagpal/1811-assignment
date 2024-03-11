"use client";
import { Dot } from "lucide-react";
import Image from "next/image";

type MockPostProps = {
  img: string;
  author: string;
  description: string;
  reactions: string[];
  tags: string[];
};

export default function LinkedInMockPost({
  img,
  author,
  description,
  reactions,
  tags,
}: MockPostProps) {
  return (
    <div className="flex flex-col items-start justify-center bg-white rounded-lg gap-4 w-5/6 px-6 py-2 drop-shadow-[0px_4px_6px_rgba(0,0,0,1)">
      <div className="flex items-start justify-between w-full">
        <div className="flex items-center justify-center gap-x-2">
          <div>
            <Image src={img} width={60} height={60} alt="Mock Profile Image" />
          </div>
          <div className="leading-tight">
            <h2 className="text-[#191919] font-semibold">{author}</h2>
            <p className="text-[#707070]">326 abonnés</p>
            <div className="flex items-center justify-start">
              <p className="text-[#707070]">20 h </p>
              <Dot className="text-[#707070]" />
            </div>
          </div>
        </div>
        <div>
          <p>...</p>
        </div>
      </div>
      <div>
        <p>{description}</p>
        {tags.length === 0 ? null : <p className="text-[#0966C2] font-semibold">{tags.join(" ")}</p>}
      </div>
      <div className="flex items-center justify-end w-full">
        <p className="text-[#707070]">...see more</p>
      </div>

      <div>
        <p className="text-[#0966C2] font-semibold mb-4">See translation</p>
        <div className="flex items-center justify-center gap-x-1">
          {reactions.map((reaction) => (
            <Image
              src={reaction}
              width={21}
              height={21}
              alt="Mock Profile Image"
            />
          ))}
          <p className="text-[#707070]">88</p>
          <Dot className="text-[#707070]" />
          <p className="text-[#707070]">4 comments</p>
        </div>
      </div>
    </div>
  );
}
