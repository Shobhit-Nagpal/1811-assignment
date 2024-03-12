"use client";

import { ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { BASE_URL } from "@/lib/utils";
import { useState } from "react";

type PostProps = {
  link: string;
  mood: string;
};

export default function PostGenForm() {
  const [link, setLink] = useState("");
  const [mood, setMood] = useState("");

  const router = useRouter();

  async function createPost({ link, mood }: PostProps) {
    const moodFinal = `#${mood.split(",").join("#").replace(/ /g, "")}`;

    try {
      const res = await fetch(`${BASE_URL}/api/generate-post`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          link: link,
          mood: moodFinal,
        }),
        credentials: "include",
      });

      if (res.status === 201) {
        router.push("/dashboard/post-gen");
      }
    } catch (err) {
      console.error("THERE IS AN ERROR HERE")
      console.error(err);
      router.push("/error");
    }
  }
  return (
    <div className="w-full">
      <div className="mb-8">
        <div>
          <label
            htmlFor="link"
            className="font-medium text-lg text-[#363430] block"
          >
            Enter the youtube video link
          </label>
          <input
            className="shadow appearance-none border rounded-lg w-5/6 py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="link"
            name="link"
            type="text"
            placeholder="https://youtu.be/"
            onChange={(e) => setLink(e.target.value)}
          />
        </div>

        <div className="mt-10">
          <label
            htmlFor="mood"
            className="font-medium text-lg text-[#363430] block"
          >
            Blog Tone/Mood
          </label>
          <input
            className="shadow appearance-none border rounded-lg w-5/6 py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="mood"
            name="mood"
            type="text"
            placeholder="Funny, Educational, Inspirational.."
            onChange={(e) => setMood(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-start mt-12">
          <Button
            onClick={() => createPost({ link, mood })}
            className="w-5/6 bg-[linear-gradient(to_bottom,#5072EA,#3F5ECD)] drop-shadow-[0px_0px_0px_rgba(169,18.69,1)] drop-shadow-[0px_4px_6px_rgba(0,0,0,0.14)] shadow-[0px_-2px_1px{rgba(0,0,0,.14)}] border-2 border-solid border-[#3F5ECD] text-white p-6 text-lg rounded-lg font-bold transition-all hover:bg-pink-700 mb-6"
          >
            Generate <ChevronRight />
          </Button>
        </div>
      </div>
    </div>
  );
}
