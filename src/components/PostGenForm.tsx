import { ChevronRight } from "lucide-react";
import { Button } from "./ui/button";

export default function PostGenForm() {
  return (
    <div>
      <form className="mb-8">
      <div>
        <label className="font-medium text-lg text-[#363430]">Enter the youtube video link</label>
        <input className="shadow appearance-none border rounded-lg w-5/6 py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="https://youtu.be/" />
        <input type="text" />
      </div>

      <div>
        <label className="font-medium text-lg text-[#363430]">Blog Tone/Mood</label>
        <input className="shadow appearance-none border rounded-lg w-5/6 py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Funny, Educational, Inspirational.." />
      </div>
      </form>

      <Button className="w-5/6 bg-[linear-gradient(to_bottom,#5072EA,#3F5ECD)] drop-shadow-[0px_0px_0px_rgba(169,18.69,1)] drop-shadow-[0px_4px_6px_rgba(0,0,0,0.14)] shadow-[0px_-2px_1px{rgba(0,0,0,.14)}] border-2 border-solid border-[#3F5ECD] text-white p-6 text-lg rounded-lg font-bold transition-all hover:bg-pink-700 mb-6">
        Generate <ChevronRight />
      </Button>
    </div>
  );
}
